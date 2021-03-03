// import DemoAudio from '../../assets/audios/seaside_seagulls.mp3'

// 音軌元件
const AudioTrack = ({ track, handleCurrentTime, handleNextTrack, handlePlayback }) => (
  <audio
    onTimeUpdate={handleCurrentTime}
    onEnded={handleNextTrack}
    onCanPlayThrough={handlePlayback}
    src={track.audioSrc}
  >
    {console.log('[render] AudioTrack', track.audioSrc)}
  </audio>
)

export default AudioTrack