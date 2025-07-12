import { FC, useState, useRef } from "react";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RouteNames } from "../router/index";
import { NavLink } from "react-router-dom";
import logo from "../static/utenok_logo.png";
import Modal from "./Modal";
import { Input } from "./ui/input";
import {
  motion,
  AnimatePresence,
  Variants,
  TargetAndTransition,
} from "framer-motion";
import BubbleComponent from "./ui/Buble";

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const menuItems = useRef<(HTMLLIElement | null)[]>([]);
  const headerRef = useRef<HTMLElement>(null);

  const setMenuItemRef = (el: HTMLLIElement | null, index: number) => {
    menuItems.current[index] = el;
  };

  const menuLinks = [
    { name: "Главная", path: RouteNames.HOME },
    { name: "Тренеры", path: RouteNames.TRAINERS },
    { name: "Расписание", path: RouteNames.SCHEDULE },
    { name: "Соревнования", path: RouteNames.COMPETITION },
    { name: "Акции", path: RouteNames.PROMOTION },
    { name: "Соляная пещера", path: RouteNames.SALTCAVE },
  ];

  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenClick = () => setIsModalOpen(true);

  // Рассчитываем позицию утки для активного пункта меню
  const getDuckPosition = (): TargetAndTransition => {
    if (activeItem === null || !menuItems.current[activeItem]) {
      return {
        x: 100,
        y: 15,
        rotate: 0,
      };
    }

    const item = menuItems.current[activeItem];
    if (!item) return { x: 0, y: 0, rotate: 0 };

    const rect = item.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - 20,
      y: rect.top - 25,
      rotate: 0,
    };
  };

  // Тип для плавающей анимации
  const floatingAnimation: Variants = {
    animate: {
      y: [0, -5, 0],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#301EEB] to-[#9F1EEB] overflow-hidden"
    >
      {/* Пузырьки */}
      <BubbleComponent
        count={10}
        speed={1}
        color="#ffff"
        size={{ base: 20, sm: 30, md: 40 }}
      />

      {/* Анимированная утка */}
      <AnimatePresence>
        <motion.div
          className="absolute top-0 left-0 pointer-events-none z-20"
          animate={getDuckPosition()}
          initial={false}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 80,
            mass: 0.8,
          }}
        >
          <motion.div variants={floatingAnimation} animate="animate">
            <img
              src={logo}
              alt="logo"
              className="left h-37 w-37 z-60 overflow-hidden object-contain"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto overflow-visible flex h-35 items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 overflow-visible">
            {/* Пустое место для логотипа */}
          </div>
        </div>

        <nav className="font-myfont text-lg relative">
          <ul className="hidden md:flex items-center gap-8">
            {menuLinks.map((link, index) => (
              <motion.li
                key={index}
                ref={(el) => setMenuItemRef(el, index)}
                className="px-3 py-2 text-white hover:text-[#EBA31E] rounded-md transition-colors font-medium group relative"
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  to={link.path}
                  className="relative z-30 transition-all text-white hover:text-[#EBA31E]  duration-300"
                >
                  {link.name}
                </NavLink>

                {/* Волны при наведении */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#EBA31E]/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={activeItem === index ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            className="hidden md:flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Phone className="h-4 w-4 text-[#EBA31E]" />
            <span className="text-sm font-medium text-white">
              +7 (3822) 68-28-00
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={handleOpenClick}
              size="lg"
              className="hidden sm:inline-flex bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full cursor-pointer transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              Записаться
            </Button>
          </motion.div>

          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            className="rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">
                Оставьте контактные данные, мы перезвоним Вам и запишем на
                занятие
              </h2>
              <div className="space-y-6 mb-6">
                <Input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  type="text"
                  placeholder="Ваше имя"
                />
                <Input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  type="tel"
                  placeholder="Ваш телефон"
                />
              </div>
              <Button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform duration-300">
                Оставить заявку
              </Button>
            </div>
            <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t border-gray-100">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="text-blue-600 hover:underline">
                политикой конфиденциальности
              </a>
            </div>
          </Modal>

          <Sheet>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden rounded-full mr-4 bg-white/20 hover:bg-white/30"
                >
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              className="bg-gradient-to-b from-[#301EEB] to-[#9F1EEB]"
              side="right"
            >
              <nav className="flex mx-auto flex-col gap-6 mt-8">
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      className="text-lg font-medium text-white hover:text-[#EBA31E] transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#EBA31E] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <div className="flex items-center gap-2 mt-4 p-3 bg-white/10 rounded-lg">
                  <Phone className="h-5 w-5 text-[#EBA31E]" />
                  <span className="text-sm font-medium text-white">
                    +7 (3822) 68-28-00
                  </span>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    className="mt-4 w-full bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full py-6 text-base"
                    onClick={handleOpenClick}
                  >
                    Записаться
                  </Button>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
