import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 操作按鈕元件
const PlaybackControlJSX = ({
  className,
  activeButton,
  handlePlayback,
  handlePause,
  handleNextTrack,
  handlePrevTrack
}) => {
  const PreviousTrackButton = () => (
    <button
      id="prev"
      title="Previous track"
      alt="Previous track"
      tabIndex="1"
      onClick={handlePrevTrack} >
      <FontAwesomeIcon icon={['fas', 'backward']} size="lg" />
    </button>
  )

  const PlayButton = () => (
    <button
      id="play"
      title="Play"
      alt="Play"
      tabIndex="2"
      onClick={handlePlayback} >
      <FontAwesomeIcon icon={['fas', 'play']} size="lg" />
    </button>
  )

  const PauseButton = () => (
    <button
      id="pause"
      title="Pause"
      alt="Pause"
      tabIndex="2"
      onClick={handlePause} >
      <FontAwesomeIcon icon={['fas', 'pause']} size="lg" />
    </button>
  )

  const NextTrackButton = () => (
    <button
      id="next"
      title="Next track"
      alt="Next track"
      tabIndex="3"
      onClick={handleNextTrack} >
      <FontAwesomeIcon icon={['fas', 'forward']} size="lg" />
    </button>
  )

  return (
    <div className={className}>
      {/* {console.log('[render] PlaybackControl')} */}
      <PreviousTrackButton />

      {(activeButton === 'play') ? <PlayButton /> : <PauseButton />}

      <NextTrackButton />
    </div>
  )
}

const PlaybackControl = styled(PlaybackControlJSX)`
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

export default PlaybackControl