import styled from '@emotion/styled'

const BackdropJSX = ({
  className,
  track,
  shouldUseAPIData,
  handleDragOver,
  handleDrop
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
      } >
      {/* {console.log('[render] Backdrop')} */}
    </div>
  )
}

const Backdrop = styled(BackdropJSX)`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
`

export default Backdrop