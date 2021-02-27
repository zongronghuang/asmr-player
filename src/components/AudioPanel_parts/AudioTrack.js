// import DemoAudio from '../../assets/audios/seaside_seagulls.mp3'

// 音軌元件
const AudioTrack = ({ track, handleCurrentTime }) => {

  return (
    <audio onTimeUpdate={handleCurrentTime} src={track.src} >
      {console.log('[render] AudioTrack', track.src)}
    </audio>
  )
}

export default AudioTrack