const AudioTrack = ({
  track,
  mode,
  handleNextTrack,
  handlePlayback
}) => (
  <audio
    onEnded={handleNextTrack}
    onCanPlayThrough={handlePlayback}
    src={track.audioSrc}
    loop={mode === 'loopTrack'}
  >
    {/* {console.log('[render] AudioTrack', track.audioSrc)} */}
  </audio>
)

export default AudioTrack