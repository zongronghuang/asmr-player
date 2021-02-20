import { useState } from 'react'
import styled from '@emotion/styled'
import DemoAudio from '../assets/audios/seaside_seagulls.mp3'

// 操作按鈕元件
const ButtonsJSX = ({ className, handlePlayback, handleNextTrack, handlePreviousTrack }) => (
  <div className={className}>
    <button id="prev" onClick={handlePreviousTrack}>Previous</button>
    <button id="play" onClick={handlePlayback}>Play</button>
    <button id="next" onClick={handleNextTrack}>Next</button>
  </div>
)

const Buttons = styled(ButtonsJSX)`
  display: flex;
  justify-content: space-between;
`

// 音訊資訊元件 (名稱、時間、播放進度)
const InfoJSX = ({ className, handleTrackTime }) => (
  <div className={className}>
    <div id="info">
      <span>Name</span>
      <time onClick={handleTrackTime}>Time</time>
    </div>
    <progress max="100"></progress>
  </div>
)

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

// audio 控制面板元件 (匯整上面元件)
const AudioPanelJSX = ({ className }) => {



  const handlePlayback = () => {
    console.log('=== play track')
    const audio = document.querySelector('audio')
    console.log('audio', audio)
    audio.play()
    console.log('after play')
  }

  const handleTrackTime = () => {
    const audio = document.querySelector('audio')
    console.log('=== time')
    console.log('duration', audio.duration)
    console.log('currentTime', audio.currentTime)
  }

  const handleTrackVolume = () => {
    console.log('=== volume')
  }

  const handleNextTrack = () => {
    console.log('=== next track')
  }

  const handlePreviousTrack = () => {
    console.log('=== prev track')
  }

  return (
    <div className={className}>
      <Buttons
        handlePlayback={handlePlayback}
        handleNextTrack={handleNextTrack}
        handlePreviousTrack={handlePreviousTrack}
      />
      <Info handleTrackTime={handleTrackTime} />
      <Controls handleTrackVolume={handleTrackVolume} />
      <audio preload="auto">
        <source src={DemoAudio} type="audio/mpeg" />
      </audio>
      {console.log('audio panel render')}
    </div>
  )
}

const AudioPanel = styled(AudioPanelJSX)`
 display: flex;
 justify-content: space-between;

 position: absolute; top: 50%; 

 border: 1px solid black;
 width: 50%;
 text-align: center;
 padding: 0;
 margin: auto;
 
`

export default AudioPanel