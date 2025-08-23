import { FC, lazy } from "react";
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
        <iframe
          src="https://swdgts.ru/45f3485d2e40f691e9c317aba0f62628"
          width="100%"
          height="700"
   
        ></iframe>
      </main>
    </div>
  );
};

export default MainPage;
