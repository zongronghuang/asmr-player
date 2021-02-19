import './App.css';
import Backdrop from './components/Backdrop'
import AudioPanel from './components/AudioPanel'

const appStyle = {
  position: 'relative',
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <Backdrop />
      <AudioPanel />
    </div>
  );
}

export default App;
