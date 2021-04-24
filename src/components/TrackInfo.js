import { useEffect } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 音訊資訊元件 (名稱)
const TrackInfoJSX = ({ className, track }) => {
  // 更換 track 時，重新設定動畫 + 播放動畫
  useEffect(() => {
    console.log('[useEffect] Animating TrackInfo')
    const animationTarget = document
      .getElementById('animation-target')
      .animate(
        [
          { opacity: 1 },
          { opacity: 0 },
        ], {
        fill: 'forwards',
        duration: 7000
      })

    animationTarget.play()
  }, [track])

  return (
    <div className={className} id="animation-target">
      { console.log('[render] TrackInfo')}
      < FontAwesomeIcon icon={['fas', 'music']} />
      <span>{track.name}</span>
    </div >
  )
}

const TrackInfo = styled(TrackInfoJSX)`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10%;
  min-width: 100px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: black;
  border: 3px solid goldenrod;
  border-radius: 15px;
  color: goldenrod;
  font-family: Arial, Helvetica, sans-serif;

  span {
    margin-left: 10px;
  }
`

export default TrackInfo