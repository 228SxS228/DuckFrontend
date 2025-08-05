// export interface TimeTable {
//   Id: number; // Уникальный идентификатор
//   Name: string; // Название расписания
//   TimeTableDay: TimeTableDay[]; // Список дней расписания
// }

// export interface TimeTableDay {
//   Id: number; // Уникальный идентификатор
//   DayName: string; // Название дня
//   Time: string; // Время проведения занятия
//   TimeTableId: number; // Внешний ключ на TimeTable
//   TrainerId: number; // Внешний ключ на Trainer
//   ClassId: number; // Внешний ключ на Class
//   Class?: Class; // Связанное занятие 
//   Trainer?: Trainer; // Связанный тренер 
// } 
export interface TimeTableDay {
  id?: number;
  className: string;
  day: Date;
  trainerName: string;
  time: string;
}

// export interface TimeTable {
//   id: number;
//   name: string;
//   timeTableDay: TimeTableDay[];
// }

export interface Trainer {
  Id: number; // Уникальный идентификатор
  TrainerName: string; // Имя тренера
  TrainerDescription: string; // Описание тренера
  TrainerPhotoUrl: string; // Ссылка на фото тренера
}

export interface Class {
  Id: number; // Уникальный идентификатор
  ClassName: string; // Название занятия
}

export interface ServerResponse<T> {
  res: T[] ;
  status?: number;
}

export interface SingleItemResponse<T> {
  response: T;
}
