// import { FC, useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/reduxe";
// import {
//   bookSession,
//   fetchTimeTable,
//   fetchTimeTablePro,
// } from "../store/action/timeTableAction";
// import { selectTimeTableInfo } from "../store/slices/timeTableSlice";
// import { ApplicationResponse, TimeTableItem } from "../model/model";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Clock,
//   User,
//   X,
//   Check,
//   Phone,
//   Mail,
//   CreditCard,
//   Store,
//   ExternalLink,
// } from "lucide-react";
// import BubbleComponent from "@/components/ui/Buble";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Modal from "@/components/Modal";

// // Схема валидации
// const schema = yup.object().shape({
//   name: yup.string().required("Введите имя").min(2, "Имя слишком короткое"),
//   phone: yup
//     .string()
//     .required("Введите телефон")
//     .min(11, "Телефон слишком короткий"),
//   email: yup
//     .string()
//     .email("Введите корректный email")
//     .required("Введите email"),
//   paid: yup.boolean().default(false),
// });

// type FormValues = {
//   name: string;
//   phone: string;
//   email: string;
//   paid: boolean;
// };

// type ActiveTab = "pool" | "poolpro";


// const TimeTablePage: FC = () => {
//   const dispatch = useAppDispatch();
//   const { loading, error, items } = useAppSelector(selectTimeTableInfo);
//   const [selectedSession, setSelectedSession] = useState<TimeTableItem | null>(
//     null
//   );
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<ActiveTab>("pool");
//   const [applicationData, setApplicationData] =
//     useState<ApplicationResponse | null>(null);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [copySuccess, setCopySuccess] = useState(false);
//   //  Отправка формы
//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<FormValues>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: "",
//       phone: "",
//       email: "",
//       paid: false,
//     },
//   });

//   useEffect(() => {
//     const loadData = async () => {
//       setIsLoading(true);
//       await dispatch(fetchTimeTable());
//       await dispatch(fetchTimeTablePro());
//       setTimeout(() => setIsLoading(false), 1000);
//     };
//     loadData();
//   }, [dispatch]);

//   // Фильтрация по типу занятия
//   const filteredItems = items.filter((item) => item.type === activeTab);

//   const handleSessionClick = (session: TimeTableItem) => {
//     if (session.isFree) {
//       setSelectedSession(session);
//       setShowModal(true);
//     }
//   };

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//     setCopySuccess(true);
//     setTimeout(() => setCopySuccess(false), 2000);
//   };

//   const onSubmit = async (formData: FormValues) => {
//     if (!selectedSession) return;

//     try {
//       const result = await dispatch(
//         bookSession({
//           sessionId: selectedSession.id!,
//           name: formData.name,
//           phone: formData.phone,
//           email: formData.email,
//           day: selectedSession.day,
//           trainer: selectedSession.trainerName,
//           time: selectedSession.time,
//           paid: formData.paid,
//           type: activeTab,
//         })
//       ).unwrap();

//       // Обрабатываем ответ сервера
//       if (result.Success) {
//         setApplicationData(result);
//         setShowModal(false);
//         setShowPaymentModal(true);
//         reset();
//       } else {
//         alert(result.Message || "Произошла ошибка при бронировании");
//       }
//     } catch (error) {
//       console.error("Ошибка при бронировании:", error);
//       alert("Произошла ошибка при бронировании. Пожалуйста, попробуйте снова.");
//     }
//   };

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
//       } else {
//         sortedDays[day] = [];
//       }
//     });

//     return sortedDays;
//   };

//   if (isLoading || loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-50 to-white">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-600 mx-auto mb-4"></div>
//           <p className="text-sky-700 font-medium">Загружаем расписание...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error)
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-50 to-white">
//         <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-200 max-w-md mx-4">
//           <div className="text-red-500 text-5xl mb-4">⚠️</div>
//           <h2 className="text-xl font-bold text-red-700 mb-2">
//             Ошибка загрузки
//           </h2>
//           <p className="text-gray-700 mb-4">{error}</p>
//           <button
//             onClick={() => {
//               setIsLoading(true);
//               dispatch(fetchTimeTable());
//             }}
//             className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-6 rounded-full transition-colors"
//           >
//             Попробовать снова
//           </button>
//         </div>
//       </div>
//     );

//   if (!items.length)
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-50 to-white">
//         <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-sky-200 max-w-md mx-4">
//           <div className="text-sky-500 text-5xl mb-4">⏰</div>
//           <h2 className="text-xl font-bold text-sky-800 mb-2">
//             Расписание отсутствует
//           </h2>
//           <p className="text-gray-700 mb-4">
//             На этой неделе нет доступных занятий. Пожалуйста, проверьте позже.
//           </p>
//           <button
//             onClick={() => {
//               setIsLoading(true);
//               dispatch(fetchTimeTable());
//             }}
//             className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-6 rounded-full transition-colors"
//           >
//             Обновить
//           </button>
//         </div>
//       </div>
//     );

//   const groupedSessions = groupByDay(filteredItems);

//   return (
//     <section className="min-h-screen overflow-hidden bg-gradient-to-b from-[#301EEB] to-[#9F1EEB] py-12">
//       <BubbleComponent
//         count={80}
//         speed={1}
//         color="#ffff"
//         size={{ base: 15, sm: 25, md: 35 }}
//       />
//       {/* Верхний баннер */}
//       <div className="text-center mb-16">
//         <motion.h1
//           className="text-3xl md:text-5xl font-bold text-white mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           Расписание занятий
//         </motion.h1>
//         <motion.div
//           className="mx-auto mb-8 max-w-2xl text-blue-100 text-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//         >
//           Выберите удобное время для занятий плаванием.
//         </motion.div>

//         {/* Переключатель вкладок */}
//         <div className="flex justify-center mb-8">
//           <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 inline-flex">
//             {/* Кнопка для pool */}
//             <button
//               className={`px-6 py-2 rounded-full transition-colors ${
//                 activeTab === "pool"
//                   ? "bg-blue-600 text-white"
//                   : "text-blue-100 hover:bg-white/10"
//               }`}
//               onClick={() => setActiveTab("pool")}
//             >
//               Утенок
//             </button>

//             {/* Кнопка для poolpro */}
//             <button
//               className={`px-6 py-2 rounded-full transition-colors ${
//                 activeTab === "poolpro"
//                   ? "bg-yellow-400 text-blue-900"
//                   : "text-blue-100 hover:bg-white/10"
//               }`}
//               onClick={() => setActiveTab("poolpro")}
//             >
//               УтенокПродолжение
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Основное расписание */}
//       <section className="py-16 relative">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
//             {Object.entries(groupedSessions).map(([dayName, sessions]) => (
//               <motion.div
//                 key={dayName}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sky-100"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-4 text-center font-bold text-white text-lg">
//                   {dayName.charAt(0).toUpperCase() + dayName.slice(1)}
//                 </div>
//                 <div className="p-4">
//                   {sessions.length > 0 ? (
//                     sessions.map((session) => (
//                       <motion.div
//                         key={`${session.day}-${session.time}`}
//                         onClick={() => handleSessionClick(session)}
//                         className={`p-4 mb-3 rounded-xl border-2 transition-all ${
//                           session.isFree
//                             ? "border-sky-200 hover:bg-sky-50 hover:border-sky-300 cursor-pointer"
//                             : "border-gray-200 bg-gray-50 cursor-not-allowed"
//                         }`}
//                         whileHover={{ scale: 1.02 }}
//                       >
//                         <div className="flex justify-between items-start">
//                           <span className="font-bold text-lg text-sky-800">
//                             {session.time}
//                           </span>
//                           {!session.isFree ? (
//                             <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
//                               Занято
//                             </span>
//                           ) : (
//                             <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
//                               Свободно
//                             </span>
//                           )}
//                         </div>
//                         <div className="mt-3">
//                           <p className="font-semibold text-gray-800">
//                             {session.className}
//                           </p>
//                           <p className="text-sm text-gray-600 mt-2 flex items-center">
//                             <User className="h-4 w-4 mr-2 text-sky-600" />
//                             {session.trainerName}
//                           </p>
//                         </div>
//                       </motion.div>
//                     ))
//                   ) : (
//                     <div className="text-center py-6">
//                       <p className="text-gray-500">Нет занятий</p>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Модальное окно записи */}
//       <Modal
//         isOpen={showModal}
//         onClose={() => setShowModal(false)}
//         className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
//       >
//         {selectedSession && (
//           <>
//             {/* Заголовок */}
//             <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-xl font-bold text-white">
//                   Запись на занятие
//                 </h3>
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="text-white/80 hover:text-white"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
//             </div>

//             {/* Информация о занятии */}
//             <div className="p-5 border-b border-gray-100">
//               <div className="flex items-center mb-4">
//                 <div className="bg-sky-100 text-sky-800 rounded-lg p-3 mr-4">
//                   <Clock className="h-8 w-8" />
//                 </div>
//                 <div>
//                   <div className="font-bold text-lg">
//                     {selectedSession.time}
//                   </div>
//                   <div className="text-gray-600">
//                     {new Date(selectedSession.day).toLocaleDateString("ru-RU", {
//                       weekday: "long",
//                       day: "numeric",
//                       month: "long",
//                     })}
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center">
//                   <div className="text-gray-500 w-28">Тип занятия:</div>
//                   <div className="font-medium">{selectedSession.className}</div>
//                 </div>

//                 <div className="flex items-center">
//                   <div className="text-gray-500 w-28">Тренер:</div>
//                   <div className="font-medium">
//                     {selectedSession.trainerName}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Форма */}
//             <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
//               {/* Поле имени */}
//               <div>
//                 <div className="relative">
//                   <User className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
//                   <Controller
//                     name="name"
//                     control={control}
//                     render={({ field }) => (
//                       <input
//                         {...field}
//                         placeholder="Ваше имя"
//                         className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     )}
//                   />
//                 </div>
//                 {errors.name && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               {/* Поле телефона */}
//               <div>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
//                   <Controller
//                     name="phone"
//                     control={control}
//                     render={({ field }) => (
//                       <input
//                         {...field}
//                         type="tel"
//                         placeholder="+7 (___) ___-__-__"
//                         className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     )}
//                   />
//                 </div>
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.phone.message}
//                   </p>
//                 )}
//               </div>

//               {/* Поле email */}
//               <div>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-3.5 h-5 w-5 text-blue-500" />
//                   <Controller
//                     name="email"
//                     control={control}
//                     render={({ field }) => (
//                       <input
//                         {...field}
//                         type="email"
//                         placeholder="Email"
//                         className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     )}
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//                     {/* Кнопки */}
//               <div className="flex gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
//                 >
//                   Отмена
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Отправка..." : "Записаться"}
//                 </button>
//               </div>
//             </form>
//           </>
//         )}
//       </Modal>

//       {/* Модальное окно оплаты */}
//       <Modal
//         isOpen={showPaymentModal}
//         onClose={() => setShowPaymentModal(false)}
//         className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
//       >
//         <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-white">Выбор оплаты</h3>
//             <button
//               onClick={() => setShowPaymentModal(false)}
//               className="text-white/80 hover:text-white"
//             >
//               <X size={24} />
//             </button>
//           </div>
//         </div>

//         <div className="p-5">
//           <div className="text-center mb-6">
//             <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Check className="text-green-600" size={28} />
//             </div>
//             <h4 className="text-lg font-bold text-blue-900 mb-2">
//               Заявка #{applicationData?.ApplicationId} принята!
//             </h4>
//             <p className="text-gray-600 mb-4">
//               Выберите способ оплаты для подтверждения записи
//             </p>

//             {/* Номер заявки с кнопкой копирования */}
//             <div className="bg-blue-50 rounded-lg p-3 mb-4">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm font-medium text-blue-800">
//                   Номер заявки: {applicationData?.ApplicationId}
//                 </span>
//                 {/* <button
//                   onClick={() =>
//                     copyToClipboard(applicationData?.ApplicationId || "")
//                   }
//                   className="text-blue-600 hover:text-blue-800 ml-2"
//                   title="Скопировать номер заявки"
//                 >
//                   <Copy size={16} />
//                 </button> */}
//               </div>
//               {copySuccess && (
//                 <div className="text-green-600 text-xs mt-1">Скопировано!</div>
//               )}
//             </div>
//           </div>

//           <div className="space-y-4">
//             <button
//               onClick={() => {
//                 // Здесь будет логика для онлайн оплаты
//                 alert("Переход к онлайн оплате");
//               }}
//               className="w-full p-4 border-2 border-blue-200 rounded-xl flex items-center justify-between hover:bg-blue-50 transition-colors"
//             >
//               <div className="flex items-center">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                   <CreditCard className="text-blue-600" size={20} />
//                 </div>
//                 <div className="text-left">
//                   <div className="font-bold text-blue-900">Оплата онлайн</div>
//                   <div className="text-sm text-gray-600">Банковской картой</div>
//                 </div>
//               </div>
//               <ExternalLink className="text-blue-600" size={20} />
//             </button>

//             <button
//               onClick={() => {
//                 // Здесь будет логика для оплаты в центре
//                 setShowPaymentModal(false);
//                 alert("Вы выбрали оплату в центре. Ждем вас!");
//               }}
//               className="w-full p-4 border-2 border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors"
//             >
//               <div className="flex items-center">
//                 <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
//                   <Store className="text-gray-600" size={20} />
//                 </div>
//                 <div className="text-left">
//                   <div className="font-bold text-gray-900">Оплата в центре</div>
//                   <div className="text-sm text-gray-600">При посещении</div>
//                 </div>
//               </div>
//               <ArrowRight className="text-gray-600" size={20} />
//             </button>
//           </div>

//           <div className="mt-6 text-center text-sm text-gray-500">
//             <p>
//               Вы можете оплатить позже, но не позднее чем за 2 часа до занятия
//             </p>
//           </div>
//         </div>
//       </Modal>
//     </section>
//   );
// };

// export default TimeTablePage;
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxe";
import {
  bookSession,
  fetchTimeTable,
  fetchTimeTablePro,
} from "../store/action/timeTableAction";
import { selectTimeTableInfo, updateSessionStatus } from "../store/slices/timeTableSlice";
import { ApplicationResponse, TimeTableItem } from "../model/model";
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
} from "lucide-react";
import BubbleComponent from "@/components/ui/Buble";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "@/components/Modal";


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
});

type FormValues = {
  name: string;
  phone: string;
  email: string;
  paid: boolean;
};

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
  const [sessionsAtSameTime, setSessionsAtSameTime] = useState<TimeTableItem[]>(
    []
  );
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("pool");
  const [applicationData, setApplicationData] =
    useState<ApplicationResponse | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
  // const [copySuccess, setCopySuccess] = useState(false);

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

  // Фильтрация по типу занятия
  const filteredItems = items.filter((item) => item.type === activeTab);

  const handleSessionClick = (
    session: TimeTableItem,
    sameTimeSessions: TimeTableItem[] = []
  ) => {
    if (session.isFree) {
      setSelectedSession(session);

      // Если есть другие сессии в это же время, показываем их для выбора
      if (sameTimeSessions.length > 1) {
        setSessionsAtSameTime(sameTimeSessions);
      } else {
        setSessionsAtSameTime([session]);
      }

      setShowModal(true);
    }
  };

  // const copyToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text);
  //   setCopySuccess(true);
  //   setTimeout(() => setCopySuccess(false), 2000);
  // };

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
          trainer: selectedSession.trainerName,
          time: selectedSession.time,
          paid: formData.paid,
          type: activeTab,
        })
      ).unwrap();

      if (result.Success) {
        // Обновляем статус сессии в хранилище
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
        alert(result.Message || "Произошла ошибка при бронировании");
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
      // Здесь можно добавить логику для перенаправления на страницу оплаты
    } else {
      // Оплата в центре - просто показываем подтверждение
      alert("Вы выбрали оплату в центре. Ждем вас!");
    }
  };

  const groupByDay = (sessions: TimeTableItem[]) => {
    const daysMap: Record<string, GroupedSessions> = {};

    // Сначала группируем по дням, а внутри дня по времени
    sessions.forEach((session) => {
      const date = new Date(session.day);
      const dayName = date.toLocaleDateString("ru-RU", { weekday: "long" });

      if (!daysMap[dayName]) {
        daysMap[dayName] = {};
      }

      if (!daysMap[dayName][session.time]) {
        daysMap[dayName][session.time] = [];
      }

      daysMap[dayName][session.time].push(session);
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

    const sortedDays: Record<string, GroupedSessions> = {};
    daysOrder.forEach((day) => {
      if (daysMap[day]) {
        // Сортируем времена внутри дня
        const sortedTimes = Object.keys(daysMap[day]).sort();
        sortedDays[day] = {};

        sortedTimes.forEach((time) => {
          sortedDays[day][time] = daysMap[day][time];
        });
      } else {
        sortedDays[day] = {};
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
            {Object.entries(groupedSessions).map(([dayName, timeGroups]) => (
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
                  {Object.keys(timeGroups).length > 0 ? (
                    Object.entries(timeGroups).map(([time, sessions]) => (
                      <motion.div
                        key={`${dayName}-${time}`}
                        onClick={() =>
                          handleSessionClick(sessions[0], sessions)
                        }
                        className={`p-4 mb-3 rounded-xl border-2 transition-all ${
                          sessions.some((s) => s.isFree)
                            ? "border-sky-200 hover:bg-sky-50 hover:border-sky-300 cursor-pointer"
                            : "border-gray-200 bg-gray-50 cursor-not-allowed"
                        }`}
                        whileHover={{
                          scale: sessions.some((s) => s.isFree) ? 1.02 : 1,
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-bold text-lg text-sky-800">
                            {time}
                          </span>
                          {!sessions.some((s) => s.isFree) ? (
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
                            {sessions[0].className}
                          </p>
                          <div className="text-sm text-gray-600 mt-2 flex items-center">
                            <Users className="h-4 w-4 mr-2 text-sky-600" />
                            {sessions.length > 1 ? (
                              <span>{sessions.length} тренера</span>
                            ) : (
                              <span>{sessions[0].trainerName}</span>
                            )}
                          </div>
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
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        {selectedSession && (
          <>
            {/* Заголовок */}
            <div className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">
                  Запись на занятие
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Информация о занятии */}
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

                {/* Выбор тренера, если на это время несколько сессий */}
                {sessionsAtSameTime.length > 1 && (
                  <div className="mt-4">
                    <label className="block text-gray-500 mb-2">
                      Выберите тренера:
                    </label>
                    <div className="space-y-2">
                      {sessionsAtSameTime.map((session) => (
                        <div
                          key={session.id}
                          className={`p-3 rounded-lg border cursor-pointer ${
                            selectedSession.id === session.id
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedSession(session)}
                        >
                          <div className="flex items-center">
                            <div
                              className={`h-4 w-4 rounded-full border mr-3 ${
                                selectedSession.id === session.id
                                  ? "border-blue-500 bg-blue-500"
                                  : "border-gray-300"
                              }`}
                            ></div>
                            <div>
                              <div className="font-medium">
                                {session.trainerName}
                              </div>
                              {!session.isFree && (
                                <div className="text-red-500 text-sm">
                                  Занято
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {sessionsAtSameTime.length === 1 && (
                  <div className="flex items-center">
                    <div className="text-gray-500 w-28">Тренер:</div>
                    <div className="font-medium">
                      {selectedSession.trainerName}
                    </div>
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
                        // mask="+7 (999) 999-99-99"
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
                  disabled={isSubmitting || !selectedSession.isFree}
                  className="flex-1 py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? "Отправка..." : "Записаться"}
                </button>
              </div>
            </form>
          </>
        )}
      </Modal>

      {/* Модальное окно выбора способа оплаты */}
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
              Заявка #{applicationData?.ApplicationId} принята!
            </h4>
            <p className="text-gray-600 mb-4">
              Выберите способ оплаты для подтверждения записи
            </p>

            {/* Номер заявки с кнопкой копирования */}
            <div className="bg-blue-50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-800">
                  Номер заявки: {applicationData?.ApplicationId}
                </span>
                {/* <button
                  onClick={() =>
                    copyToClipboard(applicationData?.ApplicationId || "")
                  }
                  className="text-blue-600 hover:text-blue-800 ml-2"
                  title="Скопировать номер заявки"
                >
                  <Copy size={16} />
                </button> */}
              </div>
              {/* {copySuccess && (
                <div className="text-green-600 text-xs mt-1">Скопировано!</div>
              )} */}
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

      {/* Модальное окно оплаты (после выбора онлайн оплаты) */}
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
              Оплата заявки #{applicationData?.ApplicationId}
            </h4>
            <p className="text-gray-600 mb-4">
              Вы будете перенаправлены на безопасную страницу оплаты
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Сумма к оплате:</span>
              <span className="font-bold">1 500 руб.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Номер заявки:</span>
              <span className="font-medium">
                {applicationData?.ApplicationId}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              // Здесь будет редирект на страницу оплаты
              alert("Редирект на страницу оплаты");
            }}
            className="w-full py-3 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white font-medium rounded-lg hover:opacity-90"
          >
            Перейти к оплате
          </button>

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>Оплата защищена по стандарту PCI DSS</p>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default TimeTablePage;