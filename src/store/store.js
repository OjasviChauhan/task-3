import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import cityReducer from "./citySlice";

const store = configureStore({
  reducer: { weather: weatherReducer, city: cityReducer },
});

export default store;
