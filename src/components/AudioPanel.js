import styled from '@emotion/styled'

const BasicPanel = ({ className }) => (
  <div className={className}>audio panel</div>
)

const AudioPanel = styled(BasicPanel)`
 border: 1px solid black;
 width: 100px;
 height: 100px;
 margin: auto;
`

export default AudioPanel