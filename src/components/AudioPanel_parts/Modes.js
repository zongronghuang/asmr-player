import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModesJSX = ({ className, handleModeChange }) => {
  return (
    <form className={className} onChange={handleModeChange}>
      {console.log('[render] Modes')}
      <div>
        <input type="radio" id="loop-album" value="loopAlbum" name="mode" defaultChecked></input>
        <label htmlFor="loop-album">
          <FontAwesomeIcon icon={['fas', 'sync']} />
        </label>
      </div>

      <div>
        <input type="radio" id="loop-track" value="loopTrack" name="mode"></input>
        <label htmlFor="loop-track">
          <FontAwesomeIcon icon={['fas', 'redo']} />
        </label>
      </div>

      <div>
        <input type="radio" id="shuffle-all" value="shuffleAll" name="mode"></input>
        <label htmlFor="shuffle-all">
          <FontAwesomeIcon icon={['fas', 'random']} />
        </label>
      </div>
    </form>
  )
}

const Modes = styled(ModesJSX)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: HotPink;

  div {
    margin: 2px 5px;
  }

  input {
    margin-right: 5px;
  };
`

export default Modes