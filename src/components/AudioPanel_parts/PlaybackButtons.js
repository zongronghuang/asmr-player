import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <button id="prev" onClick={handlePrevTrack}>
      <FontAwesomeIcon icon={['fas', 'backward']} title="Previous track" alt="Previous track" />
    </button>
    <button id="play" onClick={handlePlayback}>
      <FontAwesomeIcon icon={['fas', 'play']} title="Play" alt="Play" />
    </button>
    <button id="pause" onClick={handlePause}>
      <FontAwesomeIcon icon={['fas', 'pause']} title="Pause" alt="Pause" />
    </button>
    <button id="next" onClick={handleNextTrack}>
      <FontAwesomeIcon icon={['fas', 'forward']} title="Next track" alt="Next track" />
    </button>
  </div>
)

const PlaybackButtons = styled(PlaybackButtonsJSX)`
  display: flex;
  & > button {
   border-width: 0px;

   margin-left: 2px;
   margin-right: 2px;
  }
`

export default PlaybackButtons