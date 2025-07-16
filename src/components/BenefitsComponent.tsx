import { RouteNames } from "@/router";
import { ArrowRight, Check, Waves, Users, Calendar, Heart } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import photo2 from "@/static/interior/SSV_8967.jpg";
import photo3 from "@/static/interior/SSV_8975.jpg";
import photo4 from "@/static/interior/SSV_8910.jpg";
import ImageGalleryBanner from "./ui/ImageGalleryBanner";
import { motion, Variants } from "framer-motion";
import BubleComponent from "./ui/Buble";

const AnimatedCounter: FC<{ value: number | string; suffix?: string }> = ({
  value,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value !== "number") return;

    let start = 0;
    const end = value as number;
    const duration = 1500;

    const timer = setInterval(() => {
      start += Math.ceil(end / 30);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F1EEB] to-[#301EEB]">
      {typeof value === "number" ? count : value}
      {suffix}
    </span>
  );
};

const BenefitsComponent: FC = () => {
  const images = [photo2, photo3, photo4];
  const benefits = [
    "2 бассейна по 12 метров и комфортной глубиной",
    "Игровые зоны, кафе и зоны ожидания для родителей",
    "Просторные раздевалки и душевые",
    "Мотивационная система с медалями и кубками",
    "Регулярные соревнования с подарками",
  ];

  const stats = [
    {
      value: 8,
      label: "Опытных тренеров",
      icon: <Users className="h-8 w-8 text-[#9F1EEB]" />,
    },
    {
      value: 12,
      suffix: " лет",
      label: "Опыта работы с детьми",
      icon: <Calendar className="h-8 w-8 text-[#9F1EEB]" />,
    },
    {
      value: 25000,
      suffix: "+",
      label: "Довольных родителей и детей",
      icon: <Heart className="h-8 w-8 text-[#9F1EEB]" />,
    },
  ];

  // Анимация карточек
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(159, 30, 235, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  // Анимация текста
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden py-20">
      {/* Пузырьки фона */}
      <BubleComponent
        count={80}
        speed={2}
        color="#9F1EEB"
        size={{ base: 20, sm: 30, md: 40 }}
      />

      {/* Секция статистики */}
      <div className="py-14 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl border border-blue-200 shadow-lg"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
                  {stat.icon}
                </div>
                <p className="text-5xl font-extrabold mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xl font-bold text-[#301EEB]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Основная секция с фото и описанием */}
      <div className=" container  mx-auto py-16 relative z-10">
        <motion.div
          className="inline-flex text-center max-w-3xl mx-auto mb-16 px-5 py-3 bg-gradient-to-r from-[#9F1EEB] to-[#301EEB] text-white rounded-full text-base font-bold shadow-lg"
          variants={textVariants}
        >
          <Waves className="h-5 w-5 mr-2" />О нашем центре
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-transparent bg-clip-text"
          variants={textVariants}
        >
          Современный центр плавания для детей
        </motion.h2>

        <motion.p
          className="text-xl text-[#1e293b] mb-8 leading-relaxed font-medium"
          variants={textVariants}
        >
          Мы обучаем плаванию детей от 3 месяцев до 10 лет по уникальной
          методике, превращая каждый урок в увлекательное приключение. Наши
          современные бассейны оснащены системами глубокой очистки и поддержания
          идеальной температуры воды.
        </motion.p>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <ImageGalleryBanner images={images} />
            </div>

            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                className="mb-10 p-6 rounded-2xl bg-white border border-blue-200 shadow-lg"
                variants={textVariants}
              >
                <h3 className="text-2xl font-bold text-[#301EEB] mb-6 flex items-center">
                  <Waves className="mr-3 text-[#9F1EEB]" size={28} />
                  Наши преимущества:
                </h3>
                <ul className="space-y-4">
                  {benefits.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start p-4 rounded-xl bg-blue-50 border border-blue-100"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 5px 15px rgba(159, 30, 235, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#EBA31E] flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg font-medium text-[#1e293b]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={textVariants}>
                <Button
                  asChild
                  size="lg"
                  className="text-lg font-bold py-7 px-10 rounded-full bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#f0b84d] hover:to-[#EBA31E] text-black shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Link to={RouteNames.SCHEDULE}>
                    <span>Посмотреть расписание</span>
                    <ArrowRight className="ml-4 h-6 w-6" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsComponent;