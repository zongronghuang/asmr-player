import './App.css';
import { useState } from 'react'

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
  let order = 0
  const [track, setTrack] = useState(defaultAlbum[order])

  // 如果超過曲目上限，自動回到第一首
  // 切換到下一個音軌
  const handleNextTrack = () => {
    if (order === defaultAlbum.length - 1) {
      order = 0
    } else {
      order++
    }

    setTrack(defaultAlbum[order])
    console.log('=== next track')
    console.log('order', order)
    console.log('track', track)
  }

  // 如果超過曲目下限，自動回到最後一首
  // 切換到上一個音軌
  const handlePrevTrack = () => {
    if (order === 0) {
      order = defaultAlbum.length - 1
    } else {
      order--
    }

    setTrack(defaultAlbum[order])
    console.log('=== prev track')
    console.log('order', order)
    console.log('track', track)
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
