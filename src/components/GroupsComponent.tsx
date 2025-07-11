// import { ArrowRight, Award, Clock, Shield, Users } from "lucide-react";
// import { FC, useState } from "react";
// import { Button } from "./ui/button";
// import { Program } from "@/types";
// import Modal from "./Modal";
// import photo from "@/static/utenok_g4.jpg";

// const GroupsComponent: FC = () => {
//     const programs: Program[] = [
//     {
//       title: "Пузырьки",
//       description: "Грудничковое плавание детки с 3мес до 2 лет",
//       schedule: "ПН, ПТ: 11:00 - 12:00",
//       icon: <Users className="h-6 w-6 text-blue-700" />,
//       photoProgram: photo,
//       description2:
//         "Возраст с 3 месяцев и до года – это второй этап в обучении плаванию наших малышей. В это время очень важно, что мама находится в бассейне вместе с малышом. Ребенок, чувствуя присутствие мамы, ее защиту и поддержку, без страха познает водную среду. А мама при совместных занятиях сможет лучше понять состояние своего ребенка, все его малейшие желания. В такие минуты мама и малыш особенно близки и получают большое удовольствие от общения.",
//     },
//     {
//       title: "Смелые утята",
//       description: "Умеющие плавать, детки от 5-8 лет",
//       schedule: "Пн-Пт: 7:00 - 9:00, 19:00 - 22:00",
//       icon: <Users className="h-6 w-6 text-blue-700" />,
//       photoProgram: photo,
//       description2:
//         "Умеющие плавать, детки от 5-8 лет «Смелые утята» (Эта группа включает в себя 10 ребятишек, которые прошли обучение базовым навыкам на индивидуальных занятиях, занимаются по единой программе и все вместе прогрессируют)  длительность 45 минут, далее прогрев в сауне",
//     },
//     {
//       title: "Индивидуальные занятия от 3 мес до 10 лет",
//       description:
//         "Индивидуальное занятие в нашем центре – это больше, чем просто занятие!",
//       schedule: "Пн-Пт: 10:00 - 21:00",
//       icon: <Award className="h-6 w-6 text-blue-700" />,

//       photoProgram: photo,
//       description2:
//         "30 мин — это время, которое Ваш ребёнок проводит наедине с тренером,и занимается по индивидуальной программе, непосредственно в воде. Вы можете прийти по-раньше на 10-15 минут и самостоятельно провести разминку в сухом зале. Так же, по завершении занятия в бассейне, ребёнок может погреться в финской парной, принять душ и т.п.",
//     },
//     {
//       title: "Соляная пещера",
//       description: "Уникальный формат оздоровления всей семьи в Томске",
//       schedule: "Ежедневно: 10:00 - 20:00",
//       icon: <Shield className="h-6 w-6 text-blue-700" />,
//       photoProgram: photo,
//       description2:
//         "Соляная пещера — это специально оборудованное помещение, стены, пол и потолок которого покрыты солью. Во время сеанса в воздух распыляются мельчайшие частицы соли, создавая особый микроклимат, благотворно влияющий на здоровье.",
//     },
//   ];

//   const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProgram(null);
//   };
//   const handleProgramClick = (program: Program) => {
//     setSelectedProgram(program);
//     setIsModalOpen(true);
//   };
//   return (
//     <section className="py-10 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <div className="inline-block px-4 py-1 mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
//             Наши программы
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//             Программы для всех возрастов и уровней
//           </h2>
//           <p className="text-gray-600">
//             Мы предлагаем разнообразные программы обучения плаванию,
//             адаптированные под различные возрастные группы и уровни подготовки
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {programs.map((program, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1"
//             >
//               <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
//                 {program.icon}
//               </div>
//               <h3 className="text-xl font-bold text-blue-900 mb-2">
//                 {program.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{program.description}</p>
//               <div className="flex items-center text-sm text-gray-500 mb-4">
//                 <Clock className="h-4 w-4 mr-1 text-yellow-500" />
//                 <span>{program.schedule}</span>
//               </div>
//               <Button
//                 // to={RouteNames.SCHEDULE}
//                 onClick={() => handleProgramClick(program)}
//                 className="cursor-pointer inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors text-sm"
//               >
//                 Подробнее
//                 <ArrowRight className="ml-1 h-3 w-3" />
//               </Button>
//             </div>
//           ))}
//         </div>
//         <Modal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           className="fixed overflow-hidden inset-0 z-50 flex items-center justify-center "
//         >
//           {selectedProgram && (
//             <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row">
//               <h3 className="text-xl font-bold">{selectedProgram.title}</h3>
//               <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90">
//                 {selectedProgram.description2}
//               </p>
//               <div className="relative h-80 overflow-hidden">
//                 <img
//                   src={selectedProgram.photoProgram}
//                   alt={selectedProgram.title}
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
//                   <h3 className="text-xl font-bold">{selectedProgram.title}</h3>
//                 </div>
//               </div>
//             </div>
//           )}
//         </Modal>
//       </div>
//     </section>
//   );
// };

// export default GroupsComponent;


import {
  ArrowRight,
  Award,
  Clock,
  Users,
  Baby,
  Star,
  Calendar,
  Thermometer,
} from "lucide-react";
import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Program } from "@/types";
import Modal from "./Modal";
import photo from "@/static/utenok_g4.jpg";
import { motion } from "framer-motion";

const GroupsComponent: FC = () => {
  const programs: Program[] = [
    {
      title: "Пузырьки",
      description: "Грудничковое плавание детки с 3мес до 2 лет",
      schedule: "ПН, ПТ: 11:00 - 12:00",
      icon: <Baby className="h-6 w-6 text-blue-700" />,
      photoProgram: photo,
      description2:
        "Возраст с 3 месяцев и до года – это второй этап в обучении плаванию наших малышей. В это время очень важно, что мама находится в бассейне вместе с малышом. Ребенок, чувствуя присутствие мамы, ее защиту и поддержку, без страха познает водную среду.",
      age: "3 мес - 2 года",
      duration: "30 минут",
      features: [
        "Совместно с родителями",
        "Безопасная среда",
        "Первые водные навыки",
      ],
    },
    {
      title: "Смелые утята",
      description: "Умеющие плавать, детки от 5-8 лет",
      schedule: "Пн-Пт: 7:00 - 9:00, 19:00 - 22:00",
      icon: <Star className="h-6 w-6 text-blue-700" />,
      photoProgram: photo,
      description2:
        "Группа для детей, которые уже освоили базовые навыки плавания. Занятия направлены на совершенствование техники, развитие выносливости и уверенности в воде.",
      age: "5-8 лет",
      duration: "45 минут + сауна",
      features: ["Групповые занятия", "Развитие техники", "Прогрев в сауне"],
    },
    {
      title: "Индивидуальные занятия",
      description: "Персональный подход для детей от 3 мес до 10 лет",
      schedule: "Пн-Пт: 10:00 - 21:00",
      icon: <Award className="h-6 w-6 text-blue-700" />,
      photoProgram: photo,
      description2:
        "Персональные занятия с тренером по индивидуальной программе. Идеально подходит для детей, которым требуется особый подход или ускоренное обучение.",
      age: "3 мес - 10 лет",
      duration: "30 минут",
      features: [
        "Индивидуальный подход",
        "Гибкое расписание",
        "Быстрый прогресс",
      ],
    },
    {
      title: "Соляная пещера",
      description: "Уникальный формат оздоровления всей семьи в Томске",
      schedule: "Ежедневно: 10:00 - 20:00",
      icon: <Thermometer className="h-6 w-6 text-blue-700" />,
      photoProgram: photo,
      description2:
        "Специально оборудованное помещение, стены которого покрыты солью. Во время сеанса в воздух распыляются мельчайшие частицы соли, создавая особый микроклимат, благотворно влияющий на здоровье.",
      age: "Для всей семьи",
      duration: "30-45 минут",
      features: [
        "Укрепление иммунитета",
        "Профилактика заболеваний",
        "Релаксация",
      ],
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  const handleProgramClick = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  return (
    <section className="py-10  text-white via-blue-300  overflow-hidden relative flex flex-col">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <Users className="inline mr-2" size={16} />
            Наши программы
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Программы для всех возрастов
          </h2>
          <p className="text-blue-100 text-sm md:text-base">
            Специально разработанные курсы для каждого этапа развития вашего
            ребенка
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 border border-blue-100"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {program.title}
              </h3>
              <p className="text-blue-700 mb-4">{program.description}</p>
              <div className="flex items-center text-sm text-blue-600 mb-4">
                <Clock className="h-4 w-4 mr-1 text-yellow-500" />
                <span>{program.schedule}</span>
              </div>
              <Button
                onClick={() => handleProgramClick(program)}
                variant="default"
                className="text-blue-600 hover:text-blue-800 pl-0"
              >
                Подробнее
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Модальное окно с детальной информацией */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {selectedProgram && (
            <div className="bg-white rounded-xl overflow-hidden max-w-4xl">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedProgram.photoProgram}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-2xl font-bold">
                    {selectedProgram.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Возраст</p>
                      <p className="font-medium">{selectedProgram.age}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Длительность</p>
                      <p className="font-medium">{selectedProgram.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Расписание</p>
                      <p className="font-medium">{selectedProgram.schedule}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Формат</p>
                      <p className="font-medium">
                        {selectedProgram.title === "Индивидуальные занятия"
                          ? "Персональный"
                          : "Групповой"}
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-blue-900 mb-3">
                  Описание
                </h4>
                <p className="text-gray-700 mb-6">
                  {selectedProgram.description2}
                </p>

                <h4 className="text-lg font-bold text-blue-900 mb-3">
                  Что получит ваш ребенок:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {selectedProgram.features?.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">
                  Записаться на занятие
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default GroupsComponent;