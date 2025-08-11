import { FC } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import { Calendar, Zap, Star, Flame } from "lucide-react";

import { motion } from "framer-motion";
import BubbleComponent from "./ui/Buble";
import { LiquidGlass } from "./ui/LiquidGlass";

const PromotionsComponent: FC = () => {
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
            <LiquidGlass
              key={index}
              className="bg-white rounded-2xl p-6 border border-blue-200 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2"
              glassColor="#ffffff"
              opacity={0.7}
              hoverOpacity={0.9}
              blurStrength={10}
              borderRadius={24}
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
              <Link to={RouteNames.PROMOTION}>
                <Button className="w-full py-4 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-white hover:from-[#4020ff] hover:to-[#301EEB] rounded-xl font-bold">
                  Воспользоваться акцией
                </Button>
              </Link>
            </LiquidGlass>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default PromotionsComponent;
