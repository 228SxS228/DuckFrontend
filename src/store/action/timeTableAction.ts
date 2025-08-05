import { baseAPI } from "../../axios/index";
import { AppDispatch } from "../index";
import { TimeTable, TimeTableDay } from "../../model/model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { timeTableSlice } from "../slices/timeTableSlice";
import { time } from "console";

// export const fetchTimeTable = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       //   dispatch(trenerSlice.actions.fetching());
//       //   const response = await axios.get<ServerResponse<Trainer>>(
//       //     "get-trainer-all"
//       //   );
//       //     хуйня не работает
//       // console.log(response.data.status)
//       // dispatch(trenerSlice.actions.fetchSuccess(response.data.data));

//       // хуйня работает
//       const response = await baseAPI.get<TimeTable[]>("get-time-table");
//       console.log(response.data);
//       dispatch(timeTableSlice.actions.fetchSuccess(response.data));
//     } catch (e: any) {
//       console.error("Ошибка запроса:", e.message);
//       dispatch(timeTableSlice.actions.fetchError(e));
//     }
//   };
// };

export const fetchTimeTable = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await baseAPI.get<TimeTableDay[]>("get-time-table");

      // Группируем данные по названию расписания
      const groupedData = response.data.reduce(
        (acc: Record<string, TimeTableDay[]>, item) => {
          if (!acc[item.className]) {
            acc[item.className] = [];
          }
          acc[item.className].push(item);
          return acc;
        },
        {}
      );

      // Преобразуем в структуру TimeTable
      const timeTables = Object.entries(groupedData).map(
        ([name, days], index) => ({
          id: index + 1,
          className: name,
          day: days,
          trainerName: name,
          time: time,
        })
      );

      dispatch(timeTableSlice.actions.fetchSuccess(timeTables));
    } catch (e: any) {
      console.error("Ошибка запроса:", e.message);
      dispatch(timeTableSlice.actions.fetchError(e.message));
    }
  };
};

export const fetchTimeTableById = createAsyncThunk<TimeTable[], number>(
  "timeTable/fetchById",
  async (id) => {
    const response = await baseAPI.get(`/timetables/${id}`);
    return response.data as TimeTable[]; // Явное приведение типа
  }
);
