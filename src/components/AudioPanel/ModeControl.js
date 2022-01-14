import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { switchMode } from "../../redux/audioSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// subcomponents
const LoopAlbumButton = ({ mode, handleModeChange, dispatch }) => (
  <button
    className="app-btn"
    title="Loop album"
    alt="Loop album"
    tabIndex="7"
    // onClick={handleModeChange("loopAlbum")}
    onClick={() => dispatch(switchMode({ mode: "loopAlbum" }))}
  >
    <FontAwesomeIcon
      icon={["fas", "sync"]}
      color={mode === "loopAlbum" ? "blue" : "black"}
      size="lg"
    />
  </button>
);

const LoopTrackButton = ({ mode, dispatch, handleModeChange }) => (
  <button
    className="app-btn"
    title="Loop track"
    alt="Loop track"
    tabIndex="8"
    // onClick={handleModeChange("loopTrack")}
    onClick={() => dispatch(switchMode({ mode: "loopTrack" }))}
  >
    <FontAwesomeIcon
      icon={["fas", "redo"]}
      color={mode === "loopTrack" ? "blue" : "black"}
      size="lg"
    />
  </button>
);

const ShuffleAllButton = ({ mode, dispatch, handleModeChange }) => (
  <button
    className="app-btn"
    title="Shuffle all"
    alt="Shuffle all"
    tabIndex="9"
    // onClick={handleModeChange("shuffleAll")}
    onClick={() => dispatch(switchMode({ mode: "shuffleAll" }))}
  >
    <FontAwesomeIcon
      icon={["fas", "random"]}
      color={mode === "shuffleAll" ? "blue" : "black"}
      size="lg"
    />
  </button>
);

const ModeControlJSX = ({ className, handleModeChange }) => {
  const mode = useSelector((state) => {
    console.log("redux--mode", state.audio.mode);
    return state.audio.mode;
  });
  const dispatch = useDispatch();

  return (
    <div className={className}>
      {/* { console.log('[render] ModeControl')} */}
      <LoopAlbumButton
        mode={mode}
        handleModeChange={handleModeChange}
        dispatch={dispatch}
      />
      <LoopTrackButton
        mode={mode}
        handleModeChange={handleModeChange}
        dispatch={dispatch}
      />
      <ShuffleAllButton
        mode={mode}
        handleModeChange={handleModeChange}
        dispatch={dispatch}
      />
    </div>
  );
};

const ModeControl = styled(ModeControlJSX)`
  display: flex;
  align-items: flex-start;

  border-radius: 0px 10px 10px 0px;

  .checked {
    color: blue;
  }
`;

export default ModeControl;
