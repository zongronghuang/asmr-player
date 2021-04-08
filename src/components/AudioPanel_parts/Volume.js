import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 音量和設定模式元件
const VolumeJSX = ({ className, handleVolumeUpDown, volume }) =>
(<div className={className}>
  {console.log('[render] Volume')}

  {
    (volume === 0)
      ? (<button htmlFor="volume" title="Muted" alt="Muted" >
        <FontAwesomeIcon icon={['fas', 'volume-mute']} size="lg" />
      </button>)
      : (<button htmlFor="volume" title="Volume down" alt="Volume down" onClick={handleVolumeUpDown('down')}>
        <FontAwesomeIcon icon={['fas', 'volume-down']} size="lg" />
      </button>)
  }

  <input id="volume" type="range" value={volume} title={volume} min="0" max="1" step="0.1" onChange={handleVolumeUpDown('manual')}></input>

  <button htmlFor="volume" title="Volume up" alt="Volume up" onClick={handleVolumeUpDown('up')}>
    <FontAwesomeIcon icon={['fas', 'volume-up']} size="lg" />
  </button>
</div>)

const Volume = styled(VolumeJSX)`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;

  button {
    border: 1px solid black;
    border-radius: 5px;
    background-color: rgb(239, 239, 239);
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

export default Volume