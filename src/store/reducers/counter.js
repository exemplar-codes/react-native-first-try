import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
    },
    addCount(state) {
      console.log(state);
      state.count++;
    },
  },
});

export const { setCount, addCount } = counterSlice.actions;
export default counterSlice.reducer;
