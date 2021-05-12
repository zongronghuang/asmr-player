import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 操作按鈕元件
const PlaybackButtonsJSX = ({
  className,
  activeButton,
  handlePlayback,
  handlePause,
  handleNextTrack,
  handlePrevTrack
}) => (
  <div className={className}>
    {/* {console.log('[render] PlaybackButtons')} */}
    <button id="prev" onClick={handlePrevTrack} title="Previous track" alt="Previous track" tabIndex="1">
      <FontAwesomeIcon icon={['fas', 'backward']} size="lg" />
    </button>

    {
      (activeButton === 'play')
        ? (<button id="play" title="Play" alt="Play" onClick={handlePlayback} tabIndex="2" >
          <FontAwesomeIcon icon={['fas', 'play']} size="lg" />
        </button>)
        : (<button id="pause" onClick={handlePause} title="Pause" alt="Pause" tabIndex="2">
          <FontAwesomeIcon icon={['fas', 'pause']} size="lg" />
        </button>)
    }

    <button id="next" onClick={handleNextTrack} title="Next track" alt="Next track" tabIndex="3">
      <FontAwesomeIcon icon={['fas', 'forward']} size="lg" />
    </button>
  </div>
)

const PlaybackButtons = styled(PlaybackButtonsJSX)`
  display: flex;
  align-items: flex-start;

  button {
   border: 1px solid black;
   border-radius: 5px;
   margin-left: 2px;
   margin-right: 2px;
   background-color: rgb(239, 239, 239);

   &:hover {
     box-shadow: 3px 3px goldenrod, -3px 3px goldenrod, 3px -3px goldenrod, -3px -3px goldenrod;
   }
  }
`

export default PlaybackButtons