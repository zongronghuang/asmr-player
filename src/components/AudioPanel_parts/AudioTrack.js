import DemoAudio from '../../assets/audios/seaside_seagulls.mp3'

// 音軌元件
const AudioTrack = ({ handleCurrentTime }) => {

  return (
    <audio preload="auto" onTimeUpdate={handleCurrentTime}>
      {console.log('audio track render')}
      <source src={DemoAudio} type="audio/mpeg" />
    </audio>
  )
}

export default AudioTrack