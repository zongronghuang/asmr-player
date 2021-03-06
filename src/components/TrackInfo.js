import { useEffect } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 音訊資訊元件 (名稱)
const TrackInfoJSX = ({ className, track }) => {
  // 更換 track 時，重新設定動畫 + 播放動畫
  // CSS 動畫效果無法依特定條件重覆播放，需用 JavaScript Animation API 達成
  useEffect(() => {
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
      {/* { console.log('[render] TrackInfo')} */}
      <span>
        <FontAwesomeIcon icon={['fas', 'music']} />
        {`\u00A0  ${track.order} \u00A0${track.name}`}
      </span>
    </div >
  )
}

const TrackInfo = styled(TrackInfoJSX)`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100px;
  height: 30px;
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
    margin-right: 10px;
  }
`

export default TrackInfo