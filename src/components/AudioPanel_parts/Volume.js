import styled from '@emotion/styled'

// 音量和設定模式元件
const VolumeJSX = ({ className, handleTrackVolume, volume }) => (
  <div className={className}>
    {console.log('[render] Volume')}
    <div id="volume">
      <label htmlFor="volume">Vol</label>
      <input id="volume" type="range" value={volume} min="0" max="1" step="0.1" onChange={handleTrackVolume}></input>
    </div>
  </div>
)

const Volume = styled(VolumeJSX)`
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

export default Volume