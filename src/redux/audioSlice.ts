import { createSlice, current } from "@reduxjs/toolkit";
import { trackList } from "../utils/track_list";
import { randomizeTracks } from "../utils/audio_helpers";

const initialState = {
  originalAlbum: trackList,
  mode: "loopAlbum",
  album: [...trackList],
  track: { ...trackList[0] },
};

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    switchMode(state, action) {
      const { mode, originalAlbum } = current(state);
      const { mode: newMode } = action.payload;

      if (mode === newMode) {
        return;
      }
      const album =
        newMode === "shuffleAll"
          ? randomizeTracks([...originalAlbum])
          : [...originalAlbum];
      // console.log({ album });
      return {
        ...state,
        mode: newMode,
        album,
      };
    },
    switchTrack(state, action) {
      const { track, album } = current(state);
      const { direction } = action.payload;
      const trackId = album.findIndex((item) => item.name === track.name);
      let nextTrackId = 0;

      if (direction === "forward") {
        nextTrackId = trackId === album.length - 1 ? 0 : trackId + 1;
      }
      if (direction === "backward") {
        nextTrackId = trackId === 0 ? album.length - 1 : trackId - 1;
      }
      // console.log({ nextTrackId });
      return {
        ...state,
        track: { ...album[nextTrackId] },
      };
    },
    addRemoteImages(state, action) {
      const { track, album, originalAlbum } = current(state);
      const { data } = action.payload;
      const updatedOriginalAlbum = originalAlbum.map((track, id) => ({
        ...track,
        remoteBackdrop: { ...data[id] },
      }));
      const updatedAlbum = album.map((track, id) => ({
        ...track,
        remoteBackdrop: { ...data[id] },
      }));
      const updatedTrack = { ...updatedAlbum[track.order] };

      return {
        ...state,
        originalAlbum: updatedOriginalAlbum,
        album: updatedAlbum,
        track: updatedTrack,
      };
    },
    addAudioSrcs(state, action) {
      const { track, album, originalAlbum } = current(state);
      const { urls } = action.payload;

      const updatedOriginalAlbum = originalAlbum.map((track, id) => ({
        ...track,
        audioSrc: urls[id],
      }));
      const updatedAlbum = album.map((track, id) => ({
        ...track,
        audioSrc: urls[id],
      }));
      const updatedTrack = { ...updatedAlbum[track.order] };

      return {
        ...state,
        originalAlbum: updatedOriginalAlbum,
        album: updatedAlbum,
        track: updatedTrack,
      };
    },
  },
});

// 匯出 action creators
export const { switchMode, switchTrack, addRemoteImages, addAudioSrcs } =
  audioSlice.actions;
// 匯出所有 reducer 方法
export default audioSlice.reducer;
