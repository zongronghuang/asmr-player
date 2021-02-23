import styled from '@emotion/styled'
import DemoImg from '../assets/images/backdrop_1.jpg'

const BackdropJSX = ({ className, track }) => (
  <div
    className={className}
    style={{ backgroundImage: `url(${track.imageUrl})` }}
  >{console.log('image url', track.imageUrl)}</div>
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