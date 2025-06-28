import { FC, useState } from "react";
import { Phone, Menu} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RouteNames } from "../router/index";
import { Link, NavLink } from "react-router-dom";
import logo from "../static/utenok_logo.png";
import Modal from "./Modal";
import { Input } from "./ui/input";

// interface HeaderProps {
//   imageSrc?: string;
// }

// const DEFAULT_LOGO_ENDPOINT =
//   "D:projectDuckdevDuckFrontendsrcstaticлогототип утенок 2.png";

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenClick = () => {
    setIsModalOpen(true);
  };

  return (
    <header className="sticky h-25 top-0 z-50 w-full overflow-visible bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto overflow-visible flex h-17 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 overflow-visible">
            <Link to={RouteNames.HOME} className="flex items-center">
              <div
                className="flex gap-2 h-50 w-50  overflow-visible"
                style={{
                  backgroundImage: `url(${logo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <img
                  src={logo}
                  alt="logo"
                  className="sticky top-10 z-70 h-50 w-35 object-contain"
                  loading="eager"
                  decoding="async"
                /> */}
                {/* <span className="font-bold text-xl hidden sm:inline-block text-blue-600">
                  Утенок
                </span> */}
              </div>
            </Link>
          </div>
        </div>
        <nav className="font-myfont">
          <ul className="hidden md:flex items-center  gap-8">
            <li className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors  font-medium">
              <NavLink
                to={RouteNames.HOME}
                className=" font-myfont text-gray-700 hover:text-blue-700 transition-colors"
              >
                Главная
              </NavLink>
            </li>
            <li className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors  font-medium">
              <NavLink
                to={RouteNames.TRAINERS}
                className=" font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                Тренеры
              </NavLink>
            </li>
            <li className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors  font-medium">
              <NavLink
                to={RouteNames.SCHEDULE}
                className=" font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                Расписание
              </NavLink>
            </li>
            <li className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors  font-medium">
              <NavLink
                to={RouteNames.COMPETITION}
                className=" font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                Соревнования
              </NavLink>
            </li>
            <li className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors font-medium">
              <NavLink
                to={RouteNames.PROMOTION}
                className=" font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                Акции
              </NavLink>
            </li>
            <li className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors  font-medium">
              <NavLink
                to={RouteNames.SALTCAVE}
                className=" font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                Соляная пещера
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">+7 (123) 456-78-90</span>
          </div>
          <Button
            onClick={() => handleOpenClick()}
            size="lg"
            variant="destructive"
            className="hidden sm:inline-flex bg-blue-700 hover:bg-blue-800 rounded-full cursor-pointer"
          >
            Записаться
          </Button>
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            className="absolute top-50 left-180 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-[0.98] hover:scale-100"
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
              <Button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform duration-300">
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
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-full mr-4"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white" side="right">
              <nav className="flex mx-auto flex-col gap-4 mt-8 ">
                <NavLink
                  to={RouteNames.HOME}
                  className="text-base font-medium hover:text-blue-700 transition-colors"
                >
                  Главная
                </NavLink>

                <NavLink
                  to={RouteNames.TRAINERS}
                  className="text-base font-medium hover:text-blue-700 transition-colors"
                >
                  Тренеры
                </NavLink>

                <NavLink
                  to={RouteNames.SCHEDULE}
                  className="text-base font-medium hover:text-blue-700 transition-colors"
                >
                  Расписание
                </NavLink>

                <NavLink
                  to={RouteNames.COMPETITION}
                  className="text-base font-medium hover:text-blue-700 transition-colors"
                >
                  Соревнования
                </NavLink>

                <NavLink
                  to={RouteNames.PROMOTION}
                  className="text-base font-medium hover:text-blue-700 transition-colors"
                >
                  Акции
                </NavLink>

                <NavLink
                  to={RouteNames.SALTCAVE}
                  className="text-base font-medium hover:text-blue-700 transition-colors"
                >
                  Соляная пещера
                </NavLink>

                <div className="flex items-center gap-2 mt-2">
                  <Phone className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">
                    +7 (123) 456-78-90
                  </span>
                </div>
                <Button className="mt-4 bg-blue-700 hover:bg-blue-800 rounded-full">
                  Записаться
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
