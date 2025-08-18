export interface TimeTableItem {
  id?: number;
  name: string;
  day: string; // Дата в формате "2025-08-05T00:00:00"
  time: string; // Время в формате "11:00"
  trainerName: string; // Имя тренера
  className: string; // Тип занятия
  isFree: boolean; // Свободна запись?
  type: "pool" | "poolpro" | "saltacave"; // Добавляем тип занятия
}
export interface BookingData {
  sessionId: number;
  trainer: string;
  name: string;
  phone: string;
  day: string;
  email: string;
  time: string;
  paid: boolean;
  type: "pool" | "poolpro" | "saltacave"; // Про обычный пещера
}
export interface BookingSaltCaveData {
  name: string;
  phone: string;
  sessionType: string;
  date: string; // Изменяем с string на Date
  time: string;
  type: "saltacave";
}
export interface BookingFirstData {
  name: string;
  phone: string;
  date: string; // Изменяем с string на Date
  type: "firstsession";
}
