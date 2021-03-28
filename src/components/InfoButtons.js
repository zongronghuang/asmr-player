import styled from '@emotion/styled'

const InfoButtonsJSX = ({ className }) => (
  <div className={className}>
    {console.log('[render] InfoButtons')}
    <button type="button" id="photographer">
      <a>photo</a>
    </button>
    <button type="button" id="website">
      <a>web</a>
    </button>
  </div>
)

const InfoButtons = styled(InfoButtonsJSX)`
  outline: 1px solid yellow;
  position: absolute;
  right: 0px;
  top: 95%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`

export default InfoButtons