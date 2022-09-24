import { useContext, forwardRef } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import AuthContext from "../../contexts/AuthContext";

import GotItButton from "./GotItButton";
import LogoutButton from "./LogoutButton";
import StayButton from "./StayButton";
import TryAgainButton from "./TryAgainButton";

import { AuthContextData, Object } from "../../types";

type DialogProps = {
  className?: string;
  dialogType: string;
  setDialogType: (type: string) => void;
  handleLogoutDialog: (status: string) => void;
};

const modalRoot = document.querySelector("#modal-root") as HTMLElement;
const messages: Object = {
  offline: (
    <>
      Connection lost.
      <br />
      <br />
      Check the network and then try again.
    </>
  ),
  "image error": (
    <>
      No online backdrops available.
      <br />
      <br />
      Wait a moment and then try again.
    </>
  ),
  "audio error": (
    <>
      No audios available.
      <br />
      <br />
      Wait a moment and then try again.
    </>
  ),
  logout: "Are you sure you want to log out of this app?",
};

const DialogJSX = forwardRef<HTMLDialogElement, DialogProps>(
  ({ className, dialogType, setDialogType, handleLogoutDialog }, ref) => {
    const userAuth: AuthContextData = useContext(AuthContext);
    const title = dialogType.toUpperCase();
    const chooseLogoutMethod = (authProvider: string) => {
      // 如果因為其他原因 (另開分頁)，導致 authProvider === null
      // 雖可登入 app，但無法使用對應的登出方法，因此強制更改 window.location 進行登出
      if (!authProvider) {
        return ((window as Window).location = "/login");
      }
      return userAuth[authProvider].logoutMethod();
    };

    return createPortal(
      <dialog className={className} ref={ref}>
        {/* {console.log('[render] Dialog')} */}
        <header className="dialog-title">
          <strong>{title}</strong>
        </header>
        <hr></hr>
        <section>
          <span className="dialog-content">{messages[dialogType]}</span>
        </section>
        <footer>
          {dialogType === "logout" && (
            <>
              <LogoutButton
                userAuth={userAuth}
                chooseLogoutMethod={chooseLogoutMethod}
              />
              <StayButton handleLogoutDialog={handleLogoutDialog} />
            </>
          )}

          {dialogType === "offline" && (
            <GotItButton handleLogoutDialog={handleLogoutDialog} />
          )}

          {(dialogType === "image error" || dialogType === "audio error") && (
            <TryAgainButton
              handleLogoutDialog={handleLogoutDialog}
              setDialogType={setDialogType}
            />
          )}
        </footer>
      </dialog>,
      modalRoot
    );
  }
);

const Dialog = styled(DialogJSX)`
  width: 75%;
  min-width: 200px;
  max-width: 500px;
  border: 3px solid goldenrod;
  border-radius: 15px;

  font-size: 1.5rem;
  background-color: black;
  color: goldenrod;
  font-family: Arial, Helvetica, sans-serif;

  overflow: hidden;

  .dialog-title {
    padding: 0.4rem 0;
  }

  header {
    text-align: center;
    font-weight: bold;
  }

  hr {
    width: 100%;
    border: 1px solid goldenrod;

    background-color: goldenrod;
  }

  section {
    margin-top: 20px;
    margin-bottom: 20px;

    line-height: 25px;
  }

  footer {
    display: flex;
    justify-content: flex-end;

    line-height: 30px;

    button {
      border-radius: 10px;
      border: 2px solid goldenrod;
      margin-left: 5px;
      padding: 0.2rem 0.4rem;

      font-weight: bold;
      color: goldenrod;
      line-height: 1.6;
      background-color: black;

      &:hover {
        box-shadow: 0 0 0 3px goldenrod;
      }
    }
  }

  /* ---------- */
  /* MEDIA QUERIES */
  /* ---------- */
  /* MEDIUM MOBILE 375px */
  @media (min-width: 23em) {
    font-size: 1.8rem;

    & button {
      padding: 0.4rem 0.8rem;
      font-size: 1.8rem;
    }
  }

  /* LARGE MOBILE 425px */
  @media (min-width: 26em) {
    font-size: 2rem;

    & button {
      padding: 0.8rem 1.2rem;
      font-size: 2rem;
    }
  }

  /* TABLET 768px */
  @media (min-width: 48em) {
    font-size: 2.4rem;

    & button {
      padding: 1.2rem 1.6rem;
      font-size: 2.4rem;
    }
  }
`;

export default Dialog;
