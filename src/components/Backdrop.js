import styled from '@emotion/styled'


const BackdropJSX = ({
  className,
  track,
  handleDragOver,
  handleDrop
}) => (
  <div
    id="dropZone"
    onDragOver={handleDragOver}
    onDrop={handleDrop}
    className={className}
    style={{ backgroundImage: `url(${track.imageSrc})` }}
  >
    {console.log('[render] Backdrop')}
  </div>
)

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