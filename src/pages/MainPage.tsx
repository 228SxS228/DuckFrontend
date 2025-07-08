import { FC, lazy} from "react";
import { Button } from "@/components/ui/button";

import GroupsComponent from "@/components/GroupsComponent";
import SaltCaveComponent from "@/components/SaltCaveComponent";
import Rentalcomponent from "@/components/RentalComponent";
import PromotionsComponent from "@/components/PromotionsComponent";
import ProgramsComponent from "@/components/ProgramsComponent";

// Ленивая загрузка компонентов
const VideoBanner = lazy(() => import("../components/VideoBanner"));
const TrenerComponents = lazy(() => import("../components/TrenerComponents"));
const BenefitsComponent = lazy(() => import("../components/BenefitsComponent"));

const MainPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <VideoBanner />
        <BenefitsComponent />
        <GroupsComponent />
        <SaltCaveComponent />
        <TrenerComponents />
        <PromotionsComponent />
        <ProgramsComponent />
        <Rentalcomponent />
        <section className="py-12  md:py-20">
          <div className="container px-4 mx-auto">
            <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 md:w-60 md:h-60 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-blue-400 rounded-full opacity-20 blur-3xl" />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-3 md:mb-4">
                  Готовы начать?
                </h2>
                <p className=" mb-6 md:mb-8 text-sm md:text-base">
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
    </div>
  );
};

export default MainPage;
