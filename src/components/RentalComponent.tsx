// import { FC } from "react";
// import { Gift, Calendar, Users, Star } from "lucide-react";
// import ImageGalleryBanner from "./ui/ImageGalleryBanner";
// import photo2 from "@/static/utenokpro_animatory.jpg";
// import photo3 from "@/static/utenokpro_programma.jpg";
// import { motion, Variants } from "framer-motion";
// import { LiquidGlass } from "./ui/LiquidGlass";
// import BubbleComponent from "./ui/Buble";
// import { Button } from "./ui/button";

// const images = [photo2, photo3];

// const Rentalcomponent: FC = () => {
//   const packages = [
//     {
//       title: "Праздничный пакет 'Утенок'",
//       icon: <Star className="h-6 w-6 text-[#EBA31E]" />,
//       color: "bg-gradient-to-r from-[#301EEB] to-[#9F1EEB]",
//       features: [
//         "1 час аренды детского бассейна",
//         "Профессиональный аниматор",
//         "Праздничное угощение",
//         "Подарки для всех гостей",
//         "Фотосессия (10 цифровых фото)",
//       ],
//     },
//     {
//       title: "Праздничный пакет 'Дельфин'",
//       icon: <Gift className="h-6 w-6 text-[#EBA31E]" />,
//       color: "bg-gradient-to-r from-[#9F1EEB] to-[#301EEB]",
//       features: [
//         "2 часа аренды бассейна",
//         "2 профессиональных аниматора",
//         "Премиальное угощение",
//         "Эксклюзивные подарки",
//         "Профессиональная фотосессия",
//         "Видеомонтаж праздника",
//       ],
//     },
//   ];

//   // Анимация для элементов
//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       y: -10,
//       boxShadow: "0 20px 30px rgba(159, 30, 235, 0.2)",
//       transition: { duration: 0.3 },
//     },
//   };

//   const textVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="py-10 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
//       {/* Пузырьки фона */}
//       <BubbleComponent
//         count={80}
//         speed={2}
//         color="#9F1EEB"
//         size={{ base: 20, sm: 30, md: 40 }}
//       />

//       <div className="container mx-auto px-4 relative z-10">
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
//             Особое предложение
//           </motion.div>

//           <motion.h2
//             className="ttext-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-transparent bg-clip-text"
//             variants={textVariants}
//           >
//             Аренда бассейна для мероприятий
//           </motion.h2>

//           <motion.p
//             className="text-xl text-[#1e293b] mb-8 leading-relaxed font-medium"
//             variants={textVariants}
//           >
//             Организуйте незабываемый праздник для вашего ребенка и его друзей в
//             нашем центре!
//           </motion.p>
//         </motion.div>
//         <LiquidGlass
//           glassColor="#ffffff"
//           opacity={0.15}
//           blurStrength={10}
//           borderRadius={32}
//           className="container   py-10  relative z-10"
//         >
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Галерея */}
//             <motion.div
//               className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               <ImageGalleryBanner
//                 images={images}
//                 interval={4000}
//                 height="h-full"
//               />
//               <div className="absolute inset-0 " />
//               <div className="absolute bottom-0 left-0 p-6 md:p-8">
//                 <div className="inline-block px-4 py-2 mb-3 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black font-bold rounded-full">
//                   Детские праздники
//                 </div>
//                 <h3 className="text-2xl font-bold text-white">
//                   Незабываемые впечатления
//                 </h3>
//               </div>
//             </motion.div>

//             {/* Пакеты */}
//             <div>
//               <motion.div
//                 className="mb-8"
//                 variants={textVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 <p className="text-lg text-[#1e293b] mb-6">
//                   Мы предлагаем аренду бассейна и прилегающих помещений для
//                   проведения детских дней рождения, выпускных и других
//                   мероприятий.
//                 </p>

//                 <div className="flex items-center text-lg text-blue-100 mb-6">
//                   <Calendar className="h-6 w-6 mr-3 text-[#EBA31E] flex-shrink-0" />
//                   <span>
//                     Доступно для бронирования: Пн-Пт: 14:00-20:00, Сб-Вс:
//                     10:00-20:00
//                   </span>
//                 </div>

//                 <div className="flex items-center text-lg text-blue-100 mb-8">
//                   <Users className="h-6 w-6 mr-3 text-[#EBA31E] flex-shrink-0" />
//                   <span>Вместимость: до 15 детей + 5 взрослых</span>
//                 </div>
//               </motion.div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {packages.map((pkg, index) => (
//                   <motion.div
//                     key={index}
//                     className="bg-white rounded-2xl p-6 border border-blue-200 shadow-lg"
//                     variants={cardVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     whileHover="hover"
//                     viewport={{ once: true }}
//                   >
//                     <div className="flex items-center mb-4">
//                       <div
//                         className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${pkg.color}`}
//                       >
//                         {pkg.icon}
//                       </div>
//                       <h3 className="text-xl font-bold text-[#301EEB]">
//                         {pkg.title}
//                       </h3>
//                     </div>

//                     <ul className="space-y-3 mb-6">
//                       {pkg.features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <div className="w-6 h-6 rounded-full bg-[#EBA31E]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
//                             <div className="w-2 h-2 rounded-full bg-[#EBA31E]"></div>
//                           </div>
//                           <span className="text-[#1e293b]">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//                    <motion.div
//             className="text-center mt-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//           >
//             <Button className="py-5 px-10 text-lg font-bold bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#f0b84d] hover:to-[#EBA31E] text-black rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
//               Узнать подробности
//             </Button>
//           </motion.div>
//         </LiquidGlass>
//       </div>
//       <motion.div
//         className="mt-16 pt-8 border-t border-[#8968A4]/30 text-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         viewport={{ once: true }}
//       >
//         <p className="text-[#1e293b] max-w-3xl mx-auto text-lg">
//           Мы также предлагаем индивидуальные решения для корпоративных
//           мероприятий, школьных групп и спортивных команд. Свяжитесь с нами для
//           получения подробной информации.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Rentalcomponent;

import { FC, useState } from "react";
import { ChevronRight, PartyPopper } from "lucide-react";
import ImageGalleryBanner from "./ui/ImageGalleryBanner";
import photo2 from "@/static/utenokpro_animatory.jpg";
import photo3 from "@/static/utenokpro_programma.jpg";
import { motion, Variants } from "framer-motion";

import BubbleComponent from "./ui/Buble";
import { Button } from "./ui/button";
import Modal from "./Modal";
import { Input } from "./ui/input";

const images = [photo2, photo3];

const Rentalcomponent: FC = () => {
 const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenClick = () => setIsModalOpen(true);

  // const packages = [
  //   {
  //     title: "Праздничный пакет 'Утенок'",
  //     icon: <Star className="h-6 w-6 text-[#FFD700]" />,
  //     color: "bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]",
  //     price: "от 8 900 ₽",
  //     features: [
  //       "1 час аренды детского бассейна",
  //       "Профессиональный аниматор",
  //       "Праздничное угощение",
  //       "Подарки для всех гостей",
  //       "Фотосессия (10 цифровых фото)",
  //     ],
  //   },
  //   {
  //     title: "Праздничный пакет 'Дельфин'",
  //     icon: <Gift className="h-6 w-6 text-[#FFD700]" />,
  //     color: "bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]",
  //     price: "от 15 900 ₽",
  //     features: [
  //       "2 часа аренды бассейна",
  //       "2 профессиональных аниматора",
  //       "Премиальное угощение",
  //       "Эксклюзивные подарки",
  //       "Профессиональная фотосессия",
  //       "Видеомонтаж праздника",
  //     ],
  //   },
  // ];

  // const cardVariants: Variants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeOut",
  //     },
  //   },
  //   hover: {
  //     y: -15,
  //     scale: 1.03,
  //     boxShadow: "0 25px 50px -12px rgba(142, 45, 226, 0.25)",
  //     transition: { duration: 0.4 },
  //   },
  // };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Пузырьки фона */}
      <BubbleComponent
        count={120}
        speed={3}
        color="#8E2DE2"
        size={{ base: 15, sm: 25, md: 35 }}
      />

      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:40px_40px] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-[#FFD700] to-[#ffa800] text-black rounded-full font-bold shadow-lg shadow-[#ffa800]/30"
            variants={textVariants}
          >
            <PartyPopper className="mr-2 h-5 w-5" />
            Специальное предложение
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text"
            variants={textVariants}
          >
            Аренда бассейна для детских праздников
          </motion.h2>

          <motion.p
            className="text-xl text-[#301EEB] mb-10 leading-relaxed font-medium max-w-2xl mx-auto"
            variants={textVariants}
          >
            Создайте волшебный праздник для вашего ребенка в нашем аквацентре с
            профессиональными аниматорами и уникальной атмосферой
          </motion.p>
        </motion.div>

        <div className="items-center">
          {/* Галерея */}
          <motion.div
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-[#4A00E0]/30 border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageGalleryBanner
              images={images}
              interval={3500}
              height="h-full"
            />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="inline-flex items-center px-5 py-2 mb-3 bg-gradient-to-r from-[#FFD700] to-[#ffa800] text-black font-bold rounded-full">
                <ChevronRight className="mr-1 h-4 w-4" />
                Детские праздники
              </div>
              <h3 className="text-3xl font-bold text-white">
                Невероятные впечатления гарантированы
              </h3>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block mb-8">
            <div className="text-[#301EEB] mb-4 text-lg">
              Индивидуальные решения
            </div>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#8E2DE2] to-transparent mx-auto"></div>
          </div>

          <p className="text-[#301EEB] max-w-3xl mx-auto text-xl mb-10">
            Аренда бассейна для детских праздников и свободного плавания всей семьей
          </p>

          <Button
            onClick={handleOpenClick}
            className="py-5 px-12 text-lg font-bold bg-gradient-to-r from-[#FFD700] to-[#ffa800] hover:from-[#ffe14d] hover:to-[#FFD700] text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Обсудить мероприятие
          </Button>
        </motion.div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            Оставьте контактные данные, мы перезвоним Вам и обсудим все подробности
          </h2>
          <div className="space-y-6 mb-6">
            <Input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="text"
              placeholder="Ваше имя"
            />
            <Input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="tel"
              placeholder="Ваш телефон"
            />
          </div>
          <Button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform duration-300">
            Оставить заявку
          </Button>
        </div>
        <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100">
          Нажимая кнопку, вы соглашаетесь с{" "}
          <a href="#" className="text-blue-600 hover:underline">
            политикой конфиденциальности
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default Rentalcomponent;
