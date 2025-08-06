// import { FC, useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/reduxe";
// import { bookSession, fetchTimeTable } from "../store/action/timeTableAction";
// import { selectTimeTableInfo } from "../store/slices/timeTableSlice";
// import { TimeTableItem } from "../model/model";

// const TimeTablePage: FC = () => {
//   const dispatch = useAppDispatch();
//   const { loading, error, items } = useAppSelector(selectTimeTableInfo);
//   const [selectedSession, setSelectedSession] = useState<TimeTableItem | null>(
//     null
//   );
//   const [showModal, setShowModal] = useState(false);

//   // Загрузка данных при монтировании
//   useEffect(() => {
//     dispatch(fetchTimeTable());
//   }, [dispatch]);

//   // Обработчик клика по занятию
//   const handleSessionClick = (session: TimeTableItem) => {
//     if (session.isFree) {
//       setSelectedSession(session);
//       setShowModal(true);
//     }
//   };

//   // Группировка занятий по дням недели
//   const groupByDay = (sessions: TimeTableItem[]) => {
//     const daysMap: Record<string, TimeTableItem[]> = {};

//     sessions.forEach((session) => {
//       const date = new Date(session.day);
//       const dayName = date.toLocaleDateString("ru-RU", { weekday: "long" });

//       if (!daysMap[dayName]) {
//         daysMap[dayName] = [];
//       }
//       daysMap[dayName].push(session);
//     });

//     // Сортируем дни недели в правильном порядке
//     const daysOrder = [
//       "понедельник",
//       "вторник",
//       "среда",
//       "четверг",
//       "пятница",
//       "суббота",
//       "воскресенье",
//     ];

//     const sortedDays: Record<string, TimeTableItem[]> = {};
//     daysOrder.forEach((day) => {
//       if (daysMap[day]) {
//         sortedDays[day] = daysMap[day].sort((a, b) =>
//           a.time.localeCompare(b.time)
//         );
//       }
//     });

//     return sortedDays;
//   };

//   // Состояния загрузки
//   if (loading)
//     return <div className="text-center py-8">Загрузка расписания...</div>;
//   if (error)
//     return <div className="text-center py-8 text-red-500">Ошибка: {error}</div>;
//   if (!items.length)
//     return <div className="text-center py-8">Нет доступных занятий</div>;

//   const groupedSessions = groupByDay(items);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-8">
//         Расписание занятий
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
//         {Object.entries(groupedSessions).map(([dayName, sessions]) => (
//           <div key={dayName} className="border rounded-lg overflow-hidden">
//             <div className="bg-blue-600 p-3 text-center text-white font-bold">
//               {dayName.charAt(0).toUpperCase() + dayName.slice(1)}
//             </div>
//             <div className="p-2">
//               {sessions.map((session) => (
//                 <div
//                   key={`${session.day}-${session.time}`}
//                   onClick={() => handleSessionClick(session)}
//                   className={`p-3 mb-2 rounded border cursor-pointer ${
//                     session.isFree
//                       ? "bg-green-50 border-green-200 hover:bg-green-100"
//                       : "bg-gray-100 border-gray-300 cursor-not-allowed"
//                   }`}
//                 >
//                   <div className="flex justify-between">
//                     <span className="font-medium">{session.time}</span>
//                     {!session.isFree && (
//                       <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
//                         Занято
//                       </span>
//                     )}
//                   </div>
//                   <div className="mt-1 text-sm">
//                     <p>{session.className}</p>
//                     <p className="text-gray-600">
//                       Тренер: {session.trainerName}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Модальное окно записи */}
//       {showModal && selectedSession && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
//             <h3 className="text-xl font-bold mb-4">Запись на занятие</h3>
//             <div className="space-y-2 mb-4">
//               <p>
//                 <b>Дата:</b>{" "}
//                 {new Date(selectedSession.day).toLocaleDateString("ru-RU")}
//               </p>
//               <p>
//                 <b>Время:</b> {selectedSession.time}
//               </p>
//               <p>
//                 <b>Тренер:</b> {selectedSession.trainerName}
//               </p>
//               <p>
//                 <b>Тип:</b> {selectedSession.className}
//               </p>
//             </div>
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 border rounded hover:bg-gray-100"
//               >
//                 Отмена
//               </button>
//               <button
//                 onClick={() => {
//                   dispatch(bookSession({ sessionId: selectedSession.id! }));
//                   setShowModal(false);
//                 }}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Записаться
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TimeTablePage;

import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxe";
import { bookSession, fetchTimeTable } from "../store/action/timeTableAction";
import { selectTimeTableInfo } from "../store/slices/timeTableSlice";
import { TimeTableItem } from "../model/model";

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
    paid: false, // По умолчанию не оплачено
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchTimeTable());
      // Имитация загрузки для демонстрации лоадера
      setTimeout(() => setIsLoading(false), 1000);
    };
    loadData();
  }, [dispatch]);

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

  const groupedSessions = groupByDay(items);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-sky-50 to-white">
      {/* Плавающие пузыри фона */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sky-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <main className="flex-1 relative z-10">
        {/* Верхний баннер */}
        <section className="bg-gradient-to-r from-sky-500 to-blue-600 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Расписание занятий
              </h1>
              <p className="text-xl text-sky-100 mb-8">
                Выберите удобное время для занятий плаванием
              </p>
              <div className="inline-flex space-x-4">
                <div className="bg-white/20 backdrop-blur-sm py-2 px-6 rounded-full">
                  <span className="font-semibold text-white">
                    {items.filter((i) => i.isFree).length}
                  </span>{" "}
                  <span className="text-sky-100">свободных занятий</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Основное расписание */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
              {Object.entries(groupedSessions).map(([dayName, sessions]) => (
                <div
                  key={dayName}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sky-100 transform transition-transform hover:scale-[1.02]"
                >
                  <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-4 text-center font-bold text-white text-lg">
                    {dayName.charAt(0).toUpperCase() + dayName.slice(1)}
                  </div>
                  <div className="p-4">
                    {sessions.length > 0 ? (
                      sessions.map((session) => (
                        <div
                          key={`${session.day}-${session.time}`}
                          onClick={() => handleSessionClick(session)}
                          className={`p-4 mb-3 rounded-xl border-2 transition-all ${
                            session.isFree
                              ? "border-sky-200 hover:bg-sky-50 hover:border-sky-300 cursor-pointer"
                              : "border-gray-200 bg-gray-50 cursor-not-allowed"
                          }`}
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-2 text-sky-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {session.trainerName}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-gray-500">Нет занятий</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Призыв к действию */}
            <div className="mt-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Готовы начать занятия?
                </h2>
                <p className="text-sky-100 mb-6 text-lg">
                  Запишитесь на пробное занятие и погрузитесь в мир плавания
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      const firstFree = items.find((i) => i.isFree);
                      if (firstFree) {
                        setSelectedSession(firstFree);
                        setShowModal(true);
                      }
                    }}
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Записаться на занятие
                  </button>

                  <a
                    href="/contacts"
                    className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-8 rounded-full transition-all border border-white/30 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Контакты
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Модальное окно записи */}
      {showModal && selectedSession && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Запись на занятие</h3>
              <p className="text-sky-100 mt-1">
                Подтвердите ваше участие в занятии
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-5">
                <div className="bg-sky-100 text-sky-800 rounded-lg p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
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
                  <label className="block text-gray-700 mb-2">Ваше имя:</label>
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
                  <label className="block text-gray-700 mb-2">
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
                    Оплачено
                  </label>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setFormData({ name: "", phone: "", paid: false });
                  }}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Отмена
                </button>
                <button
                  onClick={() => {
                    if (!formData.name || !formData.phone) {
                      alert("Пожалуйста, заполните имя и телефон");
                      return;
                    }
                    //доп проверка и отправление на апи
                    dispatch(
                      bookSession({
                        sessionId: selectedSession.id!,
                        name: formData.name,
                        phone: formData.phone,
                        day: selectedSession.day,
                        time: selectedSession.time,
                        paid: formData.paid,
                      })
                    );
                    setShowModal(false);
                    setFormData({ name: "", phone: "", paid: false });
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all shadow-md"
                >
                  Подтвердить запись
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeTablePage;
