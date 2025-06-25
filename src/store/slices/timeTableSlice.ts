import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { TimeTable } from "../../model/model";
import { fetchTimeTableById } from "../action/timeTableAction";
import { RootState } from "../index"; // Убедитесь, что у вас есть тип RootState

interface TimeTableState {
  timeTable: TimeTable[];
  loading: boolean;
  error: string | null;
}

const initialState: TimeTableState = {
  loading: false,
  error: null,
  timeTable: [],
};

export const timeTableSlice = createSlice({
  name: "timeTable",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<TimeTable[]>) {
      state.loading = false;
      state.timeTable = action.payload;
    },
    fetchError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeTableById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTimeTableById.fulfilled,
        (state, action: PayloadAction<TimeTable[]>) => {
          state.loading = false;
          state.timeTable = action.payload; // Теперь с гарантированной типизацией
        }
      )
      // .addCase(fetchTimeTableById.fulfilled, (state, action) => {
      //   if (Array.isArray(action.payload)) {
      //     state.timeTable = action.payload;
      //   } else {
      //     state.error = "Invalid response format";
      //   }
      // })
      .addCase(fetchTimeTableById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

// Базовые селекторы
const selectTimeTableState = (state: RootState) => state.timeTable;

export const selectLoading = createSelector(
  [selectTimeTableState],
  (state) => state.loading
);

export const selectError = createSelector(
  [selectTimeTableState],
  (state) => state.error
);

export const selectTimeTableData = createSelector(
  [selectTimeTableState],
  (state) => state.timeTable
);

// Мемоизированный селектор для комплексных данных
export const selectTimeTableInfo = createSelector(
  [selectLoading, selectError, selectTimeTableData],
  (loading, error, timeTable) => ({
    loading,
    error,
    timeTable,
    hasData: timeTable.length > 0,
  })
);

export default timeTableSlice.reducer;
