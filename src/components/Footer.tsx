import { FC } from "react";
import { RouteNames } from "../router/index";
import { NavLink } from "react-router-dom";
import { Youtube, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const Footer: FC = () => {
  const menuLinks = [
    { name: "Главная", path: RouteNames.HOME },
    { name: "Тренеры", path: RouteNames.TRAINERS },
    { name: "Расписание", path: RouteNames.SCHEDULE },
    { name: "Соревнования", path: RouteNames.COMPETITION },
    { name: "Акции", path: RouteNames.PROMOTION },
    { name: "Соляная пещера", path: RouteNames.SALTCAVE },
  ];

  // Анимация волны
  const waveVariants: Variants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  // Анимация пузырьков
  const bubbleVariants:Variants = {
    float: {
      y: [0, -20],
      opacity: [0.6, 1],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3 + Math.random() * 5,
          ease: "easeInOut",
        },
        opacity: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3 + Math.random() * 5,
          ease: "easeInOut",
        },
      },
    },
  };

  // Создаем несколько пузырьков
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: `${Math.random() * 10 + 5}px`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
  }));

  return (
    <footer className="bg-blue-950 text-white relative overflow-hidden">
      {/* Волны */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <motion.div
          className="absolute bottom-0 w-[200%] h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0iIzA3NzViZSIgZD0iTTAsNjRDMjQwLDExMiA0ODAsMCA3MjAsNDhDOTYwLDk2IDEyMDAsMCAxMjAwLDQ4VjEyMEgwVjY0WiIvPjwvc3ZnPg==')] bg-repeat-x"
          variants={waveVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-4 w-[200%] h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0iIzA4NjdhZSIgZD0iTTAsOTZDMTYwLDQ4IDMyMCwxMjAgNDgwLDcyQzY0MCwyNCA4MDAsOTYgOTYwLDQ4QzExMjAsMCAxMjAwLDQ4IDEyMDAsOTZWMTIwSDBWOTZaIi8+PC9zdmc+')] bg-repeat-x opacity-70"
          variants={waveVariants}
          animate="animate"
          style={{ animationDelay: "5s" }}
        />
      </div>

      {/* Пузырьки */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-blue-300 opacity-60"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: "10%",
          }}
          variants={bubbleVariants}
          animate="float"
          initial={{ opacity: 0 }}
          transition={{ delay: bubble.delay }}
        />
      ))}

      {/* Содержимое футера */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="font-bold text-xl text-blue-200">
                Детский плавательный центр "Утенок"
              </span>
            </motion.div>
            <motion.p 
              className="text-blue-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Профессиональное обучение плаванию для всех возрастов в
              современном бассейне
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-bold text-blue-200">Навигация</h3>
            <ul className="space-y-2">
              {menuLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <NavLink
                    to={link.path}
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-bold text-blue-200">Контакты</h3>
            <address className="not-italic text-blue-200">
              <p className="not-italic text-blue-200">г.Томск</p>
              <p className="not-italic text-blue-200">ул. Суворова, 11/1</p>
              <p className="mt-2 text-blue-200">Телефон: +7 (913) 682800</p>
              <p className="not-italic text-blue-200">Email: info@utenok.ru</p>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-blue-900 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Центр Плавания. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;