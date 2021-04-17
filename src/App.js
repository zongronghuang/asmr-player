import './App.css'
import { useState } from 'react'
import styled from '@emotion/styled'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart } from '@fortawesome/free-solid-svg-icons'

import Login from './views/Login'
import ASMRApp from './views/ASMRApp'

// 註冊 fontAwesome SVG icons
library.add(faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart)

const AppJSX = ({ className }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    < div className={className, 'App'}>
      {console.log('[render] App')}

      {isLoggedIn
        ? <ASMRApp />
        : <Login />
      }
    </div >
  );
}

const App = styled(AppJSX)`
  position: relative;
`

export default App;
