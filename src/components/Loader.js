import styled from '@emotion/styled'

const LoaderJSX = ({ className }) => (
  <div className={className}>
    Loading
  </div>
)

const Loader = styled(LoaderJSX)`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  text-align: center;
  line-height: 200px;
`

export default Loader