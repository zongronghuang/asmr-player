import styled from '@emotion/styled'

// 音量和設定模式元件
const VolumeAndModeJSX = ({ className, handleTrackVolume }) => (
  <div className={className}>
    {console.log('controls render')}
    <div id="volume" onClick={handleTrackVolume}>Volume <progress max="1"></progress></div>
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