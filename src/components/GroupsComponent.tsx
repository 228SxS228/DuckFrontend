import { ArrowRight, Award, Clock, Shield, Users } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Program } from "@/types";
import Modal from "./Modal";

const GroupsComponent: FC = () => {
  // const groups = [
  //   {
  //     icon: <Baby className="h-12 w-12 text-sky-600" />,
  //     title: "Малыши (6 месяцев - 3 года)",
  //     description:
  //       "Занятия с участием родителей, направленные на адаптацию к воде, развитие координации и укрепление мышц.",
  //     features: [
  //       "Игровая форма обучения",
  //       "Специальное оборудование для малышей",
  //       "Тёплая вода (30-32°C)",
  //       "Продолжительность: 30 минут",
  //     ],
  //   },
  //   {
  //     icon: <Child className="h-12 w-12 text-sky-600" />,
  //     title: "Дошкольники (3-7 лет)",
  //     description:
  //       "Обучение базовым навыкам плавания, техникам дыхания и основам безопасного поведения на воде.",
  //     features: [
  //       "Группы до 6 человек",
  //       "Обучение различным стилям плавания",
  //       "Игровые элементы",
  //       "Продолжительность: 45 минут",
  //     ],
  //   },
  //   {
  //     icon: <User className="h-12 w-12 text-sky-600" />,
  //     title: "Школьники (7-14 лет)",
  //     description:
  //       "Совершенствование техники плавания, развитие выносливости и подготовка к соревнованиям.",
  //     features: [
  //       "Группы по уровню подготовки",
  //       "Все стили плавания",
  //       "Элементы спортивного плавания",
  //       "Продолжительность: 60 минут",
  //     ],
  //   },
  // ];


  const programs: Program[] = [
    {
      title: "Пузырьки",
      description: "Грудничковое плавание детки с 3мес до 2 лет",
      schedule: "ПН, ПТ: 11:00 - 12:00",
      icon: <Users className="h-6 w-6 text-blue-700" />,
      description2:
        "Возраст с 3 месяцев и до года – это второй этап в обучении плаванию наших малышей. В это время очень важно, что мама находится в бассейне вместе с малышом. Ребенок, чувствуя присутствие мамы, ее защиту и поддержку, без страха познает водную среду. А мама при совместных занятиях сможет лучше понять состояние своего ребенка, все его малейшие желания. В такие минуты мама и малыш особенно близки и получают большое удовольствие от общения.",
    },
    {
      title: "Смелые утята",
      description: "Умеющие плавать, детки от 5-8 лет",
      schedule: "Пн-Пт: 7:00 - 9:00, 19:00 - 22:00",
      icon: <Users className="h-6 w-6 text-blue-700" />,
      description2:
        "Умеющие плавать, детки от 5-8 лет «Смелые утята» (Эта группа включает в себя 10 ребятишек, которые прошли обучение базовым навыкам на индивидуальных занятиях, занимаются по единой программе и все вместе прогрессируют)  длительность 45 минут, далее прогрев в сауне",
    },
    {
      title: "Индивидуальные занятия от 3 мес до 10 лет",
      description:
        "Индивидуальное занятие в нашем центре – это больше, чем просто занятие!",
      schedule: "Пн-Пт: 10:00 - 21:00",
      icon: <Award className="h-6 w-6 text-blue-700" />,
      description2:
        "30 мин — это время, которое Ваш ребёнок проводит наедине с тренером,и занимается по индивидуальной программе, непосредственно в воде. Вы можете прийти по-раньше на 10-15 минут и самостоятельно провести разминку в сухом зале. Так же, по завершении занятия в бассейне, ребёнок может погреться в финской парной, принять душ и т.п.",
    },
    {
      title: "Соляная пещера",
      description: "Уникальный формат оздоровления всей семьи в Томске",
      schedule: "Ежедневно: 10:00 - 20:00",
      icon: <Shield className="h-6 w-6 text-blue-700" />,
      description2:
        "Соляная пещера — это специально оборудованное помещение, стены, пол и потолок которого покрыты солью. Во время сеанса в воздух распыляются мельчайшие частицы соли, создавая особый микроклимат, благотворно влияющий на здоровье.",
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
    // <section className="bg-sky-50 py-16">
    //   <div className="container mx-auto px-4">
    //     <div className="mb-12 text-center">
    //       <h2 className="mb-4 text-3xl font-bold text-sky-800 md:text-4xl">
    //         Наши группы
    //       </h2>
    //       <p className="mx-auto max-w-2xl text-lg text-gray-600">
    //         Мы предлагаем программы обучения плаванию для детей разных возрастов
    //       </p>
    //     </div>

    //     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    //       {groups.map((group, index) => (
    //         <div
    //           key={index}
    //           className="rounded-lg bg-white p-6 shadow-md transition-transform hover:-translate-y-1"
    //         >
    //           <div className="mb-4 flex justify-center">{group.icon}</div>
    //           <h3 className="mb-3 text-center text-xl font-bold text-sky-800">
    //             {group.title}
    //           </h3>
    //           <p className="mb-4 text-center text-gray-600">
    //             {group.description}
    //           </p>

    //           <ul className="space-y-2">
    //             {group.features.map((feature, i) => (
    //               <li key={i} className="flex items-center">
    //                 <svg
    //                   className="mr-2 h-5 w-5 text-sky-600"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     strokeWidth={2}
    //                     d="M5 13l4 4L19 7"
    //                   />
    //                 </svg>
    //                 <span className="text-gray-700">{feature}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Наши программы
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Программы для всех возрастов и уровней
          </h2>
          <p className="text-gray-600">
            Мы предлагаем разнообразные программы обучения плаванию,
            адаптированные под различные возрастные группы и уровни подготовки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4 mr-1 text-yellow-500" />
                <span>{program.schedule}</span>
              </div>
              <Button
                // to={RouteNames.SCHEDULE}
                onClick={() => handleProgramClick(program)}
                className="cursor-pointer inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors text-sm"
              >
                Подробнее
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
         
        >
          {selectedProgram && (
            <div className="flex space-x-4  ">
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90">
                {selectedProgram.description2}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default GroupsComponent;
