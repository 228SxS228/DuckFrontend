import { FC, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

const Layout: FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 text-white overflow-hidden relative flex flex-col">
        <Outlet />
        {showScrollButton && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg bg-[#9F1EEB] hover:bg-blue-700 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
