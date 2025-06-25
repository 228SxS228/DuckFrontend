import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trainer } from "../../model/model";
import { fetchTrenerById } from "../action/trenerAction";


interface TrenerState {
  loading: boolean;
  error: string;
  trener: Trainer[];
}
const initialState: TrenerState = {
  loading: false,
  error: "",
  trener: [],
};

// export const trenerSlice = createSlice({
//   name: "trener",
//   initialState,
//   reducers: {
//     fetching(state) {
//       state.loading = true;
//     },
//     fetchSuccess(state, action: PayloadAction<Trainer[]>) {
//       state.loading = false;
//       state.trener = action.payload;
//     },
//     fetchError(state, action: PayloadAction<Error>) {
//       state.loading = false;
//       state.error = action.payload.message;
//     },
//   },
// });
export const trenerSlice = createSlice({
  name: "trener",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<Trainer[]>) {
      state.loading = false;
      state.trener = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrenerById.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchTrenerById.fulfilled, (state) => {
        state.loading = false;
        // Обновите состояние, например, сохраните найденного тренера
        // state.trener = [action.payload];
      })
      .addCase(fetchTrenerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default trenerSlice.reducer