import styled from '@emotion/styled'
import DemoImg from '../assets/images/backdrop_1.png'

const Backdrop = styled.div`
  background-image: url(${DemoImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 500px;
  height: 500px;
  margin: auto;
`

export default Backdrop