import './App.css';
import { useEffect, useState } from 'react'

import Backdrop from './components/Backdrop'
import AudioPanel from './components/AudioPanel'
import album from './utils/albumFactory'

// App 的基本 style
const appStyle = {
  position: 'relative',
}

function App() {
  const [track, setTrack] = useState(album[0])
  const [mode, setMode] = useState('loopAlbum')

  const handleNextTrack = () => {
    setTrack(prevTrack => {
      let newOrder

      if (prevTrack.order === album.length - 1) {
        newOrder = 0
      } else {
        newOrder = prevTrack.order + 1
      }

      return album[newOrder]
    })
  }

  const handlePrevTrack = () => {
    setTrack(prevTrack => {
      let newOrder

      if (prevTrack.order === 0) {
        newOrder = album.length - 1
      } else {
        newOrder = prevTrack.order - 1
      }

      return album[newOrder]
    })
  }

  const handleModeChange = (e) => {
    setMode(e.target.value)
  }

  return (
    <div className="App" style={appStyle}>
      { console.log('[render] App')}
      <Backdrop track={track} />
      <AudioPanel
        track={track}
        mode={mode}
        handleNextTrack={handleNextTrack}
        handlePrevTrack={handlePrevTrack}
        handleModeChange={handleModeChange}
      />
    </div>
  );
}

export default App;
