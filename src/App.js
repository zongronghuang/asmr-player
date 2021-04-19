import './App.css'

import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import styled from '@emotion/styled'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import Login from './views/Login'
import ASMRApp from './views/ASMRApp'
import useFacebookLogin from './hooks/useFacebookLogin'

// 註冊 fontAwesome SVG icons
library.add(faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart, faSignOutAlt)

const AppJSX = ({ className }) => {
  const [FBResponse, handleFBLogin, handleFBLogout] = useFacebookLogin()
  const [isLoggedIn, setIsLoggedIn] = useState()
  // const isAtLogin = useRouteMatch('/login')

  console.log('fb response', FBResponse)
  // console.log('is at login', isAtLogin)



  return (
    < div className={className, 'App'}>
      {console.log('[render] App')}

      <Router>
        {!FBResponse && <><h1>Error</h1></>}
        {FBResponse?.status !== 'connected' && <Redirect to="/login" />}
        <Switch>
          <Route path="/">
            {FBResponse?.status === 'connected'
              ? (<Redirect to={{ pathname: "/app" }} />)
              : (<Redirect to={{ pathname: "/login" }} />)
            }
            <Route path="/login">
              <Login handleFBLogin={handleFBLogin} />
            </Route>
            <Route path="/app">
              <ASMRApp handleFBLogout={handleFBLogout} />
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
