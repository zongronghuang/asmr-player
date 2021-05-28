import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 音量和設定模式元件
const VolumeControlJSX = ({ className, handleVolumeUpDown, volume }) =>
(<div className={className}>
  {/* {console.log('[render] VolumeControl')} */}

  {
    (volume === 0)
      ? (
        <button
          htmlFor="volume"
          title="Muted"
          alt="Muted"
          tabIndex="4" >
          <FontAwesomeIcon icon={['fas', 'volume-mute']} size="lg" />
        </button>
      )
      : (
        <button
          htmlFor="volume"
          title="Volume down"
          alt="Volume down"
          tabIndex="4"
          onClick={handleVolumeUpDown('down')} >
          <FontAwesomeIcon icon={['fas', 'volume-down']} size="lg" />
        </button>
      )
  }

  <input
    id="volume"
    type="range"
    value={volume}
    title={volume}
    min="0"
    max="1"
    step="0.1"
    tabIndex="5"
    onChange={handleVolumeUpDown('manual')}
  />

  <button
    htmlFor="volume"
    title="Volume up"
    alt="Volume up"
    tabIndex="6"
    onClick={handleVolumeUpDown('up')} >
    <FontAwesomeIcon icon={['fas', 'volume-up']} size="lg" />
  </button>
</div>)

const VolumeControl = styled(VolumeControlJSX)`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;

  button {
    border: 1px solid black;
    border-radius: 5px;
    background-color: rgb(239, 239, 239);

    &:hover {
      box-shadow: 3px 3px goldenrod, -3px 3px goldenrod, 3px -3px goldenrod, -3px -3px goldenrod;
    }
  }

  & > #volume {
    cursor: pointer;
    margin-left: 2px;
    margin-right: 2px;
  }

  & > #mode {
    cursor: pointer;
  }

  input {
    width: 50%;
    min-width: 30px;
  }
`

export default VolumeControl