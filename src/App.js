import './App.css'

import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
import NoMatchRoute from './routing/NoMatchRoute'

// 註冊 fontAwesome SVG icons
library.add(faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage, faHeart, faSignOutAlt, faFacebookSquare, faGoogle)

const AppJSX = ({ className }) => {
  const [FBResponse, handleFBLogin, handleFBLogout] = useFacebookLogin()
  const [GoogleResponse, handleGoogleLogin, handleGoogleLogout] = useGoogleLogin()
  const [authProvider, setAuthProvider] = useState(null)

  return (
    <AuthContext.Provider value={{
      authProvider,
      FB: {
        status: FBResponse?.status,
        authResponse: FBResponse?.authResponse,
        loginMethod: () => {
          handleFBLogin()
          setAuthProvider('FB')
        },
        logoutMethod: () => {
          handleFBLogout()
          setAuthProvider(null)
        }
      },
      Google: {
        authResponse: GoogleResponse?.login,
        loginMethod: () => {
          handleGoogleLogin()
          setAuthProvider('Google')
        },
        logoutMethod: () => {
          handleGoogleLogout()
          console.log('google logout logout')
          setAuthProvider(null)
        }
      }
    }} >
      < div className={className, 'App'}>
        {/* {console.log('[render] App')} */}

        <Router>
          {/* 
            FB SDK 有 getLoginStatus 方法，每次載入 app 時就會回傳使用者的登入狀態，
            如果 access token 未過期，再一次自動回傳登入狀態和 access token
          
            [假如走到 NoMatchRoute]：
            此時 authProvider === null，但 context 中已有 FB 登入資料 (FB 自動回傳)。
            按下登出鍵後，必須確認 FBResponse 和 authProvider，才能阻止再次自動登入
          */}

          {/* 
            採用 Google 登入時，不檢查 authProvider
            
            使用 GoogleResponse?.login && authProvider === 'Google' 做為 gate 的話，
            因為 && 的 short-circuit evaluation 特性，
            會直接讓使用者進入 /app，但是使用者還未點選要用哪一個帳號登入，導致登入管控失敗
          */}

          {
            (FBResponse?.authResponse && authProvider === 'FB') || GoogleResponse?.login
              ? <Redirect to="/app" />
              : <Redirect to="/login" />
          }

          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/app">
              <ASMRApp />
            </Route>

            <NoMatchRoute />
          </Switch>
        </Router>
      </div >
    </AuthContext.Provider>
  );
}

const App = styled(AppJSX)`
 height: 100vh;
`

export default App;
