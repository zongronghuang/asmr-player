import { useContext } from "react";
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
            rel="noopener noreferrer"
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

  /* GOLDEN RINGS */
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

  /* LOGIN AREA */
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

    width: 10rem;
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

  /* FOOTER */
  .footer {
    padding: 1.6rem 3.2rem;
    width: 100%;
    height: 10%;

    color: white;
    line-height: 1.8;

    transition: all 0.5s;

    &:hover {
      text-shadow: -1px -1px 20px goldenrod, -1px 1px 20px goldenrod,
        1px -1px 20px goldenrod, 1px 1px 20px goldenrod;
    }

    & a {
      text-decoration: none;
      color: white;
    }
  }

  /* ------------------ */
  /* MEDIA QUERIES */
  /* ------------------ */
  /* MEDIUM MOBILE 375px */
  @media (min-width: 23em) {
    .circle-outer {
      max-width: 420px;
      max-height: 420px;
    }
    .circle-middle {
      max-width: 380px;
      max-height: 380px;
    }
    .circle-inner {
      max-width: 340px;
      max-height: 340px;
    }

    .app-title {
      font-size: 2.4rem;
    }

    .login-btn {
      gap: 0.8rem;

      width: 14rem;
      padding: 0.4rem 0.8rem;

      font-size: 1.2rem;
    }

    .footer {
      font-size: 1.4rem;
    }
  }

  /* LARGE MOBILE 425PX */
  @media (min-width: 26em) {
    .app-title {
      font-size: 3rem;
    }

    .login-btn {
      width: 16rem;

      font-size: 1.4rem;
    }
  }

  /* TABLET 768px */
  @media (min-width: 48em) {
    .circle-outer {
      max-width: 75vmin;
      max-height: 75vmin;
    }
    .circle-middle {
      max-width: 65vmin;
      max-height: 65vmin;
    }
    .circle-inner {
      max-width: 55vmin;
      max-height: 55vmin;
    }

    .app-title {
      font-size: 3.6rem;
    }

    .login-btn {
      width: 20rem;

      font-size: 1.8rem;
    }

    .footer {
      font-size: 2rem;
    }
  }

  /* LAPTOP 1024px */
  @media (min-width: 64em) {
    .app-title {
      font-size: 3.6rem;
    }

    .login-btn {
      width: 20rem;
      padding: 0.4rem 0.8rem;
      margin-bottom: 1.2rem;

      font-size: 2rem;
    }

    .footer {
      font-size: 2rem;
    }
  }
`;

export default Login;
