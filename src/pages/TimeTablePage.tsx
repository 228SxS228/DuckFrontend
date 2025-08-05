// import React, { FC, useEffect, useState, useMemo } from "react";
// import { TimeTable } from "../model/model";
// import { useAppDiscpatch, useAppSelector } from "../hooks/reduxe";
// import { fetchTimeTable } from "../store/action/timeTableAction";
// import {
//   selectTimeTableInfo,
//   selectTimeTableData,
// } from "../store/slices/timeTableSlice";

// const TimeTablePage: FC = () => {
//   const dispatch = useAppDiscpatch();

//   // Используем мемоизированные селекторы
//   const {
//     loading,
//     error,
//     timeTable: [],
//   } = useAppSelector(selectTimeTableInfo);
//   const allTimeTables = useAppSelector(selectTimeTableData);

//   const [activeTimeTableId, setActiveTimeTableId] = useState<number | null>(
//     null
//   );

//   useEffect(() => {
//     dispatch(fetchTimeTable());
//   }, [dispatch]);

//   // Мемоизированные константы
//   const timeSlots = useMemo(
//     () => Array.from({ length: 12 }, (_, i) => `${i + 9}:00`),
//     []
//   );

//   const daysOfWeek = useMemo(
//     () => [
//       "Понедельник",
//       "Вторник",
//       "Среда",
//       "Четверг",
//       "Пятница",
//       "Суббота",
//       "Воскресенье",
//     ],
//     []
//   );

//   // Оптимизированная функция для получения данных ячейки
//   const getCellData = useMemo(
//     () => (day: string, time: string, timeTable: TimeTable) => {
//       if (!timeTable?.TimeTableDay) return "Нет данных";

//       const entry = timeTable.TimeTableDay.find(
//         (entry) => entry.DayName === day && entry.Time === time
//       );

//       return entry?.Class && entry?.Trainer
//         ? `${entry.Class.ClassName} (${entry.Trainer.TrainerName})`
//         : "Свободно";
//     },
//     []
//   );

//   // Автовыбор первого расписания
//   useEffect(() => {
//     if (allTimeTables.length > 0 && !activeTimeTableId) {
//       setActiveTimeTableId(allTimeTables[0]?.Id);
//     }
//   }, [allTimeTables, activeTimeTableId]);

//   // Активное расписание с мемоизацией
//   const activeTimeTable = useMemo(
//     () => allTimeTables.find((t) => t.Id === activeTimeTableId),
//     [allTimeTables, activeTimeTableId]
//   );

//   if (loading) {
//     return <div className="text-center py-8">Загрузка...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-8 text-red-500">{error}</div>;
//   }

//   if (!allTimeTables.length) {
//     return <div className="text-center py-8">Данные не найдены</div>;
//   }

//   return (
//     <div className="flex min-h-screen flex-col">
//       <main className="flex-1">
//         <section className="bg-gradient-to-b from-sky-100 to-white py-12 md:py-20">
//           <div className="container mx-auto px-4">
//             <div className="text-center">
//               <h1 className="mb-6 text-3xl font-bold text-sky-800 md:text-4xl lg:text-5xl">
//                 Расписание занятий
//               </h1>
//               <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-700">
//                 Выберите удобное время для занятий плаванием в нашем центре
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Вкладки */}
//       <div className="flex flex-wrap gap-2 mb-8">
//         {allTimeTables.map((timeTable) => (
//           <button
//             key={timeTable.Id}
//             onClick={() => setActiveTimeTableId(timeTable.Id)}
//             className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium
//               ${
//                 activeTimeTableId === timeTable.Id
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//               }`}
//           >
//             {timeTable.Name}
//           </button>
//         ))}
//       </div>

//       {/* Таблица */}
//       {activeTimeTable && (
//         <div className="grid grid-cols-8 gap-px bg-gray-100 border rounded-lg overflow-hidden">
//           {/* Заголовки */}
//           <div className="bg-white p-3 font-semibold text-gray-600">Время</div>
//           {daysOfWeek.map((day) => (
//             <div
//               key={day}
//               className="bg-white p-3 font-semibold text-gray-600 text-center"
//             >
//               {day}
//             </div>
//           ))}

//           {/* Строки */}
//           {timeSlots.map((time) => (
//             <React.Fragment key={time}>
//               <div className="bg-white p-3 font-medium text-gray-500">
//                 {time}
//               </div>
//               {daysOfWeek.map((day) => (
//                 <div
//                   key={`${day}-${time}`}
//                   className="bg-white p-3 text-sm text-gray-700 text-center
//                     hover:bg-blue-50 transition-colors border-b"
//                 >
//                   {getCellData(day, time, activeTimeTable)}
//                 </div>
//               ))}
//             </React.Fragment>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TimeTablePage;

import { FC, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { TimeTableDay } from "../model/model";
import { useAppDiscpatch, useAppSelector } from "../hooks/reduxe";
import { fetchTimeTable } from "../store/action/timeTableAction";
import {
  selectTimeTableInfo,
  selectTimeTableData,
} from "../store/slices/timeTableSlice";

const TimeTablePage: FC = () => {
  const dispatch = useAppDiscpatch();
  const { loading, error } = useAppSelector(selectTimeTableInfo);
  const allTimeTables = useAppSelector(selectTimeTableData);
  const [activeTimeTableId, setActiveTimeTableId] = useState<number | null>(
    null
  );

  useEffect(() => {
    dispatch(fetchTimeTable());
  }, [dispatch]);

  useEffect(() => {
    if (allTimeTables.length > 0 && !activeTimeTableId) {
      setActiveTimeTableId(allTimeTables[0]?.id);
    }
  }, [allTimeTables, activeTimeTableId]);

  const convertDayName = (shortDay: string) => {
    const daysMap: Record<string, string> = {
      Пн: "Понедельник",
      Вт: "Вторник",
      Ср: "Среда",
      Чт: "Четверг",
      Пт: "Пятница",
      Сб: "Суббота",
      Вс: "Воскресенье",
    };
    return daysMap[shortDay] || shortDay;
  };

  // Обновляем groupByDay
  const groupByDay = (timetableDays: TimeTableDay[]) => {
    return timetableDays.reduce((acc: Record<string, TimeTableDay[]>, day) => {
      const fullDayName = convertDayName(day.day);
      if (!acc[fullDayName]) {
        acc[fullDayName] = [];
      }
      acc[fullDayName].push(day);
      return acc;
    }, {});
  };

  // Обновляем getTypeColor
  const getTypeColor = (name?: string) => {
    if (!name) return "bg-gray-100 text-gray-800";
    if (name.includes("Индивидуал")) return "bg-green-100 text-green-800";
    return "bg-blue-100 text-blue-800";
  };
  if (loading) return <div className="text-center py-8">Загрузка...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!allTimeTables.length)
    return <div className="text-center py-8">Данные не найдены</div>;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-sky-100 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-6 text-3xl font-bold text-sky-800 md:text-4xl lg:text-5xl">
                Расписание занятий
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-700">
                Выберите удобное время для занятий плаванием в нашем центре
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={allTimeTables[0]?.id.toString()}>
              <TabsList className="mb-6 flex flex-wrap">
                {allTimeTables.map((timeTable) => (
                  <TabsTrigger
                    key={timeTable.id}
                    value={timeTable.Id.toString()}
                    className="text-base mb-2"
                    onClick={() => setActiveTimeTableId(timeTable.id)}
                  >
                    {timeTable.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {allTimeTables.map((timeTable) => {
                const groupedDays = groupByDay(timeTable.timeTableDay);
                const daysOrder = [
                  "Понедельник",
                  "Вторник",
                  "Среда",
                  "Четверг",
                  "Пятница",
                  "Суббота",
                  "Воскресенье",
                ];

                return (
                  <TabsContent
                    key={timeTable.id}
                    value={timeTable.id.toString()}
                  >
                    <div className="mb-8">
                      <h2 className="mb-6 text-2xl font-bold text-sky-800 text-center">
                        Расписание: {timeTable.className}
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                        {daysOrder.map((dayName) => (
                          <div
                            key={dayName}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                          >
                            <div className="bg-sky-700 p-3 text-center font-bold text-white">
                              {dayName}
                            </div>

                            <div className="p-3">
                              {groupedDays[dayName]?.length ? (
                                groupedDays[dayName]
                                  .filter(
                                    (session) =>
                                      session.className.includes(
                                        "Индивидуал"
                                      ) ||
                                      session.className.includes("Персональное")
                                  )
                                  .sort((a, b) => a.time.localeCompare(b.time))
                                  .map((session) => (
                                    <div
                                      key={session.id}
                                      className="mb-3 p-3 bg-sky-50 rounded-md border border-sky-100"
                                    >
                                      <div className="flex justify-between items-start">
                                        <span className="font-bold text-sky-800">
                                          {session.time}
                                        </span>
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                          Индивидуальное
                                        </span>
                                      </div>
                                      <div className="mt-2">
                                        <p className="font-medium">
                                          {session.className}
                                        </p>
                                        <p className="text-sm text-gray-700 mt-1">
                                          Тренер: {session.trainerName}
                                        </p>
                                      </div>
                                    </div>
                                  ))
                              ) : (
                                <p className="text-gray-500 text-center py-4">
                                  Нет индивидуальных занятий
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>

            {/* Блок записи остается без изменений */}
            <div className="mt-8 rounded-lg bg-sky-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-sky-800">
                Записаться на занятие
              </h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="tel:+71234567890"
                  className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 font-medium text-white transition-colors hover:bg-sky-700"
                >
                  {/* Иконка телефона */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Позвонить
                </Link>
                <Link
                  to="/contacts"
                  className="inline-flex items-center rounded-md border border-sky-600 bg-white px-4 py-2 font-medium text-sky-600 transition-colors hover:bg-sky-50"
                >
                  {/* Иконка формы */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Заполнить форму
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default TimeTablePage;
