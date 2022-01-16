const AudioTrack = ({ mode, switchTrack, track, dispatch, handlePlayback }) => (
  <audio
    onEnded={() => dispatch(switchTrack({ direction: "forward" }))}
    onCanPlayThrough={handlePlayback}
    src={track.audioSrc}
    loop={mode === "loopTrack"}
  >
    {console.log("[render] AudioTrack", track.audioSrc)}
  </audio>
);

export default AudioTrack;
