import { useContext } from "react";
import styled from "@emotion/styled";
import AuthContext from "../contexts/AuthContext";

// subcomponents
const LogoutButton = ({ userAuth, chooseLogoutMethod }) => (
  <button
    alt="Log out"
    onClick={() => {
      chooseLogoutMethod(userAuth.authProvider);
    }}
  >
    Log out
  </button>
);

const StayButton = ({ handleLogoutDialog }) => (
  <button alt="Stay" onClick={() => handleLogoutDialog("off")}>
    Stay
  </button>
);

const GotItButton = ({ handleLogoutDialog }) => (
  <button alt="Got it" onClick={() => handleLogoutDialog("off")}>
    Got it
  </button>
);

const TryAgainButton = ({ handleLogoutDialog, setDialogType }) => (
  <button
    alt="Got it"
    onClick={() => {
      handleLogoutDialog("off");
      setDialogType("logout");
    }}
  >
    Got it
  </button>
);

const DialogJSX = ({
  className,
  dialogType,
  setDialogType,
  handleLogoutDialog,
}) => {
  const userAuth = useContext(AuthContext);
  const title = dialogType.toUpperCase();

  const message = {
    offline: (
      <>
        Connection lost.
        <br />
        <br />
        Check the network and then try again.
      </>
    ),
    "API error": (
      <>
        No online backdrops available.
        <br />
        <br />
        Wait a moment and then try again.
      </>
    ),
    logout: "Are you sure you want to log out of this app?",
  };

  const chooseLogoutMethod = (authProvider) => {
    // 如果因為其他原因 (另開分頁)，導致 authProvider === null
    // 雖可登入 app，但無法使用對應的登出方法，因此強制更改 window.location 進行登出
    if (!authProvider) {
      return (window.location = "/login");
    }
    return userAuth[authProvider].logoutMethod();
  };

  return (
    <dialog className={className}>
      {/* {console.log('[render] Dialog')} */}
      <header className="dialog-title">
        <strong>{title}</strong>
      </header>
      <hr></hr>
      <section>
        <span className="dialog-content">{message[dialogType]}</span>
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

        {dialogType === "API error" && (
          <TryAgainButton
            handleLogoutDialog={handleLogoutDialog}
            setDialogType={setDialogType}
          />
        )}
      </footer>
    </dialog>
  );
};

const Dialog = styled(DialogJSX)`
  width: 30%;
  min-width: 200px;
  max-width: 300px;
  border: 3px solid goldenrod;
  border-radius: 15px;

  font-size: 1.2rem;
  background-color: black;
  color: goldenrod;
  font-family: Arial, Helvetica, sans-serif;

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
      line-height: 20px;
      background-color: black;

      &:hover {
        box-shadow: 0 0 0 3px goldenrod;
      }
    }
  }
`;

export default Dialog;
