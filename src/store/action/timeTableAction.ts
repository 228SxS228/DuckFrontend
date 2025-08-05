import { baseAPI } from "../../axios/index";
import { TimeTableItem } from "../../model/model";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTimeTable = createAsyncThunk<TimeTableItem[]>(
  "timeTable/fetchAll",
  async () => {
    const response = await baseAPI.get<TimeTableItem[]>("get-time-table");
    console.log(response.data);
    return response.data;
  }
);

export const bookSession = createAsyncThunk<
  TimeTableItem,
  { sessionId: number }
>("timeTable/bookSession", async ({ sessionId }) => {
  const response = await baseAPI.post<TimeTableItem>(
    `/book-session/${sessionId}`
  );
  return response.data;
});