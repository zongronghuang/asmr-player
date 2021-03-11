import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModesJSX = ({ className, handleModeChange }) => {
  return (
    <form className={className} onChange={handleModeChange}>
      {console.log('[render] Modes')}
      <div>
        <input type="radio" id="loop-album" value="loopAlbum" name="mode" defaultChecked></input>
        <label htmlFor="loop-album">
          <FontAwesomeIcon icon={['fas', 'sync']} title="Loop album" alt="Loop album" />
        </label>
      </div>

      <div>
        <input type="radio" id="loop-track" value="loopTrack" name="mode"></input>
        <label htmlFor="loop-track">
          <FontAwesomeIcon icon={['fas', 'redo']} className="checked" title="Loop track" alt="Loop track" />
        </label>
      </div>

      <div>
        <input type="radio" id="shuffle-all" value="shuffleAll" name="mode"></input>
        <label htmlFor="shuffle-all" >
          <FontAwesomeIcon icon={['fas', 'random']} title="Shuffle all" alt="Shuffle all" />
        </label>
      </div>
    </form>
  )
}

const Modes = styled(ModesJSX)`
  display: flex;
  align-items: flex-start;
  border-radius: 0px 10px 10px 0px;

  div {
    margin: 2px 5px;
  }

  input {
    margin-right: 5px;
    display: none;
  };

  .checked {
    color: blue;
  }
`

export default Modes