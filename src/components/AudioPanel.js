import styled from '@emotion/styled'

// 操作按鈕元件
const RawButtons = ({ className }) => (
  <div className={className}>
    <button id="prev">Previous</button>
    <button id="play">Play</button>
    <button id="next">Next</button>
  </div>
)

const Buttons = styled(RawButtons)`
  display: flex;
  justify-content: space-between;
`

// 音訊資訊元件 (名稱、時間、播放進度)
const RawInfo = ({ className }) => (
  <div className={className}>
    <div id="info">
      <span>Name</span>
      <time>Time</time>
    </div>
    <progress value="20" max="100"></progress>
  </div>
)

const Info = styled(RawInfo)`
  display: flex;
  flex-direction: column;
  width: 50%;

  & > #info {
  background-color: green;  
  display: flex;
  justify-content: space-between;  
  }

  & > progress {
    width: 100%;
  }
`

// 音量和設定模式元件
const RawControls = ({ className }) => (
  <div className={className}>
    <div id="volume">Volume</div>
    <div id="mode">Mode</div>
  </div>
)

const Controls = styled(RawControls)`
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

// audio 控制面板元件 (匯整上面元件)
const RawAudioPanel = ({ className }) => (
  <div className={className}>
    <Buttons />
    <Info />
    <Controls />
  </div>
)

const AudioPanel = styled(RawAudioPanel)`
 display: flex;
 justify-content: space-between;

/**  position: absolute; top: 50%; */

 border: 1px solid black;
 width: 50%;
 text-align: center;
 padding: 0;
 margin: auto;
 background-color: transparent;
`

export default AudioPanel