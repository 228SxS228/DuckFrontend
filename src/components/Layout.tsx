import { FC } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import BubleComponent from "./BubleComponent";


//font-myfont !font-[MyFont]
const Layout: FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-r from-blue-900 to-blue-700 text-white via-blue-300 overflow-hidden relative flex flex-col">
        <BubleComponent/>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
