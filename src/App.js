import "./App.css";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "@emotion/styled";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMusic,
  faPlay,
  faPause,
  faBackward,
  faForward,
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faRandom,
  faSync,
  faRedo,
  faClock,
  faInfo,
  faUserCircle,
  faGlobe,
  faPlane,
  faPlaneSlash,
  faImage,
  faHeart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";

// 匯入元件
import Login from "./views/Login";
import ASMRApp from "./views/ASMRApp";
import useFacebookLogin from "./hooks/useFacebookLogin";
import useGoogleLogin from "./hooks/useGoogleLogin";
import AuthContext from "./contexts/AuthContext";
import NoMatchRoute from "./routes/NoMatchRoute";

// 註冊 fontAwesome SVG icons
library.add(
  faMusic,
  faPlay,
  faPause,
  faBackward,
  faForward,
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faRandom,
  faSync,
  faRedo,
  faClock,
  faInfo,
  faUserCircle,
  faGlobe,
  faPlane,
  faPlaneSlash,
  faImage,
  faHeart,
  faSignOutAlt,
  faFacebookSquare,
  faGoogle
);

const AppJSX = ({ className }) => {
  const [FBResponse, handleFBLogin, handleFBLogout] = useFacebookLogin();
  const [GoogleResponse, handleGoogleLogin, handleGoogleLogout] =
    useGoogleLogin();
  const [authProvider, setAuthProvider] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        authProvider,
        FB: {
          authResponse: FBResponse?.login,
          loginMethod: () => {
            handleFBLogin();
            setAuthProvider("FB");
          },
          logoutMethod: () => {
            handleFBLogout();
            setAuthProvider(null);
          },
        },
        Google: {
          authResponse: GoogleResponse?.login,
          loginMethod: () => {
            handleGoogleLogin();
            setAuthProvider("Google");
          },
          logoutMethod: () => {
            handleGoogleLogout();
            console.log("google logout logout");
            setAuthProvider(null);
          },
        },
      }}
    >
      <div className={(className, "App")}>
        {/* {console.log('[render] App')} */}

        <Router>
          {FBResponse?.login || GoogleResponse?.login ? (
            <Redirect to="/app" />
          ) : (
            <Redirect to="/login" />
          )}
          {/* {true ? <Redirect to="/app" /> : <Redirect to="/login" />} */}
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
      </div>
    </AuthContext.Provider>
  );
};

const App = styled(AppJSX)`
  height: 100vh;
  position: relative;
`;

export default App;
