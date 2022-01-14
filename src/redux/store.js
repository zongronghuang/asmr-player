import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./audioSlice";

export const store = configureStore({
  reducer: {
    audio: audioReducer,
  },
});
