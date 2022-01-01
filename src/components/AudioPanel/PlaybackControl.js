import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// subcomponents
const PreviousTrackButton = ({ handlePrevTrack }) => (
  <button
    id="prev"
    className="app-btn"
    title="Previous track"
    alt="Previous track"
    tabIndex="1"
    onClick={handlePrevTrack}
  >
    <FontAwesomeIcon icon={["fas", "backward"]} size="lg" />
  </button>
);

const PlayButton = ({ handlePlayback }) => (
  <button
    id="play"
    className="app-btn"
    title="Play"
    alt="Play"
    tabIndex="2"
    onClick={handlePlayback}
  >
    <FontAwesomeIcon icon={["fas", "play"]} size="lg" />
  </button>
);

const PauseButton = ({ handlePause }) => (
  <button
    id="pause"
    title="Pause"
    alt="Pause"
    tabIndex="2"
    onClick={handlePause}
  >
    <FontAwesomeIcon icon={["fas", "pause"]} size="lg" />
  </button>
);

const NextTrackButton = ({ handleNextTrack }) => (
  <button
    id="next"
    className="app-btn"
    title="Next track"
    alt="Next track"
    tabIndex="3"
    onClick={handleNextTrack}
  >
    <FontAwesomeIcon icon={["fas", "forward"]} size="lg" />
  </button>
);

const PlaybackControlJSX = ({
  className,
  activeButton,
  handlePlayback,
  handlePause,
  handleNextTrack,
  handlePrevTrack,
}) => (
  <div className={className}>
    {/* {console.log('[render] PlaybackControl')} */}
    <PreviousTrackButton handlePrevTrack={handlePrevTrack} />

    {activeButton === "play" ? (
      <PlayButton handlePlayback={handlePlayback} />
    ) : (
      <PauseButton handlePause={handlePause} />
    )}

    <NextTrackButton handleNextTrack={handleNextTrack} />
  </div>
);

const PlaybackControl = styled(PlaybackControlJSX)`
  display: flex;
  align-items: flex-start;
`;

export default PlaybackControl;
