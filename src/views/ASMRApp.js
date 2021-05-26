import { useEffect, useState } from 'react'

import Backdrop from '../components/Backdrop'
import AudioPanel from '../components/AudioPanel'
import InfoButtons from '../components/InfoButtons'
import TrackInfo from '../components/TrackInfo'
import Loader from '../components/Loader'
import Dialog from '../components/Dialog'

import { defaultTracks, backdropPromises } from '../utils/trackFactory'
import { randomizeTracks } from '../utils/helpers'

const ASMRApp = () => {
  const [mode, setMode] = useState('loopAlbum')
  const [album, setAlbum] = useState(defaultTracks)
  const [track, setTrack] = useState(album[0])
  const [distToEleOrigin, setDistToEleOrigin] = useState({ left: 0, top: 0 })
  const [shouldUseAPIData, setShouldUseAPIData] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [dialogType, setDialogType] = useState('logout')

  useEffect(() => {
    const fetchBackdrops = async () => {
      try {
        const data = await Promise.all(backdropPromises)

        // 確認是否取得所有線上背景圖片
        if (data.some(item => Boolean(item) === false)) {
          throw new Error('Fetched an incomplete set of online backdrops')
        }

        // 如果無法取得 Unsplash API 資料，isReady 設為 true，表示已經可用 local backdrop
        const updatedAlbum = album.map((track, index) => ({
          ...track,
          remoteBackdrop: { ...data[index] }
        }))
        console.log('updated album', updatedAlbum)

        setAlbum(updatedAlbum)
        setTrack(prevTrack => updatedAlbum[prevTrack.order])
        setShouldUseAPIData(true)
        setIsReady(true)
      } catch (error) {
        console.log('fetch error', error)

        setTimeout(() => {
          setShouldUseAPIData(false)
          setIsReady(true)
          setDialogType('API error')
          handleLogoutDialog('on')
        }, 2000)
      }
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
      const randomTracks = randomizeTracks(album)
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

  const handleLogoutDialog = (status) => {
    const dialog = document.querySelector('dialog')

    if (status === 'on') dialog.showModal()
    if (status === 'off') dialog.close()
  }

  // 監測是否(恢復)連線
  window.addEventListener('online', () => {
    handleLogoutDialog('off')
    setDialogType('logout')
  })

  // 監測是否離線
  window.addEventListener('offline', () => {
    setDialogType('offline')
    handleLogoutDialog('on')
  })

  return (<>
    {/* { console.log('[render] ASMRApp')} */}
    {isReady || <Loader />}
    <Dialog
      dialogType={dialogType}
      handleLogoutDialog={handleLogoutDialog}
    />
    <TrackInfo track={track} />
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
    <InfoButtons
      track={track}
      shouldUseAPIData={shouldUseAPIData}
      setShouldUseAPIData={setShouldUseAPIData}
      handleLogoutDialog={handleLogoutDialog}
    />
  </>)
}

export default ASMRApp