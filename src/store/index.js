import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/whetherSlice"

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;