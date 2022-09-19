import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Action, Dispatch } from "@reduxjs/toolkit";

type ReduxActionDispatch = {
  switchTrack: (action: { direction: string }) => Action;
  dispatch: Dispatch;
};

type PlaybackControlProps = {
  className?: string;
  activeButton: string;
  handlePlayback: () => void;
  handlePause: () => void;
} & ReduxActionDispatch;

// subcomponents
const PreviousTrackButton = ({
  switchTrack,
  dispatch,
}: ReduxActionDispatch) => (
  <button
    id="prev"
    className="app-btn"
    title="Previous track"
    tabIndex={1}
    onClick={() => dispatch(switchTrack({ direction: "backward" }))}
  >
    <FontAwesomeIcon icon={["fas", "backward"]} size="lg" />
  </button>
);

const PlayButton = ({ handlePlayback }: { handlePlayback: () => void }) => (
  <button
    id="play"
    className="app-btn"
    title="Play"
    tabIndex={2}
    onClick={handlePlayback}
  >
    <FontAwesomeIcon icon={["fas", "play"]} size="lg" />
  </button>
);

const PauseButton = ({ handlePause }: { handlePause: () => void }) => (
  <button id="pause" title="Pause" tabIndex={2} onClick={handlePause}>
    <FontAwesomeIcon icon={["fas", "pause"]} size="lg" />
  </button>
);

const NextTrackButton = ({ switchTrack, dispatch }: ReduxActionDispatch) => (
  <button
    id="next"
    className="app-btn"
    title="Next track"
    tabIndex={3}
    onClick={() => dispatch(switchTrack({ direction: "forward" }))}
  >
    <FontAwesomeIcon icon={["fas", "forward"]} size="lg" />
  </button>
);

const PlaybackControlJSX = ({
  className,
  activeButton,
  handlePlayback,
  handlePause,
  switchTrack,
  dispatch,
}: PlaybackControlProps) => (
  <div className={className}>
    {/* {console.log('[render] PlaybackControl')} */}
    <PreviousTrackButton switchTrack={switchTrack} dispatch={dispatch} />

    {activeButton === "play" ? (
      <PlayButton handlePlayback={handlePlayback} />
    ) : (
      <PauseButton handlePause={handlePause} />
    )}

    <NextTrackButton switchTrack={switchTrack} dispatch={dispatch} />
  </div>
);

const PlaybackControl = styled(PlaybackControlJSX)`
  display: flex;
  align-items: flex-start;
`;

export default PlaybackControl;
