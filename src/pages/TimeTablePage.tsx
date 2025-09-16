import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxe";
import {
  bookSession,
  fetchTimeTable,
  fetchTimeTablePro,
} from "../store/action/timeTableAction";
import {
  selectTimeTableInfo,
  updateSessionStatus,
} from "../store/slices/timeTableSlice";
import { ApplicationResponse, TimeTableItem, Trainer } from "../model/model";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  User,
  X,
  Check,
  Phone,
  Mail,
  CreditCard,
  Store,
  ExternalLink,
  Users,
  Plus,
  Calendar,
} from "lucide-react";
import BubbleComponent from "@/components/ui/Buble";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "@/components/Modal";
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  endOfWeek,
  addWeeks,
} from "date-fns";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";

// Схема валидации
type FormValues = {
  name: string;
  phone: string;
  email: string;
  paid: boolean;
  sessionType: string;
  selectedPrice: string;
  selectedTrainer: string;
};

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
  paid: yup.boolean().default(false),
  sessionType: yup.string().required("Выберите тип сеанса"),
  selectedPrice: yup.string().required("Цена обязательна"),
  selectedTrainer: yup.string().required("Выберите тренера"),
});

type ActiveTab = "pool" | "poolpro";

type GroupedSessions = {
  [key: string]: TimeTableItem[];
};

const TimeTablePage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, items } = useAppSelector(selectTimeTableInfo);
  const [selectedSession, setSelectedSession] = useState<TimeTableItem | null>(
    null
  );
  const [availableTrainers, setAvailableTrainers] = useState<Trainer[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("pool");
  const [applicationData, setApplicationData] =
    useState<ApplicationResponse | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);

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
      selectedPrice: "",
      selectedTrainer: "",
      paid: false,
    },
  });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await dispatch(fetchTimeTable());
      await dispatch(fetchTimeTablePro());
      setTimeout(() => setIsLoading(false), 1000);
    };
    loadData();
  }, [dispatch]);

  // Получение дат для текущей и следующей недели
  const getTwoWeeksDates = () => {
    const now = new Date();
    const startOfCurrentWeek = startOfWeek(now, { weekStartsOn: 1 });
    const endOfNextWeek = addWeeks(endOfWeek(now, { weekStartsOn: 1 }), 1);

    const dates = [];
    let currentDate = startOfCurrentWeek;

    while (currentDate <= endOfNextWeek) {
      dates.push(new Date(currentDate));
      currentDate = addDays(currentDate, 1);
    }

    return dates;
  };

  const twoWeeksDates = getTwoWeeksDates();

  // Фильтрация по типу занятия и дате
  const filteredItems = items.filter((item) => {
    const itemDate = new Date(item.day);
    return (
      item.type === activeTab &&
      twoWeeksDates.some((date) => isSameDay(date, itemDate))
    );
  });

  // Проверка есть ли свободные тренеры в занятии
  const hasAvailableTrainers = (session: TimeTableItem) => {
    return session.trainers.some((trainer) => trainer.isFree);
  };

  // Получение количества свободных тренеров
  const getAvailableTrainersCount = (session: TimeTableItem) => {
    return session.trainers.filter((trainer) => trainer.isFree).length;
  };

  const handleSessionClick = (session: TimeTableItem) => {
    const available = session.trainers.filter((trainer) => trainer.isFree);

    if (available.length > 0) {
      setSelectedSession(session);
      setAvailableTrainers(available);
      setValue("selectedTrainer", available[0].trainerName);
      setShowModal(true);
    }
  };

  const onSubmit = async (formData: FormValues) => {
    if (!selectedSession) return;

    try {
      const result = await dispatch(
        bookSession({
          sessionId: selectedSession.id!,
          name: formData.name,
          phone: formData.phone.replace(/\D/g, ""),
          email: formData.email,
          day: selectedSession.day,
          trainer: formData.selectedTrainer,
          time: selectedSession.time,
          sessionType: formData.sessionType,
          price: formData.selectedPrice,
          paid: formData.paid,
          type: activeTab,
        })
      ).unwrap();

      if (result.success) {
        // Обновляем статус тренера
        dispatch(
          updateSessionStatus({
            sessionId: selectedSession.id!,
            // trainerName: formData.selectedTrainer,
            isFree: false,
          })
        );

        setApplicationData(result);
        setShowModal(false);
        setShowPaymentMethodModal(true);
        reset();
      } else {
        alert(result.message || "Произошла ошибка при бронировании");
      }
    } catch (error) {
      console.error("Ошибка при бронировании:", error);
      alert("Произошла ошибка при бронировании. Пожалуйста, попробуйте снова.");
    }
  };

  const handlePaymentMethodSelect = (method: "online" | "in_center") => {
    setShowPaymentMethodModal(false);

    if (method === "online") {
      setShowPaymentModal(true);
      //ссылка на оплату
    } else {
      alert("Вы выбрали оплату в центре. Ждем вас!");
    }
  };

  const groupByDay = (sessions: TimeTableItem[]) => {
    const daysMap: Record<string, GroupedSessions> = {};

    sessions.forEach((session) => {
      const date = new Date(session.day);
      const dayKey = format(date, "yyyy-MM-dd");

      if (!daysMap[dayKey]) {
        daysMap[dayKey] = {};
      }

      if (!daysMap[dayKey][session.time]) {
        daysMap[dayKey][session.time] = [];
      }

      daysMap[dayKey][session.time].push(session);
    });

    return daysMap;
  };

  const groupedSessions = groupByDay(filteredItems);

  if (isLoading || loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-600 mx-auto mb-4"></div>
          <p className="text-sky-700 font-medium">Загружаем расписание...</p>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-50 to-white">
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-200 max-w-md mx-4">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-red-700 mb-2">
            Ошибка загрузки
          </h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => {
              setIsLoading(true);
              dispatch(fetchTimeTable());
            }}
            className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-6 rounded-full transition-colors"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );

  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-b from-[#301EEB] to-[#9F1EEB] py-12">
      <BubbleComponent
        count={80}
        speed={1}
        color="#ffff"
        size={{ base: 15, sm: 25, md: 35 }}
      />
      {/* Верхний баннер */}
      <div className="text-center mb-8">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Расписание занятий
        </motion.h1>
        <motion.div
          className="mx-auto mb-8 max-w-2xl text-blue-100 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Выберите удобное время для занятий плаванием.
        </motion.div>

        {/* Переключатель вкладок */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 inline-flex">
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "pool"
                  ? "bg-blue-600 text-white"
                  : "text-blue-100 hover:bg-white/10"
              }`}
              onClick={() => setActiveTab("pool")}
            >
              Утенок
            </button>

            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "poolpro"
                  ? "bg-yellow-400 text-blue-900"
                  : "text-blue-100 hover:bg-white/10"
              }`}
              onClick={() => setActiveTab("poolpro")}
            >
              УтенокПродолжение
            </button>
          </div>
        </div>

        {/* Информация о периоде */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Calendar className="text-white" size={20} />
            <span className="text-white font-medium">
              Текущая и следующая неделя
            </span>
          </div>
        </div>
      </div>
      {/* Основное расписание */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {twoWeeksDates.map((date) => {
              const dateKey = format(date, "yyyy-MM-dd");
              const daySessions = groupedSessions[dateKey] || {};
              const dayName = date.toLocaleDateString("ru-RU", {
                weekday: "long",
              });
              const dayNumber = format(date, "d");
              const month = format(date, "MMM");
              const isCurrentWeek =
                date <=
                addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 6);

              return (
                <motion.div
                  key={dateKey}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sky-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`p-3 text-center ${
                      isCurrentWeek
                        ? "bg-gradient-to-r from-sky-600 to-blue-700"
                        : "bg-gradient-to-r from-purple-600 to-pink-700"
                    }`}
                  >
                    <div className="text-white font-bold text-sm mb-1">
                      {dayName}
                    </div>
                    <div className="text-white text-xs">
                      {dayNumber} {month}
                    </div>
                    <div className="text-white text-xs mt-1">
                      {isCurrentWeek ? "Текущая неделя" : "Следующая неделя"}
                    </div>
                  </div>
                  <div className="p-3">
                    {Object.keys(daySessions).length > 0 ? (
                      Object.entries(daySessions).map(([time, sessions]) => {
                        const session = sessions[0]; // Берем первую сессию этого времени
                        const isAvailable = hasAvailableTrainers(session);
                        const availableCount =
                          getAvailableTrainersCount(session);

                        return (
                          <motion.div
                            key={`${dateKey}-${time}`}
                            onClick={() =>
                              isAvailable && handleSessionClick(session)
                            }
                            className={`p-3 mb-2 rounded-xl border-2 transition-all ${
                              isAvailable
                                ? "border-sky-200 hover:bg-sky-50 hover:border-sky-300 cursor-pointer"
                                : "border-gray-200 bg-gray-50 cursor-not-allowed"
                            }`}
                            whileHover={{
                              scale: isAvailable ? 1.02 : 1,
                            }}
                          >
                            <div className="flex justify-between items-start">
                              <span className="font-bold text-sm text-sky-800">
                                {time}
                              </span>
                              {!isAvailable ? (
                                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                  Занято
                                </span>
                              ) : (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  Свободно
                                </span>
                              )}
                            </div>
                            <div className="mt-2">
                              <p className="font-semibold text-gray-800 text-sm">
                                {session.className}
                              </p>
                              <div className="text-xs text-gray-600 mt-1">
                                <Users className="h-3 w-3 mr-1 text-sky-600 inline" />
                                {isAvailable ? (
                                  <span>
                                    {availableCount} тренер
                                    {availableCount > 1 ? "а" : ""} доступно
                                  </span>
                                ) : (
                                  <span>Нет свободных тренеров</span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-gray-500 text-sm">Нет занятий</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Модальное окно записи */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        {selectedSession && (
          <>
            <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  Запись на занятие
                </h3>
              </div>
            </div>

            <div className="p-5 border-b border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-sky-100 text-sky-800 rounded-lg p-3 mr-4">
                  <Clock className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-bold text-lg">
                    {selectedSession.time}
                  </div>
                  <div className="text-gray-600">
                    {new Date(selectedSession.day).toLocaleDateString("ru-RU", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="text-gray-500 w-28">Тип занятия:</div>
                  <div className="font-medium">{selectedSession.className}</div>
                </div>

                {/* Выбор тренера */}
                {/* <div className="mt-4">
                  <label className="block text-gray-500 mb-2">
                    Выберите тренера:
                  </label>
                  <div className="space-y-2">
                    {selectedSession.trainers.map((trainer) => (
                      <div
                        key={trainer.trainerName}
                        className={`p-3 rounded-lg border cursor-pointer ${
                          trainer.isFree
                            ? "hover:bg-gray-50 border-gray-200"
                            : "opacity-50 cursor-not-allowed border-gray-100"
                        }`}
                        onClick={() =>
                          trainer.isFree &&
                          setValue("selectedTrainer", trainer.trainerName)
                        }
                      >
                        <div className="flex items-center">
                          <div
                            className={`h-4 w-4 rounded-full border mr-3 ${
                              trainer.isFree &&
                              trainer.trainerName ===
                                control._formValues.selectedTrainer
                                ? "border-blue-500 bg-blue-500"
                                : trainer.isFree
                                ? "border-gray-300"
                                : "border-gray-300 bg-gray-300"
                            }`}
                          ></div>
                          <div>
                            <div className="font-medium">
                              {trainer.trainerName}
                            </div>
                            {!trainer.isFree && (
                              <div className="text-red-500 text-sm">Занято</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Выбор конкретного тренера из доступных */}
                {availableTrainers.length > 0 && (
                  <div className="mt-4">
                    <label className="block text-gray-500 mb-2">
                      Выберите конкретного тренера:
                    </label>
                    <Controller
                      name="selectedTrainer"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {availableTrainers.map((trainer) => (
                            <option
                              key={trainer.trainerName}
                              value={trainer.trainerName}
                            >
                              {trainer.trainerName}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                    {errors.selectedTrainer && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.selectedTrainer.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
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
                        placeholder="Ваше имя"
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

              {/* Поле телефона с маской */}
              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

              {/* Поле email */}
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
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        onChange={(e) => {
                          field.onChange(e);
                          const selectedPlan = pricingPlans[activeTab].find(
                            (plan) => plan.title === e.target.value
                          );
                          if (selectedPlan) {
                            setValue("selectedPrice", selectedPlan.price);
                          }
                        }}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Тип сеанса</option>
                        {pricingPlans[activeTab].map((plan) => (
                          <option key={plan.title} value={plan.title}>
                            {plan.title} - {plan.price} руб.
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

              {/* Скрытое поле для цены */}
              <Controller
                name="selectedPrice"
                control={control}
                render={({ field }) => <input type="hidden" {...field} />}
              />

              {/* Кнопки */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || availableTrainers.length === 0}
                  className="flex-1 py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? "Отправка..." : "Записаться"}
                </button>
              </div>
            </form>

            <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100 rounded-b-2xl">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <Link
                to={RouteNames.OFFERTA}
                className="text-blue-600 hover:underline"
              >
                политикой конфиденциальности
              </Link>
            </div>
          </>
        )}
      </Modal>
      {/* Остальные модальные окна (оплаты) */}
      <Modal
        isOpen={showPaymentMethodModal}
        onClose={() => setShowPaymentMethodModal(false)}
        className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Выбор оплаты</h3>
            <button
              onClick={() => setShowPaymentMethodModal(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-5">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-green-600" size={28} />
            </div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">
              Заявка #{applicationData?.applicationId} принята!
            </h4>
            <p className="text-gray-600 mb-4">
              Выберите способ оплаты для подтверждения записи
            </p>

            <div className="bg-blue-50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-800">
                  Номер заявки: {applicationData?.applicationId}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handlePaymentMethodSelect("online")}
              className="w-full p-4 border-2 border-blue-200 rounded-xl flex items-center justify-between hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <CreditCard className="text-blue-600" size={20} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-blue-900">Оплата онлайн</div>
                  <div className="text-sm text-gray-600">Банковской картой</div>
                </div>
              </div>
              <ExternalLink className="text-blue-600" size={20} />
            </button>

            <button
              onClick={() => handlePaymentMethodSelect("in_center")}
              className="w-full p-4 border-2 border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <Store className="text-gray-600" size={20} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">Оплата в центре</div>
                  <div className="text-sm text-gray-600">При посещении</div>
                </div>
              </div>
              <ArrowRight className="text-gray-600" size={20} />
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Вы можете оплатить позже, но не позднее чем за 2 часа до занятия
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Оплата онлайн</h3>
            <button
              onClick={() => setShowPaymentModal(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-5">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="text-blue-600" size={28} />
            </div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">
              Оплата заявки #{applicationData?.applicationId}
            </h4>
            <p className="text-gray-600 mb-4">
              Вы будете перенаправлены на безопасную страницу оплаты Робокассы
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">Сумма к оплате:</span>
              <span className="font-bold text-green-600">
                {/* Можно парсить сумму из ссылки или хранить отдельно */}
                {applicationData?.onlinePayLink?.match(/OutSum=(\d+)/)?.[1] ||
                  ""}{" "}
                руб.
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Описание:</span>
              <span className="font-medium text-sm text-right max-w-xs">
                {applicationData?.onlinePayLink?.match(
                  /Description=([^&]+)/
                )?.[1]
                  ? decodeURIComponent(
                      applicationData.onlinePayLink.match(
                        /Description=([^&]+)/
                      )?.[1] || ""
                    )
                  : "Оплата занятия"}
              </span>
            </div>
          </div>

          <button
            // onClick={() => {
            //   if (applicationData?.onlinePayLink) {
            //     // Редирект на страницу оплаты Робокассы
            //     window.location.href = applicationData.onlinePayLink;
            //   }
            // }}
            disabled={!applicationData?.onlinePayLink}
            className="w-full py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50 mb-4"
          >
            Скоро появится!!!
          </button>

          <div className="text-center text-sm text-gray-500 mb-2">
            <p>Оплата защищена по стандарту PCI DSS</p>
          </div>

          <div className="text-center text-xs text-gray-400">
            <p>Платежная система Робокасса</p>
          </div>
        </div>
      </Modal>
    </section>
  );
};

const pricingPlans = {
  pool: [
    {
      title: "Разовое групповое занятие",
      price: "850",
    },
    {
      title: "Абонемент на 4 групповых занятий",
      price: "3140",
    },
    {
      title: "Абонемент на 8 групповых занятий",
      price: "5960",
    },
    {
      title: "Разовое занятие индивидуальное",
      price: "1600",
    },
    {
      title: "Абонемент на 4 индивидуальных занятий",
      price: "5960",
    },
    {
      title: "Абонемент на 8 индивидуальных занятий",
      price: "10900",
    },
    {
      title: "Абонемент на 12 индивидуальных занятий",
      price: "15900",
    },
  ],
  poolpro: [
    {
      title: "Разовое групповое занятие",
      price: "850",
    },
    {
      title: "Абонемент на 4 групповых занятий",
      price: "3140",
    },
    {
      title: "Абонемент на 8 групповых занятий",
      price: "5960",
    },
    {
      title: "Разовое занятие индивидуальное",
      price: "1600",
    },
    {
      title: "Абонемент на 4 индивидуальных занятий",
      price: "5960",
    },
    {
      title: "Абонемент на 8 индивидуальных занятий",
      price: "10900",
    },
    {
      title: "Абонемент на 12 индивидуальных занятий",
      price: "15900",
    },
  ],
};

export default TimeTablePage;
