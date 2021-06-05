import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: { weather_data: {} },
  reducers: {
    weatherDataReducer(state, action) {
      state.weather_data = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
