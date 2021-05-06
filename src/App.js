import './App.css'

import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import styled from '@emotion/styled'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'

// 匯入元件
import Login from './views/Login'
import ASMRApp from './views/ASMRApp'
import useFacebookLogin from './hooks/useFacebookLogin'
import useGoogleLogin from './hooks/useGoogleLogin'
import AuthContext from './contexts/AuthContext'

// 註冊 fontAwesome SVG icons
library.add(faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart, faSignOutAlt, faFacebookSquare, faGoogle)

const AppJSX = ({ className }) => {
  // const [FBResponse, handleFBLogin, handleFBLogout] = useFacebookLogin()
  // const [isLoggedIn, setIsLoggedIn] = useState()


  // console.log('fb response', FBResponse)
  // console.log('is at login', isAtLogin)

  const userAuth = useContext(AuthContext)
  console.log('user auth', userAuth)

  // userAuth.FB = {
  //   status: FBResponse?.status,
  //   authResponse: FBResponse?.authResponse,
  //   loginMethod: handleFBLogin,
  //   logoutMethod: handleFBLogout
  // }

  console.log('updated user auth', userAuth)

  useEffect(() => {
    (function loadGoogleLibrary() {
      const loadedScripts = document.querySelectorAll('script')

      const isPresentGoogleLoginLibrary = Object.values(loadedScripts)
        .filter(script => script.src === process.env.REACT_APP_GOOGLE_LOGIN_LIBRARY_URL)

      if (isPresentGoogleLoginLibrary) {
        console.log('google login library already exists')
        return
      }

      const script = document.createElement('script')
      script.src = process.env.REACT_APP_GOOGLE_LOGIN_LIBRARY_URL
      script.async = true
      script.defer = true
      console.log('new google script addeds', script)
    })()
  })

  return (
    < div className={className, 'App'}>
      {console.log('[render] App')}

      <Router>
        {/* {!FBResponse && <></>}
        {FBResponse?.status !== 'connected' && <Redirect to="/login" />} */}
        <Switch>
          <Route path="/">
            {/* {FBResponse?.status === 'connected'
              ? (<Redirect to={{ pathname: "/app" }} />)
              : (<Redirect to={{ pathname: "/login" }} />)
            } */}

            {/*
            <Route path="/login">
              <Login handleFBLogin={handleFBLogin} />
            </Route>
            <Route path="/app">
                <ASMRApp handleFBLogout={handleFBLogout} />
            </Route>
             */}

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/app">
              <ASMRApp />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

const App = styled(AppJSX)`
  position: absolute;
`

export default App;
