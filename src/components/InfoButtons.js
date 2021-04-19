import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoButtonsJSX = ({ className, track, shouldUseAPIData, setShouldUseAPIData }) => {
  const handleTogglingAnimations = () => {
    const imageIcon = document.querySelector('#image')
    const photographerIcon = document.querySelector('#photographer')
    const offlineIcon = document.querySelector('#offline')
    const onlineIcon = document.querySelector('#online')
    const logoutIcon = document.querySelector('#logout')

    photographerIcon.classList.toggle('float-photographer')
    imageIcon.classList.toggle('float-image')
    logoutIcon.classList.toggle('float-logout')

    shouldUseAPIData && track?.remoteBackdrop
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
        onClick={handleTogglingAnimations}
      >
        <FontAwesomeIcon icon={['fas', 'info']} size="lg" />
      </a>

      <a
        className="option"
        id="photographer"
        href={
          shouldUseAPIData && track?.remoteBackdrop
            ? track.remoteBackdrop.portfolio
            : track.localBackdrop.portfolio
        }
        target="_blank"
        title={
          shouldUseAPIData && track?.remoteBackdrop
            ? `Photo by ${track.remoteBackdrop.photographer}`
            : `Photo by ${track.localBackdrop.photographer}`
        }
      >
        <FontAwesomeIcon icon={['fas', 'user-circle']} size="lg" />
      </a>

      <a
        className="option"
        id="image"
        href={
          shouldUseAPIData && track?.remoteBackdrop
            ? track.remoteBackdrop.source
            : track.localBackdrop.source
        }
        target="_blank"
        title="View source image"
      >
        <FontAwesomeIcon icon={['fas', 'image']} size="lg" />
      </a>

      {
        shouldUseAPIData && track?.remoteBackdrop
          ? (<a
            className="option"
            id="online"
            title="Online backdrops"
            onClick={() => setShouldUseAPIData(false)}
          >
            <FontAwesomeIcon icon={['fas', 'plane']} size="lg" />
          </a>)
          : (<a
            className="option"
            id="offline"
            title={track?.remoteBackdrop ? 'Native backdrops' : 'Native backdrops only'}
            onClick={() => track?.remoteBackdrop ? setShouldUseAPIData(true) : null}
          >
            <FontAwesomeIcon
              icon={['fas', 'plane-slash']}
              size="lg"
              color={track?.remoteBackdrop ? null : 'gray'}
            />
          </a>)
      }

      <a
        className="option"
        id="logout"
        title='Click to log out'
        onClick={() => console.log('!!!!log out clicked!!!!!')}
      >
        <FontAwesomeIcon
          icon={['fas', 'sign-out-alt']}
          size="lg"
          color="red"
        />
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
  #image {
    z-index: 3;
  }
  #photographer {
    z-index: 2;
  }
  #logout {
    z-index: 1;
  }
  #logout:hover {
    color: red;
  }

  @keyframes float-photographer {
    to { bottom: 105px; }
  }
  .float-photographer {
    animation-name: float-photographer;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }

  @keyframes float-image {
    to { bottom: 70px; }
  }
  .float-image {
    animation-name: float-image;
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

  @keyframes float-logout {
    to {right: 40px;}
  }
  .float-logout {
     animation-name: float-logout;
     animation-duration: 0.2s;
     animation-fill-mode: forwards;
  }
`

export default InfoButtons