import { motion, Variants } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import Modal from "@/components/Modal";
import { bookSaltCaveSession } from "@/store/action/timeTableAction";
import { BookingSaltCaveData } from "@/model/model";
import { useAppDispatch } from "@/hooks/reduxe";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-phone-input-2/lib/style.css";
import { format } from "date-fns";
import BubbleComponent from "@/components/ui/Buble";
import { LiquidGlass } from "@/components/ui/LiquidGlass";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Star,
  Shield,
  Leaf,
  Check,
  Calendar,
  User,
  Plus,
  Waves,
  Phone,
  Mail,
} from "lucide-react";

// Импорт изображений
import photo2 from "@/static/DSC_7757.jpg";
import photo3 from "@/static/DSC_7832.jpg";
import photo4 from "@/static/DSC_7840.jpg";
import photo5 from "@/static/solinai_pehera_3-500x300.jpg";
import photo6 from "@/static/solinai_pehera_8-854x750.jpg";
import photo7 from "@/static/solinai_pehera_6-768x512.jpg";
import Video from "@/static/saltcave_prewei.mp4";

// Схема валидации
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
// Анимации
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function SaltCavePage() {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  // Генерация временных слотов
  const times = Array.from({ length: 11 }, (_, i) => {
    const hour = 10 + i;
    return `${hour}:00`;
  });

  // Открытие модального окна с предзаполнением типа сеанса
  const handleBookClick = useCallback((planTitle = "") => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  }, []);

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

  // Исправленный обработчик отправки формы
  const onSubmit: any = async (formData: FormValues) => {
    try {
      const bookingData: BookingSaltCaveData = {
        ...formData,
        type: "saltacave",
      };

      await dispatch(bookSaltCaveSession(bookingData)).unwrap();
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
  // Компонент сообщения об успехе

  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 py-12 relative">
      <BubbleComponent
        count={80}
        speed={2}
        color="#9F1EEB"
        size={{ base: 20, sm: 30, md: 40 }}
      />

      {/* Основной контент */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок страницы */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-2 mb-6 bg-gradient-to-r from-[#9F1EEB] to-[#301EEB] text-white rounded-full text-lg font-bold shadow-lg mx-auto"
            variants={fadeInUp}
          >
            <Waves className="mr-2" size={20} />
            Соляная терапия
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-transparent bg-clip-text"
            variants={fadeInUp}
          >
            Соляная пещера
          </motion.h1>

          <motion.p
            className="text-xl text-slate-800 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Оздоровительные сеансы для укрепления иммунитета и глубокой
            релаксации
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#f0b84d] hover:to-[#EBA31E] text-black font-bold rounded-full px-8 py-6 text-lg shadow-lg"
              onClick={() => handleBookClick()}
            >
              <Plus className="mr-2" />
              Забронировать сеанс
            </Button>
          </motion.div>
        </motion.div>

        {/* Секция с видео */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <LiquidGlass
            glassColor="#ffffff"
            opacity={0.55}
            blurStrength={12}
            borderRadius={32}
            className="p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                className="w-full md:w-1/2 rounded-2xl overflow-hidden aspect-video shadow-xl"
                variants={fadeInUp}
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={Video} type="video/mp4" />
                  Ваш браузер не поддерживает видео тег.
                </video>
              </motion.div>
              <motion.div className="w-full md:w-1/2" variants={fadeInUp}>
                <div className="inline-flex items-center px-4 py-1 mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Leaf className="mr-2" size={16} />
                  Оздоровление и релаксация
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                  Уникальная соляная пещера в нашем центре
                </h2>
                <p className="text-slate-700 mb-6">
                  Специально оборудованное помещение, где стены, пол и потолок
                  покрыты натуральной солью. Во время сеанса в воздух
                  распыляются микрочастицы соли, создавая целебный микроклимат,
                  который благотворно влияет на дыхательную систему и укрепляет
                  иммунитет.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start bg-blue-50 rounded-lg p-4"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-800">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-slate-700 mt-1">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button
                  className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] hover:from-[#3a28f0] hover:to-[#a73ef0] text-white font-bold rounded-full px-8 py-6"
                  onClick={() => handleBookClick()}
                >
                  Забронировать сеанс
                </Button>
              </motion.div>
            </div>
          </LiquidGlass>
        </motion.div>

        {/* Секция с этапами посещения */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <LiquidGlass
            glassColor="#ffffff"
            opacity={0.55}
            blurStrength={12}
            borderRadius={32}
            className="p-6 md:p-8"
          >
            <motion.h2
              className="mb-6 text-2xl font-bold text-blue-900"
              variants={fadeInUp}
            >
              Как проходят сеансы
            </motion.h2>

            <div className="space-y-6">
              {sessionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={fadeInUp}
                >
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-lg font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {step.title}
                    </h3>
                    <p className="text-slate-700 mt-2">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 rounded-lg bg-yellow-50 p-4 text-yellow-800 border border-yellow-200"
              variants={fadeInUp}
            >
              <div className="flex items-start">
                <Shield className="mr-3 mt-1 h-5 w-5 shrink-0 text-yellow-600" />
                <p>
                  Перед посещением соляной пещеры рекомендуется
                  проконсультироваться с врачом, особенно при наличии
                  хронических заболеваний.
                </p>
              </div>
            </motion.div>
          </LiquidGlass>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.div
              className="relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-xl"
              variants={fadeInUp}
            >
              <img
                src={photo2}
                alt="Сеанс в соляной пещере"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  Комфортная атмосфера для отдыха
                </h3>
              </div>
            </motion.div>

            <LiquidGlass
              glassColor="#ffffff"
              opacity={0.55}
              blurStrength={12}
              borderRadius={32}
              className="p-6"
            >
              <motion.h3
                className="mb-4 text-xl font-bold text-blue-900 flex items-center"
                variants={fadeInUp}
              >
                <Clock className="mr-2" />
                Расписание сеансов
              </motion.h3>
              <div className="space-y-3">
                <motion.div
                  className="flex justify-between py-2 border-b border-gray-100"
                  variants={fadeInUp}
                >
                  <span className="font-medium text-slate-700">Пн-Вс:</span>
                  <span className="text-slate-700 font-medium">
                    10:00 - 20:00
                  </span>
                </motion.div>
                <motion.div
                  className="mt-4 text-sm text-slate-600 bg-blue-50 p-3 rounded-lg"
                  variants={fadeInUp}
                >
                  Сеансы проводятся каждый час. Для вашего комфорта рекомендуем
                  предварительную запись.
                </motion.div>
              </div>
            </LiquidGlass>
          </motion.div>
        </motion.div>

        {/* Секция с тарифами */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center px-4 py-1 mb-4 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full text-sm font-medium">
              <Star className="mr-2" size={16} />
              Наши тарифы
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Цены на посещение соляной пещеры
            </h2>
            <p className="text-slate-700">
              Выберите оптимальный вариант для вашего оздоровления
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-6 border overflow-hidden relative ${
                  plan.popular
                    ? "border-[#9F1EEB] shadow-xl ring-2 ring-[#9F1EEB]/20"
                    : "border-gray-200 shadow-lg"
                } hover:shadow-2xl transition-all`}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-[#9F1EEB] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Популярный
                  </div>
                )}

                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {plan.title}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-blue-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 ml-1">₽</span>
                  {plan.perSession && (
                    <span className="text-sm text-slate-500 ml-2">/ сеанс</span>
                  )}
                </div>
                <p className="text-slate-700 mb-6 min-h-[60px]">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-[#9F1EEB] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full py-5 font-medium ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#f0b84d] hover:to-[#EBA31E] text-black"
                      : "bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] hover:from-[#3a28f0] hover:to-[#a73ef0] text-white"
                  }`}
                  onClick={() => handleBookClick(plan.title)}
                >
                  Выбрать тариф
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Секция FAQ */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <LiquidGlass
            glassColor="#ffffff"
            opacity={0.55}
            blurStrength={12}
            borderRadius={32}
            className="p-6 md:p-8"
          >
            <motion.div className="text-center mb-10" variants={fadeInUp}>
              <h2 className="mb-4 text-3xl font-bold text-blue-900">
                Часто задаваемые вопросы
              </h2>
              <p className="mx-auto max-w-2xl text-slate-700">
                Всё, что вам нужно знать о посещении соляной пещеры
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faq.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border border-blue-100"
                  variants={fadeInUp}
                >
                  <h3 className="flex items-center text-lg font-semibold text-slate-900 mb-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">
                      ?
                    </span>
                    {item.question}
                  </h3>
                  <p className="text-slate-700 pl-9">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </LiquidGlass>
        </motion.div>

        {/* Галерея */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Галерея соляной пещеры
            </h2>
            <p className="text-slate-700">
              Погрузитесь в атмосферу нашего соляного пространства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative h-80 overflow-hidden rounded-2xl shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Соляная пещера ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    Уютная атмосфера для релаксации
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      {/* Модальное окно бронирования */}
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

                {/* Время */}
                <div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                    <Controller
                      name="time"
                      control={control}
                      rules={{ required: "Время обязательно" }}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Время</option>
                          {times.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.time.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Тип сеанса */}
              <div>
                <div className="relative">
                  <Plus className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                  <Controller
                    name="sessionType"
                    control={control}
                    rules={{ required: "Тип сеанса обязателен" }}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Тип сеанса</option>
                        {pricingPlans.map((plan) => (
                          <option key={plan.title} value={plan.title}>
                            {plan.title}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>
                {errors.sessionType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.sessionType.message}
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
          <a href="#" className="text-blue-600 hover:underline">
            политикой конфиденциальности
          </a>
        </div>
      </Modal>
    </section>
  );
}

// Конфигурационные данные
const sessionSteps = [
  {
    title: "Подготовка",
    description:
      "Перед сеансом мы предложим вам одноразовые бахилы для защиты соляного покрытия. Специальная одежда не требуется, но рекомендуем надеть удобную одежду, не стесняющую движений.",
  },
  {
    title: "Сеанс",
    description:
      "Вы расположитесь в удобном кресле-шезлонге. Для детей предусмотрены игрушки и стол для рисования песком. Сеанс сопровождается релаксирующей музыкой и мягким светом.",
  },
  {
    title: "Продолжительность",
    description:
      "Стандартная продолжительность сеанса — 40 минут. Для детей до 3 лет время может быть сокращено до 20-30 минут по вашему желанию.",
  },
  {
    title: "Курс лечения",
    description:
      "Для достижения максимального эффекта рекомендуем курс из 10-15 сеансов с периодичностью 2-3 раза в неделю. Поддерживающий курс — 1-2 раза в неделю.",
  },
];

const benefits = [
  {
    title: "Укрепление иммунитета",
    description:
      "Усиливает защитные функции организма и повышает сопротивляемость инфекциям",
    icon: <Shield className="h-5 w-5 text-blue-700" />,
  },
  {
    title: "Дыхательная система",
    description:
      "Улучшает состояние при бронхитах, астме и аллергических реакциях",
    icon: <Leaf className="h-5 w-5 text-blue-700" />,
  },
  {
    title: "Снятие стресса",
    description: "Способствует глубокому расслаблению и снижению тревожности",
    icon: <Star className="h-5 w-5 text-blue-700" />,
  },
  {
    title: "Улучшение сна",
    description: "Нормализует сон и улучшает его качество",
    icon: <Clock className="h-5 w-5 text-blue-700" />,
  },
];

const pricingPlans = [
  {
    title: "Разовое посещение",
    price: "580",
    perSession: true,
    description:
      "Идеально для тех, кто хочет попробовать соляную пещеру впервые",
    features: [
      "Длительность сеанса 40 минут",
      "До 8 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
  },
  {
    title: "Абонемент на 10 посещений",
    price: "4620",
    perSession: false,
    description:
      "Оптимальный вариант для регулярного посещения с хорошей скидкой",
    features: [
      "Длительность сеанса 40 минут",
      "До 8 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: true,
  },

  {
    title: "Абонемент на 20 посещений",
    price: "7500",
    perSession: false,
    description:
      "Оптимальный вариант для регулярного посещения с хорошей скидкой",
    features: [
      "Длительность сеанса 40 минут",
      "До 8 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
  },
];

const faq = [
  {
    question: "Что такое соляная пещера?",
    answer:
      "Соляная пещера — это специально оборудованное помещение, стены, пол и потолок которого покрыты солью. Во время сеанса в воздух распыляются мельчайшие частицы соли, создавая особый микроклимат, благотворно влияющий на здоровье.",
  },
  {
    question: "Какие показания для посещения соляной пещеры?",
    answer:
      "Посещение соляной пещеры рекомендуется при заболеваниях дыхательных путей, аллергических реакциях, кожных заболеваниях, для укрепления иммунитета, снятия стресса и улучшения общего самочувствия.",
  },
  {
    question: "Есть ли противопоказания для посещения соляной пещеры?",
    answer:
      "Да, противопоказаниями являются: острые инфекционные заболевания, обострение хронических заболеваний, туберкулез, онкологические заболевания, гипертония 3 степени, индивидуальная непереносимость. Перед посещением рекомендуется проконсультироваться с врачом.",
  },
  {
    question: "Сколько длится один сеанс?",
    answer:
      "Стандартная продолжительность сеанса составляет 40 минут. Этого времени достаточно для получения терапевтического эффекта без перенасыщения организма солью.",
  },
  {
    question: "Можно ли посещать соляную пещеру с детьми?",
    answer:
      "Да, дети могут посещать соляную пещеру с 3-х лет в сопровождении взрослых. Для детей предусмотрены специальные кресла и игрушки, чтобы сделать процедуру комфортной и интересной.",
  },
  {
    question: "что нужно при первом посещение?",
    answer:
      "Нужен только паспорт для заполнения договора.",
  },
];

const galleryImages = [photo2, photo3, photo4, photo5, photo6, photo7];
