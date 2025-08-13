import { FC } from "react";
import { Shield, Heart, Clock, Star, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { RouteNames } from "@/router";
import ImageGalleryBanner from "./ui/ImageGalleryBanner";
import photo2 from "@/static/solinai_pehera_2-768x1151.jpg";
import photo3 from "@/static/solinai_pehera_4-683x1024.jpg";

import { LiquidGlass } from "./ui/LiquidGlass";
import { motion, Variants } from "framer-motion";
import BubbleComponent from "./ui/Buble";

const images = [photo2, photo3];

const SaltCaveComponent: FC = () => {
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
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
      <BubbleComponent
        count={80}
        speed={2}
        color="#9F1EEB"
        size={{ base: 20, sm: 30, md: 40 }}
      />
      <LiquidGlass
        glassColor="#ffffff"
        opacity={0.15}
        blurStrength={10}
        borderRadius={32}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Изображение */}
          <div className="relative mt-2 h-[700px] rounded-3xl overflow-hidden">
            <ImageGalleryBanner
              images={images}
              interval={4000}
              height="h-full"
            />
            <div className="absolute inset-0" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <div className="inline-block px-4 py-2 mb-3 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black font-bold rounded-full">
                Оздоровление
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                Соляная пещера
              </h3>
            </div>
          </div>

          {/* Контент с эффектом Liquid Glass */}
          <div className="p-6 md:p-8 h-full">
            <motion.h3
              className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-transparent bg-clip-text"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Оздоровительные сеансы в соляной пещере
            </motion.h3>

            <motion.p
              className="text-lg text-blue-900 mb-8 leading-relaxed font-medium"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Соляная пещера — это специально оборудованное помещение, стены,
              пол и потолок которого покрыты солью. С удобными креслами,
              приятной музыкой и большим телевизором. Во время сеанса в воздух
              распыляются мельчайшие частицы соли, создающие оздоровителный
              микроклимат для вашего организма.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Shield className="h-6 w-6" />,
                  text: "Укрепление иммунитета",
                },
                {
                  icon: <Leaf className="h-6 w-6" />,
                  text: "Улучшение общего состояния",
                },
                {
                  icon: <Star className="h-6 w-6" />,
                  text: "Снятие стресса и усталости",
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  text: "Оздоровление кожи и дыхания",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start p-4 rounded-xl bg-blue-50 border border-blue-200"
                  whileHover={{
                    backgroundColor: "#eff6ff",
                  }}
                  transition={{ duration: 0.3 }}
                  variants={textVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#EBA31E] to-[#d6940c] flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <span className="text-blue-900 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center text-lg text-blue-800 mb-8 font-medium"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Clock className="h-6 w-6 mr-3 text-[#EBA31E] flex-shrink-0" />
              <span>
                <strong>Сеансы:</strong> ежедневно с 10:00 до 20:00
                <br />
                <strong>Продолжительность:</strong> 40 минут
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to={RouteNames.SALTCAVE}>
                <Button
                  variant="outline"
                  className="py-6 px-8 text-lg font-bold border-2 border-[#EBA31E] text-blue-900 hover:bg-[#EBA31E]/10 rounded-full"
                >
                  Подробнее
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </LiquidGlass>
    </section>
  );
};

export default SaltCaveComponent;
