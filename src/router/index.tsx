// src/routes/router.tsx
import { Route, Routes } from "react-router";
import MainPage from "@/pages/MainPage";
import TimeTablePage from "@/pages/TimeTablePage";
import TrainersPage from "@/pages/TrainersPage";
import ErrorPage from "@/pages/ErrorPage";
import SaltCavePage from "@/pages/SaltCavePage";
import PromotionPage from "@/pages/PromotionPage";
import CompetitionsPage from "@/pages/CompetitionsPage";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";

// export interface IRoute {
//   path: string;
//   component: React.ComponentType;
//   // exact?: boolean;
// }

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
  // const navigationRoutes = [
  //   { path: RouteNames.HOME, component: <MainPage /> },
  //   { path: RouteNames.TRAINERS, component: <TrainersPage /> },
  //   { path: RouteNames.SCHEDULE, component: <TimeTablePage /> },
  //   { path: RouteNames.COMPETITION, component: <CompetitionsPage /> },
  //   { path: RouteNames.PROMOTION, component: <PromotionPage /> },
  //   { path: RouteNames.SALTCAVE, component: <SaltCavePage /> },
  //   { path: RouteNames.ERROR, component: <ErrorPage /> },
  // ];
  return (
    // <Routes>
    //   {navigationRoutes.map((route) => (
    //     <Route key={route.path} path={route.path} element={route.component} />
    //   ))}
    // </Routes>
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

// export const publicRoutes: IRoute[] = [
//   { path: RouteNames.HOME, component: MainPage },
// ];

// export const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//     errorElement: <ErrorPage />,
//     loader: () => {
//       console.log("0000");
//       return "ss";
//     },
//   },
//   {
//     path: "/raspisanie",
//     element: <TimeTablePage />,
//     loader: () => {
//       console.log("0000");
//       return "ss";
//     },
//   },
//   {
//     path: "/trainers",
//     element: <TrainersPage />,
//     loader: () => {
//       console.log("0000");
//       return "ss";
//     },
//   },
//   {
//     path: "/saltcave",
//     element: <SaltCavePage />,
//     loader: () => {
//       console.log("0000");
//       return "ss";
//     },
//   },
//   {
//     path: "/promotion",
//     element: <PromotionPage />,
//     loader: () => {
//       console.log("1111");
//       return "ss";
//     },
//   },
//   {
//     path: "/competitions",
//     element: <CompetitionsPage />,
//     loader: () => {
//       console.log("1111");
//       return "ss";
//     },
//   },
//   {
//     path: "*",
//     element: <ErrorPage />,
//     loader: () => {
//       console.log("error");
//       return "aa";
//     },
//   },
// ]);
