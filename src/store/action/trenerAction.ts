import {baseAPI} from "../../axios/index";
import { AppDispatch } from "../index";
import {SingleItemResponse, Trainer } from "../../model/model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { trenerSlice } from "../slices/trenerSlice";

// export const fetchTrener = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       dispatch(trenerSlice.actions.fetching());
//       const response = await axios.get<ServerResponse<Trainer>>(
//         "get-trainer-all"
//       );
//       console.log(response.data.data);
//       dispatch(trenerSlice.actions.fetchSuccess(response)); // Доступ к data через response.data.data
//     } catch (e: any) {
//       console.error("Ошибка запроса:", e.message);
//       dispatch(trenerSlice.actions.fetchError(e));
//     }
//   };
// };

export const fetchTrener = () => {
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
      const response = await baseAPI.get<Trainer[]>("get-trainer-all");
      console.log(response.data)
      dispatch(trenerSlice.actions.fetchSuccess(response.data));
    } catch (e: any) {
      console.error("Ошибка запроса:", e.message);
      dispatch(trenerSlice.actions.fetchError(e));
    }
  };
};


export const fetchTrenerById = createAsyncThunk(
  "trener/fetchById",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await baseAPI.get<SingleItemResponse<Trainer>>(
        `get-trainer/${id}`
      );
      console.log(response.data.response.TrainerDescription);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
