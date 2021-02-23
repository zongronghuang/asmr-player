import './App.css';
import { useState } from 'react'

import Backdrop from './components/Backdrop'
import AudioPanel from './components/AudioPanel'
import { DemoTracks } from './components/DemoTracks'
import { DemoImgs } from './components/DemoImgs'

const numberOfTracks = DemoTracks.length
const numberOfImages = DemoImgs.length
console.log('audio number', numberOfTracks)
console.log('image number', numberOfImages)

const defaultAlbum = Array(numberOfTracks)
  .fill({})
  .map((track, i) => {
    return {
      name: `track_${i}`,
      src: DemoTracks[i],
      imageUrl: DemoImgs[i],
    }
  })

// App 的基本 style
const appStyle = {
  position: 'relative',
}

function App() {
  const [track, setTrack] = useState(defaultAlbum[0])

  return (
    <div className="App" style={appStyle}>
      <Backdrop track={track} />
      <AudioPanel track={track} />
      {console.log('app render')}
    </div>
  );
}

export default App;
