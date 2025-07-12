import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import { Calendar, Zap, Star, Flame } from "lucide-react";
import { Input } from "./ui/input";
import Modal from "./Modal";
import { motion } from "framer-motion";
import BubbleComponent from "./ui/Buble";

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
      icon: <Zap className="h-6 w-6" />,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Соляная пещера",
      type: "special",
      discount: "5% скидка",
      validUntil: "Бессрочно",
      description:
        "При покупке абонемента в день первого посещения, это посещение считается БЕСПЛАТНЫМ + Вы получаете скидку на любой абонемент «соляная пещера»",
      icon: <Star className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-500",
    },
    // {
    //   title: "Первый день",
    //   type: "special",
    //   discount: "5% скидка",
    //   validUntil: "Бессрочно",
    //   description:
    //     "При покупке абонемента в день пробное бесплатного индивидуального занятия, Вы получаете скидку на покупку абонемента",
    //   icon: <Gift className="h-6 w-6" />,
    //   color: "from-blue-500 to-cyan-500",
    // },
    // {
    //   title: "День Рождения",
    //   type: "special",
    //   discount: "5% скидка",
    //   validUntil: "Бессрочно",
    //   description:
    //     "Три дня до и три дня после дня рождения, действует скидка на покупку группового или индивидуального абонемента",
    //   icon: <Calendar className="h-6 w-6" />,
    //   color: "from-pink-500 to-rose-500",
    // },
    {
      title: "А мы в Утенок",
      type: "special",
      discount: "20% скидка",
      validUntil: "Бессрочно",
      description:
        "При наличии действующего абонемента в другом бассейне и покупке абонемента в нашем центре на групповые или индивидуальные занятия, Вы получаете скидку.",
      icon: <Flame className="h-6 w-6" />,
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Пузырьки фона */}
      <BubbleComponent
        count={80}
        speed={2}
        color="#9F1EEB"
        size={{ base: 20, sm: 30, md: 40 }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full font-bold shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Специальные предложения
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-transparent bg-clip-text">
              Акции и скидки
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-[#301EEB] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Воспользуйтесь нашими специальными предложениями и начните занятия
            плаванием на выгодных условиях
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 border border-blue-200 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${promo.color} flex items-center justify-center mr-4`}
                  >
                    {promo.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-1">
                      {promo.title}
                    </h3>
                    <p className="text-2xl font-bold text-[#EBA31E]">
                      {promo.discount}
                    </p>
                  </div>
                </div>

                {promo.type && (
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      promo.type === "hot"
                        ? "bg-gradient-to-r from-red-100 to-orange-100 text-red-800"
                        : "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800"
                    }`}
                  >
                    {promo.type === "hot"
                      ? "Горячее предложение"
                      : "Специальное предложение"}
                  </div>
                )}
              </div>

              <p className="text-gray-600 mb-6">{promo.description}</p>

              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar className="h-4 w-4 mr-2 text-[#EBA31E]" />
                <span>Действует до: {promo.validUntil}</span>
              </div>

              <Button
                onClick={handleOpenClick}
                className="w-full py-4 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white hover:from-[#4020ff] hover:to-[#301EEB] rounded-xl font-bold"
              >
                Воспользоваться акцией
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to={RouteNames.PROMOTION}>
            <Button className="py-5 px-10 text-lg font-bold bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#f0b84d] hover:to-[#EBA31E] text-black rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Все акции
            </Button>
          </Link>
        </motion.div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="rounded-3xl shadow-2xl w-full max-w-xl"
      >
        <div className="p-8 bg-gradient-to-b from-[#301EEB] to-[#9F1EEB] text-white rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Забронируйте акционное предложение
          </h2>

          <div className="space-y-6 mb-8">
            <Input
              className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EBA31E] text-white placeholder-white/70 transition-all"
              type="text"
              placeholder="Ваше имя"
            />
            <Input
              className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EBA31E] text-white placeholder-white/70 transition-all"
              type="tel"
              placeholder="Ваш телефон"
            />
          </div>

          <Button
            className="w-full py-5 text-lg font-bold bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#f0b84d] hover:to-[#EBA31E] text-black rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            onClick={handleCloseModal}
          >
            Забронировать акцию
          </Button>

          <div className="mt-6 text-center text-sm text-white/70">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a href="#" className="text-[#EBA31E] hover:underline font-medium">
              политикой конфиденциальности
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default PromotionsComponent;
