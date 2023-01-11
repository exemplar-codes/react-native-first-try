import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { loading: false, error: "", data: null };

const githubGetSlice = createSlice({
  name: "githubGet",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    resetData(state) {
      state.data = initialState.data;
    },
    resetStore(state) {
      state = initialState;
    },
  },
});

export const fetchData = createAsyncThunk(
  "githubGet/fetchData",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const resp = await fetch("https://api.github.com/users/sanjarcode");
      const data = await resp.json();
      dispatch(setData(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      await new Promise((r) => setTimeout(r, 5000));
      dispatch(setLoading(false));
    }
  }
);

export const { setData, setLoading, setError, resetData, resetStore } =
  githubGetSlice.actions;
export default githubGetSlice.reducer;
