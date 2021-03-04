const AudioTrack = ({
  track,
  mode,
  handleCurrentTime,
  handleNextTrack,
  handlePlayback
}) => (
  <audio
    onTimeUpdate={handleCurrentTime}
    onEnded={handleNextTrack}
    onCanPlayThrough={handlePlayback}
    src={track.audioSrc}
    loop={mode === 'loopTrack'}
  >
    {console.log('[render] AudioTrack', track.audioSrc)}
  </audio>
)

export default AudioTrack