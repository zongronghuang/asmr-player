import { useState } from 'react'
import styled from '@emotion/styled'

import PlaybackControl from './AudioPanel_parts/PlaybackControl'
import AudioTrack from './AudioPanel_parts/AudioTrack'
import VolumeControl from './AudioPanel_parts/VolumeControl'
import ModeControl from './AudioPanel_parts/ModeControl'

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
  const [volume, setVolume] = useState(0.5)
  const [activeButton, setActiveButton] = useState('play')

  const handlePlayback = () => {
    const audio = document.querySelector('audio')

    // 發生 onCanPlayThrough 事件時，AudioTrack 元件設計為會自動播放
    // 第一次事件發生時，瀏覽器要求使用者必須手動觸發播放，否則會跑出錯誤訊息
    // 用 catch() 接到錯誤訊息並忽略
    audio.play()
      .catch(error => {
        if (error) setActiveButton('play')
        console.error('Playback error', error)
      })

    audio.volume = volume
    setActiveButton('pause') // 隱藏 play 鍵，顯示 pause 鍵
  }

  const handlePause = () => {
    const audio = document.querySelector('audio')

    audio.pause()
    setActiveButton('play')  // 隱藏 pause 鍵，顯示 play 鍵
  }

  // 點按圖示或拖拉 input 欄位的拉桿調整音量
  const handleVolumeUpDown = (method) => (e) => {
    const audio = document.querySelector('audio')
    const step = 0.1

    const volumeChangeMethod = {
      'up': () => setVolume(prevVolume => {
        if (prevVolume >= 1) return prevVolume

        audio.volume = Number((prevVolume + step).toFixed(1))
        return audio.volume
      }),
      'down': () => setVolume(prevVolume => {
        if (prevVolume <= 0) return prevVolume

        // toFixed 解除浮點數運算不精確問題
        audio.volume = Number((prevVolume - step).toFixed(1))
        return audio.volume
      }),
      'manual': () => setVolume(prevVolume => {
        audio.volume = Number(e.target.value)
        return audio.volume
      })
    }

    volumeChangeMethod[method]()
  }

  return (
    <div
      className={className}
      draggable="true"
      id="dragItem"
      onDrag={handleDrag}
      onDragStart={handleDragStart} >
      {/* {console.log('[render] AudioPanel')} */}
      <PlaybackControl
        activeButton={activeButton}
        handlePlayback={handlePlayback}
        handlePause={handlePause}
        handleNextTrack={handleNextTrack}
        handlePrevTrack={handlePrevTrack}
      />
      <div>
        <VolumeControl
          handleVolumeUpDown={handleVolumeUpDown}
          volume={volume}
        />
        <AudioTrack
          track={track}
          mode={mode}
          handleNextTrack={handleNextTrack}
          handlePlayback={handlePlayback}
        />
      </div>
      <ModeControl
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
 top: 93%;
 left: 50%;
 height: 27px;
 transform: translate(-50%, -50%);
 text-align: center;
 padding: 10px;
 margin: auto;
 filter: constrast (200%);
 border-radius: 10px 10px 10px 10px;
 cursor: move;

 @keyframes background-filler {
  100% {
    box-shadow: 3px 3px goldenrod, -3px 3px goldenrod, 3px -3px goldenrod, -3px -3px goldenrod;
    background-color: black;
  }
}

 :hover {
  animation-name: background-filler;
  animation-iteration-count: 1;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
 }
`

export default AudioPanel