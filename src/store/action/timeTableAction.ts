import { baseAPI } from "../../axios/index";
import { AppDispatch } from "../index";
import { TimeTable } from "../../model/model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { timeTableSlice } from "../slices/timeTableSlice";

export const fetchTimeTable = () => {
  return async (dispatch: AppDispatch) => {
    try {
      //   dispatch(trenerSlice.actions.fetching());
      //   const response = await axios.get<ServerResponse<Trainer>>(
      //     "get-trainer-all"
      //   );
      //     хуйня не работает
      // console.log(response.data.status)
      // dispatch(trenerSlice.actions.fetchSuccess(response.data.data));

      // хуйня работает
      const response = await baseAPI.get<TimeTable[]>("get-time-table-all");
      console.log(response.data);
      dispatch(timeTableSlice.actions.fetchSuccess(response.data));
    } catch (e: any) {
      console.error("Ошибка запроса:", e.message);
      dispatch(timeTableSlice.actions.fetchError(e));
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
