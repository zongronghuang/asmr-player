import './App.css';
import { useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock } from '@fortawesome/free-solid-svg-icons'

import Backdrop from './components/Backdrop'
import AudioPanel from './components/AudioPanel'

import defaultTracks from './utils/trackFactory'
import { randomizeTracks } from './utils/helpers'

// App 的基本 style
const appStyle = {
  position: 'relative',
}

// 註冊 fontAwesome SVG icons
library.add(faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock)

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
      console.log('random tracks', randomTracks)

      setAlbum(prevAlbum => {
        return [...randomTracks]
      })
    }

    setMode(e.target.value)
  }

  const handleDragStart = (e) => {
    console.log('==Drag Start==')
    console.log('drag item', e.target.id)
  }

  const handleDrag = (e) => {
    console.log('==Drag==')
    console.log('drag item', e.target.id)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    console.log('==Drag Over==')
  }

  const handleDrop = (e) => {
    e.preventDefault()
    console.log('==Drop==')
    console.log(`X: ${e.pageX}  Y: ${e.pageY}`)
    const dragItem = document.querySelector('#dragItem')
    dragItem.style.left = `${e.pageX}px`
    dragItem.style.top = `${e.pageY}px`
  }

  return (
    < div className="App" style={appStyle}>
      { console.log('[render] App')}
      < Backdrop
        track={track}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
      <AudioPanel
        track={track}
        mode={mode}
        handleNextTrack={handleNextTrack}
        handlePrevTrack={handlePrevTrack}
        handleModeChange={handleModeChange}
        handleDrag={handleDrag}
        handleDragStart={handleDragStart}
      />
    </div >
  );
}

export default App;
