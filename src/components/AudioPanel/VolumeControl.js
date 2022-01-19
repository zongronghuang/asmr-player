import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// subcomponents
const MuteButton = () => (
  <button
    className="app-btn"
    htmlFor="volume"
    title="Muted"
    alt="Muted"
    tabIndex="4"
  >
    <FontAwesomeIcon icon={["fas", "volume-mute"]} size="lg" />
  </button>
);

const VolumeDownButton = ({ handleVolumeUpDown }) => (
  <button
    className="app-btn"
    htmlFor="volume"
    title="Volume down"
    alt="Volume down"
    tabIndex="4"
    onClick={() => handleVolumeUpDown("down")}
  >
    <FontAwesomeIcon icon={["fas", "volume-down"]} size="lg" />
  </button>
);

const VolumeRangeBar = ({ volume, handleVolumeUpDown }) => (
  <input
    id="volume"
    type="range"
    value={volume}
    title={volume}
    min="0"
    max="1"
    step="0.1"
    tabIndex="5"
    onChange={() => handleVolumeUpDown("manual")}
  />
);

const VolumeUpButton = ({ handleVolumeUpDown }) => (
  <button
    className="app-btn"
    htmlFor="volume"
    title="Volume up"
    alt="Volume up"
    tabIndex="6"
    onClick={() => handleVolumeUpDown("up")}
  >
    <FontAwesomeIcon icon={["fas", "volume-up"]} size="lg" />
  </button>
);

const VolumeControlJSX = ({ className, handleVolumeUpDown, volume }) => (
  <div className={className}>
    {/* {console.log('[render] VolumeControl')} */}
    {volume === 0 ? (
      <MuteButton />
    ) : (
      <VolumeDownButton handleVolumeUpDown={handleVolumeUpDown} />
    )}
    <VolumeRangeBar volume={volume} handleVolumeUpDown={handleVolumeUpDown} />
    <VolumeUpButton handleVolumeUpDown={handleVolumeUpDown} />
  </div>
);

const VolumeControl = styled(VolumeControlJSX)`
  display: flex;
  justify-content: center;

  margin-right: 5px;
  margin-left: 5px;

  & > #volume {
    margin-left: 2px;
    margin-right: 2px;

    cursor: pointer;
  }

  & > #mode {
    cursor: pointer;
  }

  input {
    width: 50%;
    min-width: 30px;
  }
`;

export default VolumeControl;
