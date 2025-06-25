import { FC } from "react";
import { Award, Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CompetitionsPage: FC = () => {
  const upcomingCompetitions = [
    {
      title: "Весенние старты",
      date: "15 апреля 2023",
      time: "10:00 - 14:00",
      location: 'Бассейн "Утенок", ул. Примерная, 123',
      ageGroups: ["3-5 лет", "6-8 лет", "9-11 лет", "12-14 лет"],
      description:
        "Традиционные соревнования для воспитанников нашего центра. Участники будут соревноваться в различных стилях плавания в своих возрастных категориях.",
      image: "/placeholder.svg?height=300&width=500",
      status: "Регистрация открыта",
    },
    {
      title: "Городской чемпионат по плаванию среди детей",
      date: "20 мая 2023",
      time: "09:00 - 17:00",
      location: "Городской спортивный комплекс, ул. Спортивная, 45",
      ageGroups: ["6-8 лет", "9-11 лет", "12-14 лет"],
      description:
        "Ежегодные городские соревнования по плаванию среди детей. Наш центр традиционно выставляет команду участников. Победители получат медали и ценные призы.",
      image: "/placeholder.svg?height=300&width=500",
      status: "Регистрация открыта",
    },
    {
      title: 'Летний кубок "Утенка"',
      date: "10 июня 2023",
      time: "11:00 - 15:00",
      location: 'Бассейн "Утенок", ул. Примерная, 123',
      ageGroups: ["3-5 лет", "6-8 лет", "9-11 лет", "12-14 лет"],
      description:
        "Соревнования для воспитанников нашего центра, посвященные началу летних каникул. В программе различные дистанции и эстафеты.",
      image: "/placeholder.svg?height=300&width=500",
      status: "Скоро открытие регистрации",
    },
  ];

  const pastCompetitions = [
    {
      title: "Зимние старты",
      date: "15 декабря 2022",
      location: 'Бассейн "Утенок"',
      results:
        "Наши воспитанники завоевали 5 золотых, 7 серебряных и 10 бронзовых медалей",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Осенний кубок",
      date: "20 октября 2022",
      location: 'Бассейн "Утенок"',
      results: "Команда центра заняла первое место в общем зачете",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Городской чемпионат",
      date: "5 мая 2022",
      location: "Городской спортивный комплекс",
      results: "Наши воспитанники завоевали 3 золотых и 5 серебряных медалей",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="grid grid-flow-col justify-items-center bg-gradient-to-r items-center from-blue-900 to-blue-700 py-16 md:py-24">
          <div className="container px-4">
            <div className="text-center max-w-2x">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Соревнования
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-blue-100 text-lg">
                Информация о предстоящих и прошедших соревнованиях в детском
                плавательном центре "Утенок"
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-sky-800">
                Предстоящие соревнования
              </h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcomingCompetitions.map((competition, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 w-full">
                      <img
                        src={competition.image || "/placeholder.svg"}
                        alt={competition.title}
                        className="object-cover"
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

                      <div className="mb-4 space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="mr-2 h-4 w-4 text-sky-600" />
                          <span>{competition.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="mr-2 h-4 w-4 text-sky-600" />
                          <span>{competition.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="mr-2 h-4 w-4 text-sky-600" />
                          <span>{competition.location}</span>
                        </div>
                        <div className="flex items-start text-sm text-gray-600">
                          <Users className="mr-2 mt-1 h-4 w-4 shrink-0 text-sky-600" />
                          <div>
                            <span className="font-medium">
                              Возрастные группы:
                            </span>
                            <div className="mt-1 flex flex-wrap gap-1">
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
                      </div>

                      <p className="mb-4 text-sm text-gray-600">
                        {competition.description}
                      </p>

                      <Button className="cursor-pointer w-full rounded-md bg-sky-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-sky-700">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 rounded-lg bg-sky-50 p-6">
              <h2 className="mb-4 text-2xl font-bold text-sky-800">
                Как принять участие в соревнованиях
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-gray-700">
                    Для участия в соревнованиях необходимо:
                  </p>
                  <ul className="mb-6 space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-sky-600">1.</span>
                      <span>
                        Быть воспитанником центра "Утенок" или иметь приглашение
                        (для открытых соревнований)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-sky-600">2.</span>
                      <span>
                        Иметь медицинскую справку о допуске к соревнованиям
                        (действительна 6 месяцев)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-sky-600">3.</span>
                      <span>
                        Заполнить заявку на участие и оплатить стартовый взнос
                        (если предусмотрен)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-sky-600">4.</span>
                      <span>
                        Прийти на соревнования в указанное время с необходимым
                        снаряжением
                      </span>
                    </li>
                  </ul>
                  <Link
                    to="#contacts"
                    className="cursor-pointer inline-flex items-center rounded-md bg-sky-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-700"
                  >
                    Подать заявку
                  </Link>
                </div>
                <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Соревнования по плаванию"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-sky-800">
                Прошедшие соревнования
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {pastCompetitions.map((competition, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-white shadow-md"
                  >
                    <div className="relative h-40 w-full">
                      <img
                        src={competition.image || "/placeholder.svg"}
                        alt={competition.title}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold text-sky-800">
                        {competition.title}
                      </h3>
                      <div className="mb-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="mr-2 h-4 w-4 text-sky-600" />
                          <span>{competition.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="mr-2 h-4 w-4 text-sky-600" />
                          <span>{competition.location}</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Trophy className="mr-2 mt-1 h-4 w-4 shrink-0 text-sky-600" />
                        <p className="text-sm text-gray-600">
                          {competition.results}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sky-50 py-12">
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

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="mr-3 mt-1 h-6 w-6 shrink-0 text-sky-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Более 100 медалей за 2022 год
                      </h3>
                      <p className="text-gray-700">
                        Наши воспитанники завоевали более 100 медалей различного
                        достоинства на соревнованиях городского и областного
                        уровня.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="mr-3 mt-1 h-6 w-6 shrink-0 text-sky-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        5 воспитанников в сборной города
                      </h3>
                      <p className="text-gray-700">
                        Пятеро наших воспитанников вошли в состав сборной города
                        по плаванию и представляют его на областных
                        соревнованиях.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="mr-3 mt-1 h-6 w-6 shrink-0 text-sky-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Победители городской спартакиады
                      </h3>
                      <p className="text-gray-700">
                        Команда центра "Утенок" стала победителем городской
                        спартакиады по плаванию среди детских спортивных школ и
                        клубов.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 overflow-hidden rounded-lg shadow-md md:h-48">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Награждение победителей"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-lg shadow-md md:h-48">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Юные пловцы с медалями"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-lg shadow-md md:h-48">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Команда на соревнованиях"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-lg shadow-md md:h-48">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Кубок победителей"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompetitionsPage;
