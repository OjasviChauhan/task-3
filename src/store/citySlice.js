import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "cityImage",
  initialState: { city_data: {} },
  reducers: {
    cityDataReducer(state, action) {
      state.city_data = action.payload;
    },
  },
});

export const cityActions = citySlice.actions;
export default citySlice.reducer;
