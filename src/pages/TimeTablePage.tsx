import { FC, useEffect, useMemo, useState } from "react";
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
import { Users, Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import BubbleComponent from "@/components/ui/Buble";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  addWeeks,
  isWithinInterval,
} from "date-fns";
import { ru } from "date-fns/locale";
import { LiquidGlass } from "@/components/ui/LiquidGlass";
import { getPricingPlans } from "@/consts/const";
import { BookingModal } from "@/components/BookingModal";
import { PaymentMethodModal } from "@/components/PaymentMethodModal";
import { PaymentModal } from "@/components/PaymentModal";

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
  paid: yup.boolean().default(false),
  sessionType: yup.string().required("Выберите тип сеанса"),
  selectedPrice: yup.string().required("Цена обязательна"),
  selectedTrainer: yup.string().notRequired(),
});

type FormValues = yup.InferType<typeof schema>;

type ActiveTab = "pool" | "poolpro";

type GroupedSessions = {
  [key: string]: TimeTableItem[];
};

const pricingPlans = {
  pool: getPricingPlans("pool"),
  poolpro: getPricingPlans("poolpro"),
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
  const [hasNamedTrainers, setHasNamedTrainers] = useState(false);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
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
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as any,
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
  const getWeekDates = (offset: number) => {
    const now = new Date();
    const startOfCurrentWeek = startOfWeek(now, { weekStartsOn: 1 });
    const startOfSelectedWeek = addWeeks(startOfCurrentWeek, offset);

    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(addDays(startOfSelectedWeek, i));
    }

    return dates;
  };

  const selectedWeekDates = getWeekDates(currentWeekOffset);

  // Фильтрация по типу занятия и дате (используем selectedWeekDates вместо twoWeeksDates)
  const filteredItems = items.filter((item) => {
    const itemDate = new Date(item.day);
    return (
      item.type === activeTab &&
      selectedWeekDates.some((date) => isSameDay(date, itemDate))
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

    // Проверяем, является ли занятие арендой (нет имен тренеров или имя "Аренда")
    const isRental = available.every(
      (trainer) =>
        !trainer.trainerName ||
        trainer.trainerName === "" ||
        trainer.trainerName === "Аренда"
    );

    // Для аренды не показываем выбор тренера
    const hasNamedTrainers =
      !isRental &&
      available.some(
        (trainer) =>
          trainer.trainerName &&
          trainer.trainerName !== "" &&
          trainer.trainerName !== "Аренда"
      );

    setHasNamedTrainers(hasNamedTrainers);

    if (available.length > 0) {
      setSelectedSession(session);
      setAvailableTrainers(available);

      // Для аренды устанавливаем пустую строку, иначе первого доступного тренера
      setValue(
        "selectedTrainer",
        hasNamedTrainers
          ? available.find(
              (t) =>
                t.trainerName &&
                t.trainerName !== "" &&
                t.trainerName !== "Аренда"
            )?.trainerName || ""
          : ""
      );
      setShowModal(true);
    }
  };

  const onSubmit = async (formData: FormValues) => {
    if (!selectedSession) return;

    // Для аренды используем пустую строку, иначе выбранного тренера
    const finalTrainer = hasNamedTrainers ? formData.selectedTrainer : "";

    try {
      const result = await dispatch(
        bookSession({
          sessionId: selectedSession.id!,
          name: formData.name,
          phone: formData.phone.replace(/\D/g, ""),
          email: formData.email,
          day: selectedSession.day,
          trainer: finalTrainer,
          time: selectedSession.time,
          sessionType: formData.sessionType,
          price: formData.selectedPrice,
          paid: formData.paid,
          type: activeTab,
        })
      ).unwrap();

      if (result.success) {
        dispatch(
          updateSessionStatus({
            sessionId: selectedSession.id!,
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
      {/* Пузырьки */}
      {bubbles}
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

        {/* Переключатель недель */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setCurrentWeekOffset((prev) => prev - 1)}
            disabled={currentWeekOffset === 0}
            className="p-2 rounded-full bg-white/20 text-white disabled:opacity-30 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Calendar className="text-white" size={20} />
            <span className="text-white font-medium">
              {currentWeekOffset === 0
                ? "Текущая неделя"
                : currentWeekOffset === 1
                ? "Следующая неделя"
                : `${format(
                    addWeeks(
                      startOfWeek(new Date(), { weekStartsOn: 1 }),
                      currentWeekOffset
                    ),
                    "d MMMM",
                    { locale: ru }
                  )}`}
            </span>
          </div>

          <button
            onClick={() => setCurrentWeekOffset((prev) => prev + 1)}
            disabled={currentWeekOffset === 1} // Ограничиваем показ только текущей и следующей недели
            className="p-2 rounded-full bg-white/20 text-white disabled:opacity-30 hover:bg-white/30 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Основное расписание */}
      <LiquidGlass
        glassColor="#ffffff"
        opacity={0.15}
        scaleOnHover={1.0}
        blurStrength={10}
        borderRadius={32}
        className="container mx-auto px-4 relative z-10 py-8"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {selectedWeekDates.map((date) => {
              // Используем selectedWeekDates вместо twoWeeksDates
              const dateKey = format(date, "yyyy-MM-dd");
              const daySessions = groupedSessions[dateKey] || {};
              const dayName = format(date, "EEEE", { locale: ru });
              const dayNumber = format(date, "d");
              const month = format(date, "MMMM", { locale: ru });
              const isCurrentWeek = isWithinInterval(date, {
                start: startOfWeek(new Date(), { weekStartsOn: 1 }),
                end: addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 6),
              });

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
                    <div className="text-white font-bold text-sm mb-1 capitalize">
                      {dayName}
                    </div>
                    <div className="text-white text-xs capitalize">
                      {dayNumber} {month}
                    </div>
                    <div className="text-white text-xs mt-1">
                      {isCurrentWeek ? "Текущая неделя" : "Следующая неделя"}
                    </div>
                  </div>
                  <div className="p-3">
                    {Object.keys(daySessions).length > 0 ? (
                      Object.entries(daySessions).map(([time, sessions]) => {
                        const session = sessions[0];
                        const isAvailable = hasAvailableTrainers(session);
                        const availableCount =
                          getAvailableTrainersCount(session);
                        const isRental = session.trainers.every(
                          (trainer) =>
                            !trainer.trainerName ||
                            trainer.trainerName === "" ||
                            trainer.trainerName === "Аренда"
                        );

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
                                  Нет записи
                                </span>
                              ) : (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  {isRental ? "Доступно" : "Свободно"}
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
                                    {isRental
                                      ? "Аренда доступна"
                                      : `${availableCount} тренер${
                                          availableCount > 1 ? "а" : ""
                                        } доступно`}
                                  </span>
                                ) : (
                                  <span>Нет свободных мест</span>
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
      </LiquidGlass>
      {/* модальное окно бронирования */}
      <BookingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        control={control}
        errors={errors}
        setValue={setValue}
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        selectedSession={selectedSession}
        availableTrainers={availableTrainers}
        hasNamedTrainers={hasNamedTrainers}
        pricingPlans={pricingPlans}
        activeTab={activeTab}
      />
      {/* модальное окно выбора оплаты */}
      <PaymentMethodModal
        isOpen={showPaymentMethodModal}
        onClose={() => setShowPaymentMethodModal(false)}
        applicationData={applicationData}
        onPaymentMethodSelect={handlePaymentMethodSelect}
      />
      {/* модальное окно онлайн оплаты */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        applicationData={applicationData}
      />
    </section>
  );
};

export default TimeTablePage;
