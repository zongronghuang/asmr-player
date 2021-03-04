import styled from '@emotion/styled'

const ModesJSX = ({ className, handleModeChange }) => {
  return (
    <form className={className} onChange={handleModeChange}>
      {console.log('[render] Modes')}
      <div>
        <input type="radio" id="loop-album" value="loopAlbum" name="mode" defaultChecked></input>
        <label htmlFor="loop-album">Loop album</label>
      </div>

      <div>
        <input type="radio" id="loop-track" value="loopTrack" name="mode"></input>
        <label htmlFor="loop-track">Loop track</label>
      </div>

      <div>
        <input type="radio" id="shuffle-all" value="shuffleAll" name="mode"></input>
        <label htmlFor="shuffle-all">Shuffle all</label>
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