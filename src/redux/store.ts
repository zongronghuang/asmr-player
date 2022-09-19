import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./audioSlice";

const store = configureStore({
  reducer: {
    audio: audioReducer,
  },
});

// hot reload redux reducers
// 開發時修改 redux 的 reducer 時，會自動 reload，不用重開 dev server
// 如果有多個 reducer，要用 combineReducers 匯整起來
// https://redux.js.org/api/combinereducers
if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./audioSlice", () => store.replaceReducer(audioReducer));
}

export default store;

export type RootState = ReturnType<typeof store.getState>;
