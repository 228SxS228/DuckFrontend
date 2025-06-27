import { RouteNames } from "@/router";
import { ArrowRight, Check} from "lucide-react";
import { FC } from "react";

import { Link } from "react-router-dom";
import { Button } from "./ui/button";

import ImageGalleryBanner from './ui/ImageGalleryBanner';
import photo2 from "@/static/interior/SSV_8967.jpg";
import photo3 from "@/static/interior/SSV_8975.jpg";
import photo4 from "@/static/interior/SSV_8910.jpg";
const images = [photo2, photo3,photo4];

const BenefitsComponent: FC = () => {
  // const benefits = [
  //   {
  //     icon: <Shield className="h-10 w-10 text-sky-600" />,
  //     title: "Безопасность",
  //     description:
  //       "Современные системы очистки воды и постоянный контроль ее качества. Опытные инструкторы следят за безопасностью детей.",
  //   },
  //   {
  //     icon: <Heart className="h-10 w-10 text-sky-600" />,
  //     title: "Здоровье",
  //     description:
  //       "Плавание укрепляет иммунитет, развивает дыхательную систему и формирует правильную осанку у детей.",
  //   },
  //   {
  //     icon: <Award className="h-10 w-10 text-sky-600" />,
  //     title: "Профессионализм",
  //     description:
  //       "Наши тренеры имеют профильное образование и многолетний опыт работы с детьми разного возраста.",
  //   },
  //   {
  //     icon: <Users className="h-10 w-10 text-sky-600" />,
  //     title: "Индивидуальный подход",
  //     description:
  //       "Мы учитываем особенности каждого ребенка и подбираем оптимальную программу обучения.",
  //   },
  //   {
  //     icon: <Clock className="h-10 w-10 text-sky-600" />,
  //     title: "Удобное расписание",
  //     description:
  //       "Занятия проводятся в утреннее и вечернее время, чтобы родители могли выбрать удобное время.",
  //   },
  //   {
  //     icon: <Smile className="h-10 w-10 text-sky-600" />,
  //     title: "Комфортная атмосфера",
  //     description:
  //       "Мы создаем дружелюбную атмосферу, в которой дети с удовольствием учатся плавать.",
  //   },
  // ];

  const benefist = [
    "2 бассейна по 12 метров и комфортной глубиной",
    "Игровые, кафе, зоны ожидания",
    "Просторные раздевалки и душевые",
    "Мотивационная система для малышей с медалями и кубками",
    "Соревнования с множеством подарков для наших утят",
  ];

  return (
    <div>
      <section className="py-10 bg-white">
        <div className="container  mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-800 mb-2">8</p>
              <p className="text-gray-600">Опытных тренеров</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-800 mb-2">12 лет</p>
              <p className="text-gray-600">Дарим радость и обучаем ребятишек</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-800 mb-2">25000+</p>
              <p className="text-gray-600">Довольных родителей и их утят</p>
            </div>
            {/* <div className="text-center">
              <p className="text-4xl font-bold text-blue-800 mb-2">12м</p>
              <p className="text-gray-600">Длина бассейна</p>
            </div> */}
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden">
              <ImageGalleryBanner
                images={images}
                interval={3000}
                height="h-[500px]"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-1 mb-4 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                О нашем центре
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Современный центр плавания для самых маленьких.
              </h2>
              <p className="text-gray-600 mb-6">
                Мы предлагаем методику обучения плаванию деток от 3 месяцев до
                10 лет, где каждый малыш научиться базовым навыкам на воде с
                большим удовольствием и наслаждением для него. Наш центр
                плавания оборудован современными бассейнами с системами
                предварительной, глубокой очистки.
              </p>
              <ul className="space-y-3 mb-8">
                {benefist.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                      <Check className="h-3 w-3 text-blue-900" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 hover:bg-blue-500 rounded-full px-10 text-lg text-gray-300  bg-[#0066ff]"
              >
                <Link
                  to={RouteNames.SCHEDULE}
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                >
                  Посмотреть расписание
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>

    // <section className="bg-sky-50 py-16">
    //   <div className="container mx-auto px-4">
    //     <div className="mb-12 text-center">
    //       <h2 className="mb-4 text-3xl font-bold text-sky-800 md:text-4xl">
    //         Преимущества центра "Утенок"
    //       </h2>
    //       <p className="mx-auto max-w-2xl text-lg text-gray-600">
    //         Почему родители выбирают наш центр для обучения своих детей плаванию
    //       </p>
    //     </div>

    //     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    //       {benefits.map((benefit, index) => (
    //         <div
    //           key={index}
    //           className="rounded-lg bg-white p-6 shadow-md transition-transform hover:-translate-y-1"
    //         >
    //           <div className="mb-4">{benefit.icon}</div>
    //           <h3 className="mb-3 text-xl font-bold text-sky-800">
    //             {benefit.title}
    //           </h3>
    //           <p className="text-gray-600">{benefit.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default BenefitsComponent;
