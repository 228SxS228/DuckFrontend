import { FC} from "react";
// import { useAppDiscpatch, useAppSelector } from "../hooks/reduxe";
// import { fetchTrener } from "../store/action/trenerAction";
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

const TrenerComponents: FC = () => {
  // const { trener, loading, error } = useAppSelector((state) => state.trener);
  // const dispatch = useAppDiscpatch();

  // useEffect(() => {
  //   dispatch(fetchTrener());
  // }, [dispatch]);

  // if (loading) return <div>Загрузка...</div>;
  // if (error) return <div>Ошибка: {error}</div>;


const trainers: Trainer[] = [
  {
    Id: 1,
    TrainerName: "Сергей Евгеньевич Кирьянов",
    TrainerDescription: "ТГПУ-Факультет физической культуры и спорта — 2021 г.",
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
  
  return (
    // <section className="py-16" id="our-team">
    //   <div className="container mx-auto px-4">
    //     <div className="mb-12 text-center">
    //       <h2 className="mb-4 text-3xl font-bold text-sky-800 md:text-4xl">
    //         Наши тренеры
    //       </h2>
    //       <p className="mx-auto max-w-2xl text-lg text-gray-600">
    //         Профессионалы своего дела, которые помогут вашему ребенку полюбить
    //         плавание
    //       </p>
    //     </div>

    //     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    //       {trener.map((trainer, index) => (
    //         <div
    //           key={index}
    //           className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1"
    //         >
    //           <div className="relative h-64 w-full">
    //             <img
    //               src={trainer.TrainerPhotoUrl}
    //               alt={trainer.TrainerName}
    //               className="h-full object-contain"
    //             />
    //           </div>
    //           <div className="p-6">
    //             <h3 className="mb-1 text-xl font-bold text-sky-800">
    //               {trainer.TrainerName}
    //             </h3>

    //             <p className="mb-4 text-gray-600">
    //               {trainer.TrainerDescription}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="mt-10 text-center">
    //       <a
    //         href="/trainers"
    //         className="inline-flex items-center rounded-full border-2 border-sky-600 bg-white px-6 py-3 font-medium text-sky-600 transition-colors hover:bg-sky-50"
    //       >
    //         Перейти к тренерам
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white via-blue-300  overflow-hidden relative flex flex-col">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="inline-block px-4 py-1 mb-4 bg-blue-800 text-yellow-400 rounded-full text-sm font-medium">
            Наши тренеры
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Профессиональная команда тренеров
          </h2>
          <p className="text-blue-100 text-sm md:text-base">
            Наши тренеры — это опытные профессионалы с многолетним стажем работы
            и спортивными достижениями
          </p>
        </div>

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
            className=" text-black border-white/30  hover:bg-yellow-400 rounded-full px-15 text-lg bg-white"
          >
            <Link to={RouteNames.TRAINERS}>Все тренеры</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrenerComponents;
