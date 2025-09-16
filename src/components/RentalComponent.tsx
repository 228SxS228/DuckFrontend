import { FC, useEffect, useMemo, useState } from "react";
import {
  Calendar,
  Check,
  ChevronRight,
  Mail,
  PartyPopper,
  Phone,
  User,
} from "lucide-react";
import ImageGalleryBanner from "./ui/ImageGalleryBanner";
import photo2 from "@/static/utenokpro_animatory.jpg";
import photo3 from "@/static/utenokpro_programma.jpg";
import photo1 from "@/static/arenda_photo.jpg";
import { motion, Variants } from "framer-motion";

import BubbleComponent from "./ui/Buble";
import { Button } from "./ui/button";
import Modal from "./Modal";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BookingProData } from "@/model/model";
import { useAppDispatch } from "@/hooks/reduxe";
import { bookProSession } from "@/store/action/timeTableAction";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";

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

const images = [photo1, photo2, photo3];

const Rentalcomponent: FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

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

  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenClick = () => {
    setIsModalOpen(true);
    setErrorMessage(""); // Сбрасываем ошибку при открытии модального окна
  };

  // Мемоизируем пузырьки, чтобы они не перерисовывались при движении утки
  const bubbles = useMemo(
    () => (
      <BubbleComponent
        count={isMobile ? 20 : 80}
        speed={isMobile ? 0.5 : 2} // Замедляем на мобильных устройствах
        color="#ffff"
        size={{ base: 20, sm: 30, md: 40 }}
      />
    ),
    [isMobile]
  ); // Перерисовываем только при изменении isMobile

  // Отправка формы
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

  // Обработчик отправки формы
  const onSubmit = async (formData: FormValues) => {
    try {
      setErrorMessage(""); // Сбрасываем ошибку перед отправкой

      const bookingData: BookingProData = {
        ...formData,
        time: "10:00", // Добавляем значение по умолчанию
        type: "rentalpro",
      };

      const result = await dispatch(bookProSession(bookingData)).unwrap();

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSubmitted(false);
          reset();
        }, 2000);
      } else {
        // Показываем сообщение об ошибке от сервера
        setErrorMessage(result.message || "Произошла ошибка при бронировании");
      }
    } catch (error: any) {
      console.error("Ошибка бронирования:", error);
      // Показываем детали ошибки
      setErrorMessage(
        error.message ||
          error.response?.data?.message ||
          "Произошла ошибка при бронировании. Пожалуйста, попробуйте снова."
      );
    }
  };

  // Сброс формы при закрытии модального окна
  useEffect(() => {
    if (!isModalOpen) {
      reset();
      setErrorMessage(""); // Сбрасываем ошибку при закрытии модального окна
    }
  }, [isModalOpen, reset]);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Пузырьки */}
      {bubbles}

      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:40px_40px] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-[#FFD700] to-[#ffa800] text-black rounded-full font-bold shadow-lg shadow-[#ffa800]/30"
            variants={textVariants}
          >
            <PartyPopper className="mr-2 h-5 w-5" />
            Специальное предложение
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text"
            variants={textVariants}
          >
            Аренда бассейна для детских праздников и свободного плавания всей
            семьей
          </motion.h2>

          <motion.p
            className="text-xl text-[#301EEB] mb-10 leading-relaxed font-medium max-w-2xl mx-auto"
            variants={textVariants}
          >
            Создайте волшебный праздник для Вашего ребенка в нашем аквацентре
            либо отдохните всей семьей от будничной суеты
          </motion.p>
        </motion.div>

        <div className="items-center">
          {/* Галерея */}
          <motion.div
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-[#4A00E0]/30 border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageGalleryBanner
              images={images}
              interval={3500}
              height="h-full"
            />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="inline-flex items-center px-5 py-2 mb-3 bg-gradient-to-r from-[#FFD700] to-[#ffa800] text-black font-bold rounded-full">
                <ChevronRight className="mr-1 h-4 w-4" />
                Детские праздники
              </div>
              <h3 className="text-3xl font-bold text-white">
                Невероятные впечатления гарантированы
              </h3>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block mb-8">
            <div className="text-[#301EEB] mb-4 text-lg">
              Индивидуальные решения
            </div>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#8E2DE2] to-transparent mx-auto"></div>
          </div>

          <p className="text-[#301EEB] max-w-3xl mx-auto text-xl mb-10">
            Наша команда учтет любое ваше пожелание в случае необходимости
            поможет его осуществить.
          </p>

          <Button
            onClick={handleOpenClick}
            className="py-5 px-12 text-lg font-bold bg-gradient-to-r from-[#FFD700] to-[#ffa800] hover:from-[#ffe14d] hover:to-[#FFD700] text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Обсудить мероприятие
          </Button>
        </motion.div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        {/* Заголовок */}
        <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold text-center text-white mb-6 md:mb-8">
              Оставьте контактные данные, мы перезвоним Вам и обсудим
              подробности
            </h2>
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
                        maxLength={12}
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
          )}
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
    </section>
  );
};

export default Rentalcomponent;
