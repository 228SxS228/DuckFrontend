import { FC } from "react";
import { RouteNames } from "@/router";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import bykreev from "@/static/trainers/bykreev.jpg";
import kiryanov from "@/static/trainers/kiryanov.jpg";
import lapshina from "@/static/trainers/lapshina.jpg";
import oger from "@/static/trainers/oger.jpg";
import sandra from "@/static/trainers/sandra.jpg";
import sheremeta from "@/static/trainers/sheremeta.jpg";
import volkov from "@/static/trainers/volkov.jpg";
import zilina from "@/static/trainers/zilina.jpg";
import { Trainer } from "@/model/model";
import { Users } from "lucide-react";

const TrenerComponents: FC = () => {
  const trainers: Trainer[] = [
    {
      Id: 1,
      TrainerName: "Сергей Евгеньевич Кирьянов",
      TrainerDescription:
        "ТГПУ-Факультет физической культуры и спорта — 2021 г.",
      TrainerPhotoUrl: kiryanov,
    },
    {
      Id: 2,
      TrainerName: "Наталья Петровна Огер",
      TrainerDescription:
        "ТГПУ – «Факультет физической культуры и спорта» 1977 год.",
      TrainerPhotoUrl: oger,
    },
    {
      Id: 3,
      TrainerName: "Мария Алексеевна Лапшина",
      TrainerDescription: "ТГПК направление: Физическая культура — 2019 г.",
      TrainerPhotoUrl: lapshina,
    },
    {
      Id: 4,
      TrainerName: "Алина Константиновна Жилина",
      TrainerDescription:
        "ТГПУ — Факультет физической культуры и спорта — 2019 г.",
      TrainerPhotoUrl: zilina,
    },
    {
      Id: 5,
      TrainerName: "Виктория Дмитриевна Шеремета",
      TrainerDescription: "Томский Аграрный Колледж — 2013 г.",
      TrainerPhotoUrl: sheremeta,
    },
    {
      Id: 6,
      TrainerName: "Максим Сергеевич Букреев",
      TrainerDescription:
        "ТГПУ — Факультет физической культуры и спорта — 2020 г.",
      TrainerPhotoUrl: bykreev,
    },
    {
      Id: 7,
      TrainerName: "Сандра Евгеньевна Сен-Ли",
      TrainerDescription:
        "УрФУ имени первого президента России Б.Н.Ельцина – 2021г.",
      TrainerPhotoUrl: sandra,
    },
    {
      Id: 8,
      TrainerName: "Евгений Александрович Волков",
      TrainerDescription:
        "ТГПУ — Факультет физической культуры и спорта — 2017 г.",
      TrainerPhotoUrl: volkov,
    },
  ];

  // Анимация текста
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white via-blue-300  overflow-hidden relative flex flex-col">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#EBA31E] to-[#d6940c] text-black rounded-full font-bold shadow-lg"
            variants={textVariants}
          >
            <Users className="inline mr-2" size={18} />
            Наши тренеры
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white"
            variants={textVariants}
          >
            Профессиональная команда тренеров
          </motion.h2>

          <motion.p
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Наши тренеры — это опытные профессионалы с многолетним стажем работы
            и спортивными достижениями
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trainers.slice(0, 8).map((trainer, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-3 md:mb-4 border-2 md:border-4 border-yellow-400">
                <Link to={RouteNames.TRAINERS}>
                  <img
                    src={trainer.TrainerPhotoUrl}
                    alt={trainer.TrainerName}
                    className="object-cover"
                  />
                </Link>
              </div>
              <h3 className="text-base md:text-xl font-bold mb-0 md:mb-1 text-white">
                {trainer.TrainerName}
              </h3>
              <p className="text-yellow-400 text-xs md:text-sm mb-1 md:mb-2">
                {trainer.TrainerDescription}
              </p>
              {/* <p className="text-blue-100 text-xs md:text-sm">
                {trainer.experience}
              </p> */}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 text-black">
          <Button
            variant="outline"
            size="lg"
            className=" text-black border-white/30  hover:bg-yellow-400 rounded-full px-15 text-lg bg-white cursor-pointer"
          >
            <Link to={RouteNames.TRAINERS}>Все тренеры</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrenerComponents;
