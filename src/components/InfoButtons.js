import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoButtonsJSX = ({ className }) => {
  const handleAnimationAdding = () => {
    const webIcon = document.querySelector('#website')
    const photographerIcon = document.querySelector('#photographer')

    photographerIcon.classList.add('float-photographer')
    webIcon.classList.add('float-website')
  }

  const handleAnimationRemoval = () => {
    const webIcon = document.querySelector('#website')
    const photographerIcon = document.querySelector('#photographer')

    photographerIcon.classList.remove('float-photographer')
    webIcon.classList.remove('float-website')
  }

  return (
    <aside className={className}>
      {console.log('[render] InfoButtons')}
      <a
        className="option"
        id="info"
        title="Click and hide"
        onClick={handleAnimationRemoval}
        onMouseEnter={handleAnimationAdding}
      >
        <FontAwesomeIcon icon={['fas', 'info']} />
      </a>
      <a className="option" id="photographer" url="" title="View profile">
        <FontAwesomeIcon icon={['fas', 'user-circle']} />
      </a>
      <a className="option" id="website" url="" title="Visit website">
        <FontAwesomeIcon icon={['fas', 'globe']} />
      </a>
    </aside>
  )
}

const InfoButtons = styled(InfoButtonsJSX)`
  position: absolute;
  right: 10px;
  bottom: 3%;
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
  #website {
    z-index: 5;
  }
  #photographer {
    z-index: 1;
  }

  @keyframes float-photographer {
    to { bottom: 70px; }
  }
  .float-photographer {
    animation-name: float-photographer;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes float-website {
    to { bottom: 35px; }
  }
  .float-website {
    animation-name: float-website;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`

export default InfoButtons