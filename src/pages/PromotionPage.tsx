import { Badge, Calendar, Clock, Tag, Users } from "lucide-react";
import { FC } from "react";
import { motion } from "framer-motion";
import BubbleComponent from "@/components/ui/Buble";

const PromotionPage: FC = () => {
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
        "Заморозка абонемента — это возможность приостановить действие абонемента на срок болезни ребенка. Для индивидуального абонемента максимальный срок заморозки составляет 30 дней, а группового 15 дней.",
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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#301EEB] to-[#9F1EEB]">
      {/* Header */}
      <BubbleComponent
        count={80}
        speed={1}
        color="#ffff"
        size={{ base: 15, sm: 25, md: 35 }}
      />
      <section className="grid grid-flow-col justify-items-center  items-center py-16 md:py-24">
        <div className="container px-4 ">
          <div className="text-center max-w-2x">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Акции и специальные предложения
            </motion.h1>
            <motion.p
              className="mx-auto mb-8 max-w-2xl text-blue-100 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Воспользуйтесь нашими выгодными предложениями и скидками на
              занятия плаванием
            </motion.p>
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
              </div>
            </div>
          ))}
        </div>
      </div>

          {/* FAQ Section */}
      <div className="container  mx-auto px-4 py-12 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
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
