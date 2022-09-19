import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Action, Dispatch } from "@reduxjs/toolkit";

type ReduxActionDispatch = {
  switchMode: (action: { mode: string }) => Action;
  dispatch: Dispatch;
};

type ModeControlProps = {
  className?: string;
  mode: string;
} & ReduxActionDispatch;

// subcomponents
const LoopAlbumButton = ({
  mode,
  switchMode,
  dispatch,
}: {
  mode: string;
} & ReduxActionDispatch) => (
  <button
    className="app-btn"
    title="Loop album"
    tabIndex={7}
    onClick={() => dispatch(switchMode({ mode: "loopAlbum" }))}
  >
    <FontAwesomeIcon
      icon={["fas", "sync"]}
      color={mode === "loopAlbum" ? "blue" : "black"}
      size="lg"
    />
  </button>
);

const LoopTrackButton = ({
  mode,
  switchMode,
  dispatch,
}: {
  mode: string;
} & ReduxActionDispatch) => (
  <button
    className="app-btn"
    title="Loop track"
    tabIndex={8}
    onClick={() => dispatch(switchMode({ mode: "loopTrack" }))}
  >
    <FontAwesomeIcon
      icon={["fas", "redo"]}
      color={mode === "loopTrack" ? "blue" : "black"}
      size="lg"
    />
  </button>
);

const ShuffleAllButton = ({
  mode,
  switchMode,
  dispatch,
}: { mode: string } & ReduxActionDispatch) => (
  <button
    className="app-btn"
    title="Shuffle all"
    tabIndex={9}
    onClick={() => dispatch(switchMode({ mode: "shuffleAll" }))}
  >
    <FontAwesomeIcon
      icon={["fas", "random"]}
      color={mode === "shuffleAll" ? "blue" : "black"}
      size="lg"
    />
  </button>
);

const ModeControlJSX = ({
  className,
  mode,
  switchMode,
  dispatch,
}: ModeControlProps) => (
  <div className={className}>
    {/* {console.log("[render] ModeControl")} */}
    <LoopAlbumButton mode={mode} switchMode={switchMode} dispatch={dispatch} />
    <LoopTrackButton mode={mode} switchMode={switchMode} dispatch={dispatch} />
    <ShuffleAllButton mode={mode} switchMode={switchMode} dispatch={dispatch} />
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
