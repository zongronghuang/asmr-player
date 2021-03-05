import './App.css';
import { useEffect, useState } from 'react'

import Backdrop from './components/Backdrop'
import AudioPanel from './components/AudioPanel'
import defaultTracks, { randomizeTracks } from './utils/trackFactory'

// App 的基本 style
const appStyle = {
  position: 'relative',
}

function App() {
  const [mode, setMode] = useState('loopAlbum')
  const [album, setAlbum] = useState(defaultTracks)
  const [track, setTrack] = useState(album[0])

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

    // 如果是 Shuffle all 模式，則建立隨機排列曲目
    if (e.target.value === 'shuffleAll') {
      const randomTracks = randomizeTracks(defaultTracks)
      // 問題發生處????
      setAlbum(prevAlbum => randomTracks)
      console.log('new album', album)
      // setTrack(prevTrack => album[0])
    }
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
