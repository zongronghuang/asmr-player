import DemoAudio from '../../assets/audios/seaside_seagulls.mp3'

// 音軌元件
const AudioTrack = ({ handleCurrentTime, duration, currentTime }) => {
  let intervalID
  const handleCurrentTimeByInterval = () => {
    // intervalID = setInterval(handleCurrentTime, 1000)
    console.log('start interval', intervalID)


    if (duration === currentTime) {

      clearInterval(intervalID)
    }
  }

  const clearIntervalID = (id) => (e) => {
    console.log('e type', e.type)
    console.log('clear interval ID', id)
    clearInterval(id)
  }

  return (
    <audio preload="auto" onPlay={handleCurrentTimeByInterval}>
      {console.log('audio track render')}
      <source src={DemoAudio} type="audio/mpeg" />
    </audio>
  )
}

export default AudioTrack