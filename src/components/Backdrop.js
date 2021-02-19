import styled from '@emotion/styled'
import DemoImg from '../assets/images/backdrop_1.png'

const Backdrop = styled.div`
  background-image: url(${DemoImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  
  :hover {
    opacity: 0.8;
  }
`

export default Backdrop