import { useRef, useEffect } from "react";
import styled from "@emotion/styled";

import MenuButton from "./MenuButton";
import PhotographerButton from "./PhotographerButton";
import ImageButton from "./ImageButton";
import LocalBackdropButton from "./LocalBackdropButton";
import RemoteBackdropButton from "./RemoteBackdropButton";
import LogoutButton from "./LogoutButton";

import { Track } from "../../types";

type InfoMenuProps = {
  className: string;
  track: Track;
  shouldUseAPIData: boolean;
  setShouldUseAPIData: (flag: boolean) => {};
  handleLogoutDialog: (status: string) => {};
};

const InfoMenuJSX = ({
  className,
  track,
  shouldUseAPIData,
  setShouldUseAPIData,
  handleLogoutDialog,
}: InfoMenuProps) => {
  const imageBtnRef = useRef<HTMLAnchorElement | null>(null);
  const photographerBtnRef = useRef<HTMLAnchorElement | null>(null);
  const localBackdropBtnRef = useRef<HTMLAnchorElement | null>(null);
  const remoteBackdropBtnRef = useRef<HTMLAnchorElement | null>(null);
  const logoutBtnRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    showBackdropBtn();
  }, [shouldUseAPIData]);

  const showBackdropBtn = () => {
    if (shouldUseAPIData && track?.remoteBackdrop) {
      remoteBackdropBtnRef.current!.style.zIndex = "3";
      localBackdropBtnRef.current!.style.zIndex = "-1";
      return;
    }
    remoteBackdropBtnRef.current!.style.zIndex = "-1";
    localBackdropBtnRef.current!.style.zIndex = "3";
  };

  const toggleClickability = () => {
    photographerBtnRef.current!.classList.toggle("non-clickable");
    imageBtnRef.current!.classList.toggle("non-clickable");
  };

  const handleTogglingAnimations = () => {
    photographerBtnRef.current!.classList.toggle("float-photographer");
    imageBtnRef.current!.classList.toggle("float-image");
    logoutBtnRef.current!.classList.toggle("float-logout");
    remoteBackdropBtnRef.current!.classList.toggle("float-network");
    localBackdropBtnRef.current!.classList.toggle("float-network");
  };

  return (
    <aside className={className}>
      {/* {console.log('[render] InfoMenu')} */}
      <MenuButton handleTogglingAnimations={handleTogglingAnimations} />
      <PhotographerButton
        track={track}
        ref={photographerBtnRef}
        shouldUseAPIData={shouldUseAPIData}
      />
      <ImageButton
        track={track}
        ref={imageBtnRef}
        shouldUseAPIData={shouldUseAPIData}
      />
      <RemoteBackdropButton
        ref={remoteBackdropBtnRef}
        setShouldUseAPIData={setShouldUseAPIData}
        toggleClickability={toggleClickability}
      />
      <LocalBackdropButton
        track={track}
        ref={localBackdropBtnRef}
        setShouldUseAPIData={setShouldUseAPIData}
        toggleClickability={toggleClickability}
      />
      <LogoutButton
        ref={logoutBtnRef}
        handleLogoutDialog={handleLogoutDialog}
      />
    </aside>
  );
};

const InfoMenu = styled(InfoMenuJSX)`
  position: absolute;
  right: 1vw;
  bottom: 5vh;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  .option {
    position: absolute;
    bottom: 0px;
    right: 5px;

    width: 3rem;
    height: 3rem;
    overflow: hidden;
    border-radius: 50%;

    font-size: 1.4rem;
    line-height: 3rem;
    text-align: center;
    color: black;
    background-color: rgba(218, 165, 32, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    cursor: pointer;

    transition: all 0.3s;
  }

  .option:hover {
    box-shadow: 0 0 0 3px goldenrod;
  }

  /* ICON DEPTH */
  .info {
    z-index: 5;
  }
  .logout {
    z-index: 4;
  }
  .remote-backdrop,
  .local-backdrop {
    z-index: 3;
  }
  .local-backdrop {
    cursor: pointer;
  }
  .image {
    z-index: 2;
  }
  .photographer {
    z-index: 1;
  }

  .non-clickable {
    cursor: default;
    pointer-events: none;
  }

  @keyframes float-photographer {
    to {
      bottom: 16rem;
    }
  }
  .float-photographer {
    animation-name: float-photographer;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }

  @keyframes float-image {
    to {
      bottom: 12rem;
    }
  }
  .float-image {
    animation-name: float-image;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }

  @keyframes float-network {
    to {
      bottom: 8rem;
    }
  }
  .float-network {
    animation-name: float-network;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }

  @keyframes float-logout {
    to {
      bottom: 4rem;
    }
  }
  .float-logout {
    animation-name: float-logout;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  /* ---------- */
  /* MEDIA QUERIES */
  /* ---------- */
  /* TABLET 768px */
  @media (min-width: 48em) {
    .option {
      width: 4.8rem;
      height: 4.8rem;

      font-size: 2rem;
      line-height: 4.8rem;
    }

    @keyframes float-photographer {
      to {
        bottom: 24rem;
      }
    }

    @keyframes float-image {
      to {
        bottom: 18rem;
      }
    }

    @keyframes float-network {
      to {
        bottom: 12rem;
      }
    }

    @keyframes float-logout {
      to {
        bottom: 6rem;
      }
    }
  }
`;

export default InfoMenu;
