import { combineReducers, configureStore } from "@reduxjs/toolkit";
import timeTableReducer from "./slices/timeTableSlice";

const rootReducer = combineReducers({
  timeTable: timeTableReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
