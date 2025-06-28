import { FC } from "react";
import { Gift } from "lucide-react";
import { Button } from "./ui/button";
import ImageGalleryBanner from "./ImageGalleryBanner";

//сделать норм ренейм
import photo2 from "@/static/utenokpro_animatory.jpg";
import photo3 from "@/static/utenokpro_programma.jpg";
const images = [photo2, photo3];

const Rentalcomponent: FC = () => {
  // const events = [
  //   {
  //     icon: <Cake className="h-10 w-10 text-sky-600" />,
  //     title: "Дни рождения",
  //     description:
  //       "Организуем незабываемый праздник для вашего ребенка с аниматорами, играми в воде и праздничным угощением.",
  //   },
  //   {
  //     icon: <Users className="h-10 w-10 text-sky-600" />,
  //     title: "Групповые мероприятия",
  //     description:
  //       "Проведите корпоратив, школьное или детсадовское мероприятие в нашем центре.",
  //   },
  //   {
  //     icon: <Calendar className="h-10 w-10 text-sky-600" />,
  //     title: "Праздники",
  //     description:
  //       "Специальные программы на Новый год, 23 февраля, 8 марта и другие праздники.",
  //   },
  // ];

  return (
    // <section className="py-16">
    //   <div className="container mx-auto px-4">
    //     <div className="mb-12 text-center">
    //       <h2 className="mb-4 text-3xl font-bold text-sky-800 md:text-4xl">
    //         Аренда центра для мероприятий "Утенок Продоложение"
    //       </h2>
    //       <p className="mx-auto max-w-2xl text-lg text-gray-600">
    //         Организуйте незабываемый праздник для вашего ребенка в нашем центре
    //       </p>
    //     </div>

    //     <div className="grid gap-8 lg:grid-cols-2">
    //       <div className="relative h-[400px] overflow-hidden rounded-lg shadow-md">
    //         <img
    //           src="/placeholder.svg?height=400&width=600"
    //           alt="Празднование дня рождения в бассейне"
    //         //   fill
    //           className="object-cover"
    //         />
    //       </div>

    //       <div>
    //         <div className="mb-6">
    //           <h3 className="mb-4 text-2xl font-bold text-sky-800">
    //             Что мы предлагаем
    //           </h3>
    //           <p className="text-gray-600">
    //             Центр "Утенок" предлагает аренду помещения и бассейна для
    //             проведения различных детских мероприятий. Мы создадим
    //             праздничную атмосферу и обеспечим безопасность всех участников.
    //           </p>
    //         </div>

    //         <div className="space-y-6">
    //           {events.map((event, index) => (
    //             <div key={index} className="flex">
    //               <div className="mr-4">{event.icon}</div>
    //               <div>
    //                 <h4 className="mb-1 text-lg font-bold text-sky-800">
    //                   {event.title}
    //                 </h4>
    //                 <p className="text-gray-600">{event.description}</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>

    //         <div className="mt-8">
    //           <a
    //             href="#contacts"///юляяяяяя
    //             className="inline-flex items-center rounded-md bg-sky-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-700"
    //           >
    //             <Gift className="mr-2 h-5 w-5" />
    //             Забронировать мероприятие
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-3xl p-5 md:p-8 lg:p-12 border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 -mt-12 -mr-12 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 -mb-8 -ml-8 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10">
            <div>
              <div className="inline-block px-3 py-1 mb-3 md:mb-4 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">
                Особое предложение
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 md:mb-6">
                Аренда бассейна для мероприятий "Утенок Продолжение"
              </h2>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Организуйте незабываемый праздник для вашего ребенка и его
                друзей! Мы предлагаем аренду бассейна и прилегающих помещений
                для проведения детских дней рождения, выпускных и других
                мероприятий.
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-400 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <Gift className="h-4 w-4 md:h-5 md:w-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1 text-sm md:text-base">
                      Праздничный пакет "Утенок"
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Включает 1 час аренды детского бассейна, аниматора,
                      праздничное угощение и подарки для всех гостей.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-400 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <Gift className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1 text-sm md:text-base">
                      Праздничный пакет "Дельфин"
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Включает 2 часа аренды бассейна, 2 аниматоров, фотосессию,
                      праздничное угощение и подарки для всех гостей.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full text-sm md:text-base cursor-pointer">
                  Забронировать мероприятие
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-100 rounded-full text-sm md:text-base cursor-pointer"
                >
                  Узнать подробности
                </Button>
              </div>
            </div>

            <div className="relative h-56 md:h-72 lg:h-96 rounded-2xl overflow-hidden mt-4 md:mt-0">
              <ImageGalleryBanner
                images={images}
                interval={3000}
                height="h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <div className="inline-block px-2 py-1 mb-1 md:mb-2 bg-yellow-400 text-blue-900 rounded-full text-xs font-medium">
                  Детские праздники
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Незабываемые впечатления
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 pt-4 md:pt-8 border-t border-blue-100 text-center relative z-10">
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-sm">
              Мы также предлагаем индивидуальные решения для корпоративных
              мероприятий, школьных групп и спортивных команд. Свяжитесь с нами
              для получения подробной информации.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rentalcomponent;
