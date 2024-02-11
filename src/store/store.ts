import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./reducer/CarsReducer.ts";

const store = configureStore({
  reducer: {
    cars: carsReducer as ReturnType<typeof store.getState>,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export default store;
