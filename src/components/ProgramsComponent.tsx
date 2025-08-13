import { FC } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import {
  ArrowDownToLine,
  MessageSquare,
  Users,
  User,
  Waves,
} from "lucide-react";
import DuckComponent from "./DuckComponent";
import { motion } from "framer-motion";

import { LiquidGlass } from "./ui/LiquidGlass";
import BubbleComponent from "./ui/Buble";

const ProgramsComponent: FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 md:py-20 overflow-hidden relative flex flex-col bg-gradient-to-b from-[#1a1466] to-[#301EEB]">
      <BubbleComponent
        count={80}
        speed={2}
        color="#9F1EEB"
        size={{ base: 20, sm: 30, md: 40 }}
      />
      {/* Плавающие утята */}
      <motion.div
        className="absolute top-20 left-10 z-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <DuckComponent color="#EBA31E" size="responsive" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 z-10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <DuckComponent color="#9F1EEB" size="responsive" />
      </motion.div>

      <div className="container px-4 mx-auto z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 mb-6 bg-[#EACBBE] text-[#301EEB] rounded-full font-bold shadow-lg border-2 border-[#EBA31E]"
            variants={textVariants}
          >
            <Waves className="mr-2 text-[#9F1EEB]" size={20} />
            <span>Детские бассейны</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white"
            variants={textVariants}
          >
            <span className="text-[#EBA31E] font-serif">У</span>тенок &
            <span className="text-[#9F1EEB] font-serif"> У</span>тенок ПРО
          </motion.h2>

          <motion.p
            className="text-xl text-[#EACBBE] max-w-2xl mx-auto font-light"
            variants={textVariants}
          >
            Два современных мира плавания для вашего малыша
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Утенок */}
          <LiquidGlass
            glassColor="rgba(15, 15, 35, 0.7)"
            opacity={1}
            hoverOpacity={1}
            blurStrength={10}
            borderRadius={24}
            borderWidth={2}
            borderColor="#EBA31E"
            className="h-full rounded-3xl p-6 transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EBA31E] to-[#d6940c] flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Басейн "Утенок"
                </h3>
                <div className="w-20 h-1 bg-[#EBA31E] mt-2 rounded-full"></div>
              </div>
            </div>

            <p className="text-[#EACBBE] text-base mb-6 px-4">
              Просторный мир с игровой комнатой, кафе и соляной пещерой
            </p>

            {/* Анимированный утенок в воде */}
            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-[#301EEB] opacity-20"></div>
            <motion.div
              className="absolute bottom-6 left-6"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <DuckComponent color="#9F1EEB" size="responsive" />
            </motion.div>

            <div className="space-y-6 mb-6">
              {/* Групповые занятия */}
              <div className="bg-[#1a1466] rounded-xl p-5 border border-[#EBA31E]/30">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 mr-3 text-[#EBA31E]" />
                  <h4 className="font-bold text-white text-xl">
                    Групповые занятия
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">Разовое посещение</span>
                    <span className="font-bold text-[#EBA31E] text-lg">
                      850 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">
                      Абонемент (4 занятия)
                    </span>
                    <span className="font-bold text-[#EBA31E] text-lg">
                      3140 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#EACBBE]">
                      Абонемент (8 занятий)
                    </span>
                    <span className="font-bold text-[#EBA31E] text-lg">
                      5960 ₽
                    </span>
                  </div>
                </div>
              </div>

              {/* Индивидуальные занятия */}
              <div className="bg-[#1a1466] rounded-xl p-5 border border-[#9F1EEB]/30">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 mr-3 text-[#9F1EEB]" />
                  <h4 className="font-bold text-white text-xl">
                    Индивидуальные занятия (2 тренера)
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">Разовое занятие</span>
                    <span className="font-bold text-[#9F1EEB] text-lg">
                      1600 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">
                      Абонемент (4 занятия)
                    </span>
                    <span className="font-bold text-[#9F1EEB] text-lg">
                      5950 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">
                      Абонемент (8 занятий)
                    </span>
                    <span className="font-bold text-[#9F1EEB] text-lg">
                      10900 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#EACBBE]">
                      Абонемент (12 занятий)
                    </span>
                    <span className="font-bold text-[#9F1EEB] text-lg">
                      15900 ₽
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link to={RouteNames.SCHEDULE}>
              <Button className="w-full mt-4 py-5 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] hover:from-[#d6940c] hover:to-[#EBA31E] text-gray-800 text-lg font-bold rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all group">
                Записаться в Утенок
              </Button>
            </Link>
          </LiquidGlass>

          {/* Утенок ПРО */}
          <LiquidGlass
            glassColor="rgba(15, 15, 35, 0.7)"
            opacity={1}
            hoverOpacity={1}
            blurStrength={10}
            borderRadius={24}
            borderWidth={2}
            borderColor="#9F1EEB"
            className="h-full rounded-3xl p-6 transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#9F1EEB] to-[#7a17b8] flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                <ArrowDownToLine className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Утенок «ПРО»</h3>
                <div className="w-20 h-1 bg-[#9F1EEB] mt-2 rounded-full"></div>
              </div>
            </div>

            <p className="text-[#EACBBE] text-base mb-6 px-4">
              Премиум пространство с парными и индивидуальным подходом
            </p>

            {/* Анимированный утенок в воде */}
            <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-[#301EEB] opacity-20"></div>
            <motion.div
              className="absolute bottom-6 right-6"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <DuckComponent color="#EBA31E" size="responsive" />
            </motion.div>

            <div className="space-y-6 mb-6">
              {/* Групповые занятия */}
              <div className="bg-[#1a1466] rounded-xl p-5 border border-[#EBA31E]/30">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 mr-3 text-[#EBA31E]" />
                  <h4 className="font-bold text-white text-xl">
                    Групповые занятия
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">Разовое посещение</span>
                    <span className="font-bold text-[#EBA31E] text-lg">
                      1 080 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">
                      Абонемент (4 занятия)
                    </span>
                    <span className="font-bold text-[#EBA31E] text-lg">
                      3940 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#EACBBE]">
                      Абонемент (8 занятий)
                    </span>
                    <span className="font-bold text-[#EBA31E] text-lg">
                      7560 ₽
                    </span>
                  </div>
                </div>
              </div>

              {/* Индивидуальные занятия */}
              <div className="bg-[#1a1466] rounded-xl p-5 border border-[#9F1EEB]/30">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 mr-3 text-[#9F1EEB]" />
                  <h4 className="font-bold text-white text-xl">
                    Индивидуальные занятия
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">Разовое занятие</span>
                    <span className="font-bold text-[#9F1EEB] text-lg">
                      1750 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">
                      Абонемент (4 занятия)
                    </span>
                    <span className="font-bold text-[#9F1EEB] text-lg">
                      6400 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#8968A4]/50">
                    <span className="text-[#EACBBE]">
                      Абонемент (8 занятия)
                    </span>
                    <span className="font-bold text-[#9F1EEB] text-lg">
                      6400 ₽
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#EACBBE]">
                      Абонемент (12 занятий)
                    </span>
                    <span className="font-bold text-[#EBA31E] text-lg">
                      17200 ₽
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Link to={RouteNames.SCHEDULE}>
              <Button className="w-full mt-4 py-5 bg-gradient-to-r from-[#9F1EEB] to-[#7a17b8] hover:from-[#7a17b8] hover:to-[#9F1EEB] text-gray-300 text-lg font-bold rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all group">
                Записаться в УтенокПРО
              </Button>
            </Link>
          </LiquidGlass>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center mb-8 px-6 py-3 bg-[#EACBBE] text-[#301EEB] rounded-full font-bold">
            <Waves className="mr-2 text-[#9F1EEB]" size={20} />
            <span>Что мы предлагаем</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                title: "Кристильно чистая и теплая вода",
                desc: "32-32°C для комфорта малышей",
                color: "#EBA31E",
              },
              {
                title: "Различные варианты групп и индивидуальных занятий",
                desc: "До 6 человек для внимания каждому",
                color: "#9F1EEB",
              },
              {
                title: "Опытные тренеры",
                desc: "Специалисты с большим опытом по обучению плавания",
                color: "#EACBBE",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1466] p-5 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: item.color }}
                  ></div>
                </div>
                <h4 className="font-bold text-white text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-[#EACBBE] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link to={RouteNames.SCHEDULE}>
            <Button className="py-5 px-10 bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] text-gray-300 hover:from-[#9F1EEB] hover:to-[#301EEB] rounded-xl text-lg font-bold cursor-pointer shadow-lg hover:shadow-xl transition-all group">
              Посмотреть расписание занятий
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsComponent;
