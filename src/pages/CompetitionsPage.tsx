import { FC } from "react";
import { Award, Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CompetitionsPage: FC = () => {
  const upcomingCompetitions = [
    {
      title: "Ежегодный Кубок ПЦ «Утенок» II этап (финал)",
      date: "Ориентировочно 20.10 – 30.10 каждого года",
      time: "18:00 - 20:00",
      program:
        "Задержка дыхания, 12 метров кроль на животе, 12 метров кроль на спине.",
      ageGroups: [
        "3 – 4 года ласты",
        "5 лет ласты",
        "6 лет ласты",
        "7-8 лет",
        "7-8 лет",
      ],
      description:
        "Финал Кубка «Утенка» это завершающий этап соревнований, где по сумме двух этапов выявляются лучшие детки по итогам прошедшего года, все участники получают памятные призы, победители и призеры получают кубки, медали и множество подарков от нас и наших спонсоров.ВАЖНО УЧАСТВОВАТЬ В ДВУХ ЭТАПАХ. ( по отдельности на каждом этапе тоже выявляются победители и призеры которые получают дипломы и медали).",
      image: "/src/static/DSC_2379.jpg",
      status: "Ожидается",
    },
    {
      title: "Новогодние праздники",
      date: "Ориентировочно 17.12 – 25.12 каждого года",
      time: "18:00 - 20:00",
      program:
        "Задержка дыхания, 12 метров кроль на животе, 12 метров кроль на спине.",
      ageGroups: ["3 мес – 2 года", "3-5 лет", "5-9 лет плавающие"],
      description:
        "Праздничные группы для разных возрастов с увлекательной программой сказочного мира с аниматорами в зале. Далее водные развлекательные игры.Всем маленьким гостям подарки от Деда Мороза и его друзей.Профессиональные фотографии с праздника. Подарки каждому малышу. Розыгрыш подарков родителям",
      image: "/src/static/DSC_8626.jpg",
      status: "Ожидается",
    },
  ];

  const pastCompetitions = [
    {
      title: "Ежегодный Кубок ПЦ «Утенок» I этап ",
      date: "20.03-05.04 каждого года",
      location: 'Бассейн "Утенок"',
      results:
        "Наши воспитанники завоевали 5 золотых, 7 серебряных и 10 бронзовых медалей",
      image: "/src/static/DSC_1425.jpg",
    },
    {
      title: "День Рождения «Утенка»",
      date: "Ориентировочно 15.06 – 20.06",
      location: 'Бассейн "Утенок"',
      results:
        "Каждый год наша команда грандиозно отмечает День Рождения «Утенка», дарит множество подарков, проводит розыгрышы для взрослых, устраивает развлекательные программы для деток разных возрастов на суше и в воде.",
      image: "/src/static/DSC_2379.jpg", // Заменил на реальное изображение
    },
  ];

  // Анимация для карточек
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen pt-15">
      <section className="container overflow-hidden mx-auto px-4">
        <div className="container px-4">
          <div className="text-center max-w-2x">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Соревнования
            </motion.h1>
            <motion.p
              className="mx-auto mb-8 max-w-2xl text-blue-100 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Информация о предстоящих и прошедших соревнованиях в детском
              плавательном центре "Утенок"
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Предстоящие соревнования
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {upcomingCompetitions.map((competition, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -5 }}
                >
                  {/* Контейнер с фиксированным соотношением сторон */}
                  <div className="relative pb-[56.25%]">
                    {" "}
                    {/* 16:9 соотношение */}
                    <img
                      src={competition.image}
                      alt={competition.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          competition.status.includes("Регистрация открыта")
                            ? "bg-green-400 text-green-900"
                            : "bg-yellow-400 text-yellow-900"
                        }`}
                      >
                        {competition.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-sky-800">
                      {competition.title}
                    </h3>

                    <div className="mb-4 space-y-3">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-sky-600 flex-shrink-0" />
                        <span className="text-gray-700">
                          {competition.date}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-sky-600 flex-shrink-0" />
                        <span className="text-gray-700">
                          {competition.time}
                        </span>
                      </div>
                      <div className="flex">
                        <Users className="mr-2 mt-0.5 h-5 w-5 text-sky-600 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 font-medium mb-1">
                            Возрастные группы:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {competition.ageGroups.map((age, i) => (
                              <span
                                key={i}
                                className="inline-block rounded-full bg-sky-100 px-2 py-0.5 text-xs text-sky-800"
                              >
                                {age}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div>
                          <p className="text-gray-700 font-medium mb-1">
                            Программа:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            <span className="inline-block rounded-full bg-sky-100 px-2 py-0.5 text-xs text-sky-800">
                              {competition.program}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                      {competition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12 rounded-lg bg-sky-50 p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-sky-800">
              Как принять участие в соревнованиях
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-4 text-gray-700">
                  Для участия в соревнованиях необходимо:
                </p>
                <ul className="mb-6 space-y-3 text-gray-700">
                  {[
                    'Быть воспитанником центра "Утенок" или иметь приглашение (для открытых соревнований)',
                    "Иметь медицинскую справку о допуске к соревнованиям (действительна 6 месяцев)",
                    "Заполнить заявку на участие и оплатить стартовый взнос (если предусмотрен)",
                    "Прийти на соревнования в указанное время с необходимым снаряжением",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-sky-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-sky-700 font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="#contacts"
                  className="cursor-pointer inline-flex items-center rounded-md bg-sky-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-700 shadow-md hover:shadow-lg"
                >
                  Подать заявку
                </Link>
              </div>
              <div className="relative rounded-xl overflow-hidden border-2 border-sky-100 bg-gradient-to-r from-sky-100 to-blue-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="bg-sky-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-sky-700" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-800 mb-2">
                    Регистрация открыта
                  </h3>
                  <p className="text-sky-700 mb-4">На ближайшие соревнования</p>
                  <div className="inline-block bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Успейте записаться!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-white">
              Прошедшие соревнования
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {pastCompetitions.map((competition, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative pb-[56.25%]">
                    {" "}
                    {/* Фиксированное соотношение */}
                    <img
                      src={competition.image}
                      alt={competition.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-800">
                        Завершено
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-bold text-sky-800">
                      {competition.title}
                    </h3>
                    <div className="mb-3 space-y-1">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="mr-2 h-4 w-4 text-sky-600 flex-shrink-0" />
                        <span>{competition.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="mr-2 h-4 w-4 text-sky-600 flex-shrink-0" />
                        <span>{competition.location}</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Trophy className="mr-2 mt-1 h-5 w-5 text-sky-600 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">
                        {competition.results}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-sky-800">
                Наши достижения
              </h2>
              <p className="mb-6 text-gray-700">
                Воспитанники детского плавательного центра "Утенок" регулярно
                участвуют в соревнованиях различного уровня и показывают
                отличные результаты. Мы гордимся достижениями наших юных
                спортсменов!
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Более 100 медалей за 2022 год",
                    description:
                      "Наши воспитанники завоевали более 100 медалей различного достоинства на соревнованиях городского и областного уровня.",
                  },
                  {
                    title: "5 воспитанников в сборной города",
                    description:
                      "Пятеро наших воспитанников вошли в состав сборной города по плаванию и представляют его на областных соревнованиях.",
                  },
                  {
                    title: "Победители городской спартакиады",
                    description:
                      'Команда центра "Утенок" стала победителем городской спартакиады по плаванию среди детских спортивных школ и клубов.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-sky-50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-sky-100 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="h-5 w-5 text-sky-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-700 mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Награждение победителей",
                "Юные пловцы с медалями",
                "Команда на соревнованиях",
                "Кубок победителей",
              ].map((alt, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-xl overflow-hidden border-2 border-sky-100 bg-gradient-to-r from-sky-50 to-blue-100"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative pb-[100%]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="bg-sky-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Trophy className="h-6 w-6 text-sky-700" />
                        </div>
                        <span className="text-sky-700 font-medium">{alt}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CompetitionsPage;
