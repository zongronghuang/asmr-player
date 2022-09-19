import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type VolumeHandler = (
  e: React.ChangeEvent | React.MouseEvent,
  method: string
) => void;

type VolumeControlProps = {
  className?: string;
  handleVolumeUpDown: VolumeHandler;
  volume: number;
};

// subcomponents
const MuteButton = () => (
  <button className="app-btn" title="Muted" tabIndex={4}>
    <FontAwesomeIcon icon={["fas", "volume-mute"]} size="lg" />
  </button>
);

const VolumeDownButton = ({
  handleVolumeUpDown,
}: {
  handleVolumeUpDown: VolumeHandler;
}) => (
  <button
    className="app-btn"
    title="Volume down"
    tabIndex={4}
    onClick={(e) => handleVolumeUpDown(e, "down")}
  >
    <FontAwesomeIcon icon={["fas", "volume-down"]} size="lg" />
  </button>
);

const VolumeRangeBar = ({
  volume,
  handleVolumeUpDown,
}: {
  volume: number;
  handleVolumeUpDown: VolumeHandler;
}) => (
  <input
    id="volume"
    type="range"
    value={volume}
    title={`${volume}`}
    min="0"
    max="1"
    step="0.1"
    tabIndex={5}
    onChange={(e) => handleVolumeUpDown(e, "manual")}
  />
);

const VolumeUpButton = ({
  handleVolumeUpDown,
}: {
  handleVolumeUpDown: VolumeHandler;
}) => (
  <button
    className="app-btn"
    title="Volume up"
    tabIndex={6}
    onClick={(e) => handleVolumeUpDown(e, "up")}
  >
    <FontAwesomeIcon icon={["fas", "volume-up"]} size="lg" />
  </button>
);

const VolumeControlJSX = ({
  className,
  handleVolumeUpDown,
  volume,
}: VolumeControlProps) => (
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
