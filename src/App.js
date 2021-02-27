import './App.css';
import { useEffect, useState } from 'react'

import Backdrop from './components/Backdrop'
import AudioPanel from './components/AudioPanel'
import { DemoTracks } from './components/DemoTracks'
import { DemoImgs } from './components/DemoImgs'

// 建立專輯曲目 (音軌 + 圖片)
const defaultAlbum = Array(DemoTracks.length)
  .fill({})
  .map((track, index) => ({
    order: index,
    name: `track_${index}`,
    src: DemoTracks[index],
    imageUrl: DemoImgs[index],
  }))

console.log('default album', defaultAlbum)

// App 的基本 style
const appStyle = {
  position: 'relative',
}

function App() {
  const [track, setTrack] = useState(defaultAlbum[0])

  const handleNextTrack = () => {
    setTrack(prevTrack => {
      let newOrder

      if (prevTrack.order === defaultAlbum.length - 1) {
        newOrder = 0
      } else {
        newOrder = prevTrack.order + 1
      }

      return defaultAlbum[newOrder]
    })
  }

  const handlePrevTrack = () => {
    setTrack(prevTrack => {
      let newOrder

      if (prevTrack.order === 0) {
        newOrder = defaultAlbum.length - 1
      } else {
        newOrder = prevTrack.order - 1
      }

      return defaultAlbum[newOrder]
    })
  }

  return (
    <div className="App" style={appStyle}>
      { console.log('[render] App')}
      <Backdrop track={track} />
      <AudioPanel
        track={track}
        handleNextTrack={handleNextTrack}
        handlePrevTrack={handlePrevTrack}
      />
    </div>
  );
}

export default App;
