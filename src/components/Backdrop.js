import styled from "@emotion/styled";

// import AudioPanel from "./AudioPanel";

const BackdropJSX = ({
  className,
  track,
  shouldUseAPIData,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div
      id="dropZone"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={className}
      style={
        shouldUseAPIData && track.remoteBackdrop
          ? { backgroundImage: `url(${track.remoteBackdrop.source})` }
          : { backgroundImage: `url(${track.localBackdrop.source})` }
      }
    >
      {/* {console.log('[render] Backdrop')} */}
    </div>
  );
};

const Backdrop = styled(BackdropJSX)`
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  border: none;
`;

export default Backdrop;
