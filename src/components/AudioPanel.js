import { useState } from 'react'
import styled from '@emotion/styled'

import PlaybackButtons from './AudioPanel_parts/PlaybackButtons'
import AudioTrack from './AudioPanel_parts/AudioTrack'
import TrackInfo from './AudioPanel_parts/TrackInfo'
import Volume from './AudioPanel_parts/Volume'
import Modes from './AudioPanel_parts/Modes'

// audio 控制面板元件 (匯整上面元件)
const AudioPanelJSX = ({ className, track, handleNextTrack, handlePrevTrack }) => {
  const [duration, setDuration] = useState()
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState()

  const handlePlayback = () => {
    const audio = document.querySelector('audio')

    // 發生 onCanPlayThrough 事件時，AudioTrack 元件設計為會自動播放
    // 第一次事件發生時，瀏覽器要求使用者必須手動觸發播放，否則會跑出錯誤訊息
    // 用 catch() 接到錯誤訊息並忽略
    audio.play()
      .catch(error => { return })

    setDuration(audio.duration)
  }

  const handlePause = () => {
    const audio = document.querySelector('audio')
    audio.pause()
  }

  const handleCurrentTime = (e) => {
    setCurrentTime(prevCurrentTime => e.target.currentTime)
  }

  const handleTrackVolume = (e) => {
    const audio = document.querySelector('audio')

    // 達成 controlled component
    audio.volume = e.target.value
    setVolume(e.target.value)
  }

  return (
    <div className={className}>
      {console.log('[render] AudioPanel')}
      <PlaybackButtons
        handlePlayback={handlePlayback}
        handlePause={handlePause}
        handleNextTrack={handleNextTrack}
        handlePrevTrack={handlePrevTrack}
      />
      <div>
        <TrackInfo
          duration={duration}
          track={track}
          currentTime={currentTime}
        />
        <Volume
          handleTrackVolume={handleTrackVolume}
          volume={volume} />
        <AudioTrack
          track={track}
          handleNextTrack={handleNextTrack}
          handlePlayback={handlePlayback}
          handleCurrentTime={handleCurrentTime}
        />
      </div>
      <Modes />
    </div>
  )
}

const AudioPanel = styled(AudioPanelJSX)`
 display: flex;
 justify-content: center;
 position: absolute; top: 50%; 
 border: 1px solid black;
 text-align: center;
 padding: 0;
 margin: auto;
 background-color: gray;
`

export default AudioPanel