import { useState } from 'react'
import styled from '@emotion/styled'
import DemoAudio from '../assets/audios/seaside_seagulls.mp3'

// 操作按鈕元件
const ButtonsJSX = ({
  className,
  handlePlayback,
  handlePause,
  handleNextTrack,
  handlePreviousTrack
}) => (
  <div className={className}>
    <button id="prev" onClick={handlePreviousTrack}>Previous</button>
    <button id="play" onClick={handlePlayback}>Play</button>
    <button id="pause" onClick={handlePause}>Pause</button>
    <button id="next" onClick={handleNextTrack}>Next</button>
  </div>
)

const Buttons = styled(ButtonsJSX)`
  display: flex;
  justify-content: space-between;
`

// 音訊資訊元件 (名稱、時間、播放進度)
const InfoJSX = ({ className, duration, currentTime }) => {
  const durationSecs = Math.round(duration) || 0
  const currentTimeSecs = Math.round(currentTime) || 0

  return (
    <div className={className}>
      <div id="info">
        <span>Name</span>
        <time>{currentTimeSecs}/{durationSecs}</time>
      </div>
      <progress max="100"></progress>
    </div>
  )
}

const Info = styled(InfoJSX)`
  display: flex;
  flex-direction: column;
  width: 50%;

  & > #info {
  background-color: green;  
  display: flex;
  justify-content: space-between;  
  }

  & > progress {
    width: 100%;
  }
`

// 音量和設定模式元件
const ControlsJSX = ({ className, handleTrackVolume }) => (
  <div className={className}>
    <div id="volume" onClick={handleTrackVolume}>Volume <progress max="1"></progress></div>
    <div id="mode">Mode</div>
  </div>
)

const Controls = styled(ControlsJSX)`
  display: flex;
  justify-content: space-between;

  & > #volume {
    border: 1px solid black;
    cursor: pointer;
  }

  & > #mode {
    border: 1px solid black;
    cursor: pointer;
  }
`
// 音軌元件
const AudioTrack = ({ handleCurrentTime, duration, currentTime }) => {
  let intervalID
  const handleCurrentTimeByInterval = () => {
    intervalID = setInterval(handleCurrentTime, 1000)
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
      <source src={DemoAudio} type="audio/mpeg" />
    </audio>
  )
}

// audio 控制面板元件 (匯整上面元件)
const AudioPanelJSX = ({ className }) => {
  const [duration, setDuration] = useState()
  const [currentTime, setCurrentTime] = useState()

  // 播放音軌
  const handlePlayback = () => {
    console.log('=== play track')
    const audio = document.querySelector('audio')
    audio.play()
    setDuration(audio.duration)
    setCurrentTime(audio.currentTime)
  }

  // 暫停音軌播放
  const handlePause = () => {
    const audio = document.querySelector('audio')
    audio.pause()
    console.log('== paused')
  }

  // 取得音軌長度和目前時間
  const handleCurrentTime = () => {
    console.log('== update current time')
    const audio = document.querySelector('audio')
    console.log('audio current time', audio.currentTime)
    setCurrentTime(prevCurrentTime => prevCurrentTime + 10)
    console.log('*** current time', currentTime)
  }

  // 取得音量大小
  const handleTrackVolume = () => {
    console.log('=== volume')
  }

  // 切換到下一個音軌
  const handleNextTrack = () => {
    console.log('=== next track')
  }

  // 切換到上一個音軌
  const handlePreviousTrack = () => {
    console.log('=== prev track')
  }

  return (
    <div className={className}>
      <Buttons
        handlePlayback={handlePlayback}
        handlePause={handlePause}
        handleNextTrack={handleNextTrack}
        handlePreviousTrack={handlePreviousTrack}
      />
      <Info duration={duration} currentTime={currentTime} />
      <Controls handleTrackVolume={handleTrackVolume} />
      <AudioTrack handleCurrentTime={handleCurrentTime} duration={duration} currentTime={currentTime} />
      {console.log('audio panel render')}
    </div>
  )
}

const AudioPanel = styled(AudioPanelJSX)`
 display: flex;
 justify-content: space-between;

 position: absolute; top: 50%; 

 border: 1px solid black;
 width: 100%;
 text-align: center;
 padding: 0;
 margin: auto;
 background-color: gray;
`

export default AudioPanel