import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoButtonsJSX = ({ className, track }) => {
  const handleTogglingAnimation = () => {
    const webIcon = document.querySelector('#website')
    const photographerIcon = document.querySelector('#photographer')

    photographerIcon.classList.toggle('float-photographer')
    webIcon.classList.toggle('float-website')
  }

  return (
    <aside className={className}>
      {console.log('[render] InfoButtons')}
      <a
        className="option"
        id="info"
        title="Click for more"
        onClick={handleTogglingAnimation}
      >
        <FontAwesomeIcon icon={['fas', 'info']} />
      </a>

      <a className="option" id="photographer" href={track.photographer.profileURL} target="_blank" title={track.photographer.name}>
        <FontAwesomeIcon icon={['fas', 'user-circle']} />
      </a>

      <a className="option" id="website" href={track.photographer.webURL} target="_blank" title="Visit website">
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
    color: black;
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