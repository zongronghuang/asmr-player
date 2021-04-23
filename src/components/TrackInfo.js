import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 音訊資訊元件 (名稱)
const TrackInfoJSX = ({ className, track }) => {
  // 用 useRef 記憶上一次的 track
  // 如果新 track !== 舊 track，加上 fade-out class 觸發動畫
  // 再提供 onAnimationEnd 的方法，把 fade-out class 移掉

  return (
    <div className={className}>
      {console.log('[render] TrackInfo')}
      <FontAwesomeIcon icon={['fas', 'music']} />
      <span>{track.name}</span>
    </div>

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
  
  .fade-out {
    animation-name: fade-out;
    animation-duration: 5s;
    animation-fill-mode: forwards;
  }

  @keyframes fade-out {
    from { opacity: 0;}
    50% { opacity: 1;}
    100% { opacity: 0;}
  }

  span {
    margin-left: 10px;
  }
`

export default TrackInfo