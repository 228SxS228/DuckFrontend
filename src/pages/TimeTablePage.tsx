import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxe";
import {
  bookSession,
  fetchTimeTable,
  fetchTimeTablePro,
} from "../store/action/timeTableAction";
import { selectTimeTableInfo } from "../store/slices/timeTableSlice";
import { TimeTableItem } from "../model/model";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, X } from "lucide-react";
import BubbleComponent from "@/components/ui/Buble";

type ActiveTab = "pool" | "poolpro" | "saltacave";

const TimeTablePage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, items } = useAppSelector(selectTimeTableInfo);
  const [selectedSession, setSelectedSession] = useState<TimeTableItem | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    paid: false,
  });
  const [activeTab, setActiveTab] = useState<ActiveTab>("pool");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await dispatch(fetchTimeTable());
      await dispatch(fetchTimeTablePro());
      setTimeout(() => setIsLoading(false), 1000);
    };
    loadData();
  }, [dispatch]);

  // Фильтрация по типу занятия
  const filteredItems = items.filter((item) => item.type === activeTab);

  const handleSessionClick = (session: TimeTableItem) => {
    if (session.isFree) {
      setSelectedSession(session);
      setShowModal(true);
    }
  };

  const groupByDay = (sessions: TimeTableItem[]) => {
    const daysMap: Record<string, TimeTableItem[]> = {};

    sessions.forEach((session) => {
      const date = new Date(session.day);
      const dayName = date.toLocaleDateString("ru-RU", { weekday: "long" });

      if (!daysMap[dayName]) {
        daysMap[dayName] = [];
      }
      daysMap[dayName].push(session);
    });

    const daysOrder = [
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
      "воскресенье",
    ];

    const sortedDays: Record<string, TimeTableItem[]> = {};
    daysOrder.forEach((day) => {
      if (daysMap[day]) {
        sortedDays[day] = daysMap[day].sort((a, b) =>
          a.time.localeCompare(b.time)
        );
      } else {
        sortedDays[day] = [];
      }
    });

    return sortedDays;
  };

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

  if (!items.length)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-50 to-white">
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-sky-200 max-w-md mx-4">
          <div className="text-sky-500 text-5xl mb-4">⏰</div>
          <h2 className="text-xl font-bold text-sky-800 mb-2">
            Расписание отсутствует
          </h2>
          <p className="text-gray-700 mb-4">
            На этой неделе нет доступных занятий. Пожалуйста, проверьте позже.
          </p>
          <button
            onClick={() => {
              setIsLoading(true);
              dispatch(fetchTimeTable());
            }}
            className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-6 rounded-full transition-colors"
          >
            Обновить
          </button>
        </div>
      </div>
    );

  const groupedSessions = groupByDay(filteredItems);

  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-b from-[#301EEB] to-[#9F1EEB] py-12">
      <BubbleComponent
        count={80}
        speed={1}
        color="#ffff"
        size={{ base: 15, sm: 25, md: 35 }}
      />
      {/* Верхний баннер */}
      <div className="text-center mb-16">
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
            {/* Кнопка для pool */}
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

            {/* Кнопка для poolpro */}
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
      </div>

      {/* Основное расписание */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
            {Object.entries(groupedSessions).map(([dayName, sessions]) => (
              <motion.div
                key={dayName}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sky-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-4 text-center font-bold text-white text-lg">
                  {dayName.charAt(0).toUpperCase() + dayName.slice(1)}
                </div>
                <div className="p-4">
                  {sessions.length > 0 ? (
                    sessions.map((session) => (
                      <motion.div
                        key={`${session.day}-${session.time}`}
                        onClick={() => handleSessionClick(session)}
                        className={`p-4 mb-3 rounded-xl border-2 transition-all ${
                          session.isFree
                            ? "border-sky-200 hover:bg-sky-50 hover:border-sky-300 cursor-pointer"
                            : "border-gray-200 bg-gray-50 cursor-not-allowed"
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-bold text-lg text-sky-800">
                            {session.time}
                          </span>
                          {!session.isFree ? (
                            <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                              Занято
                            </span>
                          ) : (
                            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                              Свободно
                            </span>
                          )}
                        </div>
                        <div className="mt-3">
                          <p className="font-semibold text-gray-800">
                            {session.className}
                          </p>
                          <p className="text-sm text-gray-600 mt-2 flex items-center">
                            <User className="h-4 w-4 mr-2 text-sky-600" />
                            {session.trainerName}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-gray-500">Нет занятий</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно записи */}
      {showModal && selectedSession && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Запись на занятие</h3>
              <p className="text-sky-100 mt-1">
                Подтвердите ваше участие в занятии
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-5">
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

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-gray-500 w-28">Тип занятия:</div>
                  <div className="font-medium">{selectedSession.className}</div>
                </div>

                <div className="flex items-center">
                  <div className="text-gray-500 w-28">Тренер:</div>
                  <div className="font-medium">
                    {selectedSession.trainerName}
                  </div>
                </div>

                <div className="pt-4">
                  <label className="text-gray-700 mb-2 flex items-center">
                    <User className="h-4 w-4 mr-2 text-sky-600" />
                    Ваше имя:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>

                <div className="pt-2">
                  <label className="text-gray-700 mb-2 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-sky-600" />
                    Ваш телефон:
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <div className="pt-2">
                  <label className="text-gray-700 mb-2 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-sky-600" />
                    Ваш email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Введите свой email"
                    required
                  />
                </div>
                <div className="mt-4 flex items-center">
                  <input
                    type="checkbox"
                    id="paid"
                    name="paid"
                    checked={formData.paid}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        paid: e.target.checked,
                      }))
                    }
                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="paid"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Я у вас впервые!
                  </label>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      paid: false,
                    });
                  }}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors flex items-center"
                >
                  <X className="mr-2 h-4 w-4" />
                  Отмена
                </button>
                <button
                  onClick={() => {
                    if (!formData.name || !formData.phone) {
                      alert("Пожалуйста, заполните имя и телефон");
                      return;
                    }
                    dispatch(
                      bookSession({
                        sessionId: selectedSession.id!,
                        name: formData.name,
                        phone: formData.phone,
                        day: selectedSession.day,
                        trainer: selectedSession.trainerName,
                        time: selectedSession.time,
                        paid: formData.paid,
                        email: formData.email,
                        type: activeTab,
                      })
                    );
                    setShowModal(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      paid: false,
                    });
                  }}
                >
                  Подтвердить запись
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TimeTablePage;
