import { FC, useState } from "react";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RouteNames } from "../router/index";
import { Link, NavLink } from "react-router-dom";
import logo from "../static/utenok_logo.png";
import Modal from "./Modal";

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
    <header className="sticky top-0 z-50 w-full overflow-visible bg-white/95 backdrop-blur-sm border-b border-gray-100">
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
            className="hidden sm:inline-flex bg-blue-700 hover:bg-blue-800 rounded-full cursor-pointer"
          >
            Записаться
          </Button>
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title="Моя информация"
          >
            <div className="space-x-4 pt-50 grid ">
              <h3 className=" py-10">
                Оставьте контактные данные, мы перезвоним Вам и запишем на
                занятие
              </h3>
              <label className=" py-5" htmlFor="">
                {" "}
                Ваше имя
                <input type="text" />
              </label>
              <label className=" py-5" htmlFor="">
                {" "}
                Ваш телефон
                <input type="text" />
              </label>
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
