import { FC, lazy, Suspense} from "react";
import { Button } from "@/components/ui/button";

import BenefitsComponent from "@/components/BenefitsComponent";
import GroupsComponent from "@/components/GroupsComponent";
import SaltCaveComponent from "@/components/SaltCaveComponent";
import Rentalcomponent from "@/components/RentalComponent";
import PromotionsComponent from "@/components/PromotionsComponent";
import ProgramsComponent from "@/components/ProgramsComponent";


// Ленивая загрузка компонентов
const VideoBanner = lazy(() => import("../components/VideoBanner"));
const TrenerComponents = lazy(() => import("../components/TrenerComponents"));

const MainPage: FC = () => {

  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<div>Загрузка...</div>}>
        <main className="flex-1">
          {/* <section className="relative bg-gradient-to-b from-sky-100 to-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="mb-6 text-4xl font-bold text-sky-800 md:text-5xl lg:text-6xl">
                Детский плавательный центр{" "}
                <span className="text-yellow-500">"Утенок"</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-700">
                Обучаем детей плаванию в комфортной и безопасной среде.
                Развиваем навыки, укрепляем здоровье и дарим радость!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/raspisanie"
                  className="rounded-full bg-sky-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-700"
                >
                  Расписание занятий
                </a>
                <a
                  href="#contacts"
                  className="rounded-full border-2 border-sky-600 bg-white px-6 py-3 font-medium text-sky-600 transition-colors hover:bg-sky-50"
                >
                  Связаться с нами
                </a>
              </div>
            </div>
            <VideoBanner />
            <BenefitsComponent />
            <TrenerComponents />
            <GroupsComponent />
            <SwimmingBenefitsComponent />
            <SaltCaveComponent />
            <Rentalcomponent />
          </section> */}
          {/* <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 md:py-32">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/60 z-10" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-3xl" />
            </div>
            <div className="container relative z-20 px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 ">
                  Откройте для себя{" "}
                  <span className="text-yellow-400">радость плавания</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Профессиональное обучение плаванию для всех возрастов в
                  современном центре с опытными тренерами
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="hover:bg-yellow-500 rounded-full px-8 text-black bg-[rgba(255,235,0,1)]"
                  >
                    Записаться
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 hover:bg-white/10 rounded-full px-8 text-gray-300"
                  >
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>
          </section> */}
          <VideoBanner />
          <BenefitsComponent />
          <GroupsComponent />
          <SaltCaveComponent />
          <TrenerComponents />
          <PromotionsComponent />
          <ProgramsComponent />
          <Rentalcomponent />
          <section className="py-12  md:py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 md:w-60 md:h-60 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-blue-400 rounded-full opacity-20 blur-3xl" />
                </div>
                <div className="relative z-10 max-w-2xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                    Готовы начать?
                  </h2>
                  <p className="text-blue-100 mb-6 md:mb-8 text-sm md:text-base">
                    Запишитесь на пробное занятие уже сегодня и ощутите все
                    преимущества нашего центра плавания
                  </p>
                
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-full px-6 md:px-8 text-sm md:text-base cursor-pointer"
                  >
                    Записаться на пробное занятие
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Suspense>
    </div>
  );
};

export default MainPage;
