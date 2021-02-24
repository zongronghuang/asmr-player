import styled from '@emotion/styled'

// 音量和設定模式元件
const VolumeAndModeJSX = ({ className, handleTrackVolume, volume }) => (
  <div className={className}>
    {console.log('[render] VolumeAndMode')}
    <div id="volume">
      <label htmlFor="volume">Volume</label>
      <input id="volume" type="range" value={volume} min="0" max="1" step="0.1" onChange={handleTrackVolume}></input>
    </div>
    <div id="mode">Mode</div>
  </div>
)

const VolumeAndMode = styled(VolumeAndModeJSX)`
  display: flex;
  justify-content: space-between;

  & > #volume {
    border: 1px solid black;
    cursor: pointer;
  }

  & > #mode {
    border: 1px solid black;
    cursor: pointer;
  }
`

export default VolumeAndMode