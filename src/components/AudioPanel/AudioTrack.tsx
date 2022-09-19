import { forwardRef } from "react";
import { Action, Dispatch } from "@reduxjs/toolkit";

import { Track } from "../../types";

type ReduxActionDispatch = {
  switchTrack: (action: { direction: string }) => Action;
  dispatch: Dispatch;
};

type AudioTrackProps = {
  mode: string;
  track: Track;
  handlePlayback: () => void;
} & ReduxActionDispatch;

const AudioTrack = forwardRef<HTMLAudioElement, AudioTrackProps>(
  ({ mode, switchTrack, track, dispatch, handlePlayback }, ref) => (
    <audio
      onEnded={() => dispatch(switchTrack({ direction: "forward" }))}
      onCanPlayThrough={handlePlayback}
      src={track.audioSrc}
      loop={mode === "loopTrack"}
      ref={ref}
    >
      {/* {console.log("[render] AudioTrack", track.audioSrc)} */}
    </audio>
  )
);

export default AudioTrack;
