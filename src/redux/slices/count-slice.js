import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state += 1
    },
    decrement: (state) => {
      return state -= 1;
    }
  }
})

export const {increment, decrement} = countSlice.actions
export default countSlice.reducer