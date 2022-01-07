import styled from "@emotion/styled";

import LocalBackdrop from "./LocalBackdrop";
import RemoteBackdrop from "./RemoteBackdrop";

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
      // style={
      //   shouldUseAPIData && track.remoteBackdrop
      //     ? { backgroundImage: `url(${track.remoteBackdrop.source})` }
      //     : { backgroundImage: `url(${track.localBackdrop.source})` }
      // }
    >
      {shouldUseAPIData && track.remoteBackdrop ? (
        <RemoteBackdrop track={track} />
      ) : (
        <LocalBackdrop />
      )}

      {/* {console.log('[render] Backdrop')} */}
    </div>
  );
};

const Backdrop = styled(BackdropJSX)`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  border: none;

  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
`;

export default Backdrop;
