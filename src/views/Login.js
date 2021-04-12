import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginJSX = ({ className }) => (
  <main className={className}>
    <div>
      <header>ASMR Player</header>
      <span>Immersed in ambient sounds and images</span>
    </div>

    <a href="#" id="fb-link">Log in with Facebook</a>

    <footer>
      <small>Made with love by <a href="#">Zong-Rong</a></small>
    </footer>
  </main>
)

const Login = styled(LoginJSX)`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 100vw;
height: 100vh;
text-align: center;
background-color: black;

header {
  margin-bottom: 20px;
  margin-top: -50px;
  font-family: 'Courgette', cursive, monospace, Arial, sans-serif;
  font-size: xx-large;
  font-weight: bold;
  color: goldenrod;
  text-shadow: 0px 0px 10px goldenrod;
}

div > span {
  color: goldenrod;
  font-family: 'Courgette', cursive, monospace, Arial, sans-serif;
}

a {
  text-decoration: none;
}

#fb-link {
  display: block;
  width: 200px;
  height: 50px;
  background-color: white;
  line-height: 50px;
  border: 1px solid black;
}

footer {
  border: 1px solid black;
  width: 100%;
  margin-bottom: -50px;
  color: white;
}
`

export default Login