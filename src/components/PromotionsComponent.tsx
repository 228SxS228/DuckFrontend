import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import { Calendar } from "lucide-react";
import { Input } from "./ui/input";
import Modal from "./Modal";

const PromotionsComponent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenClick = () => setIsModalOpen(true);


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
    <section className="py-20 bg-blue-100 overflow-hidden relative flex flex-col">
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
              <Button
                onClick={handleOpenClick}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-full cursor-pointer"
              >
                Воспользоваться акцией
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to={RouteNames.PROMOTION}>
            <Button
              variant="outline"
              className="text-black border-white/30  hover:bg-yellow-400 rounded-full px-15 text-lg bg-white cursor-pointer"
            >
              Все акции
            </Button>
          </Link>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className=" rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            Оставьте контактные данные, мы перезвоним Вам
          </h2>
          <div className="space-y-6 mb-6">
            <Input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="text"
              placeholder="Ваше имя"
            />
            <Input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="tel"
              placeholder="Ваш телефон"
            />
          </div>
          <Button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform duration-300">
            Оставить заявку
          </Button>
        </div>
        <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100">
          Нажимая кнопку, вы соглашаетесь с{" "}
          <a href="#" className="text-blue-600 hover:underline">
            политикой конфиденциальности
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default PromotionsComponent;
