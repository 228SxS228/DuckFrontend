import { FC, useState } from "react";
import { RouteNames } from "@/router";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import bykreev from "@/static/trainers/bykreev.jpg";
import kiryanov from "@/static/trainers/kiryanov.jpg";
import shiliauva from "@/static/trainers/shiliauva.jpg";
import oger from "@/static/trainers/oger.jpg";
import sandra from "@/static/trainers/sandra.jpg";
import sheremeta from "@/static/trainers/sheremeta.jpg";
import volkov from "@/static/trainers/volkov.jpg";
import zilina from "@/static/trainers/zilina.jpg";

import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Medal,
  Users,
} from "lucide-react";
import Modal from "./Modal";
interface Trainer {
  Id: number;
  TrainerName: string;
  TrainerDescription: string[];
  TrainerDescription2: string[];
  TrainerPhotoUrl: string;
  experience?: number;
  achievements?: string[];
}

const TrenerComponents: FC = () => {
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

  // Данные тренеров с дополненной информацией
  const trainers: Trainer[] = [
    {
      Id: 1,
      TrainerName: "Сергей Евгеньевич Кирьянов (инструктор по плаванию)",
      TrainerDescription: [
        "ТГПУ-Факультет физической культуры и спорта — 2021 г.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 лет до 10 лет» - 2022 год.",
        "Сертифицированный специалист по «Проведению базовых мероприятий по поддержанию жизнедеятельности (Сердечно-легочная реанимация).",
      ],
      TrainerDescription2: ["Обучение плаванию детей от 3 лет до 10 лет"],
      TrainerPhotoUrl: kiryanov,
      experience: 4,
      achievements: [
        "Один из ведущих спортсменов сборной ТГПУ по плаванию.",
        "Призер различных соревнований по плаванию.",
        "Победитель и призер областных соревнований по лыжным гонкам.",
        "Призер областных соревнований по бегу.",
        "Награжден золотым знаком отличия всероссийского физкультурно- спортивного комплекса ГТО (5 ступени).",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 лет до 10 лет» - 2022 год.",
        "Тренер по плаванию для детей от 3 лет в ПЦ «Утенок» — с 2022 года и по настоящее время.",
      ],
    },
    {
      Id: 2,
      TrainerName: "Наталья Петровна Огер (инструктор по плаванию)",
      TrainerDescription: [
        "ТГПУ – «Факультет физической культуры и спорта» 1977 год.",
        "Переподготовка в образовательном учреждении дополнительного профессионального образования «институт новых технологий в образовании по программе «Физической культуре и спорта» — 2017 год.",
        "Профессиональная переподготовка на факультете дополнительного образования в «СГУФКиС» спортивная подготовка по виду спорта (плавание) — 2021 год.",
      ],
      TrainerDescription2: ["Обучение плаванию детей от 3 лет до 10 лет"],
      TrainerPhotoUrl: oger,
      experience: 4,
      achievements: [
        "КМС по плаванию.",
        "Воспитала бронзового призера 3 этапа кубка России по плаванию.",
        "Воспитала множество чемпионов по плаванию г.Томска и Томской области.",
        "Воспитала множество спортсменов с высокими разрядами по плаванию ( 1 взрослый, КМС, МС ).",
        "Тренер по плаванию в спортивном комплексе «Кедр» — с 2000 года и по настоящее время.",
        "Тренер по плаванию для детей от 3 до 10 лет в ПЦ «Утенок» — с 2022 года и по настоящее время.",
      ],
    },
    {
      Id: 3,
      TrainerName: "Шиляева Софья Денисовна",
      TrainerDescription: [
        "ТГПУ – «Факультет физической культуры и спорта» - 2025 год.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 месяцев до 3 лет» а так же «с детьми от 3 лет и до 10 лет» 2025 год.",
      ],
      TrainerDescription2: ["Обучение плаванию детей  от 2 мес до 10 лет"],
      TrainerPhotoUrl: shiliauva,
      experience: 4,
      achievements: [
        "Выпускница МАУДО СШ имени Любови Егоровой (отделение баскетбол).",
        "Победитель и призер областных соревнований по баскетболу.",
        "Награжден золотым знаком отличия Всероссийского физкультурно – спортивного комплекса ГТО (5 ступени).",
        "Призер соревнований по плаванию на базе ТГПУ.",
        "Тренер по плаванию для детей от 3 месяцев до 10 лет в ПЦ «Утенок» -с  2019 года и по настоящее время.",
      ],
    },
    {
      Id: 4,
      TrainerName: "Алина Константиновна Жилина (инструктор по плаванию)",
      TrainerDescription: [
        "ТГПУ — Факультет физической культуры и спорта — 2019 г.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 месяцев до 2 лет» — 2021 г.",
      ],
      TrainerDescription2: ["Обучение плаванию детей от 2 мес до 10 лет"],
      TrainerPhotoUrl: zilina,
      experience: 6,
      achievements: [
        "МС по плаванию.",
        "Выпускница СДЮШОР «Янтарь» (отделение плавание).",
        "Неоднократный победитель и призер Томской области по плаванию.",
        "Неоднократный победитель и призер Всероссийских соревнований по плаванию.",
        "Обладатель рекордов Томской области по плаванию.",
        "Тренер инструктор по плаванию г.Северск — 2017 г — 2020 г.",
        "Тренер по плаванию для детей от 3 месяцев до 10 лет в ПЦ «Утенок» — 2019 г и по настоящее время.",
      ],
    },
    {
      Id: 5,
      TrainerName: "Виктория Дмитриевна Шеремета",
      TrainerDescription: [
        "Томский Аграрный Колледж — 2013 г.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 месяцев до 2 лет» — 2014 г.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 2 до 7 лет» — 2014 г.",
        "Сертифицированный специалист в направлении «Гидрореабилитация детей до 1 года с последствиями перинатального поражения ЦНС» — 2014 г.",
        "ТУСУР — 2017 год.",
      ],
      TrainerDescription2: ["Обучение плаванию детей от 2 мес до 10 лет "],
      TrainerPhotoUrl: sheremeta,
      experience: 7,
      achievements: [
        "Тренер по оздоровительному плаванию для детей с рождения — 2014 – 2017 год.",
        "Тренер по плаванию для детей от 3 месяцев до 10 лет в ПЦ «Утенок» — с 2018 г по настоящее время.",
      ],
    },
    {
      Id: 6,
      TrainerName: "Максим Сергеевич Букреев (инструктор по плаванию)",
      TrainerDescription: [
        "ТГПУ — Факультет физической культуры и спорта — 2020 г.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 лет до 10 лет» — 2023 г.",
      ],
      TrainerDescription2: ["Обучение плаванию детей от 2 лет до 10 лет"],
      TrainerPhotoUrl: bykreev,
      experience: 2,
      achievements: [
        "Участник сборной ТГПУ по плаванию",
        "Призер областных соревнований по легкой атлетике.",
        "Победитель и призер в составе школьной сборной по различным видам спорта.",
        "Награжден золотым знаком отличия всероссийского физкультурно- спортивного комплекса ГТО (5 ступени).",
        "Тренер по плаванию для детей от 3 лет до 12 лет в ПЦ «Утенок» — с сентября 2023 г и по настоящее время.",
      ],
    },
    {
      Id: 7,
      TrainerName: "Сандра Евгеньевна Сен-Ли (инструктор по плаванию)",
      TrainerDescription: [
        "УрФУ имени первого президента России Б.Н.Ельцина – 2021г.",
        "Выпускница УСЦ ВВС имени Шевелёва.",
        "Курс «Оздоровительное плавание для детей раннего возраста» 2022г.",
        "Курс «Обучение плаванию детей дошкольного и школьного возраста» 2022г.",
        "Курс «Инструктор-эксперт грудничкового плавания» 2024г.",
      ],
      TrainerDescription2: ["Обучение плаванию детей от 2 мес до 10 лет"],
      TrainerPhotoUrl: sandra,
      experience: 3,
      achievements: [
        "КМС по подводному спорту.",
        "Победитель и призёр чемпионатов и первенств ТО, СФО, Всероссийских соревнований по плаванию в ластах.",
        "Бывший член Томской области по плаванию в ластах.",
        "Индивидуальные занятия по плаванию в ластах для детей от 7 лет – 2021г.",
        "Тренер по плаванию для детей от 3х месяцев с 2022 года.",
      ],
    },
    {
      Id: 8,
      TrainerName:
        "Евгений Александрович Волков (управляющий, инструктор по плаванию)",
      TrainerDescription: [
        "ТГПУ - «Факультет физической культуры и спорта» – 2023 год .",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 лет до 10 лет» - 2018 год.",
      ],
      TrainerDescription2: ["Обучение плаванию детей от 3 лет до 10 лет"],
      TrainerPhotoUrl: volkov,
      experience: 8,
      achievements: [
        "Выпускник СДЮШОР «Янтарь» (отделение плавание).",
        "Неоднократный победитель и призер Томской области по плаванию.",
        "Неоднократный победитель и призер Всероссийских соревнований по плаванию.",
        "Неоднократный победитель и призер Всероссийских соревнований по полиатлону.",
        "Победитель и призер I летней Детско – юношеской спартакиады на кубок Топливной компании «ТВЭЛ».",
        "Победитель Кубка Сибири по плаванию за сезон спортивным стилем «дельфин» — 2012 – 2013 г.",
        "КМС по плаванию, КМС по полиатлону (спортивное восьмиборье).",
        "Обладатель различных наград фестиваля «Стальной характер».",
        "Тренер по плаванию для детей от 3 лет до 10 лет в ПЦ «Утенок» — с 2017 года и по настоящее время.",
        "Член сборной команды «Томь-Мастерс» по плаванию.",
        "Обладатель рекордов Томской области по плаванию в категории Мастерс.",
        "Победитель и призер Чемпионата Сибири в категории Мастерс – 2024-2025 год.",
        "Победитель и призер различных Сибирских соревнований в категории Мастерс по плаванию.",
        "Управляющий ПЦ «Утенок» с 2021 года.",
      ],
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
  // const trainers = [
  //   {
  //     Id: 1,
  //     TrainerName: "Сергей Евгеньевич Кирьянов",
  //     TrainerDescription:
  //       "ТГПУ-Факультет физической культуры и спорта — 2021 г.",
  //     TrainerPhotoUrl: kiryanov,
  //   },
  //   {
  //     Id: 2,
  //     TrainerName: "Наталья Петровна Огер",
  //     TrainerDescription:
  //       "ТГПУ – «Факультет физической культуры и спорта» 1977 год.",
  //     TrainerPhotoUrl: oger,
  //   },
  //   {
  //     Id: 3,
  //     TrainerName: "Мария Алексеевна Лапшина",
  //     TrainerDescription: "ТГПК направление: Физическая культура — 2019 г.",
  //     TrainerPhotoUrl: lapshina,
  //   },
  //   {
  //     Id: 4,
  //     TrainerName: "Алина Константиновна Жилина",
  //     TrainerDescription:
  //       "ТГПУ — Факультет физической культуры и спорта — 2019 г.",
  //     TrainerPhotoUrl: zilina,
  //   },
  //   {
  //     Id: 5,
  //     TrainerName: "Виктория Дмитриевна Шеремета",
  //     TrainerDescription: "Томский Аграрный Колледж — 2013 г.",
  //     TrainerPhotoUrl: sheremeta,
  //   },
  //   {
  //     Id: 6,
  //     TrainerName: "Максим Сергеевич Букреев",
  //     TrainerDescription:
  //       "ТГПУ — Факультет физической культуры и спорта — 2020 г.",
  //     TrainerPhotoUrl: bykreev,
  //   },
  //   {
  //     Id: 7,
  //     TrainerName: "Сандра Евгеньевна Сен-Ли",
  //     TrainerDescription:
  //       "УрФУ имени первого президента России Б.Н.Ельцина – 2021г.",
  //     TrainerPhotoUrl: sandra,
  //   },
  //   {
  //     Id: 8,
  //     TrainerName: "Евгений Александрович Волков",
  //     TrainerDescription:
  //       "ТГПУ — Факультет физической культуры и спорта — 2017 г.",
  //     TrainerPhotoUrl: volkov,
  //   },
  // ];

  // Анимация текста
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white via-blue-300  overflow-hidden relative flex flex-col">
      <div className="container mx-auto px-4">
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
            className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full font-bold shadow-lg"
            variants={textVariants}
          >
            <Users className="inline mr-2" size={18} />
            Наши тренеры
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white"
            variants={textVariants}
          >
            Профессиональная команда тренеров
          </motion.h2>

          <motion.p
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Наши тренеры — это опытные профессионалы с многолетним стажем работы
            и спортивными достижениями
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trainers.slice(0, 8).map((trainer, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-3 md:mb-4 border-2 md:border-4 border-yellow-400">
                <a onClick={() => handleTrainerClick(trainer)}>
                  <img
                    src={trainer.TrainerPhotoUrl}
                    alt={trainer.TrainerName}
                    className="object-cover"
                  />
                </a>
              </div>
              <h3 className="text-base md:text-xl font-bold mb-0 md:mb-1 text-white">
                {trainer.TrainerName}
              </h3>
              <p className="text-yellow-400 text-xs md:text-sm mb-1 md:mb-2">
                {trainer.TrainerDescription2}
              </p>
              {/* <p className="text-blue-100 text-xs md:text-sm">
                {trainer.experience}
              </p> */}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 text-black">
          <Button
            variant="outline"
            size="lg"
            className=" text-black border-white/30  hover:bg-yellow-400 rounded-full px-15 text-lg bg-white cursor-pointer"
          >
            <Link to={RouteNames.TRAINERS}>Все тренеры</Link>
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {selectedTrainer && (
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden">
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
            <div className="md:w-2/5 h-64 md:h-auto relative">
              <img
                src={selectedTrainer.TrainerPhotoUrl}
                alt={selectedTrainer.TrainerName}
                className="w-full h-full object-cover"
              />
              {/* Волны */}
              <div className="absolute bottom-0 left-0 right-0 h-6 hidden md:flex">
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
            <div className="md:w-3/5 p-4 md:p-6 overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                  {selectedTrainer.TrainerName}
                </h2>
              </div>

              {/* Образование */}
              <div className="mb-4 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-start">
                  <GraduationCap
                    className="mt-1 mr-3 text-blue-600 flex-shrink-0 min-w-[24px]"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-lg text-blue-800 mb-2">
                      Образование
                    </h3>
                    <ul className="space-y-2">
                      {selectedTrainer.TrainerDescription.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Достижения */}
              <div className="mb-4 p-4 bg-yellow-50 rounded-xl">
                <div className="flex items-start">
                  <Medal
                    className="mt-1 mr-3 text-yellow-600 flex-shrink-0 min-w-[24px]"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-lg text-yellow-800 mb-2">
                      Достижения
                    </h3>
                    <ul className="space-y-3">
                      {selectedTrainer.achievements?.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TrenerComponents;
