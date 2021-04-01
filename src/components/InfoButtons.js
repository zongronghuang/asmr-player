import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoButtonsJSX = ({ className, track, appStatus }) => {
  const handleTogglingAnimation = () => {
    const webIcon = document.querySelector('#website')
    const photographerIcon = document.querySelector('#photographer')
    const offlineIcon = document.querySelector('#offline')
    const onlineIcon = document.querySelector('#online')

    photographerIcon.classList.toggle('float-photographer')
    webIcon.classList.toggle('float-website')

    appStatus === 'online'
      ? onlineIcon.classList.toggle('float-network')
      : offlineIcon.classList.toggle('float-network')
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
        <FontAwesomeIcon icon={['fas', 'info']} size="lg" />
      </a>

      <a className="option" id="photographer" href={track.photographer.profileURL} target="_blank" title={track.photographer.name}>
        <FontAwesomeIcon icon={['fas', 'user-circle']} size="lg" />
      </a>

      <a className="option" id="website" href={track.photographer.webURL} target="_blank" title="Visit website">
        <FontAwesomeIcon icon={['fas', 'globe']} size="lg" />
      </a>

      {
        appStatus === 'online'
          ? (<a className="option" id="online" title="Internet OK">
            <FontAwesomeIcon icon={['fas', 'plane']} size="lg" />
          </a>)
          : (<a className="option" id="offline" title="No Internet">
            <FontAwesomeIcon icon={['fas', 'plane-slash']} size="lg" />
          </a>)
      }

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
    cursor: pointer;
  }

  .option:hover {
    color: blue;
  }

  #info {
    z-index: 5;
  }
  #online, #offline {
    z-index: 4;
  }
  #website {
    z-index: 3;
  }
  #photographer {
    z-index: 2;
  }

  @keyframes float-photographer {
    to { bottom: 105px; }
  }
  .float-photographer {
    animation-name: float-photographer;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }

  @keyframes float-website {
    to { bottom: 70px; }
  }
  .float-website {
    animation-name: float-website;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }

  @keyframes float-network {
    to { bottom: 35px; }
  }
  .float-network {
    animation-name: float-network;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }
`

export default InfoButtons