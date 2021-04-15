import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginJSX = ({ className }) => (
  <main className={className}>

    <div className="circle" id="outer">
      <div className="circle" id="middle">
        <div className="circle" id="inner"></div>
      </div>
    </div>

    <section>
      <div>
        <header>ASMR Player</header>
      </div>

      <div>
        <i></i><a href="#" id="fb-link">Log in with Facebook</a>
      </div>

      <footer>
        <small>Made with love by <a href="#">Zong-Rong</a></small>
      </footer>
    </section>
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

section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 30%;
  box-shadow: 1px 1px 5px goldenrod, -1px -1px 5px goldenrod, 1px -1px 5px goldenrod, -1px 1px 5px goldenrod;
  border-radius: 10%;
}

section > div {
  width: 100%;
}

header {
  font-family: 'Courgette', cursive, monospace, Arial, sans-serif;
  font-size: x-large;
  font-weight: bold;
  color: goldenrod;
  text-shadow: 0px 0px 10px goldenrod;
}

footer {
  color: white;
}

.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border-top: 1px solid goldenrod;
  border-bottom: 1px solid goldenrod;
}

#inner {
  width: 300px;
  height: 300px;
}

#middle {
  width: 400px;
  height: 400px;
}

#outer {
  width: 500px;
  height: 500px;
  transform: translate(-50%, -50%) rotate(45deg);
}

#fb-link {
  display: block;
  width: 150px;
  height: 50px;
  background-color: white;
  line-height: 50px;
  border: 1px solid black;
  text-decoration: none;
  margin: auto;
}

`

export default Login