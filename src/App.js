import './App.css';
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage } from '@fortawesome/free-solid-svg-icons'

import Backdrop from './components/Backdrop'
import AudioPanel from './components/AudioPanel'
import InfoButtons from './components/InfoButtons'
import Loader from './views/Loader'

import { defaultTracks, makeBackdropPromises } from './utils/trackFactory'
import { randomizeTracks } from './utils/helpers'

// 註冊 fontAwesome SVG icons
library.add(faMusic, faPlay, faPause, faBackward, faForward, faVolumeUp, faVolumeDown, faVolumeMute, faRandom, faSync, faRedo, faClock, faInfo, faUserCircle, faGlobe, faPlane, faPlaneSlash, faImage)

const AppJSX = ({ className }) => {
  const [mode, setMode] = useState('loopAlbum')
  const [album, setAlbum] = useState(defaultTracks)
  const [track, setTrack] = useState(album[0])
  const [distToEleOrigin, setDistToEleOrigin] = useState({ left: 0, top: 0 })
  const [shouldUseAPIData, setShouldUseAPIData] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const fetchBackdrops = async () => {
      const data = await makeBackdropPromises()
      console.log('makeBackdropPromises', makeBackdropPromises)
      console.log('fetched data', data)

      // 確認是否取得所有線上背景圖片
      if (data.some(item => Boolean(item) === false)) {
        return
      } else {
        setTimeout(() => setIsReady(true), 2000)
      }

      const updatedAlbum = album.map((track, index) => ({
        ...track,
        remoteBackdrop: { ...data[index] }
      }))
      console.log('updated album', updatedAlbum)

      setAlbum(updatedAlbum)
      setTrack(prevTrack => updatedAlbum[prevTrack.order])
      setShouldUseAPIData(true)
    }

    fetchBackdrops()
  }, [])

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

  const handleModeChange = (mode) => (e) => {
    // 如果是 Shuffle all 模式，則建立隨機排列曲目
    if (mode === 'shuffleAll') {
      const randomTracks = randomizeTracks(defaultTracks)
      console.log('random tracks', randomTracks)

      setAlbum(prevAlbum => {
        return [...randomTracks]
      })
    }

    setMode(mode)
  }

  const handleDragStart = (e) => {
    console.log('==Drag Start==')
    // 取得游標和 drag item 原點的距離
    const distToDragItemOrigin = {
      left: e.clientX - e.target.offsetLeft,
      top: e.clientY - e.target.offsetTop
    }

    console.log(distToDragItemOrigin)

    setDistToEleOrigin(distToDragItemOrigin)
  }

  const handleDrag = (e) => {
    console.log('==Drag==')
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    console.log('==Drag Over==')
  }

  const handleDrop = (e) => {
    console.log('==Drop==')
    e.preventDefault()
    const dragItem = document.querySelector('#dragItem')

    // 計算 drag item 降落位置 (新的 left 和 top) 
    const dragItemLeft = e.clientX - distToEleOrigin.left
    const dragItemTop = e.clientY - distToEleOrigin.top

    dragItem.style.left = `${dragItemLeft}px`
    dragItem.style.top = `${dragItemTop}px`
  }

  return (
    < div className={className, 'App'}>
      { console.log('[render] App')}

      {isReady
        ? null
        : <Loader />
      }

      <Backdrop
        track={track}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        shouldUseAPIData={shouldUseAPIData}
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
      <InfoButtons track={track} shouldUseAPIData={shouldUseAPIData} setShouldUseAPIData={setShouldUseAPIData} />
    </div >
  );
}

const App = styled(AppJSX)`
  position: relative;
`

export default App;
