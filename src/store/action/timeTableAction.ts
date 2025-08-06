import { baseAPI } from "../../axios/index";
import { TimeTableItem, BookingData } from "../../model/model"; // Добавим импорт BookingData
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTimeTable = createAsyncThunk<TimeTableItem[]>(
  "timeTable/fetchAll",
  async () => {
    const response = await baseAPI.get<TimeTableItem[]>("get-time-table");
    console.log("Расписание загружено:", response.data);
    return response.data;
  }
);
//Post запрос на апи
export const bookSession = createAsyncThunk<
  TimeTableItem,
  BookingData
>("timeTable/bookSession", async (bookingData) => {
  console.log("Отправка данных записи:", bookingData);

  try {
    const response = await baseAPI.post<TimeTableItem>(
      "/book-session",
      bookingData // Отправляем все данные
    );

    console.log("Ответ сервера:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка записи:", error);
    throw error;
  }
});
