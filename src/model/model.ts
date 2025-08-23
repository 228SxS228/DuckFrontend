//интерфейс для овтета с сервера для расписания
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
//интерфейс для поста на сервер для записи
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
//интерфейс для поста на сервер для записи в соляную пещеру
export interface BookingSaltCaveData {
  name: string;
  phone: string;
  email: string;
  sessionType: string;
  date: string;
  time: string;
  type: "saltacave";
}
//интерфейс для поста на сервер для записи в на первое занятие
export interface BookingFirstData {
  name: string;
  phone: string;
  email: string;
  date: string;
  type: "firstsession";
}
//интерфейс для поста на сервер для записи на аренду в про
export interface BookingProData {
  name: string;
  phone: string;
  email: string;
  date: string;
  type: "rentalpro";
}
//интерфейс для ответа с сервер для формирования страницы оплаты
export interface ApplicationResponse {
  success: boolean;
  message: string;
  applicationId?: number;
}

export interface Program {
  title: string;
  description: string;
  schedule: string;
  icon: React.ReactNode;
  photoProgram: string;
  description2: string;
  age: string;
  duration: string;
  features: string[];
}
