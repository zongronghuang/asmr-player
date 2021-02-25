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
  // const [order, setOrder] = useState(0)
  // const [track, setTrack] = useState(defaultAlbum[order])

  // // 如果超過曲目上限，自動回到第一首
  // // 切換到下一個音軌
  // const handleNextTrack = () => {
  //   if (order === defaultAlbum.length - 1) {
  //     setOrder(prevOrder => 0)
  //     console.log('直達開頭', order)
  //   } else {
  //     setOrder(prevOrder => prevOrder + 1)
  //     console.log('前進至', order)
  //   }

  //   setTrack(prevTrack => {
  //     console.log('!! prev track', prevTrack)
  //     console.log('!! order', order)
  //     console.log('!! track', defaultAlbum[order])

  //     return defaultAlbum[order]
  //   })
  // }

  // // 如果超過曲目下限，自動回到最後一首
  // // 切換到上一個音軌
  // const handlePrevTrack = () => {
  //   if (order === 0) {
  //     setOrder(prevOrder => {
  //       return defaultAlbum.length - 1
  //     })
  //     // order = defaultAlbum.length - 1
  //     console.log('直達最後', order)
  //   } else {
  //     setOrder(prevOrder => prevOrder - 1)
  //     // order--
  //     console.log('倒退至', order)
  //   }

  //   setTrack(prevTrack => {
  //     console.log('@@ prev track', prevTrack)
  //     console.log('@@ order', order)
  //     console.log('@@ track', defaultAlbum[order])

  //     return defaultAlbum[order]
  //   })
  // }

  // // 第一次渲染後，執行 setOrder 以非同步的方式更新 order
  // useEffect(() => {
  //   console.log('pre ==', order)
  //   setOrder(prevOrder => {
  //     console.log('preOrder', prevOrder)
  //     return prevOrder + 1
  //   })
  //   console.log('post ==', order)
  // }, [])

  const [track, setTrack] = useState(defaultAlbum[0])

  const handleNextTrack = () => {
    setTrack(prevTrack => {
      const prevOrder = prevTrack.order
      console.log('prevOrder', prevOrder)
      let newOrder

      if (prevOrder === defaultAlbum.length - 1) {
        newOrder = 0
      } else {
        newOrder = prevOrder + 1
      }

      console.log('new track', defaultAlbum[newOrder])
      return defaultAlbum[newOrder]
    })
  }

  const handlePrevTrack = () => {
    console.log('handle prev track')
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
