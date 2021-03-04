import './App.css';
import { useEffect, useState } from 'react'

import Backdrop from './components/Backdrop'
import AudioPanel from './components/AudioPanel'
import defaultTracks from './utils/trackFactory'

// App 的基本 style
const appStyle = {
  position: 'relative',
}

const getRandomNum = (max) => {
  return Math.floor(Math.random() * max)
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

    if (e.target.value === 'shuffleAll') {
      const numberOfTracks = defaultTracks.length
      const usedRandomIndexes = []
      const newRandomTracks = Array(numberOfTracks)
      let randomIndex = getRandomNum(numberOfTracks)

      defaultTracks.forEach(track => {
        while (usedRandomIndexes.includes(randomIndex)) {
          // 重新建立 randomIndex
          randomIndex = getRandomNum(numberOfTracks)
        }

        usedRandomIndexes.push(randomIndex)
        newRandomTracks[randomIndex] = track
      })

      console.log('new random tracks', newRandomTracks)

      // 問題發生處????
      setAlbum(prevAlbum => newRandomTracks)
      console.log('new album', album)
      setTrack(prevTrack => album[0])
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
