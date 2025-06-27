import { FC } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import { Calendar } from "lucide-react";


const PromotionsComponent: FC = () => {

    const promotions = [
      {
        title: "Первое занятие бесплатно",
        type: "hot",
        discount: "100% скидка",
        validUntil: "Бессрочно",
        description:
          "Откройте наш центр плавания абсолютно бесплатно! Первое индивидуальное, ознакомительное без оплаты.",
      },
      {
        title: "Пещера",
        type: "special",
        discount: "5% скидка",
        validUntil: "Бессрочно",
        description:
          "При покупке абонемента в день первого посещения, это посещение считается БЕСПЛАТНЫМ + Вы получаете скидку на любой абонемент «соляная пещера»",
      },
      {
        title: "Первый день",
        type: "special",
        discount: "5% скидка",
        validUntil: "Бессрочно",
        description:
          "При покупке абонемента в день пробное бесплатного индивидуального занятия, Вы получаете скидку на покупку абонемента",
      },
      {
        title: "День Рождения",
        type: "special",
        discount: "5% скидка",
        validUntil: "Бессрочно",
        description:
          "Три дня до и три дня после дня рождения, действует скидка на покупку группового или индивидуального абонемента",
      },
      {
        title: "А мы в Утенок",
        type: "special",
        discount: "20% скидка",
        validUntil: "Бессрочно",
        description:
          "При наличии действующего абонемента в другом бассейне и покупке абонемента в нашем центре на групповые или индивидуальные занятия, Вы получаете скидку.(скидка действует только при предъявлении действующего чека о покупке абонемента в другом бассейне)",
      },
      {
        title: "Пещера",
        type: "special",
        discount: "5% скидка",
        validUntil: "Бессрочно",
        description:
          "При покупке абонемента в день первого посещения, это посещение считается БЕСПЛАТНЫМ + Вы получаете скидку на любой абонемент «соляная пещера»",
      },
    ];

    return (
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 mb-4 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Специальные предложения
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Акции и скидки
            </h2>
            <p className="text-gray-600">
              Воспользуйтесь нашими специальными предложениями и начните занятия
              плаванием на выгодных условиях
            </p>
          </div>

          <div className="grid mx-auto md:grid-cols-2 gap-[10vw]">
            {promotions.slice(0, 2).map((promo, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8  transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-1">
                      {promo.title}
                    </h3>
                    <p className="text-2xl font-bold text-yellow-500">
                      {promo.discount}
                    </p>
                  </div>
                  {promo.type && (
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        promo.type === "hot"
                          ? "bg-red-100 text-red-800"
                          : promo.type === "new"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {promo.type === "hot"
                        ? "Горячее предложение"
                        : promo.type === "new"
                        ? "Новинка"
                        : "Специальное предложение"}
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1 text-yellow-500" />
                  <span>Действует до: {promo.validUntil}</span>
                </div>
                <Button className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-full cursor-pointer">
                  Воспользоваться акцией
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={RouteNames.PROMOTION}>
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-100 rounded-full px-8 cursor-pointer"
              >
                Все акции
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
};

export default PromotionsComponent;