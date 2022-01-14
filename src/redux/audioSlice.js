import { createSlice } from "@reduxjs/toolkit";
import { orderedTracks } from "../utils/trackFactory";

const initialState = {
  originalAlbum: orderedTracks,
  mode: "loopAlbum",
  playbackAlbum: orderedTracks,
  playbackTrack: orderedTracks[0],
};

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    switchMode: (state, action) => {
      const { mode: newMode } = action.payload;
      state.mode = newMode;
    },
  },
});

// 匯出 action creators
export const { switchMode } = audioSlice.actions;
// 匯出所有 reducer 方法
export default audioSlice.reducer;
