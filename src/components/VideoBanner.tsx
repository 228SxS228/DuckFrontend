// // // import { FC } from "react";
// // // import { Button } from "./ui/button";
// // // import bgimg from "@/static/interior/SSV_1325.jpg";
// // // import WaveComponent from "./WaveComponent";

// // // const VideoBanner: FC = () => {
// // //   return (
// // //     <section className="overflow-hidden">
// // //       {/* Основной контент баннера */}
// // //       <div
// // //         className="relative min-h-[40rem] md:min-h-[52rem] flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-12 py-16 md:py-32 px-4"
// // //         style={{
// // //           backgroundImage: `url(${bgimg})`,
// // //           backgroundSize: "cover",
// // //           backgroundPosition: "center",
// // //           backgroundAttachment: "fixed",
// // //         }}
// // //       >
// // //         <div className="container mx-auto">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //             <div className="p-5 md:p-8 relative z-20">
// // //               <div className="max-w-3xl">
// // //                 <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
// // //                   Плавательный Центр
// // //                   <span className="block mt- bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
// // //                     «Утенок»
// // //                   </span>
// // //                 </h1>

// // //                 <p className="text-xl text-blue-100 mb-8 max-w-xl">
// // //                   Профессиональное обучение плаванию для детей от 3 месяцев до
// // //                   10 лет в современном центре с опытными тренерами.
// // //                 </p>
// // //                   <Button
// // //                     size="lg"
// // //                     className="hover:bg-yellow-500 rounded-full px-6 py-6 text-lg text-black bg-yellow-400 cursor-pointer shadow-lg transition-all duration-300 hover:scale-105"
// // //                   >
// // //                     Записаться на первое бесплатное занятие
// // //                   </Button>
// // //                 {/* <div className="flex flex-wrap gap-4">

// // //                 </div> */}
// // //               </div>
// // //             </div>

// // //             {/* Блок с преимуществами (для мобильной версии) */}
// // //             <div className="md:hidden bg-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700">
// // //               <h3 className="text-xl font-bold text-yellow-300 mb-4">
// // //                 Наши преимущества:
// // //               </h3>
// // //               <ul className="space-y-3">
// // //                 {[
// // //                   "Опытные детские тренеры",
// // //                   "Современные бассейны",
// // //                   "Индивидуальный подход",
// // //                   "Безопасная среда",
// // //                 ].map((item, i) => (
// // //                   <li key={i} className="flex items-center">
// // //                     <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
// // //                       <span className="w-2 h-2 rounded-full bg-blue-900"></span>
// // //                     </span>
// // //                     <span className="text-blue-100">{item}</span>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Волна - скрыта на мобильных устройствах */}
// // //       <div className=" md:block">
// // //         <WaveComponent />
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default VideoBanner;

import { FC, useState } from "react";
import { Button } from "./ui/button";
import bgimg from "@/static/interior/SSV_1325.jpg";
import { Play} from "lucide-react";
import Modal from "./Modal"; // Импортируем ваш компонент Modal
import { Input } from "./ui/input";

const VideoBanner: FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenClick = () => setIsModalOpen(true);
  // Генератор случайных пузырьков
  const generateBubbles = () => {
    return Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * 40 + 10;
      const left = `${Math.random() * 100}%`;
      const delay = Math.random() * 10;
      const duration = 5 + Math.random() * 10;

      return (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-30 animate-bubble"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left,
            bottom: "-50px",
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Основной контент баннера */}
      <div
        className="relative min-h-[40rem] md:min-h-[52rem] flex items-center justify-center py-16 md:py-32 px-4"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Текстура воды поверх изображения */}
        <div className="absolute inset-0 ">
          // {generateBubbles()}
          //{" "}
        </div>

        {/* Контент */}
        <div className="container mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-5 md:p-8 text-center md:text-left">
              <div className="max-w-3xl">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                  Плавательный Центр
                  <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                    «Утенок»
                  </span>
                </h1>

                <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto md:mx-0">
                  Профессиональное обучение плаванию для детей от 3 месяцев до
                  10 лет в современном центре с опытными тренерами.
                </p>

                <Button
                  size="lg"
                  onClick={handleOpenClick}
                  className="hover:bg-yellow-500 rounded-full px-6 py-6 text-lg font-bold text-black bg-yellow-400 shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Записаться на первое бесплатное занятие
                </Button>
              </div>
            </div>

            {/* Кнопка воспроизведения видео */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
                aria-label="Посмотреть видео"
              >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:from-yellow-500 group-hover:to-orange-500 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all">
                  <Play className="text-white fill-white ml-1 w-8 h-8 md:w-10 md:h-10" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className=" rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            Оставьте контактные данные, мы перезвоним Вам и запишем на занятие
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
      {/* Модальное окно с видео */}
      <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
        <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
          <video
            controls
            autoPlay
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="src\static\videoplayback.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео тег.
          </video>
        </div>
      </Modal>
    </section>
  );
};

export default VideoBanner;
