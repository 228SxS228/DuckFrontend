import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import {
  ArrowDownToLine,
  MessageSquare,
  Users,
  User,
} from "lucide-react";
import DuckComponent from "./DuckComponent";
import { motion, Variants } from "framer-motion";
import Modal from "./Modal";
import { Input } from "./ui/input";
import { LiquidGlass } from "./ui/LiquidGlass";

const ProgramsComponent: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenClick = () => setIsModalOpen(true);

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
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 md:py-20 overflow-hidden relative flex flex-col bg-gradient-to-b from-[#301EEB] to-[#9F1EEB]">
      <div className="container px-4 mx-auto">
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
            className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full font-bold shadow-lg"
            variants={textVariants}
          >
            <Users className="inline mr-2" size={18} />
            Детские басейны
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white"
            variants={textVariants}
          >
            Бассейны "Утенок" и "Утенок Продолжение"
          </motion.h2>

          <motion.p
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Два современных, но по особенному разных бассейна в одном месте
            (индивидуальны для каждого малыша и его родителя)
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Утенок */}
          <motion.div
            className="text-center p-8 bg-white rounded-2xl border border-blue-200 shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
          >
            <LiquidGlass  
              glassColor="#ffffff"
              opacity={0.7}
              hoverOpacity={0.9}
              blurStrength={10}
              borderRadius={24}
              className="h-full rounded-3xl p-6 transition-all"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#EBA31E] flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#301EEB]">
                  Басейн "Утенок"
                </h3>
              </div>

              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                Бассейн «Утенок» - обширное пространство с комфортабельными
                раздевалками, душевыми, сауной, игровой, соляной пещерой, кафе,
                зонами ожидания.
              </p>

              {/* Анимированный утенок */}
              <motion.div
                className="absolute top-2 right-4"
                animate={{
                  x: [0, 10, -10, 0],
                  y: [0, -5, 5, 0],
                  rotate: [0, 10, -10, 0],
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
                <div className="border border-[#EBA31E] rounded-xl p-4">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 mr-2 text-[#9F1EEB]" />
                    <h4 className="font-bold text-[#301EEB] text-lg">
                      Групповые занятия
                    </h4>
                  </div>

                  <div className="rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">Разовое посещение</span>
                        <span className="font-bold text-[#301EEB]">
                          1 500 ₽
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">
                          Абонемент (4 занятия)
                        </span>
                        <span className="font-bold text-[#301EEB]">
                          5 000 ₽
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">
                          Абонемент (8 занятий)
                        </span>
                        <span className="font-bold text-[#301EEB]">
                          9 000 ₽
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Индивидуальные занятия */}
                <div className="border border-[#9F1EEB] rounded-xl p-4">
                  <div className="flex items-center mb-3">
                    <User className="h-5 w-5 mr-2 text-[#9F1EEB]" />
                    <h4 className="font-bold text-[#301EEB] text-lg">
                      Индивидуальные занятия
                    </h4>
                  </div>

                  <div className="bg-gray-100 bg-opacity-10 rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">Разовое занятие</span>
                        <span className="font-bold text-[#301EEB]">
                          2 500 ₽
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">
                          Абонемент (4 занятия)
                        </span>
                        <span className="font-bold text-[#301EEB]">
                          9 000 ₽
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">
                          Абонемент (8 занятий)
                        </span>
                        <span className="font-bold text-[#301EEB]">
                          16 000 ₽
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleOpenClick}
                className="w-full mt-8 bg-[#301EEB] hover:bg-[#1a12a8] text-white rounded-full text-base cursor-pointer"
              >
                Записаться
              </Button>
            </LiquidGlass>
          </motion.div>

          {/* Утенок Продолжение */}
          <motion.div
            className="text-center p-8 bg-white rounded-2xl border border-blue-200 shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 -mt-8 -mr-8 bg-[#9F1EEB] rounded-full opacity-20"></div>
            <div className="relative">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#9F1EEB] flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <ArrowDownToLine className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#301EEB]">
                  Утенок «ПРОдолжение»
                </h3>
              </div>

              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                Бассейн Утенок «ПРОдолжение» - уютное пространство с новейшим
                дизайнерским ремонтом, двухуровневой игровой, комфортабельной
                зоной ожидания, финскими и турецкими парными.
              </p>

              {/* Анимированный утенок */}
              <motion.div
                className="absolute top-2 right-4"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <DuckComponent color="#EBA31E" size="responsive" />
              </motion.div>

              <div className="space-y-6 mb-6">
                {/* Групповые занятия */}
                <div className="border border-[#EBA31E] rounded-xl p-4">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 mr-2 text-[#9F1EEB]" />
                    <h4 className="font-bold text-[#301EEB] text-lg">
                      Групповые занятия
                    </h4>
                  </div>

                  <div className="bg-gray-100 bg-opacity-10 rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">Разовое посещение</span>
                        <span className="font-bold text-[#301EEB]">
                          1 800 ₽
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">
                          Абонемент (4 занятия)
                        </span>
                        <span className="font-bold text-[#301EEB]">
                          6 500 ₽
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">
                          Абонемент (8 занятий)
                        </span>
                        <span className="font-bold text-[#301EEB]">
                          12 000 ₽
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Индивидуальные занятия */}
                <div className="border border-[#9F1EEB] rounded-xl p-4">
                  <div className="flex items-center mb-3">
                    <User className="h-5 w-5 mr-2 text-[#9F1EEB]" />
                    <h4 className="font-bold text-[#301EEB] text-lg">
                      Индивидуальные занятия
                    </h4>
                  </div>

                  <div className="bg-gray-100 bg-opacity-10 rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">Разовое занятие</span>
                        <span className="font-bold text-[#301EEB]">
                          3 000 ₽
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">
                          Абонемент (4 занятия)
                        </span>
                        <span className="font-bold text-[#301EEB]">
                          11 000 ₽
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700">
                          Абонемент (8 занятий)
                        </span>
                        <span className="font-bold text-[#301EEB]">
                          20 000 ₽
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleOpenClick}
                className="w-full mt-8 bg-[#301EEB] hover:bg-[#1a12a8] text-white rounded-full text-base cursor-pointer"
              >
                Записаться
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-[#EACBBE] mb-6 max-w-2xl mx-auto text-base">
            Все занятия проводятся опытными тренерами. В групповых занятиях - до
            6 человек, что позволяет уделить внимание каждому ребенку.
            Температура воды в детском бассейне поддерживается на уровне
            30-32°C.
          </p>
          <Link to={RouteNames.SCHEDULE}>
            <Button
              variant="outline"
              className="text-[#301EEB] border-[#9F1EEB] hover:bg-[#EBA31E] hover:text-white rounded-full px-8 py-6 text-lg bg-white cursor-pointer"
            >
              Посмотреть расписание занятий
            </Button>
          </Link>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
      >
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            Оставьте контактные данные, мы перезвоним Вам и запишем на занятие
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

export default ProgramsComponent;
