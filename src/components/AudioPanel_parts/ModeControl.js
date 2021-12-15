import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// subcomponents
const LoopAlbumButton = ({ mode, handleModeChange }) => (
  <button
    className="app-btn"
    title="Loop album"
    alt="Loop album"
    tabIndex="7"
    onClick={handleModeChange("loopAlbum")}
  >
    <FontAwesomeIcon
      icon={["fas", "sync"]}
      color={mode === "loopAlbum" ? "blue" : "black"}
      size="lg"
    />
  </button>
);

const LoopTrackButton = ({ mode, handleModeChange }) => (
  <button
    className="app-btn"
    title="Loop track"
    alt="Loop track"
    tabIndex="8"
    onClick={handleModeChange("loopTrack")}
  >
    <FontAwesomeIcon
      icon={["fas", "redo"]}
      color={mode === "loopTrack" ? "blue" : "black"}
      size="lg"
    />
  </button>
);

const ShuffleAllButton = ({ mode, handleModeChange }) => (
  <button
    className="app-btn"
    title="Shuffle all"
    alt="Shuffle all"
    tabIndex="9"
    onClick={handleModeChange("shuffleAll")}
  >
    <FontAwesomeIcon
      icon={["fas", "random"]}
      color={mode === "shuffleAll" ? "blue" : "black"}
      size="lg"
    />
  </button>
);

const ModeControlJSX = ({ className, mode, handleModeChange }) => (
  <div className={className}>
    {/* { console.log('[render] ModeControl')} */}
    <LoopAlbumButton mode={mode} handleModeChange={handleModeChange} />
    <LoopTrackButton mode={mode} handleModeChange={handleModeChange} />
    <ShuffleAllButton mode={mode} handleModeChange={handleModeChange} />
  </div>
);

const ModeControl = styled(ModeControlJSX)`
  display: flex;
  align-items: flex-start;
  border-radius: 0px 10px 10px 0px;

  .checked {
    color: blue;
  }
`;

export default ModeControl;
