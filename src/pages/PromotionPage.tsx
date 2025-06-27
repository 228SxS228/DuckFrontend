import { Button } from "@/components/ui/button";
import { Badge, Calendar, Clock, Tag, Users } from "lucide-react";
import { FC } from "react";


const PromotionPage: FC = () => {
  // const promotions = [
  //   {
  //     title: "Первое занятие бесплатно",
  //     description: "Приходите на пробное занятие и оцените качество нашего обучения без оплаты",
  //     validUntil: "31 декабря 2023",
  //     image: "/placeholder.svg?height=300&width=500",
  //     conditions: [
  //       "Только для новых клиентов",
  //       "Необходима предварительная запись",
  //       "При себе иметь медицинскую справку",
  //     ],
  //   },
  //   {
  //     title: "Семейная скидка 15%",
  //     description: "Скидка 15% на абонементы при записи двух и более детей из одной семьи",
  //     validUntil: "Бессрочно",
  //     image: "/placeholder.svg?height=300&width=500",
  //     conditions: [
  //       "Необходимо подтверждение родства",
  //       "Скидка распространяется на абонементы от 8 занятий",
  //       "Не суммируется с другими акциями",
  //     ],
  //   },
  //   {
  //     title: "Приведи друга - получи скидку",
  //     description: "Приведите друга, и получите скидку 10% на следующий абонемент",
  //     validUntil: "Бессрочно",
  //     image: "/placeholder.svg?height=300&width=500",
  //     conditions: [
  //       "Друг должен приобрести абонемент",
  //       "Скидка действует на абонементы от 8 занятий",
  //       "Можно суммировать до 30% скидки",
  //     ],
  //   },
  //   {
  //     title: "Утренние часы со скидкой 20%",
  //     description: "Скидка 20% на все занятия с 10:00 до 14:00 в будние дни",
  //     validUntil: "31 декабря 2023",
  //     image: "/placeholder.svg?height=300&width=500",
  //     conditions: [
  //       "Действует только в будние дни",
  //       "Необходима предварительная запись",
  //       "Не суммируется с другими акциями",
  //     ],
  //   },
  //   {
  //     title: "Годовой абонемент со скидкой 25%",
  //     description: "Приобретите годовой абонемент и получите скидку 25% от стандартной стоимости",
  //     validUntil: "31 декабря 2023",
  //     image: "/placeholder.svg?height=300&width=500",
  //     conditions: [
  //       "Абонемент действует 12 месяцев с момента покупки",
  //       "Возможна рассрочка платежа",
  //       "Не суммируется с другими акциями",
  //     ],
  //   },
  //   {
  //     title: "День рождения со скидкой",
  //     description: "Скидка 20% на абонемент в течение недели до и после дня рождения ребенка",
  //     validUntil: "Бессрочно",
  //     image: "/placeholder.svg?height=300&width=500",
  //     conditions: [
  //       "Необходимо предъявить свидетельство о рождении",
  //       "Скидка действует на абонементы от 8 занятий",
  //       "Не суммируется с другими акциями",
  //     ],
  //   },
  // ]
  const promotions = [
    {
      title: "Первое занятие бесплатно",
      type: "hot",
      discount: "100% скидка",
      validUntil: "31 декабря 2023",
      duration: "Одно занятие",
      description:
        "Откройте наш центр плавания абсолютно бесплатно! Первое индивидуальное, ознакомительное без оплаты.",
      conditions:
        "Для новых клиентов. Требуется предварительная запись по телефону.",
    },
    {
      title: "Пещера",
      type: "special",
      discount: "5% скидка",
      validUntil: "15 января 2024",
      duration: "На все абонементы",
      description:
        "При покупке абонемента в день первого посещения, это посещение считается БЕСПЛАТНЫМ + Вы получаете скидку на любой абонемент «соляная пещера».",
      conditions: "Требуется предварительная запись по телефону.",
    },
    {
      title: "Приведи друга",
      type: "special",
      discount: "5% скидка",
      validUntil: "Бессрочно",
      duration: "На все абонементы",
      description:
        "Приведи друга в наш бассейн на первое бесплатное занятие и получи скидку на покупку следующего абонемента на индивидуальные или групповые занятия",
      conditions: "На 4,8,12 занятий.",
    },
    {
      title: "Первый день",
      type: "",
      discount: "5% скидка",
      validUntil: "Бессрочно",
      duration: "На все абонементы",
      description:
        "При покупке абонемента в день пробное бесплатного индивидуального занятия, Вы получаете скидку на покупку абонемента.",
      conditions: "На 4,8,12 занятий.",
    },
    {
      title: "День Рождения",
      type: "",
      discount: "5% скидка",
      validUntil: "1 марта 2024",
      duration: "На все абонементы",
      description:
        "Три дня до и три дня после дня рождения, действует скидка на покупку группового или индивидуального абонемента",
      conditions: "На 4,8,12 занятий.",
    },
    {
      title: "Приведи друга",
      type: "",
      discount: "10% скидка",
      validUntil: "Бессрочно",
      duration: "На следующий абонемент",
      description:
        "Приведите друга, и вы оба получите скидку на следующий абонемент.",
      conditions: "Друг должен приобрести абонемент минимум на 4 занятия.",
    },
    {
      title: "А мы в Утенок",
      type: "new",
      discount: "20% скидка",
      validUntil: "15 января 2024",
      duration: "На все абонементы",
      description:
        "При наличии действующего абонемента в другом бассейне и покупке абонемента в нашем центре на групповые или индивидуальные занятия, Вы получаете скидку.(скидка действует только при предъявлении действующего чека о покупке абонемента в другом бассейне)",
      conditions: "На 4,8,12 занятий.",
    },
  ];

  const faqs = [
    {
      question: "Как воспользоваться акцией «Первое занятие бесплатно»?",
      answer:
        "Для того чтобы воспользоваться акцией, необходимо записаться на пробное занятие через наш сайт или по телефону. При записи укажите, что хотите воспользоваться акцией. Предложение действует только для новых клиентов.",
    },
    {
      question: "Можно ли передать абонемент другому человеку?",
      answer:
        "Нет, абонементы являются именными и не могут быть переданы другим лицам. Это связано с тем, что программы тренировок составляются индивидуально для каждого клиента.",
    },
    {
      question: "Что такое «заморозка» абонемента?",
      answer:
        "Заморозка абонемента — это возможность приостановить действие абонемента на определенный срок. Для годового абонемента максимальный срок заморозки составляет 30 дней.",
    },
    {
      question: "Действуют ли акции на индивидуальные занятия?",
      answer:
        "Да, некоторые акции распространяются и на индивидуальные занятия. Подробную информацию вы можете получить у администратора или по телефону. Обычно скидки на индивидуальные занятия составляют от 5% до 15% в зависимости от акции.",
    },
    {
      question: "Суммируются ли скидки по разным акциям?",
      answer:
        "Нет, скидки по разным акциям не суммируются. При оплате применяется наибольшая из возможных скидок.",
    },
  ];
  return (
    // <div className="flex min-h-screen flex-col">
    //   <main className="flex-1">
    //     <section className="bg-gradient-to-b from-sky-100 to-white py-12 md:py-20">
    //       <div className="container mx-auto px-4">
    //         <div className="text-center">
    //           <h1 className="mb-6 text-3xl font-bold text-sky-800 md:text-4xl lg:text-5xl">
    //             Акции и специальные предложения
    //           </h1>
    //           <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-700">Выгодные предложения для наших клиентов</p>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="py-12">
    //       <div className="container mx-auto px-4">
    //         <div className="mb-12 rounded-lg bg-sky-50 p-6">
    //           <h2 className="mb-4 text-2xl font-bold text-sky-800">Наши текущие акции</h2>
    //           <p className="text-gray-700">
    //             В детском плавательном центре "Утенок" мы регулярно проводим различные акции и предлагаем специальные
    //             условия для наших клиентов. Следите за обновлениями на нашем сайте и в социальных сетях, чтобы не
    //             пропустить выгодные предложения.
    //           </p>
    //         </div>

    //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    //           {promotions.map((promo, index) => (
    //             <div
    //               key={index}
    //               className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1"
    //             >
    //               <div className="relative h-48 w-full">
    //                 <img
    //                 src={promo.image || "/placeholder.svg"} //???
    //                 alt={promo.title}
    //                 className="object-cover" />
    //                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    //                 <div className="absolute bottom-0 left-0 p-4">
    //                   <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-yellow-900">
    //                     Акция
    //                   </span>
    //                 </div>
    //               </div>

    //               <div className="p-6">
    //                 <h3 className="mb-2 text-xl font-bold text-sky-800">{promo.title}</h3>
    //                 <p className="mb-4 text-gray-600">{promo.description}</p>

    //                 <div className="mb-4 flex items-center text-sm text-gray-500">
    //                   <Calendar className="mr-2 h-4 w-4" />
    //                   <span>Действует до: {promo.validUntil}</span>
    //                 </div>

    //                 <div className="mb-4">
    //                   <h4 className="mb-2 font-medium text-gray-900">Условия акции:</h4>
    //                   <ul className="space-y-1 text-sm text-gray-600">
    //                     {promo.conditions.map((condition, i) => (
    //                       <li key={i} className="flex items-start">
    //                         <span className="mr-2 mt-1 text-sky-600">•</span>
    //                         <span>{condition}</span>
    //                       </li>
    //                     ))}
    //                   </ul>
    //                 </div>

    //                 <button className="w-full rounded-md bg-sky-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-sky-700">
    //                   Воспользоваться акцией
    //                 </button>
    //               </div>
    //             </div>
    //           ))}
    //         </div>

    //         <div className="mt-12 rounded-lg bg-yellow-50 p-6">
    //           <div className="grid gap-6 md:grid-cols-2">
    //             <div>
    //               <h2 className="mb-4 text-2xl font-bold text-yellow-800">Подарочные сертификаты</h2>
    //               <p className="mb-4 text-yellow-800">
    //                 Подарите своим близким возможность научиться плавать или улучшить свои навыки! Подарочные
    //                 сертификаты на занятия в нашем центре — это отличный подарок на любой праздник.
    //               </p>
    //               <ul className="mb-6 space-y-2 text-yellow-800">
    //                 <li className="flex items-start">
    //                   <Tag className="mr-2 mt-1 h-5 w-5 shrink-0 text-yellow-600" />
    //                   <span>Сертификаты на любое количество занятий</span>
    //                 </li>
    //                 <li className="flex items-start">
    //                   <Clock className="mr-2 mt-1 h-5 w-5 shrink-0 text-yellow-600" />
    //                   <span>Срок действия сертификата — 6 месяцев</span>
    //                 </li>
    //                 <li className="flex items-start">
    //                   <Users className="mr-2 mt-1 h-5 w-5 shrink-0 text-yellow-600" />
    //                   <span>Возможность оформления именного сертификата</span>
    //                 </li>
    //               </ul>
    //               <a
    //                 href="#contacts"
    //                 className="inline-flex items-center rounded-md bg-yellow-600 px-6 py-3 font-medium text-white transition-colors hover:bg-yellow-700"
    //               >
    //                 Заказать сертификат
    //               </a>
    //             </div>
    //             <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
    //               <img
    //                 src="/placeholder.svg?height=300&width=500"
    //                 alt="Подарочный сертификат"

    //                 className="object-cover"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="bg-sky-50 py-12">
    //       <div className="container mx-auto px-4">
    //         <div className="text-center">
    //           <h2 className="mb-6 text-3xl font-bold text-sky-800">Подпишитесь на рассылку</h2>
    //           <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
    //             Будьте в курсе наших акций и специальных предложений
    //           </p>

    //           <div className="mx-auto max-w-md">
    //             <form className="flex">
    //               <input
    //                 type="email"
    //                 placeholder="Ваш email"
    //                 className="w-full rounded-l-md border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
    //               />
    //               <button
    //                 type="submit"
    //                 className="rounded-r-md bg-sky-600 px-4 py-2 font-medium text-white transition-colors hover:bg-sky-700"
    //               >
    //                 Подписаться
    //               </button>
    //             </form>
    //             <p className="mt-2 text-xs text-gray-500">
    //               Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // </div>
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="grid grid-flow-col justify-items-center bg-gradient-to-r items-center from-blue-900 to-blue-700 py-16 md:py-24">
        <div className="container px-4 ">
          <div className="text-center max-w-2x">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Акции и специальные предложения
            </h1>
            <p className="text-blue-100 text-lg">
              Воспользуйтесь нашими выгодными предложениями и скидками на
              занятия плаванием
            </p>
          </div>
        </div>
      </section>

      {/* Promotions Grid */}
      <div className="container mx-auto px-4 -mt-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-blue-900">
                    {promo.title}
                  </h3>
                  {promo.type && (
                    <Badge
                      className={`${
                        promo.type === "hot"
                          ? "bg-red-100 text-red-800 border-red-200"
                          : promo.type === "new"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : "bg-blue-100 text-blue-800 border-blue-200"
                      }`}
                    >
                      {promo.type === "hot"
                        ? "Горячее предложение"
                        : promo.type === "new"
                        ? "Новинка"
                        : "Специальное предложение"}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center mb-6">
                  <Tag className="w-6 h-6 text-yellow-500 mr-2" />
                  <span className="text-3xl font-bold text-yellow-500">
                    {promo.discount}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{promo.description}</p>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">
                      Действует до: {promo.validUntil}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">{promo.duration}</span>
                  </div>

                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{promo.conditions}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full cursor-pointer">
                    Воспользоваться акцией
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full cursor-pointer"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12 mb-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Не пропустите новые акции
            </h2>
            <p className="text-gray-600 mb-8">
              Подпишитесь на нашу рассылку и получайте информацию о новых акциях
              и специальных предложениях первыми
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full cursor-pointer">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionPage;