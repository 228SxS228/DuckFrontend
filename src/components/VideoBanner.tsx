import { FC } from "react";
import { Button } from "./ui/button";
import bgimg from "@/static/interior/SSV_1325.jpg";
import WaveComponent from "./WaveComponent";

const VideoBanner: FC = () => {
  return (
    <section className="overflow-hidden">
      {/* Основной контент баннера */}
      <div
        className="relative min-h-[40rem] md:min-h-[52rem] flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-12 py-16 md:py-32 px-4"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-5 md:p-8 relative z-20">
              <div className="max-w-3xl">
                <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                  Плавательный Центр
                  <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                    «Утенок»
                  </span>
                </h1>

                <p className="text-xl text-blue-100 mb-8 max-w-xl">
                  Профессиональное обучение плаванию для детей от 3 месяцев до
                  10 лет в современном центре с опытными тренерами.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="hover:bg-yellow-500 rounded-full px-6 py-6 text-lg font-bold text-black bg-yellow-400 cursor-pointer shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Записаться на первое бесплатное занятие
                  </Button>
                </div>
              </div>
            </div>

            {/* Блок с преимуществами (для мобильной версии) */}
            <div className="md:hidden bg-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">
                Наши преимущества:
              </h3>
              <ul className="space-y-3">
                {[
                  "Опытные детские тренеры",
                  "Современные бассейны",
                  "Индивидуальный подход",
                  "Безопасная среда",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                      <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                    </span>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Волна - скрыта на мобильных устройствах */}
      <div className=" md:block">
        <WaveComponent />
      </div>
    </section>
  );
};

export default VideoBanner;