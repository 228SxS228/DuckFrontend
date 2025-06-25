// src/routes/router.tsx
import { createBrowserRouter } from "react-router";
import MainPage from "@/pages/MainPage";
import TimeTablePage from "@/pages/TimeTablePage";
import TrainersPage from "@/pages/TrainersPage";
import ErrorPage from "@/pages/ErrorPage";
import SaltCavePage from "@/pages/SaltCavePage";
import PromotionPage from "@/pages/PromotionPage";
import CompetitionsPage from "@/pages/CompetitionsPage";

export interface IRoute  { 
  path: string;

};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      console.log("0000");
      return "ss";
    },
  },
  {
    path: "/raspisanie",
    element: <TimeTablePage />,
    loader: () => {
      console.log("0000");
      return "ss";
    },
  },
  {
    path: "/trainers",
    element: <TrainersPage />,
    loader: () => {
      console.log("0000");
      return "ss";
    },
  },
  {
    path: "/saltcave",
    element: <SaltCavePage />,
    loader: () => {
      console.log("0000");
      return "ss";
    },
  },
  {
    path: "/promotion",
    element: <PromotionPage />,
    loader: () => {
      console.log("1111");
      return "ss";
    },
  },
  {
    path: "/competitions",
    element: <CompetitionsPage />,
    loader: () => {
      console.log("1111");
      return "ss";
    },
  },
  {
    path: "*",
    element: <ErrorPage />,
    loader: () => {
      console.log("error");
      return "aa";
    },
  },
]);
