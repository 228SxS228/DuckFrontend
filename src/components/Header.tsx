import { FC, useState, useRef, useEffect, useMemo } from "react";
import { Phone, Menu, Calendar, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RouteNames } from "../router/index";
import { NavLink } from "react-router-dom";
import logo from "@/static/utenok_logo.png";
import Modal from "./Modal";
import { format } from "date-fns";
import { bookFirstSession } from "@/store/action/timeTableAction";
import {
  motion,
  AnimatePresence,
  Variants,
  TargetAndTransition,
} from "framer-motion";
import BubbleComponent from "./ui/Buble";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ApplicationResponse, BookingFirstData } from "@/model/model";
import { useAppDispatch } from "@/hooks/reduxe";
import { Link } from "react-router-dom";

// Упрощенная схема валидации (без sessionType и time)
const schema = yup.object().shape({
  name: yup.string().required("Введите имя").min(2, "Имя слишком короткое"),
  phone: yup
    .string()
    .required("Введите телефон")
    .min(11, "Телефон слишком короткий"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Введите email"),
  date: yup.string().required("Выберите дату"),
});

// Упрощенный тип формы
type FormValues = {
  name: string;
  phone: string;
  email: string;
  date: string;
};

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [applicationData, setApplicationData] =
    useState<ApplicationResponse | null>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const menuItems = useRef<(HTMLLIElement | null)[]>([]);
  const headerRef = useRef<HTMLElement>(null);

  // Определяем, является ли устройство мобильным
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const setMenuItemRef = (el: HTMLLIElement | null, index: number) => {
    menuItems.current[index] = el;
  };

  const menuLinks = [
    { name: "Главная", path: RouteNames.HOME },
    { name: "Тренеры", path: RouteNames.TRAINERS },
    { name: "Расписание", path: RouteNames.SCHEDULE },
    { name: "Соревнования", path: RouteNames.COMPETITION },
    { name: "Акции", path: RouteNames.PROMOTION },
    { name: "Соляная пещера", path: RouteNames.SALTCAVE },
  ];

  const handleOpenClick = () => {
    setIsModalOpen(true);
    setErrorMessage(""); // Сбрасываем ошибку при открытии модального окна
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
    },
  });

  const onSubmit = async (formData: FormValues) => {
    try {
      setErrorMessage(""); // Сбрасываем ошибку перед отправкой

      const bookingData: BookingFirstData = {
        ...formData,
        type: "firstsession",
      };

      const result = await dispatch(bookFirstSession(bookingData)).unwrap();

      if (result.success) {
        setApplicationData(result);
        setIsModalOpen(false);
        reset();
      } else {
        // Показываем сообщение об ошибке от сервера
        setErrorMessage(result.message || "Произошла ошибка при бронировании");
      }
    } catch (error: any) {
      // console.error("Ошибка бронирования:", error);
      // Показываем детали ошибки
      setErrorMessage(
        error.message ||
          error.response?.data?.message ||
          "Произошла ошибка при бронировании. Пожалуйста, попробуйте снова."
      );
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      reset();
      setErrorMessage(""); // Сбрасываем ошибку при закрытии модального окна
    }
  }, [isModalOpen, reset]);

  const getDuckPosition = (): TargetAndTransition => {
    if (activeItem === null || !menuItems.current[activeItem]) {
      return {
        x: 100,
        y: 15,
        rotate: 0,
      };
    }

    const item = menuItems.current[activeItem];
    if (!item) return { x: 0, y: 0, rotate: 0 };

    const rect = item.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - 20,
      y: rect.top - 25,
      rotate: 0,
    };
  };

  const floatingAnimation: Variants = {
    animate: {
      y: [0, -5, 0],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  // Мемоизируем пузырьки, чтобы они не перерисовывались при движении утки
  const bubbles = useMemo(
    () => (
      <BubbleComponent
        count={10}
        speed={isMobile ? 0.5 : 2} // Замедляем на мобильных устройствах
        color="#ffff"
        size={{ base: 20, sm: 30, md: 40 }}
      />
    ),
    [isMobile]
  ); // Перерисовываем только при изменении isMobile

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] overflow-hidden"
    >
      {/* Пузырьки */}
      {bubbles}
      <a type="hiden" {...applicationData} />
      {/* Анимированная утка */}
      <AnimatePresence>
        <motion.div
          className="absolute top-0 left-0 pointer-events-none z-20"
          animate={getDuckPosition()}
          initial={false}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 80,
            mass: 0.8,
          }}
        >
          <motion.div variants={floatingAnimation} animate="animate">
            <img
              src={logo}
              alt="logo"
              className="left h-37 w-37 z-60 overflow-hidden object-contain"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto overflow-visible flex h-35 items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 overflow-visible">
            {/* Пустое место для логотипа */}
          </div>
        </div>

        <nav className="font-myfont text-lg relative">
          <ul className="hidden md:flex items-center gap-8">
            {menuLinks.map((link, index) => (
              <motion.li
                key={index}
                ref={(el) => setMenuItemRef(el, index)}
                className="px-3 py-2 text-white hover:text-[#EBA31E] rounded-md transition-colors font-medium group relative"
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  to={link.path}
                  className="relative z-30 transition-all text-white hover:text-[#EBA31E]  duration-300"
                >
                  {link.name}
                </NavLink>

                {/* Волны при наведении */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#EBA31E]/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={activeItem === index ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            className="hidden md:flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Phone className="h-4 w-4 text-[#EBA31E]" />
            <span className="text-lg font-medium text-white">
              +7 (3822) 68-28-00
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={handleOpenClick}
              size="lg"
              className="hidden sm:inline-flex bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full cursor-pointer transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              Записаться
            </Button>
          </motion.div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
          >
            {/* Заголовок */}
            <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  Бронирование сеанса
                </h3>
              </div>
            </div>

            {/* Контент */}
            <div className="p-5">
              {/* Отображение ошибки */}
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Поле имени */}
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="Иванов Иван Иванович"
                          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      )}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Поле телефона */}
                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="tel"
                          placeholder="+7(999)-999-99-99"
                          className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      )}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* поле email */}
                <div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      )}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Дата */}
                <div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                    <Controller
                      name="date"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="date"
                          {...field}
                          min={format(new Date(), "yyyy-MM-dd")}
                          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      )}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                {/* Кнопки */}
                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Отмена
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Забронировать"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Футер */}
            <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100 rounded-b-2xl">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <Link
                to={RouteNames.OFFERTA}
                className="text-blue-600 hover:underline"
              >
                политикой конфиденциальности
              </Link>
            </div>
          </Modal>

          <Sheet>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden rounded-full mr-4 bg-white/20 hover:bg-white/30"
                >
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              className="bg-gradient-to-b from-[#301EEB] to-[#9F1EEB]"
              side="right"
            >
              <nav className="flex mx-auto flex-col gap-6 mt-8">
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      className="text-lg font-medium text-white hover:text-[#EBA31E] transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#EBA31E] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <div className="flex items-center gap-2 mt-4 p-3 bg-white/10 rounded-lg">
                  <Phone className="h-5 w-5 text-[#EBA31E]" />
                  <span className="text-sm font-medium text-white">
                    +7 (3822) 68-28-00
                  </span>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    className="mt-4 w-full bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full py-6 text-base"
                    onClick={handleOpenClick}
                  >
                    Записаться
                  </Button>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
