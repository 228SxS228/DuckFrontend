// // import { FC, useState } from "react";

// // import { Button } from "./ui/button";
// // import { Link } from "react-router-dom";
// // import { RouteNames } from "@/router";
// // import {
// //   ArrowDownToLine,
// //   MessageSquare,
// //   Users,
// //   User,
// // } from "lucide-react";
// // import DuckComponent from "./DuckComponent";
// // import { motion, Variants } from "framer-motion";
// // import Modal from "./Modal";
// // import { Input } from "./ui/input";
// // import { LiquidGlass } from "./ui/LiquidGlass";

// // const ProgramsComponent: FC = () => {
// //   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
// //   const handleCloseModal = () => setIsModalOpen(false);
// //   const handleOpenClick = () => setIsModalOpen(true);

// //   const cardVariants: Variants = {
// //     hidden: { opacity: 0, y: 30, scale: 0.95 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       scale: 1,
// //       transition: {
// //         duration: 0.6,
// //         ease: "backOut",
// //       },
// //     },
// //     hover: {
// //       y: -10,
// //       boxShadow: "0 15px 30px rgba(159, 30, 235, 0.2)",
// //       transition: { duration: 0.3 },
// //     },
// //   };
// //   const textVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.5 },
// //     },
// //   };

// //   return (
// //     <section className="py-12 md:py-20 overflow-hidden relative flex flex-col bg-gradient-to-b from-[#301EEB] to-[#9F1EEB]">
// //       <div className="container px-4 mx-auto">
// //         <motion.div
// //           className="text-center max-w-3xl mx-auto mb-16"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={{
// //             visible: { transition: { staggerChildren: 0.1 } },
// //           }}
// //         >
// //           <motion.div
// //             className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full font-bold shadow-lg"
// //             variants={textVariants}
// //           >
// //             <Users className="inline mr-2" size={18} />
// //             Детские басейны
// //           </motion.div>

// //           <motion.h2
// //             className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white"
// //             variants={textVariants}
// //           >
// //             Бассейны "Утенок" и "Утенок Продолжение"
// //           </motion.h2>

// //           <motion.p
// //             className="text-xl text-blue-100 max-w-2xl mx-auto"
// //             variants={textVariants}
// //           >
// //             Два современных, но по особенному разных бассейна в одном месте
// //             (индивидуальны для каждого малыша и его родителя)
// //           </motion.p>
// //         </motion.div>
// //         <div className="grid md:grid-cols-2 gap-6 md:gap-12">
// //           {/* Утенок */}
// //           <motion.div
// //             className="text-center p-8 bg-white rounded-2xl border border-blue-200 shadow-lg"
// //             variants={cardVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             whileHover="hover"
// //             viewport={{ once: true, margin: "-100px" }}
// //           >
// //             <LiquidGlass  
// //               glassColor="#ffffff"
// //               opacity={0.7}
// //               hoverOpacity={0.9}
// //               blurStrength={10}
// //               borderRadius={24}
// //               className="h-full rounded-3xl p-6 transition-all"
// //             >
// //               <div className="flex items-center mb-4 md:mb-6">
// //                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#EBA31E] flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
// //                   <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-white" />
// //                 </div>
// //                 <h3 className="text-xl md:text-2xl font-bold text-[#301EEB]">
// //                   Басейн "Утенок"
// //                 </h3>
// //               </div>

// //               <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
// //                 Бассейн «Утенок» - обширное пространство с комфортабельными
// //                 раздевалками, душевыми, сауной, игровой, соляной пещерой, кафе,
// //                 зонами ожидания.
// //               </p>

// //               {/* Анимированный утенок */}
// //               <motion.div
// //                 className="absolute top-2 right-4"
// //                 animate={{
// //                   x: [0, 10, -10, 0],
// //                   y: [0, -5, 5, 0],
// //                   rotate: [0, 10, -10, 0],
// //                 }}
// //                 transition={{
// //                   duration: 4,
// //                   repeat: Number.POSITIVE_INFINITY,
// //                   ease: "easeInOut",
// //                 }}
// //               >
// //                 <DuckComponent color="#9F1EEB" size="responsive" />
// //               </motion.div>

// //               <div className="space-y-6 mb-6">
// //                 {/* Групповые занятия */}
// //                 <div className="border border-[#EBA31E] rounded-xl p-4">
// //                   <div className="flex items-center mb-3">
// //                     <Users className="h-5 w-5 mr-2 text-[#9F1EEB]" />
// //                     <h4 className="font-bold text-[#301EEB] text-lg">
// //                       Групповые занятия
// //                     </h4>
// //                   </div>

// //                   <div className="rounded-lg p-4">
// //                     <ul className="space-y-3">
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">Разовое посещение</span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           1 500 ₽
// //                         </span>
// //                       </li>
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">
// //                           Абонемент (4 занятия)
// //                         </span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           5 000 ₽
// //                         </span>
// //                       </li>
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">
// //                           Абонемент (8 занятий)
// //                         </span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           9 000 ₽
// //                         </span>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>

// //                 {/* Индивидуальные занятия */}
// //                 <div className="border border-[#9F1EEB] rounded-xl p-4">
// //                   <div className="flex items-center mb-3">
// //                     <User className="h-5 w-5 mr-2 text-[#9F1EEB]" />
// //                     <h4 className="font-bold text-[#301EEB] text-lg">
// //                       Индивидуальные занятия
// //                     </h4>
// //                   </div>

// //                   <div className="bg-gray-100 bg-opacity-10 rounded-lg p-4">
// //                     <ul className="space-y-3">
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">Разовое занятие</span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           2 500 ₽
// //                         </span>
// //                       </li>
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">
// //                           Абонемент (4 занятия)
// //                         </span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           9 000 ₽
// //                         </span>
// //                       </li>
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">
// //                           Абонемент (8 занятий)
// //                         </span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           16 000 ₽
// //                         </span>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               <Button
// //                 onClick={handleOpenClick}
// //                 className="w-full mt-8 bg-[#301EEB] hover:bg-[#1a12a8] text-white rounded-full text-base cursor-pointer"
// //               >
// //                 Записаться
// //               </Button>
// //             </LiquidGlass>
// //           </motion.div>

// //           {/* Утенок Продолжение */}
// //           <motion.div
// //             className="text-center p-8 bg-white rounded-2xl border border-blue-200 shadow-lg"
// //             variants={cardVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             whileHover="hover"
// //             viewport={{ once: true, margin: "-100px" }}
// //           >
// //             <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 -mt-8 -mr-8 bg-[#9F1EEB] rounded-full opacity-20"></div>
// //             <div className="relative">
// //               <div className="flex items-center mb-4 md:mb-6">
// //                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#9F1EEB] flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
// //                   <ArrowDownToLine className="h-6 w-6 md:h-8 md:w-8 text-white" />
// //                 </div>
// //                 <h3 className="text-xl md:text-2xl font-bold text-[#301EEB]">
// //                   Утенок «ПРОдолжение»
// //                 </h3>
// //               </div>

// //               <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
// //                 Бассейн Утенок «ПРОдолжение» - уютное пространство с новейшим
// //                 дизайнерским ремонтом, двухуровневой игровой, комфортабельной
// //                 зоной ожидания, финскими и турецкими парными.
// //               </p>

// //               {/* Анимированный утенок */}
// //               <motion.div
// //                 className="absolute top-2 right-4"
// //                 animate={{
// //                   y: [0, -10, 0],
// //                   rotate: [0, 5, -5, 0],
// //                 }}
// //                 transition={{
// //                   duration: 3,
// //                   repeat: Number.POSITIVE_INFINITY,
// //                   ease: "easeInOut",
// //                 }}
// //               >
// //                 <DuckComponent color="#EBA31E" size="responsive" />
// //               </motion.div>

// //               <div className="space-y-6 mb-6">
// //                 {/* Групповые занятия */}
// //                 <div className="border border-[#EBA31E] rounded-xl p-4">
// //                   <div className="flex items-center mb-3">
// //                     <Users className="h-5 w-5 mr-2 text-[#9F1EEB]" />
// //                     <h4 className="font-bold text-[#301EEB] text-lg">
// //                       Групповые занятия
// //                     </h4>
// //                   </div>

// //                   <div className="bg-gray-100 bg-opacity-10 rounded-lg p-4">
// //                     <ul className="space-y-3">
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">Разовое посещение</span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           1 800 ₽
// //                         </span>
// //                       </li>
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">
// //                           Абонемент (4 занятия)
// //                         </span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           6 500 ₽
// //                         </span>
// //                       </li>
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">
// //                           Абонемент (8 занятий)
// //                         </span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           12 000 ₽
// //                         </span>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>

// //                 {/* Индивидуальные занятия */}
// //                 <div className="border border-[#9F1EEB] rounded-xl p-4">
// //                   <div className="flex items-center mb-3">
// //                     <User className="h-5 w-5 mr-2 text-[#9F1EEB]" />
// //                     <h4 className="font-bold text-[#301EEB] text-lg">
// //                       Индивидуальные занятия
// //                     </h4>
// //                   </div>

// //                   <div className="bg-gray-100 bg-opacity-10 rounded-lg p-4">
// //                     <ul className="space-y-3">
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">Разовое занятие</span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           3 000 ₽
// //                         </span>
// //                       </li>
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">
// //                           Абонемент (4 занятия)
// //                         </span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           11 000 ₽
// //                         </span>
// //                       </li>
// //                       <li className="flex justify-between items-center">
// //                         <span className="text-gray-700">
// //                           Абонемент (8 занятий)
// //                         </span>
// //                         <span className="font-bold text-[#301EEB]">
// //                           20 000 ₽
// //                         </span>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>
// //               <Button
// //                 onClick={handleOpenClick}
// //                 className="w-full mt-8 bg-[#301EEB] hover:bg-[#1a12a8] text-white rounded-full text-base cursor-pointer"
// //               >
// //                 Записаться
// //               </Button>
// //             </div>
// //           </motion.div>
// //         </div>

// //         <div className="mt-8 md:mt-12 text-center">
// //           <p className="text-[#EACBBE] mb-6 max-w-2xl mx-auto text-base">
// //             Все занятия проводятся опытными тренерами. В групповых занятиях - до
// //             6 человек, что позволяет уделить внимание каждому ребенку.
// //             Температура воды в детском бассейне поддерживается на уровне
// //             30-32°C.
// //           </p>
// //           <Link to={RouteNames.SCHEDULE}>
// //             <Button
// //               variant="outline"
// //               className="text-[#301EEB] border-[#9F1EEB] hover:bg-[#EBA31E] hover:text-white rounded-full px-8 py-6 text-lg bg-white cursor-pointer"
// //             >
// //               Посмотреть расписание занятий
// //             </Button>
// //           </Link>
// //         </div>
// //       </div>
// //       <Modal
// //         isOpen={isModalOpen}
// //         onClose={handleCloseModal}
// //         className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
// //       >
// //         <div className="p-6 md:p-8">
// //           <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">
// //             Оставьте контактные данные, мы перезвоним Вам и запишем на занятие
// //           </h2>
// //           <div className="space-y-6 mb-6">
// //             <Input
// //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// //               type="text"
// //               placeholder="Ваше имя"
// //             />
// //             <Input
// //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
// //               type="tel"
// //               placeholder="Ваш телефон"
// //             />
// //           </div>
// //           <Button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform duration-300">
// //             Оставить заявку
// //           </Button>
// //         </div>
// //         <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100">
// //           Нажимая кнопку, вы соглашаетесь с{" "}
// //           <a href="#" className="text-blue-600 hover:underline">
// //             политикой конфиденциальности
// //           </a>
// //         </div>
// //       </Modal>
// //     </section>
// //   );
// // };

// // export default ProgramsComponent;


// import { FC, useState } from "react";
// import { Button } from "./ui/button";
// import { Link } from "react-router-dom";
// import { RouteNames } from "@/router";
// import { ArrowDownToLine, MessageSquare, Users, User } from "lucide-react";
// import DuckComponent from "./DuckComponent";
// import { motion, Variants } from "framer-motion";
// import Modal from "./Modal";
// import { Input } from "./ui/input";
// import { LiquidGlass } from "./ui/LiquidGlass";

// const ProgramsComponent: FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [activePool, setActivePool] = useState<"ut" | "utpro">("ut");
//   const handleCloseModal = () => setIsModalOpen(false);
//   const handleOpenClick = (pool: "ut" | "utpro") => {
//     setActivePool(pool);
//     setIsModalOpen(true);
//   };

//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "backOut",
//       },
//     },
//     hover: {
//       y: -10,
//       boxShadow: "0 15px 30px rgba(159, 30, 235, 0.2)",
//       transition: { duration: 0.3 },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   const bubbleVariants: Variants = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="py-12 md:py-20 overflow-hidden relative flex flex-col bg-gradient-to-b from-[#301EEB] to-[#9F1EEB]">
//       {/* Декоративные элементы - пузыри */}
//       <motion.div
//         className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[#EBA31E] opacity-20 blur-xl"
//         variants={bubbleVariants}
//         initial="hidden"
//         whileInView="visible"
//       />
//       <motion.div
//         className="absolute bottom-20 right-5 w-24 h-24 rounded-full bg-[#9F1EEB] opacity-20 blur-xl"
//         variants={bubbleVariants}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ delay: 0.2 }}
//       />
//       <motion.div
//         className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-[#EACBBE] opacity-15 blur-xl"
//         variants={bubbleVariants}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ delay: 0.4 }}
//       />

//       <div className="container px-4 mx-auto z-10">
//         <motion.div
//           className="text-center max-w-3xl mx-auto mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             visible: { transition: { staggerChildren: 0.1 } },
//           }}
//         >
//           <motion.div
//             className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full font-bold shadow-lg"
//             variants={textVariants}
//           >
//             <Users className="inline mr-2" size={18} />
//             Детские басейны
//           </motion.div>

//           <motion.h2
//             className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white"
//             variants={textVariants}
//           >
//             <span className="text-[#EBA31E]">У</span>тенок &
//             <span className="text-[#9F1EEB]"> У</span>тенок ПРО
//           </motion.h2>

//           <motion.p
//             className="text-xl text-[#EACBBE] max-w-2xl mx-auto"
//             variants={textVariants}
//           >
//             Два уникальных бассейна для разных потребностей вашего малыша
//           </motion.p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//           {/* Утенок */}
//           <motion.div
//             className="relative"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             whileHover="hover"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <div className="absolute -top-4 -left-4 w-24 h-24  rounded-full opacity-20 blur-2xl z-0" />
//             <LiquidGlass
//               glassColor="#ffffff"
//               opacity={0.2}
//               hoverOpacity={0.2}
//               blurStrength={6}
//               borderRadius={24}
//               className="h-full container mx-auto px-4 relative z-10 rounded-3xl p-6 transition-all backdrop-blur-xl"
//             >
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#EBA31E] to-[#d6940c] flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//                   <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-white">
//                   Басейн "Утенок"
//                 </h3>
//               </div>

//               <p className="text-[#EACBBE] text-sm md:text-base mb-4 md:mb-6">
//                 Просторная зона с игровой комнатой, кафе и соляной пещерой
//               </p>

//               {/* Анимированный утенок */}
//               <motion.div
//                 className="absolute top-2 right-4"
//                 animate={{
//                   x: [0, 10, -10, 0],
//                   y: [0, -5, 5, 0],
//                   rotate: [0, 10, -10, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <DuckComponent color="#9F1EEB" size="responsive" />
//               </motion.div>

//               <div className="space-y-6 mb-6">
//                 {/* Групповые занятия */}
//                 <div className="border border-[#EBA31E] rounded-xl p-4 backdrop-blur-sm">
//                   <div className="flex items-center mb-3">
//                     <Users className="h-5 w-5 mr-2 text-[#EBA31E]" />
//                     <h4 className="font-bold text-white text-lg">
//                       Групповые занятия
//                     </h4>
//                   </div>

//                   <div className="rounded-lg p-4">
//                     <ul className="space-y-3">
//                       <li className="flex justify-between items-center py-1 border-b border-[#8968A4]/30">
//                         <span className="text-[#EACBBE]">
//                           Разовое посещение
//                         </span>
//                         <span className="font-bold text-[#EBA31E]">
//                           1 500 ₽
//                         </span>
//                       </li>
//                       <li className="flex justify-between items-center py-1 border-b border-[#8968A4]/30">
//                         <span className="text-[#EACBBE]">
//                           Абонемент (4 занятия)
//                         </span>
//                         <span className="font-bold text-[#EBA31E]">
//                           5 000 ₽
//                         </span>
//                       </li>
//                       <li className="flex justify-between items-center py-1">
//                         <span className="text-[#EACBBE]">
//                           Абонемент (8 занятий)
//                         </span>
//                         <span className="font-bold text-[#EBA31E]">
//                           9 000 ₽
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Индивидуальные занятия */}
//                 <div className="border border-[#9F1EEB] rounded-xl p-4 backdrop-blur-sm">
//                   <div className="flex items-center mb-3">
//                     <User className="h-5 w-5 mr-2 text-[#9F1EEB]" />
//                     <h4 className="font-bold text-white text-lg">
//                       Индивидуальные занятия
//                     </h4>
//                   </div>

//                   <div className="rounded-lg p-4">
//                     <ul className="space-y-3">
//                       <li className="flex justify-between items-center py-1 border-b border-[#8968A4]/30">
//                         <span className="text-[#EACBBE]">Разовое занятие</span>
//                         <span className="font-bold text-[#9F1EEB]">
//                           2 500 ₽
//                         </span>
//                       </li>
//                       <li className="flex justify-between items-center py-1 border-b border-[#8968A4]/30">
//                         <span className="text-[#EACBBE]">
//                           Абонемент (4 занятия)
//                         </span>
//                         <span className="font-bold text-[#9F1EEB]">
//                           9 000 ₽
//                         </span>
//                       </li>
//                       <li className="flex justify-between items-center py-1">
//                         <span className="text-[#EACBBE]">
//                           Абонемент (8 занятий)
//                         </span>
//                         <span className="font-bold text-[#9F1EEB]">
//                           16 000 ₽
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <Button
//                 onClick={() => handleOpenClick("ut")}
//                 className="w-full mt-4 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#d6940c] hover:to-[#EBA31E] text-white rounded-full text-base cursor-pointer shadow-lg hover:shadow-xl transition-all"
//               >
//                 Записаться
//               </Button>
//             </LiquidGlass>
//           </motion.div>

//           {/* Утенок ПРО */}
//           <motion.div
//             className="relative"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             whileHover="hover"
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9F1EEB] rounded-full opacity-20 blur-2xl z-0" />
//             <LiquidGlass
//               glassColor="rgba(255, 255, 255, 0.1)"
//               opacity={0.8}
//               hoverOpacity={0.9}
//               blurStrength={20}
//               borderRadius={24}
//               className="h-full rounded-3xl p-6 transition-all backdrop-blur-xl"
//             >
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#9F1EEB] to-[#7a17b8] flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//                   <ArrowDownToLine className="h-6 w-6 md:h-8 md:w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-white">
//                   Утенок «ПРО»
//                 </h3>
//               </div>

//               <p className="text-[#EACBBE] text-sm md:text-base mb-4 md:mb-6">
//                 Премиум пространство с парными и индивидуальным подходом
//               </p>

//               {/* Анимированный утенок */}
//               <motion.div
//                 className="absolute top-2 right-4"
//                 animate={{
//                   y: [0, -10, 0],
//                   rotate: [0, 5, -5, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <DuckComponent color="#EBA31E" size="responsive" />
//               </motion.div>

//               <div className="space-y-6 mb-6">
//                 {/* Групповые занятия */}
//                 <div className="border border-[#EBA31E] rounded-xl p-4 backdrop-blur-sm">
//                   <div className="flex items-center mb-3">
//                     <Users className="h-5 w-5 mr-2 text-[#EBA31E]" />
//                     <h4 className="font-bold text-white text-lg">
//                       Групповые занятия
//                     </h4>
//                   </div>

//                   <div className="rounded-lg p-4">
//                     <ul className="space-y-3">
//                       <li className="flex justify-between items-center py-1 border-b border-[#8968A4]/30">
//                         <span className="text-[#EACBBE]">
//                           Разовое посещение
//                         </span>
//                         <span className="font-bold text-[#EBA31E]">
//                           1 800 ₽
//                         </span>
//                       </li>
//                       <li className="flex justify-between items-center py-1 border-b border-[#8968A4]/30">
//                         <span className="text-[#EACBBE]">
//                           Абонемент (4 занятия)
//                         </span>
//                         <span className="font-bold text-[#EBA31E]">
//                           6 500 ₽
//                         </span>
//                       </li>
//                       <li className="flex justify-between items-center py-1">
//                         <span className="text-[#EACBBE]">
//                           Абонемент (8 занятий)
//                         </span>
//                         <span className="font-bold text-[#EBA31E]">
//                           12 000 ₽
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Индивидуальные занятия */}
//                 <div className="border border-[#9F1EEB] rounded-xl p-4 backdrop-blur-sm">
//                   <div className="flex items-center mb-3">
//                     <User className="h-5 w-5 mr-2 text-[#9F1EEB]" />
//                     <h4 className="font-bold text-white text-lg">
//                       Индивидуальные занятия
//                     </h4>
//                   </div>

//                   <div className="rounded-lg p-4">
//                     <ul className="space-y-3">
//                       <li className="flex justify-between items-center py-1 border-b border-[#8968A4]/30">
//                         <span className="text-[#EACBBE]">Разовое занятие</span>
//                         <span className="font-bold text-[#9F1EEB]">
//                           3 000 ₽
//                         </span>
//                       </li>
//                       <li className="flex justify-between items-center py-1 border-b border-[#8968A4]/30">
//                         <span className="text-[#EACBBE]">
//                           Абонемент (4 занятия)
//                         </span>
//                         <span className="font-bold text-[#9F1EEB]">
//                           11 000 ₽
//                         </span>
//                       </li>
//                       <li className="flex justify-between items-center py-1">
//                         <span className="text-[#EACBBE]">
//                           Абонемент (8 занятий)
//                         </span>
//                         <span className="font-bold text-[#9F1EEB]">
//                           20 000 ₽
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <Button
//                 onClick={() => handleOpenClick("utpro")}
//                 className="w-full mt-4 bg-gradient-to-r from-[#9F1EEB] to-[#7a17b8] hover:from-[#7a17b8] hover:to-[#9F1EEB] text-white rounded-full text-base cursor-pointer shadow-lg hover:shadow-xl transition-all"
//               >
//                 Записаться
//               </Button>
//             </LiquidGlass>
//           </motion.div>
//         </div>

//         <motion.div
//           className="mt-12 md:mt-16 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-[#EACBBE] mb-8 max-w-2xl mx-auto text-lg">
//             <span className="text-[#EBA31E] font-bold">
//               Индивидуальный подход
//             </span>{" "}
//             к каждому малышу. Группы до 6 человек. Температура воды 30-32°C.
//           </p>
//           <Link to={RouteNames.SCHEDULE}>
//             <Button className="bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white hover:from-[#9F1EEB] hover:to-[#301EEB] rounded-full px-8 py-6 text-lg cursor-pointer shadow-lg hover:shadow-xl transition-all">
//               Посмотреть расписание занятий
//             </Button>
//           </Link>
//         </motion.div>
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
//       >
//         <div className="p-6 md:p-8 bg-gradient-to-br from-[#301EEB] to-[#9F1EEB] text-white rounded-2xl">
//           <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
//             Запись в {activePool === "ut" ? "Утенок" : "Утенок ПРО"}
//           </h2>
//           <div className="space-y-6 mb-6">
//             <Input
//               className="w-full px-4 py-3 bg-[#8968A4]/20 border border-[#EACBBE]/30 text-white placeholder-[#EACBBE]/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EBA31E] transition-all"
//               type="text"
//               placeholder="Ваше имя"
//             />
//             <Input
//               className="w-full px-4 py-3 bg-[#8968A4]/20 border border-[#EACBBE]/30 text-white placeholder-[#EACBBE]/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EBA31E] transition-all"
//               type="tel"
//               placeholder="Ваш телефон"
//             />
//             <div className="grid grid-cols-2 gap-4">
//               <Button className="py-3 bg-[#EBA31E] hover:bg-[#d6940c] text-black font-medium rounded-lg shadow transition-all">
//                 Групповое
//               </Button>
//               <Button className="py-3 bg-[#9F1EEB] hover:bg-[#7a17b8] text-white font-medium rounded-lg shadow transition-all">
//                 Индивидуальное
//               </Button>
//             </div>
//           </div>
//           <Button className="w-full py-3 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black font-medium rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform duration-300">
//             Оставить заявку
//           </Button>
//         </div>
//         <div className="bg-[#301EEB] px-6 py-4 text-center text-sm text-[#EACBBE] border-t border-[#8968A4] rounded-b-2xl">
//           Нажимая кнопку, вы соглашаетесь с{" "}
//           <a href="#" className="text-[#EBA31E] hover:underline">
//             политикой конфиденциальности
//           </a>
//         </div>
//       </Modal>
//     </section>
//   );
// };

// export default ProgramsComponent;

import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import {
  ArrowDownToLine,
  MessageSquare,
  Users,
  User,
  Waves,
} from "lucide-react";
import DuckComponent from "./DuckComponent";
import { motion, Variants } from "framer-motion";
import Modal from "./Modal";
import { Input } from "./ui/input";
import { LiquidGlass } from "./ui/LiquidGlass";

const ProgramsComponent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activePool, setActivePool] = useState<"ut" | "utpro">("ut");
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenClick = (pool: "ut" | "utpro") => {
    setActivePool(pool);
    setIsModalOpen(true);
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const waveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 md:py-20 overflow-hidden relative flex flex-col bg-gradient-to-b from-[#1a1466] to-[#301EEB]">
      {/* Фоновые волны */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute bottom-0 w-[200%]"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 1200 200" className="w-full h-auto">
            <path
              fill="url(#wave-gradient)"
              fillOpacity="0.1"
              d="M0,150 C150,100 350,200 600,150 C850,100 1050,200 1200,150 L1200,200 L0,200 Z"
            ></path>
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-0 w-[200%]"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 1200 200" className="w-full h-auto">
            <path
              fill="url(#wave-gradient)"
              fillOpacity="0.15"
              d="M0,120 C150,170 350,100 600,120 C850,140 1050,80 1200,120 L1200,200 L0,200 Z"
            ></path>
          </svg>
        </motion.div>

        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EBA31E" />
            <stop offset="50%" stopColor="#9F1EEB" />
            <stop offset="100%" stopColor="#301EEB" />
          </linearGradient>
        </defs>
      </div>

      {/* Плавающие утята */}
      <motion.div
        className="absolute top-20 left-10 z-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <DuckComponent color="#EBA31E" size="responsive" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 z-10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <DuckComponent color="#9F1EEB" size="responsive" />
      </motion.div>

      {/* Декоративные пузыри */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-[0.03]"
          style={{
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100 - Math.random() * 200],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.03, 0.1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="container px-4 mx-auto z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 mb-6 bg-[#EACBBE] text-[#301EEB] rounded-full font-bold shadow-lg border-2 border-[#EBA31E]"
            variants={textVariants}
          >
            <Waves className="mr-2 text-[#9F1EEB]" size={20} />
            <span>Детские бассейны</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white"
            variants={textVariants}
          >
            <span className="text-[#EBA31E] font-serif">У</span>тенок &
            <span className="text-[#9F1EEB] font-serif"> У</span>тенок ПРО
          </motion.h2>

          <motion.p
            className="text-xl text-[#EACBBE] max-w-2xl mx-auto font-light"
            variants={textVariants}
          >
            Два уникальных мира плавания для вашего малыша
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Утенок */}
          <motion.div
            className="relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#EBA31E] to-[#301EEB] rounded-3xl opacity-40 blur-lg"></div>
            <LiquidGlass
              glassColor="rgba(15, 15, 35, 0.7)"
              opacity={1}
              hoverOpacity={1}
              blurStrength={10}
              borderRadius={24}
              borderWidth={2}
              borderColor="#EBA31E"
              className="h-full rounded-3xl p-6 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EBA31E] to-[#d6940c] flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Басейн "Утенок"
                  </h3>
                  <div className="w-20 h-1 bg-[#EBA31E] mt-2 rounded-full"></div>
                </div>
              </div>

              <p className="text-[#EACBBE] text-base mb-6 px-4">
                Просторный мир с игровой комнатой, кафе и соляной пещерой
              </p>

              {/* Анимированный утенок в воде */}
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-[#301EEB] opacity-20"></div>
              <motion.div
                className="absolute bottom-6 left-6"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <DuckComponent color="#9F1EEB" size="responsive" />
              </motion.div>

              <div className="space-y-6 mb-6">
                {/* Групповые занятия */}
                <div className="bg-[#1a1466] rounded-xl p-5 border border-[#EBA31E]/30">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 mr-3 text-[#EBA31E]" />
                    <h4 className="font-bold text-white text-xl">
                      Групповые занятия
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                      <span className="text-[#EACBBE]">Разовое посещение</span>
                      <span className="font-bold text-[#EBA31E] text-lg">
                        1 500 ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                      <span className="text-[#EACBBE]">
                        Абонемент (4 занятия)
                      </span>
                      <span className="font-bold text-[#EBA31E] text-lg">
                        5 000 ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#EACBBE]">
                        Абонемент (8 занятий)
                      </span>
                      <span className="font-bold text-[#EBA31E] text-lg">
                        9 000 ₽
                      </span>
                    </div>
                  </div>
                </div>

                {/* Индивидуальные занятия */}
                <div className="bg-[#1a1466] rounded-xl p-5 border border-[#9F1EEB]/30">
                  <div className="flex items-center mb-4">
                    <User className="h-6 w-6 mr-3 text-[#9F1EEB]" />
                    <h4 className="font-bold text-white text-xl">
                      Индивидуальные занятия
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                      <span className="text-[#EACBBE]">Разовое занятие</span>
                      <span className="font-bold text-[#9F1EEB] text-lg">
                        2 500 ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                      <span className="text-[#EACBBE]">
                        Абонемент (4 занятия)
                      </span>
                      <span className="font-bold text-[#9F1EEB] text-lg">
                        9 000 ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#EACBBE]">
                        Абонемент (8 занятий)
                      </span>
                      <span className="font-bold text-[#9F1EEB] text-lg">
                        16 000 ₽
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => handleOpenClick("ut")}
                className="w-full mt-4 py-5 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#d6940c] hover:to-[#EBA31E] text-white text-lg font-bold rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all group"
              >
                <span className="group-hover:scale-105 transition-transform">
                  Записаться в Утенок
                </span>
              </Button>
            </LiquidGlass>
          </motion.div>

          {/* Утенок ПРО */}
          <motion.div
            className="relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#9F1EEB] to-[#301EEB] rounded-3xl opacity-40 blur-lg"></div>
            <LiquidGlass
              glassColor="rgba(15, 15, 35, 0.7)"
              opacity={1}
              hoverOpacity={1}
              blurStrength={10}
              borderRadius={24}
              borderWidth={2}
              borderColor="#9F1EEB"
              className="h-full rounded-3xl p-6 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#9F1EEB] to-[#7a17b8] flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <ArrowDownToLine className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Утенок «ПРО»
                  </h3>
                  <div className="w-20 h-1 bg-[#9F1EEB] mt-2 rounded-full"></div>
                </div>
              </div>

              <p className="text-[#EACBBE] text-base mb-6 px-4">
                Премиум пространство с парными и индивидуальным подходом
              </p>

              {/* Анимированный утенок в воде */}
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-[#301EEB] opacity-20"></div>
              <motion.div
                className="absolute bottom-6 right-6"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                <DuckComponent color="#EBA31E" size="responsive" />
              </motion.div>

              <div className="space-y-6 mb-6">
                {/* Групповые занятия */}
                <div className="bg-[#1a1466] rounded-xl p-5 border border-[#EBA31E]/30">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 mr-3 text-[#EBA31E]" />
                    <h4 className="font-bold text-white text-xl">
                      Групповые занятия
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                      <span className="text-[#EACBBE]">Разовое посещение</span>
                      <span className="font-bold text-[#EBA31E] text-lg">
                        1 800 ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                      <span className="text-[#EACBBE]">
                        Абонемент (4 занятия)
                      </span>
                      <span className="font-bold text-[#EBA31E] text-lg">
                        6 500 ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#EACBBE]">
                        Абонемент (8 занятий)
                      </span>
                      <span className="font-bold text-[#EBA31E] text-lg">
                        12 000 ₽
                      </span>
                    </div>
                  </div>
                </div>

                {/* Индивидуальные занятия */}
                <div className="bg-[#1a1466] rounded-xl p-5 border border-[#9F1EEB]/30">
                  <div className="flex items-center mb-4">
                    <User className="h-6 w-6 mr-3 text-[#9F1EEB]" />
                    <h4 className="font-bold text-white text-xl">
                      Индивидуальные занятия
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                      <span className="text-[#EACBBE]">Разовое занятие</span>
                      <span className="font-bold text-[#9F1EEB] text-lg">
                        3 000 ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                      <span className="text-[#EACBBE]">
                        Абонемент (4 занятия)
                      </span>
                      <span className="font-bold text-[#9F1EEB] text-lg">
                        11 000 ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#EACBBE]">
                        Абонемент (8 занятий)
                      </span>
                      <span className="font-bold text-[#9F1EEB] text-lg">
                        20 000 ₽
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => handleOpenClick("utpro")}
                className="w-full mt-4 py-5 bg-gradient-to-r from-[#9F1EEB] to-[#7a17b8] hover:from-[#7a17b8] hover:to-[#9F1EEB] text-white text-lg font-bold rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all group"
              >
                <span className="group-hover:scale-105 transition-transform">
                  Записаться в ПРО
                </span>
              </Button>
            </LiquidGlass>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center mb-8 px-6 py-3 bg-[#EACBBE] text-[#301EEB] rounded-full font-bold">
            <Waves className="mr-2 text-[#9F1EEB]" size={20} />
            <span>Что мы предлагаем</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                title: "Теплая вода",
                desc: "30-32°C для комфорта малышей",
                color: "#EBA31E",
              },
              {
                title: "Маленькие группы",
                desc: "До 6 человек для внимания каждому",
                color: "#9F1EEB",
              },
              {
                title: "Опытные тренеры",
                desc: "Специалисты по детскому плаванию",
                color: "#EACBBE",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1466] p-5 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: item.color }}
                  ></div>
                </div>
                <h4 className="font-bold text-white text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-[#EACBBE] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link to={RouteNames.SCHEDULE}>
            <Button className="py-5 px-10 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white hover:from-[#9F1EEB] hover:to-[#301EEB] rounded-xl text-lg font-bold cursor-pointer shadow-lg hover:shadow-xl transition-all group">
              <span className="group-hover:scale-105 transition-transform">
                Посмотреть расписание занятий
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        <div className="p-8 bg-gradient-to-br from-[#1a1466] to-[#301EEB] text-white rounded-2xl border-2 border-[#9F1EEB]">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EBA31E] to-[#d6940c] flex items-center justify-center">
              <DuckComponent color="#ffffff" size="responsive" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">
            Запись в {activePool === "ut" ? "Утенок" : "Утенок ПРО"}
          </h2>
          <p className="text-[#EACBBE] text-center mb-8">
            Мы перезвоним вам в течение 15 минут
          </p>

          <div className="space-y-6 mb-6">
            <Input
              className="w-full px-5 py-4 bg-[#8968A4]/20 border border-[#EACBBE]/30 text-white placeholder-[#EACBBE]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EBA31E] transition-all text-lg"
              type="text"
              placeholder="Ваше имя"
            />
            <Input
              className="w-full px-5 py-4 bg-[#8968A4]/20 border border-[#EACBBE]/30 text-white placeholder-[#EACBBE]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EBA31E] transition-all text-lg"
              type="tel"
              placeholder="Ваш телефон"
            />
            <div className="grid grid-cols-2 gap-4">
              <Button className="py-4 bg-[#EBA31E] hover:bg-[#d6940c] text-black font-bold rounded-xl shadow transition-all">
                Групповое
              </Button>
              <Button className="py-4 bg-[#9F1EEB] hover:bg-[#7a17b8] text-white font-bold rounded-xl shadow transition-all">
                Индивидуальное
              </Button>
            </div>
          </div>
          <Button className="w-full py-4 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black font-bold rounded-xl hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform duration-300">
            Отправить заявку
          </Button>
        </div>
        <div className="bg-[#1a1466] px-6 py-4 text-center text-sm text-[#EACBBE] border-t border-[#8968A4] rounded-b-2xl">
          Нажимая кнопку, вы соглашаетесь с{" "}
          <a href="#" className="text-[#EBA31E] hover:underline">
            политикой конфиденциальности
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default ProgramsComponent;