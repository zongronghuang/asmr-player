import styled from '@emotion/styled'

// 音訊資訊元件 (名稱、時間、播放進度)
const TrackInfoJSX = ({ className, duration, currentTime }) => {
  const durationSecs = Math.round(duration) || 0
  const currentTimeSecs = Math.round(currentTime) || 0

  return (
    <div className={className}>
      {console.log('info render')}
      <div id="info">
        <span>Name</span>
        <time>{currentTimeSecs}/{durationSecs}</time>
      </div>
      <progress value={currentTimeSecs} max={durationSecs}></progress>
    </div>
  )
}

const TrackInfo = styled(TrackInfoJSX)`
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

export default TrackInfo