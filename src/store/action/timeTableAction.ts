import { baseAPI } from "../../axios/index";
import { TimeTableItem, BookingData, BookingSaltCaveData, BookingFirstData, BookingProData } from "../../model/model"; // Добавим импорт BookingData
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTimeTable = createAsyncThunk<TimeTableItem[]>(
  "timeTable/fetchAll",
  async () => {
    const response = await baseAPI.get<TimeTableItem[]>("get-time-table");
    console.log("Расписание загружено:", response.data);
    return response.data;
  }
);
export const fetchTimeTablePro = createAsyncThunk<TimeTableItem[]>(
  "timeTablePro/fetchAll",
  async () => {
    const response = await baseAPI.get<TimeTableItem[]>("get-time-table");
    console.log("Расписание загружено:", response.data);
    return response.data;
  }
);
//Post запрос на апи
export const bookSession = createAsyncThunk<TimeTableItem, BookingData>(
  "timeTable/bookSession",
  async (bookingData) => {
    try {
      const response = await baseAPI.post<TimeTableItem>(
        "/create-application",
        bookingData
      );
      return {
        
        ...response.data,
        type: bookingData.type, // Добавляем тип в ответ
      };
    } catch (error) {
      console.error("Ошибка записи:", error);
      throw error;
    }
  }
);

//для записи в пещеру
export const bookSaltCaveSession = createAsyncThunk<any, BookingSaltCaveData>(
  "saltCave/bookSession",
  async (bookingData) => {
    try {
      const response = await baseAPI.post<any>(
        "/create-application",
        bookingData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
//для записи в на первое занятие
export const bookFirstSession = createAsyncThunk<any, BookingFirstData>(
  "firstSession/bookSession",
  async (bookingData) => {
    try {
      const response = await baseAPI.post<any>(
        "/create-application",
        bookingData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
//для записи на аренду про
export const bookProSession = createAsyncThunk<any, BookingProData>(
  "rentalPro/bookSession",
  async (bookingData) => {
    try {
      const response = await baseAPI.post<any>(
        "/create-application",
        bookingData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
