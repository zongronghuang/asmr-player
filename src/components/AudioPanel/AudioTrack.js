import { forwardRef } from "react";

const AudioTrack = forwardRef(
  ({ mode, switchTrack, track, dispatch, handlePlayback }, ref) => (
    <audio
      onEnded={() => dispatch(switchTrack({ direction: "forward" }))}
      onCanPlayThrough={handlePlayback}
      src={track.audioSrc}
      loop={mode === "loopTrack"}
      ref={ref}
    >
      {console.log("[render] AudioTrack", track.audioSrc)}
    </audio>
  )
);

export default AudioTrack;
