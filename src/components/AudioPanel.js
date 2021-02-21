import { useState } from 'react'
import styled from '@emotion/styled'


import PlaybackButtons from './AudioPanel_parts/PlaybackButtons'
import AudioTrack from './AudioPanel_parts/AudioTrack'
import TrackInfo from './AudioPanel_parts/TrackInfo'
import VolumeAndMode from './AudioPanel_parts/VolumeAndMode'


// audio 控制面板元件 (匯整上面元件)
const AudioPanelJSX = ({ className }) => {
  const [duration, setDuration] = useState()
  const [currentTime, setCurrentTime] = useState(7)

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

    // currentTime 的 state 有更新，也有更新到畫面上
    setCurrentTime(prevCurrentTime => prevCurrentTime + 10)

    // currentTime 的 state 抓不到值???!!!
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
      <PlaybackButtons
        handlePlayback={handlePlayback}
        handlePause={handlePause}
        handleNextTrack={handleNextTrack}
        handlePreviousTrack={handlePreviousTrack}
      />
      <TrackInfo duration={duration} currentTime={currentTime} />
      <VolumeAndMode handleTrackVolume={handleTrackVolume} />
      <AudioTrack handleCurrentTime={handleCurrentTime} duration={duration} currentTime={currentTime} />
      {console.log('audio panel render')}
      <progress></progress>
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