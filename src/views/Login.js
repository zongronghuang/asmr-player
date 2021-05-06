import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import apis from '../components/apis/apis'

const LoginJSX = ({ className, handleFBLogin }) => {
  const handleToken = (token) => {
    console.log('token', token)
  }

  return (
    <main className={className}>
      <div className="circle" id="outer">
        <div className="circle" id="middle">
          <div className="circle" id="inner">
            <section>
              <h1>ASMR Player</h1>
              <a href="#" id="fb-login" onClick={handleFBLogin}>
                <FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg" />
                <span>Facebook Login</span>
              </a>

              <a href="#" id="google-login">
                <FontAwesomeIcon icon={['fab', 'google']} size="lg" />
                <span>Google Login</span>
              </a>
            </section>
          </div>
        </div>
      </div>

      <footer>
        <small>
          Made with <FontAwesomeIcon icon={['fas', 'heart']} color={'goldenrod'} /> by <a href="https://github.com/zongronghuang/asmr-player" target="_blank">Zong-Rong</a>
        </small>
      </footer>
    </main>
  )
}

const Login = styled(LoginJSX)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 100vh;
padding: 0;
margin: 0;
text-align: center;
background-color: black;
font-family: Arial, Helvetica, sans-serif;

.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  border-radius: 50%;
  border-top: 2px solid goldenrod;
  border-bottom: 2px solid goldenrod;

  &:hover {
    border-width: 6px;
  }
}

#inner {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#middle {
  width: 300px;
  height: 300px;
}

#outer {
  width: 350px;
  height: 350px;
  transform: translate(-50%, -50%) rotate(45deg);
}

section {
  display: flex;
  align-items: space-around;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  height: 50%;
  border-radius: 10%;
  transform: rotate(-45deg);
}

h1 {
  width: 100%;
  font-family: Courgette, Arial, cursive, monospace, sans-serif;
  font-size: x-large;
  font-weight: bold;
  color: goldenrod;

  &:hover {
    text-shadow: -1px -1px 20px goldenrod, -1px 1px 20px goldenrod, 1px -1px 20px goldenrod, 1px 1px 20px goldenrod;
    color: black;
  }
}

footer {
  position: absolute;
  bottom: 5%;
  margin: auto;
  color: white;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;

  & > span {
    margin-left: 5px;
    word-spacing: 1px;
  }

  & > svg {
    margin-left: 1px;
  }
}

#fb-login, #google-login {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-bottom: 5px;
  line-height: 30px;
  font-size: 15px;
  font-family: 'Noto Sans TC', sans-serif;
  border-radius: 10px;
  padding: 5px;
}

#fb-login {
  background-color: #1877f2;

  &:hover {
    background-color: #385898;
  }
}

#google-login {
  background-color: #4285F4;

  &:hover {
    background-color: #C20806;
  }
}
`

export default Login