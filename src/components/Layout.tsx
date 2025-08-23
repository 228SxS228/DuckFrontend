import { FC } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 text-white  overflow-hidden relative flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
