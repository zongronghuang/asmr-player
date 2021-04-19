import './App.css'

import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import styled from '@emotion/styled'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import Login from './views/Login'
import ASMRApp from './views/ASMRApp'
import useFacebookLogin from './hooks/useFacebookLogin'

// 註冊 fontAwesome SVG icons
library.add(faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart, faSignOutAlt)

const AppJSX = ({ className }) => {
  //const [FBresponse, handleFBLogin, handleFBLogout] = useFacebookLogin()
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    < div className={className, 'App'}>
      {console.log('[render] App')}

      <Router>
        <Switch>
          <Route path="/">
            {isLoggedIn
              ? (<Redirect to={{ pathname: "/app" }} />)
              : (<Redirect to={{ pathname: "/login" }} />)
            }

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
  position: relative;
`

export default App;
