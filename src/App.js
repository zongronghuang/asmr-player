import './App.css';
import { useState } from 'react'

import Backdrop from './components/Backdrop'
import AudioPanel from './components/AudioPanel'

const appStyle = {
  position: 'relative',
}

const defaultTrackList = [
  {
    name: 'aaa',
    src: 'aaa',
    imageUrl: 'aaaa',
    duration: 'aaaa',
  },
  {
    name: 'bbb',
    src: 'bbb',
    imageUrl: 'bbb',
    duration: 'bbb',
  },
  {
    name: 'ccc',
    src: 'ccc',
    imageUrl: 'ccc',
    duration: 'ccc',
  }
]

function App() {
  const [track, setTrack] = useState(defaultTrackList[0])

  return (
    <div className="App" style={appStyle}>
      <Backdrop />
      <AudioPanel track={track} />
      {console.log('app render')}
    </div>
  );
}

export default App;
