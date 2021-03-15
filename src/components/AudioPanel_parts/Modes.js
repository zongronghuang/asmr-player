import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModesJSX = ({ className, mode, handleModeChange }) => {
  return (
    <div className={className}>
      { console.log('[render] Modes')}

      <button title="Loop album" alt="Loop album"
        onClick={handleModeChange('loopAlbum')}
      >
        <FontAwesomeIcon
          icon={['fas', 'sync']}
          color={(mode === 'loopAlbum') ? 'blue' : 'black'}
          size="lg"
        />
      </button>

      <button title="Loop track" alt="Loop track"
        onClick={handleModeChange('loopTrack')}
      >
        <FontAwesomeIcon
          icon={['fas', 'redo']}
          color={(mode === 'loopTrack') ? 'blue' : 'black'}
          size="lg"
        />
      </button>

      <button title="Shuffle all" alt="Shuffle all"
        onClick={handleModeChange('shuffleAll')}
      >
        <FontAwesomeIcon
          icon={['fas', 'random']}
          color={(mode === 'shuffleAll') ? 'blue' : 'black'}
          size="lg"
        />
      </button>
    </div>
  )
}

const Modes = styled(ModesJSX)`
  display: flex;
  align-items: flex-start;
  border-radius: 0px 10px 10px 0px;

  button {
   margin-left: 2px;
   margin-right: 2px;
   border-radius: 5px;
   border-width: 0px;
  }

  .checked {
    color: blue;
  }
`

export default Modes