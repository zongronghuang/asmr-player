import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 音量和設定模式元件
const VolumeJSX = ({ className, handleTrackVolume, volume }) => (
  <div className={className}>
    {console.log('[render] Volume')}
    <div id="volume">
      <label htmlFor="volume"></label>
      <FontAwesomeIcon icon={['fas', 'volume-mute']} />
      <FontAwesomeIcon icon={['fas', 'volume-down']} />
      <input id="volume" type="range" value={volume} min="0" max="1" step="0.1" onChange={handleTrackVolume}></input>
      <FontAwesomeIcon icon={['fas', 'volume-up']} />
    </div>
  </div>
)

const Volume = styled(VolumeJSX)`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;

  & > #volume {
    cursor: pointer;
  }

  & > #mode {
    cursor: pointer;
  }
`

export default Volume