import { combineReducers, configureStore } from "@reduxjs/toolkit";

import trenerReducer from "./slices/trenerSlice";
import timeTableReducer from "./slices/timeTableSlice";


const rootReducer = combineReducers({
  trener: trenerReducer,
  timeTable: timeTableReducer,
});

// export function setupStore() {
//   return configureStore({
//     reducer: rootReducer,
//   });
// }

// const store = configureStore({
//   reducer: rootReducer,
//   middleware:(getDefaultMiddleware) =>
//     getDefaultMiddleware()
//     .prepend(
//       additi
//     )
// })

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
