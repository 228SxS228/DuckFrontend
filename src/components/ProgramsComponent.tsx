import { FC } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { RouteNames } from "@/router";
import { ArrowDownToLine, Check, Clock, MessageSquare } from "lucide-react";
import DuckComponent from "./DuckComponent";
import { motion } from "framer-motion";

const ProgramsComponent: FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="inline-block px-4 py-1 mb-3 md:mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Детские басейны
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">
            Бассейны "Утенок" и "Утенок Продолжение"
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Два современных, но по особенному разных бассейна в одном месте
            (индивидуальны для каждого малыша и его родителя)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Утенок */}
          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 -mt-8 -mr-8 bg-yellow-100 rounded-full opacity-50"></div>
            <div className="relative">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-blue-900" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                  Басейн "Утенок"
                </h3>
              </div>

              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                Бассейн «Утенок» - обширное пространство с комфортабельными
                раздевалками, душевыми, сауной, игровой, соляной пещерой, кафе,
                зонами ожидания.
              </p>
              <motion.div
                className="absolute top-2 left-2/3"
                animate={{
                  x: [0, 30, -30, 0],
                  y: [0, -8, 8, 0],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <DuckComponent color="#ec4899" size="responsive" />
              </motion.div>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">
                    Возрастные группы:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        от 3 месяцев до 10 лет
                      </span>
                    </li>
                    {/* <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        5-6 лет
                      </span>
                    </li> */}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">
                    Особенности:
                  </h4>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Бассейн с комфортной глубиной 1.2 метра и длиной 12
                        метров
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Занятие проходит в параллели с другим тренером (всем
                        хватает достаточно пространства для максимально
                        продуктивного занятия)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Большой, игровой зал, где возможно провести разминку,
                        либо просто поиграть.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Кафе, где можно наблюдать за малышом за онлайн
                        трансляцией под чашечкой ароматного кофе или душистого
                        чая.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Зона ожидания с панорамным окном и комфортабельными
                        диванами.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Соляная пещера.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
                <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1 text-yellow-500 flex-shrink-0" />
                <span>Продолжительность: 30 минут</span>
              </div>

              <Button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-600 text-white rounded-full text-sm md:text-base cursor-pointer">
                Записаться
              </Button>
            </div>
          </div>

          {/* Утенок Продолжение */}
          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 -mt-8 -mr-8 bg-blue-100 rounded-full opacity-50"></div>
            <motion.div
              className="absolute top-2 left-2/3"
              animate={{
                y: [0, -10, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <DuckComponent color="#fbbf24" size="responsive" />
            </motion.div>
            <div className="relative">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-400 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <ArrowDownToLine className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                  Утенок «ПРОдолжение»
                </h3>
              </div>

              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                Бассейн Утенок «ПРОдолжение» - уютное пространство с новейшим
                дизайнерским ремонтом, двухуровневой игровой, комфортабельной
                зоной ожидания, финскими и турецкими парными. Программа Утенок
                «ПРОдолжение» разработана для малышей кому нужен индивидуальных
                подход .
              </p>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">
                    Возрастные группы:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        от 3 мес до 10 лет
                      </span>
                    </li>
                    {/* <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        8-9 лет
                      </span>
                    </li> */}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">
                    Особенности:
                  </h4>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Бассейн с переходящей глубиной от 1.2м до 2м и длиной 10
                        метров.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Занятие проходит НАЕДИНЕ с малышом (больше в бассейне
                        никого нет) – индивидуальный подход.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Комфортабельная зона ожидания с большой экраном на
                        котором выведена онлайн трансляция с занятия.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Бесплатный, ароматный кофе и чай со сладостями.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Двухуровневая игровая не оставит ни одного малыша
                        равнодушным.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        Парящее кресло-качалка для самого прекрасного отдыха и
                        релаксации.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
                <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1 text-yellow-500 flex-shrink-0" />
                <span>
                  Продолжительность индивидуального занятия – 30 минут
                </span>
              </div>

              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-800 text-white rounded-full text-sm md:text-base cursor-pointer">
                Записаться
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Все занятия проводятся опытными тренерами в малых группах до 6
            человек, что позволяет уделить внимание каждому ребенку. Температура
            воды в детском бассейне поддерживается на уровне 30-32°C для
            комфортного обучения.
          </p>
          <Link to={RouteNames.SCHEDULE}>
            <Button
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-300 rounded-full px-6 md:px-8 text-sm md:text-base cursor-pointer"
            >
              Посмотреть расписание занятий
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsComponent;
