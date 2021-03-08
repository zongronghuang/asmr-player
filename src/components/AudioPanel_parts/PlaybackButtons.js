import styled from '@emotion/styled'

// 操作按鈕元件
const PlaybackButtonsJSX = ({
  className,
  handlePlayback,
  handlePause,
  handleNextTrack,
  handlePrevTrack
}) => (
  <div className={className}>
    {console.log('[render] PlaybackButtons')}
    <button id="prev" onClick={handlePrevTrack}>Prev</button>
    <button id="play" onClick={handlePlayback}>Play</button>
    <button id="pause" onClick={handlePause}>Pause</button>
    <button id="next" onClick={handleNextTrack}>Next</button>
  </div>
)

const PlaybackButtons = styled(PlaybackButtonsJSX)`
  display: flex;
`

export default PlaybackButtons