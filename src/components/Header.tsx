import { FC, useState, useRef, useEffect } from "react";
import { Phone, Menu, Calendar, User, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RouteNames } from "../router/index";
import { NavLink } from "react-router-dom";
import logo from "@/static/utenok_logo.png";
import Modal from "./Modal";
import { format } from "date-fns";
import { bookFirstSession} from "@/store/action/timeTableAction";
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
import { BookingFirstData} from "@/model/model";
import { useAppDispatch } from "@/hooks/reduxe";

// Схема валидации
const schema = yup.object().shape({
  name: yup.string().required("Введите имя").min(2, "Имя слишком короткое"),
  phone: yup
    .string()
    .required("Введите телефон")
    .min(11, "Телефон слишком короткий"),
  sessionType: yup.string().required("Выберите тип сеанса"),
  date: yup.string().required("Выберите дату"),
  time: yup.string().required("Выберите время"),
});

// Тип формы
type FormValues = {
  name: string;
  phone: string;
  sessionType: string;
  date: string;
  time: string;
};
const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const menuItems = useRef<(HTMLLIElement | null)[]>([]);
  const headerRef = useRef<HTMLElement>(null);

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

  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenClick = () => setIsModalOpen(true);
  // Отправка формы
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      sessionType: "",
      date: "",
      time: "",
    },
  });

  //  обработчик отправки формы
  const onSubmit: any = async (formData: FormValues) => {
    try {
      const bookingData: BookingFirstData = {
        ...formData,
        type: "firstsession",
      };

      await dispatch(bookFirstSession(bookingData)).unwrap();
      setIsSubmitted(true);

      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Ошибка бронирования:", error);
      alert("Произошла ошибка при бронировании. Пожалуйста, попробуйте снова.");
    }
  };

  // Сброс формы при закрытии модального окна
  useEffect(() => {
    if (!isModalOpen) {
      reset();
      setSelectedPlan("");
    } else if (selectedPlan) {
      setValue("sessionType", selectedPlan);
    }
  }, [isModalOpen, reset, selectedPlan, setValue]);
  // Рассчитываем позицию утки для активного пункта меню
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

  // Тип для плавающей анимации
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

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] overflow-hidden"
    >
      {/* Пузырьки */}
      <BubbleComponent
        count={10}
        speed={1}
        color="#ffff"
        size={{ base: 20, sm: 30, md: 40 }}
      />

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
            onClose={handleCloseModal}
            className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
          >
            {/* Заголовок */}
            <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-center text-white mb-6 md:mb-8">
                  Оставьте контактные данные, мы перезвоним Вам и запишем на
                  занятие
                </h2>
              </div>
            </div>

            {/* Контент */}
            <div className="p-5">
              {isSubmitted ? (
                <div className="text-center py-5">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-green-600" size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">
                    Заявка принята!
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Наш администратор свяжется с вами в течение 15 минут
                  </p>
                  <Button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white px-6 py-3 rounded-lg w-full"
                  >
                    Понятно
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Поле имени */}
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                      <Controller
                        name="name"
                        control={control}
                        rules={{
                          required: "ФИО обязательно",
                          minLength: { value: 2, message: "Минимум 2 символа" },
                        }}
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

                  {/* Поле телефона (только Россия) */}
                  <div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                          // <PhoneInput
                          //   country={"ru"}
                          //   value={field.value}
                          //   onChange={(phone) => field.onChange(phone)}
                          //   inputClass="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          //   containerClass="relative"
                          //   buttonClass="absolute left-3 top-3.5 text-blue-500"
                          // />
                          <input
                            {...field}
                            type="tel"
                            maxLength={12}
                            placeholder="+7(999)-999-99-99"
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        )}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Дата и время */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Дата */}
                    <div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                        <Controller
                          name="date"
                          control={control}
                          rules={{ required: "Дата обязательна" }}
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
              )}
            </div>

            {/* Футер */}
            <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100 rounded-b-2xl">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="text-blue-600 hover:underline">
                политикой конфиденциальности
              </a>
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
