import { RouteNames } from "@/router";
import { ArrowRight, Check, Waves } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import photo2 from "@/static/interior/SSV_8967.jpg";
import photo3 from "@/static/interior/SSV_8975.jpg";
import photo4 from "@/static/interior/SSV_8910.jpg";
import ImageGalleryBanner from "./ImageGalleryBanner";



const BenefitsComponent: FC = () => {
  const images = [photo2, photo3, photo4];
  const benefits = [
    "2 бассейна по 12 метров и комфортной глубиной",
    "Игровые, кафе, зоны ожидания",
    "Просторные раздевалки и душевые",
    "Мотивационная система для малышей с медалями и кубками",
    "Соревнования с множеством подарков для наших утят",
  ];

  const stats = [
    { value: "8", label: "Опытных тренеров" },
    { value: "12 лет", label: "Опыта работы с детьми" },
    { value: "25000+", label: "Довольных родителей и утят" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Секция статистики */}
      <section className="py-14 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl border border-blue-100 shadow-md transition-all hover:shadow-lg"
              >
                <p className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                  {stat.value}
                </p>
                <p className="text-blue-800 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Основная секция с фото и описанием */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <ImageGalleryBanner images={images} />
            </div>

            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-4 py-2 mb-5 bg-blue-600 text-white rounded-full text-sm font-bold">
                <Waves className="h-4 w-4 mr-2" />О нашем центре
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Современный центр плавания для самых маленьких
              </h2>

              <p className="text-blue-800 mb-7">
                Мы предлагаем методику обучения плаванию деток от 3 месяцев до
                10 лет, где каждый малыш научиться базовым навыкам на воде с
                большим удовольствием и наслаждением для него. Наш центр
                плавания оборудован современными бассейнами с системами
                предварительной, глубокой очистки.
              </p>

              <div className="mb-8 bg-white p-5 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <Waves className="mr-2 text-blue-500" />
                  Наши преимущества:
                </h3>
                <ul className="space-y-3">
                  {benefits.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start p-3 rounded-lg bg-blue-50 border border-blue-100"
                    >
                      <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="h-3 w-3 text-blue-900" />
                      </div>
                      <span className="text-blue-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg"
              >
                <Link to={RouteNames.SCHEDULE}>
                  <span>Посмотреть расписание</span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsComponent;