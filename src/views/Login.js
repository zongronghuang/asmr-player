import { useContext } from "react";
import { Redirect } from "react-router-dom";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthContext from "../contexts/AuthContext";

const LoginJSX = ({ className }) => {
  const userAuth = useContext(AuthContext);
  const { FB, Google } = userAuth;

  return (
    <main className={className}>
      <div className="circle circle-outer">
        <div className="circle circle-middle">
          <div className="circle circle-inner">
            <section className="logins">
              <h1 className="app-title">ASMR Player</h1>
              <a
                className="login-btn fb-login"
                href="#"
                onClick={FB.loginMethod}
              >
                <FontAwesomeIcon icon={["fab", "facebook-square"]} size="lg" />
                <span className="fb-login-text">Facebook Login</span>
              </a>

              <a
                className="login-btn google-login"
                href="#"
                onClick={Google.loginMethod}
              >
                <FontAwesomeIcon icon={["fab", "google"]} size="lg" />
                <span className="google-login-text">Google Login</span>
              </a>
            </section>
          </div>
        </div>
      </div>

      <footer className="footer">
        <small className="app-author">
          Made with &nbsp;
          <FontAwesomeIcon icon={["fas", "heart"]} color={"goldenrod"} />{" "}
          &nbsp;by{" "}
          <a
            href="https://github.com/zongronghuang/asmr-player"
            target="_blank"
          >
            Zong-Rong
          </a>
        </small>
      </footer>
    </main>
  );
};

const Login = styled(LoginJSX)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 45%;

  height: 100vh;
  background-color: #000;

  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

  /* ------------------ */
  /* GOLDEN RINGS */
  /* ------------------ */
  .circle {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;

    transition: all 0.5s;

    &:hover {
      box-shadow: -6px 6px 0 0 goldenrod, 6px -6px 0 0 goldenrod;
    }

    &.circle-outer {
      width: 95vmin;
      height: 95vmin;
    }

    &.circle-middle {
      width: 85vmin;
      height: 85vmin;
    }

    &.circle-inner {
      width: 75vmin;
      height: 75vmin;
    }
  }

  /* ------------------ */
  /* LOGIN AREA */
  /* ------------------ */
  .logins {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    width: 60%;
    height: 60%;
  }

  .app-title {
    margin-bottom: auto;

    font-family: Courgette, Arial, cursive, monospace, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: goldenrod;

    transition: all 0.5s;

    &:hover {
      text-shadow: -1px -1px 20px goldenrod, -1px 1px 20px goldenrod,
        1px -1px 20px goldenrod, 1px 1px 20px goldenrod;
      color: black;
    }
  }

  .login-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.4rem;

    width: 80%;
    padding: 0.2rem 0.4rem;
    margin-bottom: 0.2rem;
    border-radius: 5px;
    background-color: #1877f2;

    line-height: 2;
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    font-family: "Noto Sans TC", sans-serif;

    transition: all 0.4s;

    &:hover {
      background-color: #385898;
    }

    & > svg {
      margin-left: 0.2rem;
    }
  }

  /* ------------------ */
  /* FOOTER */
  /* ------------------ */
  .footer {
    padding: 1.6rem 3.2rem;
    width: 100%;
    height: 10%;

    color: white;
    line-height: 1.8;

    &:hover {
      text-shadow: -1px -1px 20px goldenrod, -1px 1px 20px goldenrod,
        1px -1px 20px goldenrod, 1px 1px 20px goldenrod;
    }

    & a {
      text-decoration: none;
      color: white;
    }
  }
`;

export default Login;
