import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
// import githubGetReducer from "store/reducers/githubGet";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // githubGet: githubGetReducer,
  },
});

export default store;
