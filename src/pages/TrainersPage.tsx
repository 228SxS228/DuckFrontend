// import { useState, FC } from "react";
// import { Trainer } from "../model/model";
// import Modal from "../components/Modal";
// // import { useAppDiscpatch, useAppSelector } from "../hooks/reduxe";
// //import { fetchTrener} from "../store/action/trenerAction";
// import { Award, GraduationCap} from "lucide-react";

// import bykreev from "@/static/trainers/bykreev.jpg";
// import kiryanov from "@/static/trainers/kiryanov.jpg";
// import lapshina from "@/static/trainers/lapshina.jpg";
// import oger from "@/static/trainers/oger.jpg";
// import sandra from "@/static/trainers/sandra.jpg";
// import sheremeta from "@/static/trainers/sheremeta.jpg";
// import volkov from "@/static/trainers/volkov.jpg";
// import zilina from "@/static/trainers/zilina.jpg";
// import { Button } from "@/components/ui/button";

// //trener, добавить в const {  loading, error } = useAppSelector((state) => state.trener);
// const TrainersPage: FC = () => {
//   //все что связанно с модалкой
//   const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedTrainer(null);
//   };
//   const handleTrainerClick = (trainer: Trainer) => {
//     setSelectedTrainer(trainer);
//     setIsModalOpen(true);
//   };

//   // запросы к бд
//   // const dispatch = useAppDiscpatch();
//   // useEffect(() => {
//   //   //dispatch(fetchTrener());
//   //   // dispatch(fetchTrenerById(1));
//   // }, [dispatch]);
//   // const {  loading, error } = useAppSelector((state) => state.trener);

//   const trainers: Trainer[] = [
//     {
//       Id: 1,
//       TrainerName: "Сергей Евгеньевич Кирьянов",
//       TrainerDescription:
//         "ТГПУ-Факультет физической культуры и спорта — 2021 г.",
//       TrainerPhotoUrl: kiryanov,
//     },
//     {
//       Id: 2,
//       TrainerName: "Наталья Петровна Огер",
//       TrainerDescription:
//         "ТГПУ – «Факультет физической культуры и спорта» 1977 год.",
//       TrainerPhotoUrl: oger,
//     },
//     {
//       Id: 3,
//       TrainerName: "Мария Алексеевна Лапшина",
//       TrainerDescription: "ТГПК направление: Физическая культура — 2019 г.",
//       TrainerPhotoUrl: lapshina,
//     },
//     {
//       Id: 4,
//       TrainerName: "Алина Константиновна Жилина",
//       TrainerDescription:
//         "ТГПУ — Факультет физической культуры и спорта — 2019 г.",
//       TrainerPhotoUrl: zilina,
//     },
//     {
//       Id: 5,
//       TrainerName: "Виктория Дмитриевна Шеремета",
//       TrainerDescription: "Томский Аграрный Колледж — 2013 г.",
//       TrainerPhotoUrl: sheremeta,
//     },
//     {
//       Id: 6,
//       TrainerName: "Максим Сергеевич Букреев",
//       TrainerDescription:
//         "ТГПУ — Факультет физической культуры и спорта — 2020 г.",
//       TrainerPhotoUrl: bykreev,
//     },
//     {
//       Id: 7,
//       TrainerName: "Сандра Евгеньевна Сен-Ли",
//       TrainerDescription:
//         "УрФУ имени первого президента России Б.Н.Ельцина – 2021г.",
//       TrainerPhotoUrl: sandra,
//     },
//     {
//       Id: 8,
//       TrainerName: "Евгений Александрович Волков",
//       TrainerDescription:
//         "ТГПУ — Факультет физической культуры и спорта — 2017 г.",
//       TrainerPhotoUrl: volkov,
//     },
//   ];

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       if (!dataSrc) {
//   //         throw new Error("с API нет данных");
//   //       }

//   //       const response = await fetch(dataSrc);

//   //       if (!response.ok) {
//   //         throw new Error(`HTTP error! Status: ${response.status}`);
//   //       }

//   //       const fetchedTrainers = await response.json();
//   //       setTrainers(fetchedTrainers); // Сохранение данных в состояние
//   //     } catch (error) {
//   //       setError(
//   //         error instanceof Error ? error.message : "Ошибка загрузки данных"
//   //       );
//   //       console.error("Error fetching trainers:", error);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [dataSrc]); //массив зависимостей, чтобы запрос выполнялся один раз при монтировании

//   // if (loading) {
//   //   return <div className="text-center py-8">Загрузка...</div>;
//   // }

//   // if (error) {
//   //   return <div className="text-center py-8 text-red-500">{error}</div>;
//   // }

//   // if (!trainerConst?.length) {
//   //   return <div className="text-center py-8">Данные не найдены</div>;
//   // }

//   return (
//     <section className="flex min-h-screen flex-col">
//       <div className="bg-gradient-to-b from-sky-100 to-white py-12 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center">
//             <h1 className="mb-6 text-3xl font-bold text-sky-800 md:text-4xl lg:text-5xl">
//               Наши тренеры
//             </h1>
//             <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-700">
//               Познакомьтесь с профессиональной командой тренеров детского
//               плавательного центра "Утенок"
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* <TrainerDetails /> */}
//       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {trener.map((trainer) => (
//           <div
//             key={trainer.Id}
//             onClick={() => handleTrainerClick(trainer)}
//             className="bg-gray-300 rounded-lg overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
//           >
//             <div className="w-full h-48 flex items-center justify-center overflow-hidden">
//               <img
//                 src={trainer.TrainerPhotoUrl}
//                 alt={trainer.TrainerName}
//                 className="h-full object-contain"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold">{trainer.TrainerName}</h3>
//               <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90">
//                 {trainer.TrainerDescription}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div> */}
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//         {trainers.map((trainer, index) => {
//           return (
//             <div
//               key={index}
//               className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 flex flex-col h-full"
//             >
//               <div className="relative h-128 w-full overflow-hidden">
//                 <img
//                   src={trainer.TrainerPhotoUrl || "/placeholder.svg"}
//                   alt={trainer.TrainerName}
//                   className="h-full w-full object-cover"
//                   style={{ objectPosition: "center 15%" }}
//                 />
//               </div>

//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="mb-1 text-xl font-bold text-sky-800">
//                   {trainer.TrainerName}
//                 </h3>

//                 <div className="mb-4 space-y-2 flex-grow">
//                   <div className="flex items-start">
//                     <GraduationCap className="mr-2 mt-1 h-5 w-5 shrink-0 text-sky-600" />
//                     <p className="text-sm text-gray-700">
//                       <span className="font-medium">Образование:</span>{" "}
//                       {trainer.TrainerDescription}
//                     </p>
//                   </div>
//                   <div className="flex items-start">
//                     <Award className="mr-2 mt-1 h-5 w-5 shrink-0 text-sky-600" />
//                     <p className="text-sm text-gray-700">
//                       <span className="font-medium">Стаж:</span> 5+ лет
//                     </p>
//                   </div>
//                 </div>

//                 <Button
//                   onClick={() => handleTrainerClick(trainer)}
//                   className="w-full rounded-md bg-sky-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-sky-700"
//                 >
//                   Подробнее
//                 </Button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {/* <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         className="fixed inset-0 flex items-center justify-center "
//       >
//         {selectedTrainer && (
//           <div className="flex space-x-4  ">
//             <div>{selectedTrainer.TrainerName}</div>
//             <img
//               src={selectedTrainer.TrainerPhotoUrl}
//               alt={selectedTrainer.TrainerName}
//               className="w-200 h-100 object-cover rounded-lg"
//             />
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90">
//               {selectedTrainer.TrainerDescription}
//             </p>
//           </div>
//         )}
//       </Modal> */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         className="fixed inset-0 flex items-center justify-center "
//       >
//         {selectedTrainer && (
//           <div className="grid grid-cols-2">
//             {/* Контент тренера */}
//             {/* Бейдж с именем */}
//             <div>
//               <div className="bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
//                 <h2 className="text-xl md:text-2xl font-bold">
//                   {selectedTrainer.TrainerName}
//                 </h2>
//               </div>
//               {/* Фото тренера */}
//               <img
//                 src={selectedTrainer.TrainerPhotoUrl}
//                 alt={selectedTrainer.TrainerName}
//                 className="w-full h-64 md:h-auto object-cover object-center"
//               />
//             </div>
//             {/* Описание тренера */}
//             <div className="md:w-3/5 p-6 md:p-8 overflow-y-auto max-h-[60vh]">
//               <div className="">
//                 <p className="text-gray-700 mb-6 leading-relaxed">
//                   {selectedTrainer.TrainerDescription}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </Modal>
//       <div className="mt-12 rounded-lg bg-sky-50 p-6 text-center">
//         <h2 className="mb-4 text-2xl font-bold text-sky-800">
//           Хотите присоединиться к нашей команде?
//         </h2>
//         <p className="mx-auto mb-6 max-w-2xl text-gray-700">
//           Мы всегда рады талантливым и увлеченным тренерам в нашей команде. Если
//           вы любите работать с детьми и имеете опыт в обучении плаванию,
//           отправьте нам свое резюме.
//         </p>
//         <a
//           href="#contacts"
//           className="inline-flex items-center rounded-md bg-sky-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-700"
//         >
//           Отправить резюме
//         </a>
//       </div>
//     </section>
//   );
// };

// export default TrainersPage;

import { useState, FC } from "react";
import Modal from "../components/Modal";
import {
  GraduationCap,
  Medal,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Импорт фотографий тренеров
import bykreev from "@/static/trainers/bykreev.jpg";
import kiryanov from "@/static/trainers/kiryanov.jpg";
import lapshina from "@/static/trainers/lapshina.jpg";
import oger from "@/static/trainers/oger.jpg";
import sandra from "@/static/trainers/sandra.jpg";
import sheremeta from "@/static/trainers/sheremeta.jpg";
import volkov from "@/static/trainers/volkov.jpg";
import zilina from "@/static/trainers/zilina.jpg";

interface Trainer {
  Id: number;
  TrainerName: string;
  TrainerDescription: string;
  TrainerPhotoUrl: string;
  experience?: number;
  achievements?: string[];
}

const TrainersPage: FC = () => {
  // Состояния для модального окна
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTrainer(null);
  };

  const handleTrainerClick = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };

  // Функция для генерации случайного стажа
  const getRandomExperience = () => Math.floor(Math.random() * 15) + 3;

  // Данные тренеров с дополненной информацией
  const trainers: Trainer[] = [
    {
      Id: 1,
      TrainerName: "Сергей Евгеньевич Кирьянов",
      TrainerDescription:
        "ТГПУ-Факультет физической культуры и спорта — 2021 г.",
      TrainerPhotoUrl: kiryanov,
      experience: getRandomExperience(),
      achievements: [
        "Мастер спорта по плаванию",
        "Тренер года 2022",
        "Специалист по обучению детей с 3 лет",
      ],
    },
    {
      Id: 2,
      TrainerName: "Наталья Петровна Огер",
      TrainerDescription:
        "ТГПУ – «Факультет физической культуры и спорта» 1977 год.",
      TrainerPhotoUrl: oger,
      experience: getRandomExperience(),
      achievements: [
        "Залуженный тренер России",
        "Автор методики обучения плаванию для дошкольников",
      ],
    },
    {
      Id: 3,
      TrainerName: "Мария Алексеевна Лапшина",
      TrainerDescription: "ТГПК направление: Физическая культура — 2019 г.",
      TrainerPhotoUrl: lapshina,
      experience: getRandomExperience(),
      achievements: ["Специалист по аквааэробике", "Детский психолог"],
    },
    {
      Id: 4,
      TrainerName: "Алина Константиновна Жилина",
      TrainerDescription:
        "ТГПУ — Факультет физической культуры и спорта — 2019 г.",
      TrainerPhotoUrl: zilina,
      experience: getRandomExperience(),
      achievements: [
        "Чемпионка области по плаванию",
        "Специалист по синхронному плаванию",
      ],
    },
    {
      Id: 5,
      TrainerName: "Виктория Дмитриевна Шеремета",
      TrainerDescription: "Томский Аграрный Колледж — 2013 г.",
      TrainerPhotoUrl: sheremeta,
      experience: getRandomExperience(),
      achievements: [
        "Инструктор по водному поло",
        "Специалист по реабилитационному плаванию",
      ],
    },
    {
      Id: 6,
      TrainerName: "Максим Сергеевич Букреев",
      TrainerDescription:
        "ТГПУ — Факультет физической культуры и спорта — 2020 г.",
      TrainerPhotoUrl: bykreev,
      experience: getRandomExperience(),
      achievements: [
        "Мастер спорта международного класса",
        "Участник Олимпийских игр",
      ],
    },
    {
      Id: 7,
      TrainerName: "Сандра Евгеньевна Сен-Ли",
      TrainerDescription:
        "УрФУ имени первого президента России Б.Н.Ельцина – 2021г.",
      TrainerPhotoUrl: sandra,
      experience: getRandomExperience(),
      achievements: [
        "Специалист по обучению грудничковому плаванию",
        "Дипломированный физиотерапевт",
      ],
    },
    {
      Id: 8,
      TrainerName: "Евгений Александрович Волков",
      TrainerDescription:
        "ТГПУ — Факультет физической культуры и спорта — 2017 г.",
      TrainerPhotoUrl: volkov,
      experience: getRandomExperience(),
      achievements: ["Тренер сборной области", "Судья международной категории"],
    },
  ];

  // Функция для навигации между тренерами в модальном окне
  const navigateTrainer = (direction: "prev" | "next") => {
    if (!selectedTrainer) return;

    const currentIndex = trainers.findIndex((t) => t.Id === selectedTrainer.Id);
    let newIndex = currentIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? trainers.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === trainers.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedTrainer(trainers[newIndex]);
  };

  return (
    <section className="min-h-screen  py-12">
      <div className="container overflow-hidden mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          {/* <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full mb-4">
            <Waves className="inline mr-2" size={20} />
            Наша команда
          </div> */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Профессиональные тренеры
          </motion.h1>
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-blue-100 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Наши опытные специалисты помогут вашему ребенку освоить плавание в
            безопасной и дружелюбной атмосфере
          </motion.p>
        </div>

        {/* Сетка тренеров */}
        <div className="grid overflow-hidden gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trainers.map((trainer) => (
            <div
              key={trainer.Id}
              className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-100 overflow-hidden">
                <img
                  src={trainer.TrainerPhotoUrl}
                  alt={trainer.TrainerName}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-xl font-bold text-gray-200">
                    {trainer.TrainerName}
                  </h3>
                  <div className="flex items-center mt-1">
                    <Star
                      className="fill-yellow-400 text-yellow-400 mr-1"
                      size={16}
                    />
                    <span className="text-sm text-gray-200">
                      Стаж: {trainer.experience} лет
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start mb-3">
                  <GraduationCap
                    className="mt-1 mr-2 text-sky-600 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-sm text-gray-700">
                    {trainer.TrainerDescription}
                  </p>
                </div>

                <Button
                  onClick={() => handleTrainerClick(trainer)}
                  className="w-full text-blue-50 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
                >
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Блок призыва к действию */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-600 p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Хотите присоединиться к нашей команде?
            </h2>
            <p className="mb-6 text-white">
              Мы всегда рады талантливым и увлеченным тренерам. Если вы любите
              работать с детьми и имеете опыт в обучении плаванию, отправьте нам
              свое резюме.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-bold">
              Отправить резюме
            </Button>
          </div>
        </div>
      </div>

      {/* Модальное окно с детальной информацией о тренере */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="fixed overflow-hidden inset-0 z-50 flex items-center justify-center "
      >
        {selectedTrainer && (
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row">
            {/* Кнопки навигации */}
            <Button
              onClick={() => navigateTrainer("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="text-blue-600" size={24} />
            </Button>

            <Button
              onClick={() => navigateTrainer("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight className="text-blue-600" size={24} />
            </Button>

            {/* Фото тренера */}
            <div className="md:w-2/5 relative">
              <img
                src={selectedTrainer.TrainerPhotoUrl}
                alt={selectedTrainer.TrainerName}
                className="w-full h-full object-cover"
              />
              {/* Волны */}
              <div className="absolute bottom-0 left-0 right-0 h-6 flex">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-blue-400 rounded-t-full mx-0.5"
                    style={{
                      height: `${10 + Math.random() * 20}px`,
                      animation: `wave 2s infinite ease-in-out`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Информация о тренере */}
            <div className="md:w-3/5  md:p-8 overflow-y-auto">
              <div className="">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">
                  {selectedTrainer.TrainerName}
                </h2>

                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    Стаж: {selectedTrainer.experience} лет
                  </div>
                </div>
              </div>

              {/* Образование */}
              <div className="mb-2 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-start">
                  <GraduationCap
                    className="mt-1 mr-3 text-blue-600 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-lg text-blue-800 mb-1">
                      Образование
                    </h3>
                    <p className="text-gray-700">
                      {selectedTrainer.TrainerDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Достижения */}
              <div className="mb-2 p-4 bg-yellow-50 rounded-xl">
                <div className="flex items-start">
                  <Medal
                    className="mt-1 mr-3 text-yellow-600 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-lg text-yellow-800 mb-1">
                      Достижения
                    </h3>
                    <ul className="space-y-2">
                      {selectedTrainer.achievements?.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Философия обучения */}
              <div className="p-4 bg-sky-50 rounded-xl">
                <div className="flex items-start">
                  <Heart
                    className="mt-1 mr-3 text-pink-500 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-lg text-sky-800 mb-1">
                      Подход к обучению
                    </h3>
                    <p className="text-gray-700">
                      Создаю дружелюбную и безопасную атмосферу для детей, где
                      каждый ребенок чувствует себя уверенно в воде. Использую
                      игровые методики, которые делают обучение плаванию
                      увлекательным и эффективным.
                    </p>
                  </div>
                </div>
              </div>

              {/* Кнопка записи */}
              <Button className="mt-6 w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 py-6 text-lg text-white">
                Записаться к тренеру
              </Button>
            </div>
          </div>
        )}
      </Modal>
      {/* Стили для анимации волн */}
    </section>
  );
};

export default TrainersPage;
