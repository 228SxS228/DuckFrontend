import { FC } from "react";
import { RouteNames } from "../router/index";
import { NavLink } from "react-router-dom";
import { Youtube, Send, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  // const ulItems = [
  //   { label: "Расписание", href: "/raspisanie" },
  //   { label: "Тренеры", href: "/trainers" },
  //   { label: "Акции", href: "/offers" },
  //   { label: "Соляная пещера", href: "/saltcave" },
  // ];

  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* <div>
            <h3 className="mb-4 text-lg font-bold">О нас</h3>
            <p className="text-sky-200">
              Детский плавательный центр "Утенок" - место, где дети учатся
              плавать, развиваются и укрепляют здоровье в комфортной и
              безопасной среде.
            </p>
          </div> */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">ЦП</span>
              </div> */}
              <span className="font-bold text-xl text-blue-200">
                Детский плавательный центр "Утенок"
              </span>
            </div>
            <p className="text-blue-200 mb-6">
              Профессиональное обучение плаванию для всех возрастов в
              современном бассейне
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Youtube className="h-5 w-5 text-blue-200" />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link
                to="#"
                className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Send className="h-5 w-5 text-blue-200" />
                <span className="sr-only">Telegramm</span>
              </Link>
              <Link
                to="#"
                className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Twitter className="h-5 w-5 text-blue-200" />
                <span className="sr-only">Вконтакте</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-blue-200">Навигация</h3>
            <ul className="space-y-2 ">
              {/* {ulItems.map((item) => (
                <li
                  key={item.href}
                  value={item.href}
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors text-sm font-medium"
                >
                  {item.label}
                </li>
              ))} */}
              <li>
                <NavLink
                  to={RouteNames.HOME}
                  className="text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouteNames.TRAINERS}
                  className="text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  Тренеры
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouteNames.SCHEDULE}
                  className="text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  Расписание
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouteNames.COMPETITION}
                  className="text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  Соревнования
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouteNames.PROMOTION}
                  className="text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  Акции
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={RouteNames.SALTCAVE}
                  className="text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  Соляная пещера
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-blue-200">Контакты</h3>
            <address className="not-italic text-blue-200">
              <p className="not-italic text-blue-200">г.Томск</p>
              <p className="not-italic text-blue-200">ул. Суворова, 11/1</p>
              <p className="mt-2 text-blue-200">Телефон: +7 (913) 682800</p>
              <p className="not-italic text-blue-200">Email: info@utenok.ru</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-200">
              Часы работы
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-blue-200">Понедельник - Пятница:</span>
                <span className="text-blue-200">7:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-blue-200">Суббота:</span>
                <span className="text-blue-200">8:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-blue-200">Воскресенье:</span>
                <span className="text-blue-200">9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 text-center ">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Центр Плавания. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
