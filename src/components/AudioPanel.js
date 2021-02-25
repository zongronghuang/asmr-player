import { useState } from 'react'
import styled from '@emotion/styled'

import PlaybackButtons from './AudioPanel_parts/PlaybackButtons'
import AudioTrack from './AudioPanel_parts/AudioTrack'
import TrackInfo from './AudioPanel_parts/TrackInfo'
import Volume from './AudioPanel_parts/Volume'



// audio 控制面板元件 (匯整上面元件)
const AudioPanelJSX = ({ className, track, handleNextTrack, handlePrevTrack }) => {
  const [duration, setDuration] = useState()
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState()

  // 播放音軌
  const handlePlayback = () => {
    console.log('=== play track')
    const audio = document.querySelector('audio')
    audio.play()
    setDuration(audio.duration)
  }

  // 暫停音軌播放
  const handlePause = () => {
    const audio = document.querySelector('audio')
    audio.pause()
    console.log('== paused')
  }

  // 更新音軌目前時間
  const handleCurrentTime = (e) => {
    console.log('target', e.target.currentTime)
    console.log('playing; updating current time')
    setCurrentTime(prevCurrentTime => e.target.currentTime)
  }

  // 設定音量大小
  const handleTrackVolume = (e) => {
    const audio = document.querySelector('audio')
    audio.volume = e.target.value

    // 達成 controlled component
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
        handleCurrentTime={handleCurrentTime}
      />
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