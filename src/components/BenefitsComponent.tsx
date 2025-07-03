import { RouteNames } from "@/router";
import { ArrowRight, Check, Waves, Droplets, Fish } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ImageGalleryBanner from "./ImageGalleryBanner";
import photo2 from "@/static/interior/SSV_8967.jpg";
import photo3 from "@/static/interior/SSV_8975.jpg";
import photo4 from "@/static/interior/SSV_8910.jpg";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BenefitsComponent: FC = () => {
  const images = [photo2, photo3, photo4];
  const benefits = [
    "2 бассейна по 12 метров и комфортной глубиной",
    "Игровые, кафе, зоны ожидания",
    "Просторные раздевалки и душевые",
    "Мотивационная система для малышей с медалями и кубками",
    "Соревнования с множеством подарков для наших утят",
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  const bubbleVariants: Variants = {
    float: {
      y: [0, -15],
      opacity: [0.3, 0.7],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4 + Math.random() * 5,
          ease: "easeInOut",
        },
        opacity: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4 + Math.random() * 5,
          ease: "easeInOut",
        },
      },
    },
  };

  // Пузырьки разных размеров и цветов
  const statsBubbles = Array.from({ length: 12 }).map((_, i) => {
    const size = Math.random() * 15 + 8;
    const colors = ["#7dd3fc", "#38bdf8", "#0ea5e9", "#bae6fd"];
    return {
      id: i,
      size: `${size}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.4 + Math.random() * 0.3,
    };
  });

  // Анимация для рыбок
  const fishVariants: Variants = {
    swim: {
      x: ["0%", "100%"],
      y: [0, -10, 0, 10, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        x: {
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear",
        },
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
        },
        rotate: {
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Декоративные рыбки */}
      {[1, 2, 3].map((id) => (
        <motion.div
          key={`fish-${id}`}
          className="absolute hidden md:block z-0"
          style={{
            top: `${20 + id * 20}%`,
            left: "-50px",
            fontSize: "2rem",
            filter: "drop-shadow(0 0 4px rgba(255,255,255,0.5))",
          }}
          variants={fishVariants}
          animate="swim"
        >
          <Fish className="text-blue-400" />
        </motion.div>
      ))}

      {/* Фоновые пузырьки */}
      <div className="absolute inset-0 pointer-events-none">
        {statsBubbles.map((bubble) => (
          <motion.div
            key={`bubble-${bubble.id}`}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              backgroundColor: bubble.color,
              opacity: bubble.opacity,
            }}
            variants={bubbleVariants}
            animate="float"
            initial={{ opacity: 0 }}
            transition={{ delay: bubble.delay }}
          />
        ))}
      </div>

      {/* Секция статистики с водным градиентом */}
      <section
        className="py-14 relative z-10"
        style={{
          background:
            "linear-gradient(160deg, #e0f2fe 0%, #bae6fd 30%, #7dd3fc 100%)",
        }}
      >
        {/* Верхняя волна */}
        <div className="absolute top-0 left-0 w-full h-20 -translate-y-[99%] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAsNjRDMjQwLDExMiA0ODAsMCA3MjAsNDhDOTYwLDk2IDEyMDAsMCAxMjAwLDQ4VjEyMEgwVjY0WiIvPjwvc3ZnPg==')] bg-repeat-x scale-y-[-1] opacity-90" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: "8",
                label: "Опытных тренеров",
                icon: <Droplets className="text-blue-700" />,
              },
              {
                value: "12 лет",
                label: "Опыта работы с детьми",
                icon: <Waves className="text-blue-700" />,
              },
              {
                value: "25000+",
                label: "Довольных родителей и утят",
                icon: <Fish className="text-blue-700" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-blue-100 shadow-lg relative overflow-hidden"
                custom={index}
                variants={counterVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                ref={index === 0 ? ref : undefined}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                }}
              >
                {/* Эффект воды в углу */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-300 opacity-20"></div>

                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>

                <motion.p
                  className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-blue-900 font-medium z-10 relative">
                  {stat.label}
                </p>
              </motion.div>
            ))}

            {/* Дополнительный декоративный блок */}
            <motion.div
              className="hidden md:flex flex-col items-center justify-center p-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl text-white shadow-lg"
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Waves className="w-12 h-12 mb-3" />
              <p className="text-xl font-bold">Комфортная</p>
              <p className="text-lg font-bold">водная среда</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Основная секция с фото и описанием */}
      <section
        className="py-16 relative"
        style={{
          background: "linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)",
        }}
      >
        {/* Верхняя волна */}
        <div className="absolute top-0 left-0 w-full h-20 -translate-y-[99%] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0iI2JhZTYwZCIgZD0iTTAsOTZDMTYwLDQ4IDMyMCwxMjAgNDgwLDcyQzY0MCwyNCA4MDAsOTYgOTYwLDQ4QzExMjAsMCAxMjAwLDQ4IDEyMDAsOTZWMTIwSDBWOTZaIi8+PC9zdmc+')] bg-repeat-x" />
        </div>

        {/* Декоративные капли воды */}
        <div className="absolute top-10 right-10 opacity-10">
          <Droplets className="w-32 h-32 text-blue-400" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/20 z-10"></div>
              <ImageGalleryBanner
                images={images}
                interval={3000}
                height="h-[500px]"
              />

              {/* Эффект отражения воды */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-400/10 to-transparent"></div>

              {/* Плавающие элементы */}
              <motion.div
                className="absolute top-6 left-6 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-bold text-sm z-20"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                Детский бассейн
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-bold shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <Waves className="h-4 w-4 mr-2" />О нашем центре
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-6"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Современный центр плавания для самых маленьких
              </motion.h2>

              <motion.p
                className="text-blue-900 mb-7 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Мы предлагаем методику обучения плаванию деток от 3 месяцев до
                10 лет, где каждый малыш научиться базовым навыкам на воде с
                большим удовольствием и наслаждением для него. Наш центр
                плавания оборудован современными бассейнами с системами
                предварительной, глубокой очистки.
              </motion.p>

              <div className="mb-8 bg-white/80 backdrop-blur-sm p-5 rounded-xl border-2 border-blue-100 shadow-sm">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <Waves className="mr-2 text-cyan-500" />
                  Наши преимущества:
                </h3>
                <ul className="space-y-3">
                  {benefits.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start p-3 rounded-lg bg-gradient-to-r from-white to-blue-50 border border-blue-100"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{
                        backgroundColor: "rgba(186, 230, 253, 0.3)",
                        borderColor: "#7dd3fc",
                      }}
                    >
                      <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="h-3 w-3 text-blue-900" />
                      </div>
                      <span className="text-blue-900 font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.03 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg transform transition-all duration-300 group overflow-hidden relative"
                >
                  {/* Эффект воды на кнопке */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                  <Link
                    to={RouteNames.SCHEDULE}
                    className="inline-flex items-center"
                  >
                    <span>Посмотреть расписание</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsComponent;