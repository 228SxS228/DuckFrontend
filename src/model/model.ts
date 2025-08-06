export interface TimeTableItem {
  id?: number;
  name: string;
  day: string; // Дата в формате "2025-08-05T00:00:00"
  time: string; // Время в формате "11:00"
  trainerName: string; // Имя тренера
  className: string; // Тип занятия
  isFree: boolean; // Свободна запись?
}
export interface BookingData {
  sessionId: number;
  name: string;
  phone: string;
  day: string;
  time: string;
  paid: boolean;
}