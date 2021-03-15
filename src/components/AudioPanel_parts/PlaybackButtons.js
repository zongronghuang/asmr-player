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
    {console.log('[render] PlaybackButtons')}
    <button id="prev" onClick={handlePrevTrack} title="Previous track" alt="Previous track">
      <FontAwesomeIcon icon={['fas', 'backward']} />
    </button>

    {/* 
      只顯示可用的按鍵
      按下 play 鍵，顯示 pause 鍵
      按下 pause 鍵，顯示 play 鍵 
    */}
    {
      (activeButton === 'play') ?
        (<button id="play" onClick={handlePlayback} title="Play" alt="Play" >
          <FontAwesomeIcon icon={['fas', 'play']} />
        </button>)
        :
        (<button id="pause" onClick={handlePause} title="Pause" alt="Pause">
          <FontAwesomeIcon icon={['fas', 'pause']} />
        </button>)
    }

    <button id="next" onClick={handleNextTrack} title="Next track" alt="Next track">
      <FontAwesomeIcon icon={['fas', 'forward']} />
    </button>
  </div>
)

const PlaybackButtons = styled(PlaybackButtonsJSX)`
  display: flex;
  & > button {
   border-width: 0px;
   border-radius: 5px;
   margin-left: 2px;
   margin-right: 2px;
  }
`

export default PlaybackButtons