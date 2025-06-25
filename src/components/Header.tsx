import { FC } from "react";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RouteNames } from "../router/index";
import { Link, NavLink } from "react-router-dom";
import logo from "../static/utenok_logo.png";

// interface HeaderProps {
//   imageSrc?: string;
// }

// const DEFAULT_LOGO_ENDPOINT =
//   "D:projectDuckdevDuckFrontendsrcstaticлогототип утенок 2.png";

const Header: FC = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const menuRef = useRef<HTMLDivElement>(null);

  // const navItems = [
  //   { label: "Расписание", href: "/raspisanie" },
  //   { label: "Тренеры", href: "/trainers" },
  //   { label: "Акции", href: "/promotion" },
  //   { label: "Соляная пещера", href: "/saltcave" },
  //   { label: "Соревнования", href: "/competitions" },
  // ];
  // Валидация мед
  // const validateMediaSource = (url: string | undefined) => {
  //   if (!url) return "";
  //   try {
  //     new URL(url);
  //     return url;
  //   } catch {
  //     return "";
  //   }
  // };

  // const safeImageSrc = validateMediaSource(imageSrc);

  // const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //     setIsMenuOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [isMenuOpen]);
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
        {/* {/* <nav className="hidden md:flex items-center gap-8">
          {/* {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        
        </nav>  */}
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
          <Button className="hidden sm:inline-flex bg-blue-700 hover:bg-blue-800 rounded-full cursor-pointer">
            Записаться
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-full mr-4"
              >
                <Menu className="h-5 w-5" />
                {/* <span className="sr-only">Toggle menu</span> */}
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white" side="right">
              <nav className="flex mx-auto flex-col gap-4 mt-8 ">
                {/* {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </a>
                ))} */}

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
