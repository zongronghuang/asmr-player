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
      const prevTrackId = album.findIndex(track => track.name === prevTrack.name)
      let newTrackId

      if (prevTrackId === album.length - 1) {
        newTrackId = 0
      } else {
        newTrackId = prevTrackId + 1
      }

      return album[newTrackId]
    })
  }

  const handlePrevTrack = () => {
    setTrack(prevTrack => {
      const prevTrackId = album.findIndex(track => track.name === prevTrack.name)
      let newTrackId

      if (prevTrackId === 0) {
        newTrackId = album.length - 1
      } else {
        newTrackId = prevTrackId - 1
      }

      return album[newTrackId]
    })
  }

  const handleModeChange = (e) => {


    // 如果是 Shuffle all 模式，則建立隨機排列曲目
    if (e.target.value === 'shuffleAll') {
      const randomTracks = randomizeTracks(defaultTracks)
      // 問題發生處????
      console.log('random tracks', randomTracks)
      setAlbum(prevAlbum => {
        console.log('in to the update')
        return [...randomTracks]
      })
      console.log('new album', album)
    }
    // 無法將目前播放音軌改為新專輯的第一首
    setTrack(prevTrack => album[0])
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
