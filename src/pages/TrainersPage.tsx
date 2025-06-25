import { useState, useEffect, FC } from "react";
import { Trainer } from "../model/model";
import Modal from "../components/Modal";
import { useAppDiscpatch, useAppSelector } from "../hooks/reduxe";
//import { fetchTrener} from "../store/action/trenerAction";
import { Award, GraduationCap } from "lucide-react";



import bykreev  from "@/static/trainers/bykreev.jpg";
import kiryanov  from "@/static/trainers/kiryanov.jpg";
import lapshina  from "@/static/trainers/lapshina.jpg";
import oger  from "@/static/trainers/oger.jpg";
import sandra  from "@/static/trainers/sandra.jpg";
import sheremeta  from "@/static/trainers/sheremeta.jpg";
import volkov  from "@/static/trainers/volkov.jpg";
import zilina  from "@/static/trainers/zilina.jpg";

export const trainerConst: Trainer[] = [
  {
    Id: 1,
    TrainerName: "Сергей Евгеньевич Кирьянов",
    TrainerDescription: "ТГПУ-Факультет физической культуры и спорта — 2021 г.",
    TrainerPhotoUrl: kiryanov
  },
  {
    Id: 2,
    TrainerName: "Наталья Петровна Огер",
    TrainerDescription: "Вхахах прикольная бабулька",
    TrainerPhotoUrl: oger
  },
  {
    Id: 3,
    TrainerName: "Мария Алексеевна Лапшина",
    TrainerDescription: "ТГПК направление: Физическая культура — 2019 г.",
    TrainerPhotoUrl: lapshina
  },
  {
    Id: 4,
    TrainerName: "Алина Константиновна Жилина",
    TrainerDescription: "ТГПУ — Факультет физической культуры и спорта — 2019 г.",
    TrainerPhotoUrl: zilina
  },
  {
    Id: 5,
    TrainerName: "Виктория Дмитриевна Шеремета",
    TrainerDescription: "Томский Аграрный Колледж — 2013 г.",
    TrainerPhotoUrl: sheremeta
  },
  {
    Id: 6,
    TrainerName: "Максим Сергеевич Букреев",
    TrainerDescription: "ТГПУ — Факультет физической культуры и спорта — 2020 г.",
    TrainerPhotoUrl: bykreev
  },
  {
    Id: 7,
    TrainerName: "Сандра Евгеньевна Сен-Ли",
    TrainerDescription: "УрФУ имени первого президента России Б.Н.Ельцина – 2021г;",
    TrainerPhotoUrl: sandra
  },
   {
    Id: 8,
    TrainerName: "Евгений Александрович Волков",
    TrainerDescription: "УрФУ имени первого президента России Б.Н.Ельцина – 2021г;",
    TrainerPhotoUrl: volkov
  }
];

//trener, добавить в const {  loading, error } = useAppSelector((state) => state.trener);
const TrainersPage: FC = () => {
  const {  loading, error } = useAppSelector((state) => state.trener);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDiscpatch();

  useEffect(() => {
    //dispatch(fetchTrener());
    // dispatch(fetchTrenerById(1));
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (!dataSrc) {
  //         throw new Error("с API нет данных");
  //       }

  //       const response = await fetch(dataSrc);

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const fetchedTrainers = await response.json();
  //       setTrainers(fetchedTrainers); // Сохранение данных в состояние
  //     } catch (error) {
  //       setError(
  //         error instanceof Error ? error.message : "Ошибка загрузки данных"
  //       );
  //       console.error("Error fetching trainers:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [dataSrc]); //массив зависимостей, чтобы запрос выполнялся один раз при монтировании

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTrainer(null);
  };
  // const handleTrainerClick = (trainer: Trainer) => {
  //   setSelectedTrainer(trainer);
  //   setIsModalOpen(true);
  // };

  if (loading) {
    return <div className="text-center py-8">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (!trainerConst?.length) {
    return <div className="text-center py-8">Данные не найдены</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-b from-sky-100 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-6 text-3xl font-bold text-sky-800 md:text-4xl lg:text-5xl">
              Наши тренеры
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-700">
              Познакомьтесь с профессиональной командой тренеров детского
              плавательного центра "Утенок"
            </p>
          </div>
        </div>
      </section>
      {/* <TrainerDetails /> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trener.map((trainer) => (
          <div
            key={trainer.Id}
            onClick={() => handleTrainerClick(trainer)}
            className="bg-gray-300 rounded-lg overflow-hidden hover:ring-2 hover:ring-indigo-500 transition-all cursor-pointer"
          >
            <div className="w-full h-48 flex items-center justify-center overflow-hidden">
              <img
                src={trainer.TrainerPhotoUrl}
                alt={trainer.TrainerName}
                className="h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{trainer.TrainerName}</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90">
                {trainer.TrainerDescription}
              </p>
            </div>
          </div>
        ))}
      </div> */}
     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  {trainerConst.map((trainer, index) => {
    return (
      <div
        key={index}
        className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 flex flex-col h-full"
      >
        <div className="relative h-128 w-full overflow-hidden">
          <img
            src={trainer.TrainerPhotoUrl || "/placeholder.svg"}
            alt={trainer.TrainerName}
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 15%' }}
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="mb-1 text-xl font-bold text-sky-800">
            {trainer.TrainerName}
          </h3>

          <div className="mb-4 space-y-2 flex-grow">
            <div className="flex items-start">
              <GraduationCap className="mr-2 mt-1 h-5 w-5 shrink-0 text-sky-600" />
              <p className="text-sm text-gray-700">
                <span className="font-medium">Образование:</span>{" "}
                {trainer.TrainerDescription}
              </p>
            </div>
            <div className="flex items-start">
              <Award className="mr-2 mt-1 h-5 w-5 shrink-0 text-sky-600" />
              <p className="text-sm text-gray-700">
                <span className="font-medium">Стаж:</span> 5+ лет
              </p>
            </div>
          </div>

          <button className="w-full rounded-md bg-sky-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-sky-700">
            Подробнее
          </button>
        </div>
      </div>
    );
  })}
</div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedTrainer?.TrainerName || "Тренер"}
      >
        {selectedTrainer && (
          <div className="flex space-x-4">
            <img
              src={selectedTrainer.TrainerPhotoUrl}
              alt={selectedTrainer.TrainerName}
              className="w-1/2 h-60 object-cover rounded-lg"
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90">
              {selectedTrainer.TrainerDescription}
            </p>
          </div>
        )}
      </Modal>
      <div className="mt-12 rounded-lg bg-sky-50 p-6 text-center">
        <h2 className="mb-4 text-2xl font-bold text-sky-800">
          Хотите присоединиться к нашей команде?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-700">
          Мы всегда рады талантливым и увлеченным тренерам в нашей команде. Если
          вы любите работать с детьми и имеете опыт в обучении плаванию,
          отправьте нам свое резюме.
        </p>
        <a
          href="#contacts"
          className="inline-flex items-center rounded-md bg-sky-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-700"
        >
          Отправить резюме
        </a>
      </div>
    </div>
  );
};

export default TrainersPage;
