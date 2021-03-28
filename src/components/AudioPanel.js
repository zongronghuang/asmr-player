import { useState } from 'react'
import styled from '@emotion/styled'

import PlaybackButtons from './AudioPanel_parts/PlaybackButtons'
import AudioTrack from './AudioPanel_parts/AudioTrack'
import TrackInfo from './AudioPanel_parts/TrackInfo'
import Volume from './AudioPanel_parts/Volume'
import Modes from './AudioPanel_parts/Modes'

// audio 控制面板元件 (匯整上面元件)
const AudioPanelJSX = ({
  className,
  track,
  mode,
  handleNextTrack,
  handlePrevTrack,
  handleModeChange,
  handleDrag,
  handleDragStart
}) => {
  const [duration, setDuration] = useState()
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const [activeButton, setActiveButton] = useState('play')

  const handlePlayback = () => {
    const audio = document.querySelector('audio')

    // 發生 onCanPlayThrough 事件時，AudioTrack 元件設計為會自動播放
    // 第一次事件發生時，瀏覽器要求使用者必須手動觸發播放，否則會跑出錯誤訊息
    // 用 catch() 接到錯誤訊息並忽略
    audio.play()
      .catch(error => { return })
    audio.volume = volume

    console.log('playback volume', audio.volume)

    setDuration(audio.duration)
    setActiveButton('pause') // 隱藏 play 鍵，顯示 pause 鍵
  }

  const handlePause = () => {
    const audio = document.querySelector('audio')

    audio.pause()
    setActiveButton('play')  // 隱藏 pause 鍵，顯示 play 鍵
  }

  const handleCurrentTime = (e) => {
    setCurrentTime(prevCurrentTime => e.target.currentTime)
  }

  // 點按圖示或拖拉 input 欄位的拉桿調整音量
  const handleVolumeUpDown = (method) => (e) => {
    const audio = document.querySelector('audio')
    const step = 0.1

    switch (method) {
      case 'up':
        setVolume(prevVolume => {
          console.log('UP==old vol', prevVolume)
          if (prevVolume >= 1) {
            return prevVolume
          } else {
            // toFixed 解除浮點數運算不精確問題
            audio.volume = Number((prevVolume + step).toFixed(1))
            console.log('UP==new vol', audio.volume)
            return audio.volume
          }
        })
        break
      case 'down':
        setVolume(prevVolume => {
          console.log('DOWN==old vol', prevVolume)
          if (prevVolume <= 0) {
            return prevVolume
          } else {
            // toFixed 解除浮點數運算不精確問題
            audio.volume = Number((prevVolume - step).toFixed(1))
            console.log('DOWN==new vol', audio.volume)
            return audio.volume
          }
        })
        break
      case 'manual':
      default:
        console.log('manual')
        setVolume(prevVolume => {
          audio.volume = Number(e.target.value)
          return audio.volume
        })
    }
  }

  return (
    <div
      className={className}
      draggable="true"
      id="dragItem"
      onDrag={handleDrag}
      onDragStart={handleDragStart}
    >
      {console.log('[render] AudioPanel')}
      <PlaybackButtons
        activeButton={activeButton}
        handlePlayback={handlePlayback}
        handlePause={handlePause}
        handleNextTrack={handleNextTrack}
        handlePrevTrack={handlePrevTrack}
      />
      <div>
        {/* <TrackInfo
          duration={duration}
          track={track}
          currentTime={currentTime}
        /> */}
        <Volume
          handleVolumeUpDown={handleVolumeUpDown}
          volume={volume} />
        <AudioTrack
          track={track}
          mode={mode}
          handleNextTrack={handleNextTrack}
          handlePlayback={handlePlayback}
          handleCurrentTime={handleCurrentTime}
        />
      </div>
      <Modes
        handleModeChange={handleModeChange}
        mode={mode}
      />
    </div>
  )
}

const AudioPanel = styled(AudioPanelJSX)`
 display: flex;
 justify-content: center;
 position: absolute; 
 top: 95%;
 left: 50%;
 transform: translate(-50%, -50%);
 text-align: center;
 padding: 10px;
 margin: auto;
 filter: constrast (200%);
 border-radius: 10px 10px 10px 10px;

 @keyframes background-filler {
  100% {
    border: 3px solid mediumslateblue;
    background-color: PaleGoldenRod;
  }
}

 :hover {
  animation-name: background-filler;
  animation-iteration-count: 1;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
 }

 svg {
   background-color: rgb (239, 239, 239);
 }

 button:hover {
   color: blue;
 }
`

export default AudioPanel