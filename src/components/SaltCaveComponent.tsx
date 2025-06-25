import  { FC } from "react";
import { Shield, Heart, Clock, Star, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { RouteNames } from "@/router";

import ImageGalleryBanner from './ui/ImageGalleryBanner';


import photo2  from "@/static/solinai_pehera_2-768x1151.jpg";
import photo3  from "@/static/solinai_pehera_4-683x1024.jpg";
const images = [photo2, photo3];
const SaltCaveComponent: FC = () => {
  // const benefits = [
  //   {
  //     icon: <Lungs className="h-8 w-8 text-sky-600" />,
  //     title: "Дыхательная система",
  //     description:
  //       "Улучшает работу дыхательной системы, помогает при астме и бронхите",
  //   },
  //   {
  //     icon: <Shield className="h-8 w-8 text-sky-600" />,
  //     title: "Иммунитет",
  //     description:
  //       "Укрепляет иммунную систему, снижает частоту простудных заболеваний",
  //   },
  //   {
  //     icon: <Brain className="h-8 w-8 text-sky-600" />,
  //     title: "Нервная система",
  //     description: "Снижает стресс и тревожность, улучшает сон и настроение",
  //   },
  //   {
  //     icon: <Moon className="h-8 w-8 text-sky-600" />,
  //     title: "Сон",
  //     description: "Способствует нормализации сна, помогает при бессоннице",
  //   },
  //   {
  //     icon: <Heart className="h-8 w-8 text-sky-600" />,
  //     title: "Сердечно-сосудистая система",
  //     description: "Улучшает кровообращение и работу сердца",
  //   },
  // ];

  return (
    // <section className="bg-gradient-to-b from-white to-sky-50 py-16">
    //   <div className="container mx-auto px-4">
    //     <div className="mb-12 text-center">
    //       <h2 className="mb-4 text-3xl font-bold text-sky-800 md:text-4xl">
    //         Соляная пещера
    //       </h2>
    //       <p className="mx-auto max-w-2xl text-lg text-gray-600">
    //         Уникальная возможность для оздоровления и релаксации в нашем центре
    //       </p>
    //     </div>

    //     <div className="grid gap-8 lg:grid-cols-2">
    //       <div>
    //         <div className="mb-6">
    //           <h3 className="mb-4 text-2xl font-bold text-sky-800">
    //             Что такое соляная пещера?
    //           </h3>
    //           <p className="mb-4 text-gray-600">
    //             Соляная пещера (галокамера) — это специально оборудованное
    //             помещение, стены, пол и потолок которого покрыты солью. Воздух в
    //             пещере насыщен микрочастицами соли, которые благотворно влияют
    //             на организм человека.
    //           </p>
    //           <p className="text-gray-600">
    //             Посещение соляной пещеры — это естественный и безопасный метод
    //             оздоровления, который особенно полезен для детей с частыми
    //             простудными заболеваниями, аллергией и проблемами дыхательной
    //             системы.
    //           </p>
    //         </div>

    //         <div>
    //           <h3 className="mb-4 text-2xl font-bold text-sky-800">
    //             Польза для здоровья
    //           </h3>
    //           <div className="grid gap-4 sm:grid-cols-2">
    //             {benefits.map((benefit, index) => (
    //               <div key={index} className="flex items-start">
    //                 <div className="mr-3 mt-1">{benefit.icon}</div>
    //                 <div>
    //                   <h4 className="font-bold text-sky-800">
    //                     {benefit.title}
    //                   </h4>
    //                   <p className="text-sm text-gray-600">
    //                     {benefit.description}
    //                   </p>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>

    //         <div className="mt-8">
    //           <a
    //             href="/salt-cave"
    //             className="inline-flex items-center rounded-md bg-sky-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-700"
    //           >
    //             Подробнее о соляной пещере
    //           </a>
    //         </div>
    //       </div>

    //       <div className="relative h-[500px] overflow-hidden rounded-lg shadow-md">
    //         <img
    //           src="/placeholder.svg?height=500&width=700"
    //           alt="Соляная пещера"
    //           //   fill
    //           className="object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="relative h-56 md:h-auto order-1 md:order-1">
             <ImageGalleryBanner 
        images={images}
        interval={3000} 
        height="h-[600px]" 
      />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <div className="inline-block px-3 py-1 mb-2 bg-yellow-400 text-blue-900 rounded-full text-xs font-medium">
                  Оздоровление
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Соляная пещера
                </h3>
              </div>
            </div>
            <div className="p-6 md:p-10 order-2 md:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 ">
                Оздоровительные сеансы в соляной пещере
              </h3>
              <p className="text-gray-600 mb-6">
                Соляная пещера — это специально оборудованное помещение, стены,
                пол и потолок которого покрыты солью. Во время сеанса в воздух
                распыляются мельчайшие частицы соли, создавая особый
                микроклимат, благотворно влияющий на здоровье.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Укрепление иммунитета
                  </span>
                </div>
                <div className="flex items-center">
                  <Leaf className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Улучшение дыхания
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Снятие стресса
                  </span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Оздоровление кожи
                  </span>
                </div>
              </div>
              <div className="flex items-center text-xs md:text-sm text-gray-500 mb-6">
                <Clock className="h-4 w-4 mr-1 text-yellow-500 flex-shrink-0" />
                <span>
                  Сеансы: ежедневно с 10:00 до 20:00, продолжительность 40 минут
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-blue-700 hover:bg-blue-800 rounded-full text-sm md:text-base cursor-pointer">
                  Забронировать сеанс
                </Button>
                <Link to={RouteNames.SALTCAVE}>
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full text-sm md:text-base cursor-pointer"
                  >
                    Подробнее
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaltCaveComponent;
