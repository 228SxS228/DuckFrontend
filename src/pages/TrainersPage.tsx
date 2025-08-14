import { useState, FC } from "react";
import Modal from "../components/Modal";
import {
  GraduationCap,
  Medal,
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
import BubbleComponent from "@/components/ui/Buble";
import { LiquidGlass } from "@/components/ui/LiquidGlass";

interface Trainer {
  Id: number;
  TrainerName: string;
  TrainerDescription: string[];
  TrainerPhotoUrl: string;
  experience?:  string;
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

  // Данные тренеров с дополненной информацией
  const trainers: Trainer[] = [
    {
      Id: 1,
      TrainerName: "Сергей Евгеньевич Кирьянов",
      TrainerDescription: [
        "ТГПУ-Факультет физической культуры и спорта — 2021 г.",
        "Сертифицированный специалист по «Проведению базовых мероприятий по поддержанию жизнедеятельности (Сердечно-легочная реанимация).",
      ],
      TrainerPhotoUrl: kiryanov,
      experience: "4 года",
      achievements: [
        "Один из ведущих спортсменов сборной ТГПУ по плаванию.",
        "Призер различных соревнований по плаванию.",
        "Победитель и призер областных соревнований по лыжным гонкам.",
        "Призер областных соревнований по бегу.",
        "Награжден золотым знаком отличия всероссийского физкультурно- спортивного комплекса ГТО (5 ступени).",
        "Тренер по плаванию для детей от 3 лет в ПЦ «Утенок» — с 2022 года и по настоящее время.",
      ],
    },
    {
      Id: 2,
      TrainerName: "Наталья Петровна Огер",
      TrainerDescription: [
        "ТГПУ – «Факультет физической культуры и спорта» 1977 год.",
        "Переподготовка в образовательном учреждении дополнительного профессионального образования «институт новых технологий в образовании по программе «Физической культуре и спорта» — 2017 год.",
        "Профессиональная переподготовка на факультете дополнительного образования в «СГУФКиС» спортивная подготовка по виду спорта (плавание) — 2021 год.",
        "ТГПУ – «Факультет физической культуры и спорта» 1977 год.",
      ],
      TrainerPhotoUrl: oger,
      experience: "4 года",
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
      TrainerName: "Мария Алексеевна Лапшина",
      TrainerDescription: [
        "ТГПК направление: Физическая культура — 2019 г.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 месяцев до 2 лет» — 2022 г.",
      ],
      TrainerPhotoUrl: lapshina,
      experience: "4 года",
      achievements: [
        "КМС по плаванию.",
        "Многократный победитель и призер по плаванию в г.Томске.",
        "Победитель и призер Кузбасса по плаванию.",
        "Победитель президентских игр в Томске.",
        "Выпускник Центра водных видов спорта «Звездный» (отделение плавание).",
        "Спортивный судья по плаванию второй категории.",
        "Тренер по плаванию для детей в бассейне «Дельфин»  — 2020-2022 г.",
        "Тренер по плаванию для детей от 3 месяцев до 10 лет в ПЦ «Утенок» — с 2022 г по настоящее время.",
      ],
    },
    {
      Id: 4,
      TrainerName: "Алина Константиновна Жилина",
      TrainerDescription: [
        "ТГПУ — Факультет физической культуры и спорта — 2019 г.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 месяцев до 2 лет» — 2021 г.",
      ],
      TrainerPhotoUrl: zilina,
      experience: "6 лет",
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
      TrainerPhotoUrl: sheremeta,
      experience: "7 лет",
      achievements: [
        "Тренер по оздоровительному плаванию для детей с рождения — 2014 – 2017 год.",
        "Тренер по плаванию для детей от 3 месяцев до 10 лет в ПЦ «Утенок» — с 2018 г по настоящее время.",
      ],
    },
    {
      Id: 6,
      TrainerName: "Максим Сергеевич Букреев",
      TrainerDescription: [
        "ТГПУ — Факультет физической культуры и спорта — 2020 г.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 лет до 10 лет» — 2023 г.",
      ],
      TrainerPhotoUrl: bykreev,
      experience: "2 года",
      achievements: [
        "Участник сборной ТГПУ по плаванию",
        " Призер областных соревнований по легкой атлетике.",
        "Победитель и призер в составе школьной сборной по различным видам спорта.",
        "Награжден золотым знаком отличия всероссийского физкультурно- спортивного комплекса ГТО (5 ступени).",
        "Тренер по плаванию для детей от 3 лет до 12 лет в ПЦ «Утенок» — с сентября 2023 г и по настоящее время.",
      ],
    },
    {
      Id: 7,
      TrainerName: "Сандра Евгеньевна Сен-Ли",
      TrainerDescription: [
        "УрФУ имени первого президента России Б.Н.Ельцина – 2021г.",
        "Выпускница УСЦ ВВС имени Шевелёва.",
        "Курс «Оздоровительное плавание для детей раннего возраста» 2022г.",
        "Курс «Обучение плаванию детей дошкольного и школьного возраста» 2022г.",
        "Курс «Инструктор-эксперт грудничкового плавания» 2024г.",
      ],
      TrainerPhotoUrl: sandra,
      experience: "3 года",
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
      TrainerName: "Евгений Александрович Волков",
      TrainerDescription: [
        "ТГПУ — Факультет физической культуры и спорта — 2017 г.",
        "Сертифицированный специалист в направлении «Оздоровительное плавание с детьми от 3 лет до 7 лет» — 2018 г.",
      ],
      TrainerPhotoUrl: volkov,
      experience: "8 лет",
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
        "Управляющий ПЦ «Утенок».",
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

  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-b from-[#301EEB] to-[#9F1EEB]  py-12">
      <BubbleComponent
        count={80}
        speed={1}
        color="#ffff"
        size={{ base: 15, sm: 25, md: 35 }}
      />
      <div className="container overflow-hidden mx-auto px-4">
        {/* Header */}
        <div className="text-center  mb-16">
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
        <div className="grid  overflow-hidden gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trainers.map((trainer) => (
            <LiquidGlass
              key={trainer.Id}
              glassColor="#ffffff"
              opacity={0.55}
              blurStrength={12}
              borderRadius={32}
              className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-130 overflow-hidden">
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
                      Стаж: {trainer.experience} 
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <Button
                  onClick={() => handleTrainerClick(trainer)}
                  className="w-full text-blue-50 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
                >
                  Подробнее
                </Button>
              </div>
            </LiquidGlass>
          ))}
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
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TrainersPage;
