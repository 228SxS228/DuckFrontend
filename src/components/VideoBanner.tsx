import { FC, useEffect, useState } from "react";
import { Button } from "./ui/button";
import bgimg from "@/static/SSV_1325.jpg";
import { Calendar, Check, Mail, Phone, Play, User } from "lucide-react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { LiquidGlass } from "./ui/LiquidGlass";

import Video from "@/static/videoplayback.mp4";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BookingFirstData } from "@/model/model";
import { useAppDispatch } from "@/hooks/reduxe";
import { bookFirstSession } from "@/store/action/timeTableAction";
import { format } from "date-fns";

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
  sessionType: yup.string().required("Выберите тип сеанса"),
  date: yup.string().required("Выберите дату"),
  time: yup.string().required("Выберите время"),
});

// Тип формы
type FormValues = {
  name: string;
  phone: string;
  email: string;
  sessionType: string;
  date: string;
  time: string;
};

const VideoBanner: FC = () => {
  const dispatch = useAppDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState("");
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
      email: "",
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
  return (
    <section className="relative overflow-hidden">
      {/* Основной контент баннера */}
      <div
        className="relative min-h-[40rem] md:min-h-[52rem] flex items-center justify-center py-16 md:py-32 px-4"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Контент */}
        <div className="container mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <LiquidGlass
              glassColor="#ffffff"
              opacity={0.15}
              blurStrength={10}
              borderRadius={32}
              className="container mx-auto px-4 relative z-10"
            >
              <motion.div
                className="p-5 md:p-8 text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                    Плавательный Центр
                    <motion.span
                      className="block mt-2 bg-gradient-to-r from-[#EBA31E] via-[#ff8c00] to-[#EBA31E] bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      «Утенок»
                    </motion.span>
                  </h1>
                </motion.div>

                <motion.p
                  className="text-xl text-blue-100 mb-8 max-w-xl mx-auto md:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Профессиональное обучение плаванию для детей от 3 месяцев до
                  10 лет в современном центре с опытными тренерами.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button
                    size="lg"
                    onClick={handleOpenClick}
                    className="rounded-full px-8 py-7 text-lg font-bold bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#f0b84d] hover:to-[#EBA31E] text-black shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Записаться на первое бесплатное занятие
                  </Button>
                </motion.div>
              </motion.div>
            </LiquidGlass>

            {/* Кнопка воспроизведения видео */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="mb-6 px-6 py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] rounded-full backdrop-blur-sm border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white font-bold text-center text-lg md:text-xl">
                    Посмотрите как у нас круто!
                  </p>
                </motion.div>

                <motion.button
                  onClick={() => setIsVideoOpen(true)}
                  className="group w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all relative overflow-hidden"
                  aria-label="Посмотреть видео"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgimg})` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#301EEB]/40 to-[#9F1EEB]/40"></div>

                  <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-sm">
                    <img
                      src={bgimg}
                      alt="Интерьер бассейна"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute z-20 inset-0 flex items-center justify-center">
                    <motion.div
                      className="bg-gradient-to-r from-[#EBA31E] to-[#d6940c] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Play className="text-white fill-current ml-1 w-8 h-8 md:w-10 md:h-10" />
                    </motion.div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Модальное окно для записи */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        {/* Заголовок */}
        <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold text-center text-white mb-6 md:mb-8">
              Оставьте контактные данные, мы перезвоним Вам и запишем на занятие
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

      {/* Модальное окно с видео */}
      <Modal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        className="rounded-3xl shadow-2xl w-full max-w-4xl"
      >
        <div className="relative pb-[56.25%] h-0 rounded-3xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={Video} type="video/mp4" />
            Ваш браузер не поддерживает видео тег.
          </video>
        </div>
      </Modal>
    </section>
  );
};

export default VideoBanner;
