import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 音量和設定模式元件
const VolumeJSX = ({ className, handleTrackVolume, volume }) => (
  <div className={className}>
    {console.log('[render] Volume')}
    {/* volume 為 0 => 顯示靜音圖示
          volume 不為 0 => 顯示降低音量圖示 */}
    {
      (volume === 0) ?
        (<label htmlFor="volume" title="Muted" alt="Muted" >
          <FontAwesomeIcon icon={['fas', 'volume-mute']} size="lg" />
        </label>) :
        (<label htmlFor="volume" title="Volume down" alt="Volume down" onClick={handleTrackVolume('down')}>
          <FontAwesomeIcon icon={['fas', 'volume-down']} size="lg" />
        </label>)
    }

    <input id="volume" type="range" value={volume} min="0" max="1" step="0.1" onChange={handleTrackVolume('manual')}></input>

    <label htmlFor="volume" title="Volume up" alt="Volume up" onClick={handleTrackVolume('up')}>
      <FontAwesomeIcon icon={['fas', 'volume-up']} size="lg" />
    </label>
  </div>
)

const Volume = styled(VolumeJSX)`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
  z-index: 10;

  label {
    margin-right: 5px;
    margin-left:  5px;
  }

  & > #volume {
    cursor: pointer;
  }

  & > #mode {
    cursor: pointer;
  }
`

export default Volume