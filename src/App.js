import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import styled from '@emotion/styled'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart } from '@fortawesome/free-solid-svg-icons'

import Login from './views/Login'
import ASMRApp from './views/ASMRApp'

// 註冊 fontAwesome SVG icons
library.add(faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart)

const AppJSX = ({ className }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
