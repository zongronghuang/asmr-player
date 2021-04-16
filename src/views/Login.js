import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginJSX = ({ className }) => (
  <main className={className}>
    <div className="circle" id="outer">
      <div className="circle" id="middle">
        <div className="circle" id="inner">
          <section>
            <h1>ASMR Player</h1>
            <a href="#" id="fb-login">Facebook</a>
          </section>
        </div>
      </div>
    </div>

    <footer>
      <small>
        Made with <FontAwesomeIcon icon={['fas', 'heart']} color={'goldenrod'} /> by <a href="#">Zong-Rong</a>
      </small>
    </footer>
  </main>
)

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
}

.circle:hover {
  border-width: 6px;
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
  text-shadow: 0px 0px 10px goldenrod;
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
}

#fb-login {
  display: block;
  width: 100%;
  height: 30px;
  margin-right: auto;
  margin-left: auto;
  background-color: rgb(66, 103, 178);
  line-height: 30px;
  font-size: 15px;
  border-radius: 15px;
  padding: 5px;
}
`

export default Login