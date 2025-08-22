// timeTableSlice.ts
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { TimeTableItem } from "../../model/model";
import {
  fetchTimeTable,
  bookSession,
  fetchTimeTablePro,
  bookSaltCaveSession,
} from "../action/timeTableAction";
import { RootState } from "../index";

interface TimeTableState {
  items: TimeTableItem[];
  loading: boolean;
  error: string | null;
  bookingStatus: "idle" | "loading" | "success" | "error";
}

const initialState: TimeTableState = {
  items: [],
  loading: false,
  error: null,
  bookingStatus: "idle",
};

export const timeTableSlice = createSlice({
  name: "timeTable",
  initialState,
  reducers: {
    resetBookingStatus: (state) => {
      state.bookingStatus = "idle";
    },
    // Добавляем новый редюсер для обновления статуса сессии
    updateSessionStatus: (
      state,
      action: PayloadAction<{ sessionId: number; isFree: boolean }>
    ) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.sessionId
      );
      if (index !== -1) {
        state.items[index].isFree = action.payload.isFree;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTimeTable.fulfilled,
        (state, action: PayloadAction<TimeTableItem[]>) => {
          state.loading = false;
          const newItems = action.payload.map((item) => ({
            ...item,
            type: "pool" as const,
          }));
          state.items = [...state.items, ...newItems];
        }
      )
      .addCase(fetchTimeTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки расписания";
      })
      .addCase(fetchTimeTablePro.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTimeTablePro.fulfilled,
        (state, action: PayloadAction<TimeTableItem[]>) => {
          state.loading = false;
          const newItems = action.payload.map((item) => ({
            ...item,
            type: "poolpro" as const,
          }));
          state.items = [...state.items, ...newItems];
        }
      )
      .addCase(fetchTimeTablePro.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки расписания";
      })
      .addCase(bookSession.pending, (state) => {
        state.bookingStatus = "loading";
      })
      .addCase(bookSession.fulfilled, (state) => {
        state.bookingStatus = "success";
        // Мы больше не обновляем items здесь, так как сервер возвращает ApplicationResponse
        // Вместо этого мы будем обновлять статус сессии через отдельный экшен
      })
      .addCase(bookSession.rejected, (state) => {
        state.bookingStatus = "error";
      })
      .addCase(bookSaltCaveSession.pending, (state) => {
        state.bookingStatus = "loading";
      })
      .addCase(bookSaltCaveSession.fulfilled, (state) => {
        state.bookingStatus = "success";
      })
      .addCase(bookSaltCaveSession.rejected, (state) => {
        state.bookingStatus = "error";
      });
  },
});

// Селекторы
const selectTimeTableState = (state: RootState) => state.timeTable;

export const selectLoading = createSelector(
  [selectTimeTableState],
  (state) => state.loading
);

export const selectError = createSelector(
  [selectTimeTableState],
  (state) => state.error
);

export const selectItems = createSelector(
  [selectTimeTableState],
  (state) => state.items
);

export const selectBookingStatus = createSelector(
  [selectTimeTableState],
  (state) => state.bookingStatus
);

export const selectTimeTableInfo = createSelector(
  [selectLoading, selectError, selectItems, selectBookingStatus],
  (loading, error, items, bookingStatus) => ({
    loading,
    error,
    items,
    bookingStatus,
    hasData: items.length > 0,
  })
);

export const { resetBookingStatus, updateSessionStatus } =
  timeTableSlice.actions;
export default timeTableSlice.reducer;
