import { useRef, useEffect, forwardRef } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// subcomponents
const MenuButton = ({ handleTogglingAnimations }) => (
  <a
    className="option"
    id="info"
    title="Click for more"
    tabIndex="10"
    onClick={handleTogglingAnimations}>
    <FontAwesomeIcon icon={['fas', 'info']} size="lg" />
  </a>
)

const PhotographerButton = forwardRef(({ track, shouldUseAPIData }, ref) => (
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
    tabIndex="14"
    ref={ref} >
    <FontAwesomeIcon icon={['fas', 'user-circle']} size="lg" />
  </a>
))

const ImageButton = forwardRef(({ track, shouldUseAPIData }, ref) => {
  { console.log('image source', track) }
  return (
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
      tabIndex="13"
      ref={ref} >
      <FontAwesomeIcon icon={['fas', 'image']} size="lg" />
    </a>
  )
})

const LocalBackdropButton = forwardRef(({ track, setShouldUseAPIData }, ref) => (
  <a
    className="option"
    id="local_backdrop"
    tabIndex="12"
    title="Local backdrop"
    ref={ref}
    onClick={() =>
      track?.remoteBackdrop
        ? setShouldUseAPIData(true)
        : setShouldUseAPIData(false)
    } >
    <FontAwesomeIcon
      icon={['fas', 'plane-slash']}
      size="lg"
      color={track?.remoteBackdrop ? null : 'gray'}
    />
  </a>
))

const RemoteBackdropButton = forwardRef(({ setShouldUseAPIData }, ref) => (
  <a
    className="option"
    id="remote_backdrop"
    tabIndex="12"
    title="Remote backdrop"
    ref={ref}
    onClick={() => setShouldUseAPIData(false)} >
    <FontAwesomeIcon icon={['fas', 'plane']} size="lg" />
  </a>
))

const LogoutButton = forwardRef(({ handleLogoutDialog }, ref) => (
  <a
    className="option"
    id="logout"
    title='Click to log out'
    tabIndex="11"
    ref={ref}
    onClick={() => handleLogoutDialog('on')} >
    <FontAwesomeIcon
      icon={['fas', 'sign-out-alt']}
      size="lg"
      color="red"
    />
  </a>
))

const InfoMenuJSX = ({
  className,
  track,
  shouldUseAPIData,
  setShouldUseAPIData,
  handleLogoutDialog
}) => {
  const imageBtn = useRef(null)
  const photographerBtn = useRef(null)
  const localBackdropBtn = useRef(null)
  const remoteBackdropBtn = useRef(null)
  const logoutBtn = useRef(null)

  useEffect(() => {
    showBackdropBtn()
  }, [shouldUseAPIData])

  const showBackdropBtn = () => {
    if (shouldUseAPIData && track?.remoteBackdrop) {
      remoteBackdropBtn.current.style.zIndex = 3
      localBackdropBtn.current.style.zIndex = -1
      return
    }
    remoteBackdropBtn.current.style.zIndex = -1
    localBackdropBtn.current.style.zIndex = 3
  }

  const handleTogglingAnimations = () => {
    photographerBtn.current.classList.toggle('float-photographer')
    imageBtn.current.classList.toggle('float-image')
    logoutBtn.current.classList.toggle('float-logout')
    remoteBackdropBtn.current.classList.toggle('float-network')
    localBackdropBtn.current.classList.toggle('float-network')
  }

  return (
    <aside className={className}>
      {/* {console.log('[render] InfoMenu')} */}
      <MenuButton handleTogglingAnimations={handleTogglingAnimations} />
      <PhotographerButton
        track={track}
        ref={photographerBtn}
        shouldUseAPIData={shouldUseAPIData}
      />
      <ImageButton
        track={track}
        ref={imageBtn}
        shouldUseAPIData={shouldUseAPIData}
      />
      <RemoteBackdropButton
        ref={remoteBackdropBtn}
        setShouldUseAPIData={setShouldUseAPIData}
      />
      <LocalBackdropButton
        track={track}
        ref={localBackdropBtn}
        setShouldUseAPIData={setShouldUseAPIData}
      />
      <LogoutButton
        ref={logoutBtn}
        handleLogoutDialog={handleLogoutDialog}
      />
    </aside>
  )
}

const InfoMenu = styled(InfoMenuJSX)`
  position: absolute;
  right: 10px;
  bottom: 35px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  .option {
    position: absolute;
    bottom: 0px;
    right: 5px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    color: black;
    background-color: rgb(239, 239, 239);
    cursor: pointer;
  }

  .option:hover {
    box-shadow: 3px 3px goldenrod, -3px 3px goldenrod, 3px -3px goldenrod, -3px -3px goldenrod;
  }

  #info {
    z-index: 5;
  }
  #logout {
    z-index: 4;
  }
  #remote_backdrop, #local_backdrop {
    z-index: 3;
  }
  #local_ackdrop {
    cursor: default;
  }
  #image {
    z-index: 2;
  }
  #photographer {
    z-index: 1;
  }

  @keyframes float-photographer {
    to { bottom: 140px;}
  }
  .float-photographer {
    animation-name: float-photographer;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }

  @keyframes float-image {
    to { bottom: 105px;}
  }
  .float-image {
    animation-name: float-image;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }

  @keyframes float-network {
    to { bottom: 70px;}
  }
  .float-network {
    animation-name: float-network;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }

  @keyframes float-logout {
    to {bottom: 35px;}
  }
  .float-logout {
     animation-name: float-logout;
     animation-duration: 0.2s;
     animation-fill-mode: forwards;
  }
`

export default InfoMenu