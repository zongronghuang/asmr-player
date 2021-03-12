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

  const handleTrackVolume = (direction) => (e) => {
    e.stopPropagation()
    const audio = document.querySelector('audio')

    switch (direction) {
      case 'up':
        setVolume(audio.volume + 0.1)
        break
      case 'down':
        setVolume(audio.volume - 0.1)
        break
      default:
        setVolume(Number(e.target.value))
        break
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
          handleTrackVolume={handleTrackVolume}
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
 top: 50%;
 left: 50%;
 text-align: center;
 padding: 5px;
 margin: auto;
 border: 5px solid red;
 border-radius: 10px;
 background-color: silver;
 filter: constrast (200%);
 width: 400px;
`

export default AudioPanel