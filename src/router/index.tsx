import { Route, Routes } from "react-router";
import MainPage from "@/pages/MainPage";
import TimeTablePage from "@/pages/TimeTablePage";
import TrainersPage from "@/pages/TrainersPage";
import ErrorPage from "@/pages/ErrorPage";
import SaltCavePage from "@/pages/SaltCavePage";
import PromotionPage from "@/pages/PromotionPage";
import CompetitionsPage from "@/pages/CompetitionsPage";
import Layout from "@/components/Layout";

export enum RouteNames {
  HOME = "/",
  TRAINERS = "/trainers",
  SCHEDULE = "/schedule",
  SALTCAVE = "/saltcave",
  PROMOTION = "/promotion",
  COMPETITION = "/competitions",
  ERROR = "*",
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={RouteNames.HOME} element={<MainPage />} />
        <Route path={RouteNames.TRAINERS} element={<TrainersPage />} />
        <Route path={RouteNames.SCHEDULE} element={<TimeTablePage />} />
        <Route path={RouteNames.COMPETITION} element={<CompetitionsPage />} />
        <Route path={RouteNames.PROMOTION} element={<PromotionPage />} />
        <Route path={RouteNames.SALTCAVE} element={<SaltCavePage />} />
      </Route>
      <Route path={RouteNames.ERROR} element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
