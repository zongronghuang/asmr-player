import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoButtonsJSX = ({ className }) => (
  <aside className={className}>
    {console.log('[render] InfoButtons')}
    <a className="option" id="info" url="">
      <FontAwesomeIcon icon={['fas', 'info']} />
    </a>
    <a className="option" id="photographer" url="">
      <FontAwesomeIcon icon={['fas', 'user-circle']} />
    </a>
    <a className="option" id="website" url="">
      <FontAwesomeIcon icon={['fas', 'globe']} />
    </a>
  </aside>
)

const InfoButtons = styled(InfoButtonsJSX)`
  outline: 1px solid yellow;
  position: absolute;
  right: 0px;
  top: 98%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  .option {
    position: absolute;
    bottom: 0px;
    right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    background-color: rgb(239, 239, 239);
  }

  .option:hover {
    color: blue;
  }

  #info {
    z-index: 10;
  }

  #photographer {
    z-index: 5;
  }

  #web {
    z-index: 3;
  }
`

export default InfoButtons