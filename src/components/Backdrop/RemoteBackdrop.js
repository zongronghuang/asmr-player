import styled from "@emotion/styled";

const RemoteBackdropJSX = ({ remoteBackdrop, className }) => (
  <div
    className={className}
    style={{ backgroundImage: `url(${remoteBackdrop.source})` }}
  >
    {/* {console.log('[render] RemoteBackdrop')} */}
  </div>
);

const RemoteBackdrop = styled(RemoteBackdropJSX)`
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
`;

export default RemoteBackdrop;
