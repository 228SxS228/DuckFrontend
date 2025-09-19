import { workerAPI } from "../../axios/index";
import {
  TimeTableItem,
  BookingData,
  BookingSaltCaveData,
  BookingFirstData,
  BookingProData,
  ApplicationResponse,
} from "../../model/model";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchTimeTable = createAsyncThunk<TimeTableItem[]>(
//   "timeTable/fetchAll",
//   async () => {
//     const response = await baseAPI.get<TimeTableItem[]>("get-time-table");

//     return response.data;
//   }
// );
// export const fetchTimeTablePro = createAsyncThunk<TimeTableItem[]>(
//   "timeTablePro/fetchAll",
//   async () => {
//     const response = await baseAPI.get<TimeTableItem[]>("get-time-table-pro");

//     return response.data;
//   }
// );
export const fetchTimeTable = createAsyncThunk<TimeTableItem[]>(
  "timeTable/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await workerAPI.get<TimeTableItem[]>("/get-time-table");
      return response.data;
    } catch (error) {
      console.error("Error fetching time table:", error);
      return rejectWithValue("Failed to fetch time table");
    }
  }
);

export const fetchTimeTablePro = createAsyncThunk<TimeTableItem[]>(
  "timeTablePro/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await workerAPI.get<TimeTableItem[]>(
        "/get-time-table-pro"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching pro time table:", error);
      return rejectWithValue("Failed to fetch pro time table");
    }
  }
);
//Post запрос на апи
export const bookSession = createAsyncThunk<ApplicationResponse, BookingData>(
  "timeTable/bookSession",
  async (bookingData) => {
    try {
      const response = await workerAPI.post<any>(
        "/create-application",
        bookingData
      );
      return response.data;
    } catch (error) {
      console.error("Ошибка записи:", error);
      throw error;
    }
  }
);

//для записи в пещеру
export const bookSaltCaveSession = createAsyncThunk<
  ApplicationResponse,
  BookingSaltCaveData
>("saltCave/bookSession", async (bookingData) => {
  try {
    const response = await workerAPI.post<any>(
      "/create-application",
      bookingData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});
//для записи в на первое занятие
export const bookFirstSession = createAsyncThunk<
  ApplicationResponse,
  BookingFirstData
>("firstSession/bookSession", async (bookingData) => {
  try {
    const response = await workerAPI.post<any>(
      "/create-application",
      bookingData
    );

    return response.data;
  } catch (error) {
    throw error;
  }
});
//для записи на аренду про
export const bookProSession = createAsyncThunk<
  ApplicationResponse,
  BookingProData
>("rentalPro/bookSession", async (bookingData) => {
  try {
    const response = await workerAPI.post<any>(
      "/create-application",
      bookingData
    );

    return response.data;
  } catch (error) {
    throw error;
  }
});
