// import ImageGalleryBanner from "../components/ui/ImageGalleryBanner";

// import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";

// import photo2 from "@/static/DSC_7757.jpg";
// import photo3 from "@/static/DSC_7832.jpg";
// import photo4 from "@/static/DSC_7840.jpg";
// import photo5 from "@/static/solinai_pehera_3-500x300.jpg";
// import photo6 from "@/static/solinai_pehera_8-854x750.jpg";
// import photo7 from "@/static/solinai_pehera_6-768x512.jpg";

// import Video from "@/static/saltcave_prewei.mp4";

// import {
//   TreesIcon as AlertCircle,
//   Clock,
//   Star,
//   Shield,
//   Leaf,
//   Users,
//   Check,
//   Calendar,
//   Phone,
//   User,
//   Plus,
//   X,
// } from "lucide-react";
// import { LiquidGlass } from "@/components/ui/LiquidGlass";
// import BubbleComponent from "@/components/ui/Buble";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import Modal from "@/components/Modal";
// import { bookSaltCaveSession } from "@/store/action/timeTableAction";
// import { BookingSaltCaveData } from "@/model/model";
// import { useAppDispatch } from "@/hooks/reduxe";

// export default function SaltCavePage() {
//   const validateMediaSource = (url: string | undefined) => {
//     if (!url) return "";
//     try {
//       new URL(url);
//       return url;
//     } catch {
//       return "";
//     }
//   };
//   // Анимация текста
//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   const times = Array.from({ length: 11 }, (_, i) => {
//     const hour = 10 + i;
//     return `${hour}:00`;
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     sessionType: "",
//     date: "",
//     time: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const dispatch = useAppDispatch();


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Формируем данные для отправки
//     const bookingData: BookingSaltCaveData = {
//       ...formData,
//       type: "saltacave",
//     };

//     try {
//       // Отправляем данные через Redux
//       await dispatch(bookSaltCaveSession(bookingData)).unwrap();

//       setIsSubmitted(true);
//       setTimeout(() => {
//         setIsModalOpen(false);
//         setIsSubmitted(false);
//         setFormData({
//           name: "",
//           phone: "",
//           sessionType: "",
//           date: "",
//           time: "",
//         });
//       }, 2000);
//     } catch (error) {
//       console.error("Ошибка бронирования:", error);
//       alert("Произошла ошибка при бронировании. Пожалуйста, попробуйте снова.");
//     }
//   };

//   const handleBookClick = (planTitle = "") => {
//     setFormData((prev) => ({ ...prev, sessionType: planTitle }));
//     setIsModalOpen(true);
//   };

//   const images = [photo2, photo3, photo4, photo5, photo6, photo7];

//   const safeImageSrc = validateMediaSource(import.meta.env.VITE_DEFAULT_IMG);
//   // const safeVideoSrc = validateMediaSource(import.meta.env.VITE_VIDEO_SALT_SRC);

//   return (
//     <section className="min-h-screen overflow-hidden bg-gradient-to-b from-[#301EEB] to-[#9F1EEB] py-12 relative">
//       <BubbleComponent
//         count={80}
//         speed={1}
//         color="#ffffff"
//         size={{ base: 15, sm: 25, md: 35 }}
//       />

//       {/* Модальное окно бронирования */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-2xl font-bold text-blue-900">
//               Бронирование сеанса
//             </h3>
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           {isSubmitted ? (
//             <div className="text-center py-8">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Check className="text-green-600" size={32} />
//               </div>
//               <h4 className="text-xl font-bold text-green-700 mb-2">
//                 Заявка принята!
//               </h4>
//               <p className="text-gray-600">
//                 Наш администратор свяжется с вами в течение 15 минут для
//                 подтверждения
//               </p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-4">
//                 <Input
//                   placeholder="Ваше имя"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />

//                 <Input
//                   placeholder="Ваш телефон"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   type="tel"
//                   required
//                 />

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-700 mb-2">Дата</label>
//                     <div className="relative">
//                       <input
//                         type="date"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         min={new Date().toISOString().split("T")[0]} // Минимальная дата - сегодня
//                         required
//                       />
//                       <div className="absolute left-3 top-3 text-blue-500">
//                         <Calendar size={20} />
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 mb-2">Время</label>
//                     <div className="relative">
//                       <select
//                         name="time"
//                         value={formData.time}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             time: e.target.value,
//                           }))
//                         }
//                         className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
//                         required
//                       >
//                         <option value="">Выберите время</option>
//                         {times.map((time) => (
//                           <option key={time} value={time}>
//                             {time}
//                           </option>
//                         ))}
//                       </select>
//                       <div className="absolute left-3 top-3 text-blue-500">
//                         <Clock size={20} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">Тип сеанса</label>
//                   <div className="relative">
//                     <select
//                       name="sessionType"
//                       value={formData.sessionType}
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           sessionType: e.target.value,
//                         }))
//                       }
//                       className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
//                     >
//                       <option value="">Выберите тип сеанса</option>
//                       {pricingPlans.map((plan) => (
//                         <option key={plan.title} value={plan.title}>
//                           {plan.title}
//                         </option>
//                       ))}
//                     </select>
//                     <div className="absolute left-3 top-3 text-blue-500">
//                       <Plus size={20} />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 flex justify-end space-x-3">
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={() => setIsModalOpen(false)}
//                   className="border-gray-300 text-gray-700 hover:bg-gray-50"
//                 >
//                   Отмена
//                 </Button>
//                 <Button
//                   type="submit"
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
//                 >
//                   Забронировать
//                 </Button>
//               </div>
//             </form>
//           )}
//         </div>
//       </Modal>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Заголовок с анимацией */}
//         <motion.div
//           className="text-center max-w-3xl mx-auto mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             visible: { transition: { staggerChildren: 0.1 } },
//           }}
//         >
//           <motion.h1
//             className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white"
//             variants={textVariants}
//           >
//             <span className="bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-transparent bg-clip-text">
//               Соляная пещера
//             </span>
//           </motion.h1>

//           <motion.p
//             className="text-xl text-blue-100 max-w-2xl mx-auto"
//             variants={textVariants}
//           >
//             Оздоровительные сеансы для укрепления иммунитета и глубокой
//             релаксации
//           </motion.p>

//           <motion.div variants={textVariants} className="mt-8">
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-blue-900 font-bold rounded-full px-8 py-6 text-lg shadow-lg"
//               onClick={() => handleBookClick()}
//             >
//               <Plus className="mr-2" />
//               Забронировать сеанс
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Видео секция с улучшенным дизайном */}
//         <LiquidGlass
//           glassColor="#ffffff"
//           opacity={0.55}
//           blurStrength={12}
//           borderRadius={32}
//           className="mb-16"
//         >
//           <div className="rounded-2xl p-6 md:p-8">
//             <div className="flex flex-col md:flex-row gap-8 items-center">
//               <div className="w-full md:w-1/2 rounded-xl overflow-hidden aspect-video shadow-xl">
//                 <video
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   poster={safeImageSrc}
//                 >
//                   <source src={Video} type="video/mp4" />
//                   Ваш браузер не поддерживает видео тег.
//                 </video>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <div className="inline-flex items-center px-4 py-1 mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
//                   <Leaf className="mr-2" size={16} />
//                   Оздоровление и релаксация
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
//                   Уникальная соляная пещера в нашем центре
//                 </h2>
//                 <p className="text-gray-600 mb-6">
//                   Специально оборудованное помещение, где стены, пол и потолок
//                   покрыты натуральной солью. Во время сеанса в воздух
//                   распыляются микрочастицы соли, создавая целебный микроклимат,
//                   который благотворно влияет на дыхательную систему и укрепляет
//                   иммунитет.
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                   {benefits.map((benefit, index) => (
//                     <motion.div
//                       key={index}
//                       className="flex items-start bg-blue-50 rounded-lg p-4"
//                       whileHover={{ y: -5 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
//                         {benefit.icon}
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-blue-800">
//                           {benefit.title}
//                         </h3>
//                         <p className="text-sm text-gray-600 mt-1">
//                           {benefit.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <Button
//                   className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-blue-900 font-bold rounded-full px-8 py-6"
//                   onClick={() => handleBookClick()}
//                 >
//                   Забронировать сеанс
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </LiquidGlass>

//         {/* Секция с этапами посещения */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//           <LiquidGlass
//             glassColor="#ffffff"
//             opacity={0.55}
//             blurStrength={12}
//             borderRadius={32}
//             className="p-6 md:p-8"
//           >
//             <h2 className="mb-6 text-2xl font-bold text-sky-800">
//               Как проходят сеансы
//             </h2>

//             <div className="space-y-6">
//               {sessionSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-lg font-bold">
//                     {index + 1}
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-gray-900 text-lg">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-700 mt-2">{step.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-8 rounded-lg bg-yellow-50 p-4 text-yellow-800 border border-yellow-200">
//               <div className="flex items-start">
//                 <AlertCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-yellow-600" />
//                 <p>
//                   Перед посещением соляной пещеры рекомендуется
//                   проконсультироваться с врачом, особенно при наличии
//                   хронических заболеваний.
//                 </p>
//               </div>
//             </div>
//           </LiquidGlass>

//           <div className="space-y-6">
//             <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-xl">
//               <img
//                 src={photo2}
//                 alt="Сеанс в соляной пещере"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
//                 <h3 className="text-white text-xl font-bold">
//                   Комфортная атмосфера для отдыха
//                 </h3>
//               </div>
//             </div>

//             <LiquidGlass
//               glassColor="#ffffff"
//               opacity={0.55}
//               blurStrength={12}
//               borderRadius={32}
//               className="p-6"
//             >
//               <h3 className="mb-4 text-xl font-bold text-sky-800 flex items-center">
//                 <Clock className="mr-2" />
//                 Расписание сеансов
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between py-2 border-b border-gray-100">
//                   <span className="font-medium text-gray-700">Пн-Вс:</span>
//                   <span className="text-gray-700 font-medium">
//                     10:00 - 20:00
//                   </span>
//                 </div>
//                 <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
//                   Сеансы проводятся каждый час. Для вашего комфорта рекомендуем
//                   предварительную запись.
//                 </div>
//               </div>
//             </LiquidGlass>
//           </div>
//         </div>

//         {/* Секция с тарифами */}
//         <section className="mb-16">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <div className="inline-flex items-center px-4 py-1 mb-4 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
//               <Star className="mr-2" size={16} />
//               Наши тарифы
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//               Цены на посещение соляной пещеры
//             </h2>
//             <p className="text-gray-600">
//               Выберите оптимальный вариант для вашего оздоровления
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {pricingPlans.map((plan, index) => (
//               <motion.div
//                 key={index}
//                 className={`bg-white rounded-2xl p-6 border overflow-hidden relative ${
//                   plan.popular
//                     ? "border-yellow-400 shadow-xl ring-2 ring-yellow-400/20"
//                     : "border-gray-200 shadow-lg"
//                 } hover:shadow-2xl transition-all`}
//                 whileHover={{ y: -10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {plan.popular && (
//                   <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
//                     Популярный
//                   </div>
//                 )}

//                 <h3 className="text-xl font-bold text-blue-900 mb-3">
//                   {plan.title}
//                 </h3>
//                 <div className="flex items-baseline mb-4">
//                   <span className="text-3xl font-bold text-blue-900">
//                     {plan.price}
//                   </span>
//                   <span className="text-gray-500 ml-1">₽</span>
//                   {plan.perSession && (
//                     <span className="text-sm text-gray-500 ml-2">/ сеанс</span>
//                   )}
//                 </div>
//                 <p className="text-gray-600 mb-6 min-h-[60px]">
//                   {plan.description}
//                 </p>

//                 <ul className="space-y-3 mb-6">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
//                         <Check size={12} className="text-blue-900" />
//                       </div>
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <Button
//                   className={`w-full rounded-full py-5 font-medium ${
//                     plan.popular
//                       ? "bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-blue-900"
//                       : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
//                   }`}
//                   onClick={() => handleBookClick(plan.title)}
//                 >
//                   Выбрать тариф
//                 </Button>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Секция FAQ */}
//         <LiquidGlass
//           glassColor="#ffffff"
//           opacity={0.55}
//           blurStrength={12}
//           borderRadius={32}
//           className="p-6 md:p-8 mb-16"
//         >
//           <div className="text-center mb-10">
//             <h2 className="mb-4 text-3xl font-bold text-sky-800">
//               Часто задаваемые вопросы
//             </h2>
//             <p className="mx-auto max-w-2xl text-gray-600">
//               Всё, что вам нужно знать о посещении соляной пещеры
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {faq.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
//                   <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">
//                     ?
//                   </span>
//                   {item.question}
//                 </h3>
//                 <p className="text-gray-700 pl-9">{item.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </LiquidGlass>

//         {/* Призыв к действию */}
//         <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-20 right-20 w-80 h-80 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
//             <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-400 rounded-full opacity-10 blur-3xl" />
//           </div>

//           <div className="relative z-10 max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Готовы к оздоровлению?
//             </h2>
//             <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
//               Запишитесь на сеанс прямо сейчас и получите 10% скидку на первое
//               посещение
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-blue-900 font-bold rounded-full px-8 py-6 text-lg"
//                 onClick={() => handleBookClick()}
//               >
//                 Забронировать сеанс
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg"
//               >
//                 Задать вопрос
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Галерея */}
//         <section className="mb-16">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold text-blue-900 mb-4">
//               Галерея соляной пещеры
//             </h2>
//             <p className="text-gray-600">
//               Погрузитесь в атмосферу нашего соляного пространства
//             </p>
//           </div>

//           <div className="rounded-3xl overflow-hidden shadow-2xl">
//             <ImageGalleryBanner
//               images={images}
//               interval={3000}
//               height="h-[500px] md:h-[600px]"
//             />
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// }

// const sessionSteps = [
//   {
//     title: "Подготовка",
//     description:
//       "Перед сеансом мы предложим вам одноразовые бахилы для защиты соляного покрытия. Специальная одежда не требуется, но рекомендуем надеть удобную одежду, не стесняющую движений.",
//   },
//   {
//     title: "Сеанс",
//     description:
//       "Вы расположитесь в удобном кресле-шезлонге. Для детей предусмотрены игрушки и стол для рисования песком. Сеанс сопровождается релаксирующей музыкой и мягким светом.",
//   },
//   {
//     title: "Продолжительность",
//     description:
//       "Стандартная продолжительность сеанса — 40 минут. Для детей до 3 лет время может быть сокращено до 20-30 минут по вашему желанию.",
//   },
//   {
//     title: "Курс лечения",
//     description:
//       "Для достижения максимального эффекта рекомендуем курс из 10-15 сеансов с периодичностью 2-3 раза в неделю. Поддерживающий курс — 1-2 раза в неделю.",
//   },
// ];

// const benefits = [
//   {
//     title: "Укрепление иммунитета",
//     description:
//       "Усиливает защитные функции организма и повышает сопротивляемость инфекциям",
//     icon: <Shield className="h-5 w-5 text-blue-700" />,
//   },
//   {
//     title: "Дыхательная система",
//     description:
//       "Улучшает состояние при бронхитах, астме и аллергических реакциях",
//     icon: <Leaf className="h-5 w-5 text-blue-700" />,
//   },
//   {
//     title: "Снятие стресса",
//     description: "Способствует глубокому расслаблению и снижению тревожности",
//     icon: <Star className="h-5 w-5 text-blue-700" />,
//   },
//   {
//     title: "Улучшение сна",
//     description: "Нормализует сон и улучшает его качество",
//     icon: <Clock className="h-5 w-5 text-blue-700" />,
//   },
// ];

// const pricingPlans = [
//   {
//     title: "Разовое посещение",
//     price: "580",
//     perSession: true,
//     description:
//       "Идеально для тех, кто хочет попробовать соляную пещеру впервые",
//     features: [
//       "Длительность сеанса 40 минут",
//       "Комфортная температура",
//       "Релаксирующая музыка",
//       "Удобные кресла для отдыха",
//     ],
//     popular: false,
//   },
//   {
//     title: "Абонемент на 10 посещений",
//     price: "4620",
//     perSession: false,
//     description:
//       "Оптимальный вариант для регулярного посещения с хорошей скидкой",
//     features: [
//       "Длительность сеанса 40 минут",
//       "Срок действия 3 месяца",
//       "Возможность заморозки",
//     ],
//     popular: true,
//   },
//   {
//     title: "Абонемент на 15 посещений",
//     price: "6240",
//     perSession: false,
//     description:
//       "Оптимальный вариант для регулярного посещения с хорошей скидкой",
//     features: [
//       "Длительность сеанса 40 минут",
//       "До 8 человек",
//       "Специальные кресла ",
//       "Детская релаксирующая музыка",
//       "Игрушки для детей",
//     ],
//     popular: false,
//   },
//   {
//     title: "Абонемент на 20 посещений",
//     price: "7500",
//     perSession: false,
//     description:
//       "Оптимальный вариант для регулярного посещения с хорошей скидкой",
//     features: [
//       "Длительность сеанса 40 минут",
//       "До 8 человек",
//       "Специальные кресла для детей",
//       "Детская релаксирующая музыка",
//       "Игрушки для детей",
//     ],
//     popular: false,
//   },
//   {
//     title: "Индивидуальное посещение",
//     price: "2000",
//     perSession: true,
//     description:
//       "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
//     features: [
//       "Длительность сеанса 40 минут",
//       "До 4 человек",
//       "Специальные кресла для детей",
//       "Детская релаксирующая музыка",
//       "Игрушки для детей",
//     ],
//     popular: true,
//   },
//   {
//     title: "Абонемент на 10 посещений ",
//     price: "16000",
//     perSession: false,
//     description:
//       "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
//     features: [
//       "Длительность сеанса 40 минут",
//       "До 4 человек",
//       "Специальные кресла для детей",
//       "Детская релаксирующая музыка",
//       "Игрушки для детей",
//     ],
//     popular: false,
//   },
//   {
//     title: "Абонемент на 15 посещений ",
//     price: "22000",
//     perSession: false,
//     description:
//       "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
//     features: [
//       "Длительность сеанса 40 минут",
//       "До 4 человек",
//       "Специальные кресла для детей",
//       "Детская релаксирующая музыка",
//       "Игрушки для детей",
//     ],
//     popular: false,
//   },
//   {
//     title: "Абонемент на 20 посещений",
//     price: "27000",
//     perSession: false,
//     description:
//       "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
//     features: [
//       "Длительность сеанса 40 минут",
//       "До 4 человек",
//       "Специальные кресла для детей",
//       "Детская релаксирующая музыка",
//       "Игрушки для детей",
//     ],
//     popular: false,
//   },
// ];

// const faq = [
//   {
//     question: "Что такое соляная пещера?",
//     answer:
//       "Соляная пещера — это специально оборудованное помещение, стены, пол и потолок которого покрыты солью. Во время сеанса в воздух распыляются мельчайшие частицы соли, создавая особый микроклимат, благотворно влияющий на здоровье.",
//   },
//   {
//     question: "Какие показания для посещения соляной пещеры?",
//     answer:
//       "Посещение соляной пещеры рекомендуется при заболеваниях дыхательных путей, аллергических реакциях, кожных заболеваниях, для укрепления иммунитета, снятия стресса и улучшения общего самочувствия.",
//   },
//   {
//     question: "Есть ли противопоказания для посещения соляной пещеры?",
//     answer:
//       "Да, противопоказаниями являются: острые инфекционные заболевания, обострение хронических заболеваний, туберкулез, онкологические заболевания, гипертония 3 степени, индивидуальная непереносимость. Перед посещением рекомендуется проконсультироваться с врачом.",
//   },
//   {
//     question: "Сколько длится один сеанс?",
//     answer:
//       "Стандартная продолжительность сеанса составляет 40 минут. Этого времени достаточно для получения терапевтического эффекта без перенасыщения организма солью.",
//   },
//   {
//     question: "Можно ли посещать соляную пещеру с детьми?",
//     answer:
//       "Да, дети могут посещать соляную пещеру с 3-х лет в сопровождении взрослых. Для детей предусмотрены специальные кресла и игрушки, чтобы сделать процедуру комфортной и интересной.",
//   },
// ];
import ImageGalleryBanner from "../components/ui/ImageGalleryBanner";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LiquidGlass } from "@/components/ui/LiquidGlass";
import BubbleComponent from "@/components/ui/Buble";
import { useState, useCallback, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Modal from "@/components/Modal";
import { bookSaltCaveSession } from "@/store/action/timeTableAction";
import { BookingSaltCaveData } from "@/model/model";
import { useAppDispatch } from "@/hooks/reduxe";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

// Импорт изображений
import photo2 from "@/static/DSC_7757.jpg";
import photo3 from "@/static/DSC_7832.jpg";
import photo4 from "@/static/DSC_7840.jpg";
import photo5 from "@/static/solinai_pehera_3-500x300.jpg";
import photo6 from "@/static/solinai_pehera_8-854x750.jpg";
import photo7 from "@/static/solinai_pehera_6-768x512.jpg";
import Video from "@/static/saltcave_prewei.mp4";

// Иконки
import {
  TreesIcon as AlertCircle,
  Clock,
  Star,
  Shield,
  Leaf,
  Check,
  Calendar,
  User,
  Plus,
  X,
} from "lucide-react";

// Схема валидации
const schema = yup.object().shape({
  name: yup.string().required("Введите имя").min(2).max(50),
  phone: yup.string().required("Введите телефон").min(11),
  sessionType: yup.string().required("Выберите тип сеанса"),
  date: yup.string().required("Выберите дату"),
  time: yup.string().required("Выберите время"),
});

// Тип формы, совместимый с react-hook-form
type FormValues = {
  name: string;
  phone: string;
  sessionType: string;
  date: string;
  time: string;
};

type FormData = yup.InferType<typeof schema> & { type: "saltacave" };

export default function SaltCavePage() {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

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

  // Сброс формы при закрытии модального окна
  useEffect(() => {
    if (!isModalOpen) {
      reset();
      setSelectedPlan("");
    } else if (selectedPlan) {
      setValue("sessionType", selectedPlan);
    }
  }, [isModalOpen, reset, selectedPlan, setValue]);

  // Отправка формы
const onSubmit: SubmitHandler<FormValues> = async (formData) => {
  try {
    // Преобразуем в BookingSaltCaveData перед отправкой
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

// Для поля ввода с иконкой создайте кастомный компонент
const InputWithIcon = ({ icon, error, ...props }: any) => (
  <div className="relative">
    <div className="absolute left-3 top-3 text-blue-500">{icon}</div>
    <input
      {...props}
      className={`w-full px-4 py-3 pl-10 border ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

  // Получение текущей даты для ограничения выбора
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-b from-[#301EEB] to-[#9F1EEB] py-12 relative">
      <BubbleComponent
        count={80}
        speed={1}
        color="#ffffff"
        size={{ base: 15, sm: 25, md: 35 }}
      />

      {/* Модальное окно бронирования */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-blue-900">
              Бронирование сеанса
            </h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Закрыть"
            >
              <X size={24} />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-green-700 mb-2">
                Заявка принята!
              </h4>
              <p className="text-gray-600">
                Наш администратор свяжется с вами в течение 15 минут для
                подтверждения
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                {/* Поле имени */}
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <InputWithIcon
                      {...field}
                      placeholder="Ваше имя"
                      icon={<User className="h-5 w-5" />}
                      error={errors.name?.message}
                    />
                  )}
                />

                {/* Поле телефона */}
                <div>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        country={"ru"}
                        value={field.value}
                        onChange={(phone) => field.onChange(phone)}
                        inputClass="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        containerClass="relative"
                        buttonClass="absolute left-3 top-3 text-blue-500 bg-transparent border-none"
                        inputProps={{
                          required: true,
                        }}
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Дата и время */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Дата */}
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => {
                      const value =
                        field.value instanceof Date
                          ? format(field.value, "yyyy-MM-dd")
                          : field.value;

                      return (
                        <div className="relative">
                          <input
                            type="date"
                            value={value}
                            onChange={(e) => {
                              const date = e.target.value
                                ? new Date(e.target.value)
                                : new Date();
                              field.onChange(date);
                            }}
                            min={format(new Date(), "yyyy-MM-dd")}
                            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <div className="absolute left-3 top-3 text-blue-500">
                            <Calendar size={20} />
                          </div>
                        </div>
                      );
                    }}
                  />

                  {/* Время */}
                  <div>
                    <label className="block text-gray-700 mb-2">Время</label>
                    <div className="relative">
                      <Controller
                        name="time"
                        control={control}
                        render={({ field }) => (
                          <select
                            {...field}
                            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                          >
                            <option value="">Выберите время</option>
                            {times.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                      <div className="absolute left-3 top-3 text-blue-500">
                        <Clock size={20} />
                      </div>
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
                  <label className="block text-gray-700 mb-2">Тип сеанса</label>
                  <div className="relative">
                    <Controller
                      name="sessionType"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        >
                          <option value="">Выберите тип сеанса</option>
                          {pricingPlans.map((plan) => (
                            <option key={plan.title} value={plan.title}>
                              {plan.title}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                    <div className="absolute left-3 top-3 text-blue-500">
                      <Plus size={20} />
                    </div>
                  </div>
                  {errors.sessionType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.sessionType.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Отмена
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Забронировать"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Modal>

      {/* Основной контент */}
      <div className="container mx-auto px-4 relative z-10">
        <HeaderSection onBookClick={handleBookClick} />
        <VideoSection onBookClick={handleBookClick} />
        <SessionProcessSection />
        <PricingSection onBookClick={handleBookClick} />
        <FAQSection />
        <CallToActionSection onBookClick={handleBookClick} />
        <GallerySection />
      </div>
    </section>
  );
}

// Компоненты секций
const HeaderSection = ({ onBookClick }: { onBookClick: () => void }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="text-center max-w-3xl mx-auto mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white"
        variants={textVariants}
      >
        <span className="bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-transparent bg-clip-text">
          Соляная пещера
        </span>
      </motion.h1>

      <motion.p
        className="text-xl text-blue-100 max-w-2xl mx-auto"
        variants={textVariants}
      >
        Оздоровительные сеансы для укрепления иммунитета и глубокой релаксации
      </motion.p>

      <motion.div variants={textVariants} className="mt-8">
        <Button
          size="lg"
          className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-blue-900 font-bold rounded-full px-8 py-6 text-lg shadow-lg"
          onClick={onBookClick}
        >
          <Plus className="mr-2" />
          Забронировать сеанс
        </Button>
      </motion.div>
    </motion.div>
  );
};

const VideoSection = ({ onBookClick }: { onBookClick: () => void }) => (
  <LiquidGlass
    glassColor="#ffffff"
    opacity={0.55}
    blurStrength={12}
    borderRadius={32}
    className="mb-16"
  >
    <div className="rounded-2xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden aspect-video shadow-xl">
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
        </div>
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center px-4 py-1 mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <Leaf className="mr-2" size={16} />
            Оздоровление и релаксация
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Уникальная соляная пещера в нашем центре
          </h2>
          <p className="text-gray-600 mb-6">
            Специально оборудованное помещение, где стены, пол и потолок покрыты
            натуральной солью. Во время сеанса в воздух распыляются микрочастицы
            соли, создавая целебный микроклимат, который благотворно влияет на
            дыхательную систему и укрепляет иммунитет.
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
                  <h3 className="font-bold text-blue-800">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button
            className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-blue-900 font-bold rounded-full px-8 py-6"
            onClick={onBookClick}
          >
            Забронировать сеанс
          </Button>
        </div>
      </div>
    </div>
  </LiquidGlass>
);

const SessionProcessSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
    <LiquidGlass
      glassColor="#ffffff"
      opacity={0.55}
      blurStrength={12}
      borderRadius={32}
      className="p-6 md:p-8"
    >
      <h2 className="mb-6 text-2xl font-bold text-sky-800">
        Как проходят сеансы
      </h2>

      <div className="space-y-6">
        {sessionSteps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-lg font-bold">
              {index + 1}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-yellow-50 p-4 text-yellow-800 border border-yellow-200">
        <div className="flex items-start">
          <AlertCircle className="mr-3 mt-1 h-5 w-5 shrink-0 text-yellow-600" />
          <p>
            Перед посещением соляной пещеры рекомендуется проконсультироваться с
            врачом, особенно при наличии хронических заболеваний.
          </p>
        </div>
      </div>
    </LiquidGlass>

    <div className="space-y-6">
      <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-xl">
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
      </div>

      <LiquidGlass
        glassColor="#ffffff"
        opacity={0.55}
        blurStrength={12}
        borderRadius={32}
        className="p-6"
      >
        <h3 className="mb-4 text-xl font-bold text-sky-800 flex items-center">
          <Clock className="mr-2" />
          Расписание сеансов
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="font-medium text-gray-700">Пн-Вс:</span>
            <span className="text-gray-700 font-medium">10:00 - 20:00</span>
          </div>
          <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
            Сеансы проводятся каждый час. Для вашего комфорта рекомендуем
            предварительную запись.
          </div>
        </div>
      </LiquidGlass>
    </div>
  </div>
);

const PricingSection = ({
  onBookClick,
}: {
  onBookClick: (planTitle: string) => void;
}) => (
  <section className="mb-16">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="inline-flex items-center px-4 py-1 mb-4 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
        <Star className="mr-2" size={16} />
        Наши тарифы
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Цены на посещение соляной пещеры
      </h2>
      <p className="text-gray-600">
        Выберите оптимальный вариант для вашего оздоровления
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={index}
          className={`bg-white rounded-2xl p-6 border overflow-hidden relative ${
            plan.popular
              ? "border-yellow-400 shadow-xl ring-2 ring-yellow-400/20"
              : "border-gray-200 shadow-lg"
          } hover:shadow-2xl transition-all`}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {plan.popular && (
            <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
              Популярный
            </div>
          )}

          <h3 className="text-xl font-bold text-blue-900 mb-3">{plan.title}</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold text-blue-900">
              {plan.price}
            </span>
            <span className="text-gray-500 ml-1">₽</span>
            {plan.perSession && (
              <span className="text-sm text-gray-500 ml-2">/ сеанс</span>
            )}
          </div>
          <p className="text-gray-600 mb-6 min-h-[60px]">{plan.description}</p>

          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <Check size={12} className="text-blue-900" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className={`w-full rounded-full py-5 font-medium ${
              plan.popular
                ? "bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-blue-900"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            }`}
            onClick={() => onBookClick(plan.title)}
          >
            Выбрать тариф
          </Button>
        </motion.div>
      ))}
    </div>
  </section>
);

const FAQSection = () => (
  <LiquidGlass
    glassColor="#ffffff"
    opacity={0.55}
    blurStrength={12}
    borderRadius={32}
    className="p-6 md:p-8 mb-16"
  >
    <div className="text-center mb-10">
      <h2 className="mb-4 text-3xl font-bold text-sky-800">
        Часто задаваемые вопросы
      </h2>
      <p className="mx-auto max-w-2xl text-gray-600">
        Всё, что вам нужно знать о посещении соляной пещеры
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {faq.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
            <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">
              ?
            </span>
            {item.question}
          </h3>
          <p className="text-gray-700 pl-9">{item.answer}</p>
        </motion.div>
      ))}
    </div>
  </LiquidGlass>
);

const CallToActionSection = ({ onBookClick }: { onBookClick: () => void }) => (
  <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 right-20 w-80 h-80 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-400 rounded-full opacity-10 blur-3xl" />
    </div>

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Готовы к оздоровлению?
      </h2>
      <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
        Запишитесь на сеанс прямо сейчас и получите 10% скидку на первое
        посещение
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-blue-900 font-bold rounded-full px-8 py-6 text-lg"
          onClick={onBookClick}
        >
          Забронировать сеанс
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg"
        >
          Задать вопрос
        </Button>
      </div>
    </div>
  </div>
);

const GallerySection = () => {
  const images = [photo2, photo3, photo4, photo5, photo6, photo7];

  return (
    <section className="mb-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Галерея соляной пещеры
        </h2>
        <p className="text-gray-600">
          Погрузитесь в атмосферу нашего соляного пространства
        </p>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <ImageGalleryBanner
          images={images}
          interval={3000}
          height="h-[500px] md:h-[600px]"
        />
      </div>
    </section>
  );
};

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
      "Комфортная температура",
      "Релаксирующая музыка",
      "Удобные кресла для отдыха",
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
      "Срок действия 3 месяца",
      "Возможность заморозки",
    ],
    popular: true,
  },
  {
    title: "Абонемент на 15 посещений",
    price: "6240",
    perSession: false,
    description:
      "Оптимальный вариант для регулярного посещения с хорошей скидкой",
    features: [
      "Длительность сеанса 40 минут",
      "До 8 человек",
      "Специальные кресла ",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
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
  {
    title: "Индивидуальное посещение",
    price: "2000",
    perSession: true,
    description:
      "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
    features: [
      "Длительность сеанса 40 минут",
      "До 4 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: true,
  },
  {
    title: "Абонемент на 10 посещений ",
    price: "16000",
    perSession: false,
    description:
      "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
    features: [
      "Длительность сеанса 40 минут",
      "До 4 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
  },
  {
    title: "Абонемент на 15 посещений ",
    price: "22000",
    perSession: false,
    description:
      "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
    features: [
      "Длительность сеанса 40 минут",
      "До 4 человек",
      "Специальные кресла для детей",
      "Детская релаксирующая музыка",
      "Игрушки для детей",
    ],
    popular: false,
  },
  {
    title: "Абонемент на 20 посещений",
    price: "27000",
    perSession: false,
    description:
      "до 4 человек включительно + после каждого посещения бесплатные кислородные коктейли",
    features: [
      "Длительность сеанса 40 минут",
      "До 4 человек",
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
];
