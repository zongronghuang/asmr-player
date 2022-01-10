import { useState } from "react";
import styled from "@emotion/styled";

import PlaybackControl from "./PlaybackControl";
import AudioTrack from "./AudioTrack";
import VolumeControl from "./VolumeControl";
import ModeControl from "./ModeControl";

// audio 控制面板元件 (匯整上面元件)
const AudioPanelJSX = ({
  className,
  track,
  mode,
  handleNextTrack,
  handlePrevTrack,
  handleModeChange,
  handleDrag,
  handleDragStart,
}) => {
  const [volume, setVolume] = useState(0.5);
  const [activeButton, setActiveButton] = useState("play");

  const handlePlayback = () => {
    const audio = document.querySelector("audio");

    // 發生 onCanPlayThrough 事件時，AudioTrack 元件設計為會自動播放
    // 第一次事件發生時，瀏覽器要求使用者必須手動觸發播放，否則會跑出錯誤訊息
    // 用 catch() 接到錯誤訊息並忽略
    audio.play().catch((error) => {
      if (error) setActiveButton("play");
      console.error("Playback error", error);
    });

    audio.volume = volume;
    setActiveButton("pause"); // 隱藏 play 鍵，顯示 pause 鍵
  };

  const handlePause = () => {
    const audio = document.querySelector("audio");

    audio.pause();
    setActiveButton("play"); // 隱藏 pause 鍵，顯示 play 鍵
  };

  // 點按圖示或拖拉 input 欄位的拉桿調整音量
  const handleVolumeUpDown = (method) => (e) => {
    const audio = document.querySelector("audio");
    const step = 0.1;

    const volumeChangeMethod = {
      up: () =>
        setVolume((prevVolume) => {
          if (prevVolume >= 1) return prevVolume;

          audio.volume = Number((prevVolume + step).toFixed(1));
          return audio.volume;
        }),
      down: () =>
        setVolume((prevVolume) => {
          if (prevVolume <= 0) return prevVolume;

          // toFixed 解除浮點數運算不精確問題
          audio.volume = Number((prevVolume - step).toFixed(1));
          return audio.volume;
        }),
      manual: () =>
        setVolume((prevVolume) => {
          audio.volume = Number(e.target.value);
          return audio.volume;
        }),
    };

    volumeChangeMethod[method]();
  };

  return (
    <div
      className={className}
      draggable="true"
      id="dragItem"
      onDrag={handleDrag}
      onDragStart={handleDragStart}
    >
      {/* {console.log('[render] AudioPanel')} */}
      <PlaybackControl
        activeButton={activeButton}
        handlePlayback={handlePlayback}
        handlePause={handlePause}
        handleNextTrack={handleNextTrack}
        handlePrevTrack={handlePrevTrack}
      />
      <div>
        <VolumeControl
          handleVolumeUpDown={handleVolumeUpDown}
          volume={volume}
        />
        <AudioTrack
          track={track}
          mode={mode}
          handleNextTrack={handleNextTrack}
          handlePlayback={handlePlayback}
        />
      </div>
      <ModeControl handleModeChange={handleModeChange} mode={mode} />
    </div>
  );
};

const AudioPanel = styled(AudioPanelJSX)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 85vh;
  left: 50vw;
  transform: translateX(-50%);

  padding: 0.4rem 0.8rem;
  margin: auto;
  border-radius: 10px 10px 10px 10px;

  text-align: center;
  filter: constrast (200%);
  cursor: move;

  @keyframes background-filler {
    100% {
      box-shadow: 0 0 0 3px black;
      background-color: rgba(218, 165, 32, 0.5);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      & svg {
        color: goldenrod;
      }
    }
  }

  :hover {
    animation-name: background-filler;
    animation-iteration-count: 1;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  /* ---------- */
  /* MEDIA QUERIES */
  /* ---------- */
  /* MEDIUM MOBILE 375px */
  @media (min-width: 23em) {
    & svg {
      margin: auto 0.2rem;
      font-size: 1.8rem;
    }

    & input[type="range"] {
      width: 8rem;
    }
  }

  /* LARGE MOBILE 425px */
  @media (min-width: 26em) {
    & svg {
      margin: auto 0.2rem;
      font-size: 2rem;
    }

    & input[type="range"] {
      width: 9.6rem;
    }
  }

  /* TABLET 768px */
  @media (min-width: 48em) {
    & svg {
      margin: auto 0.4rem;
      font-size: 2.4rem;
    }

    & input[type="range"] {
      width: 12.8rem;
    }
  }

  /* LAPTOP 1024px */
  @media (min-width: 64em) {
    & svg {
      margin: auto 0.8rem;
      font-size: 3rem;
    }

    & input[type="range"] {
      width: 15.4rem;
    }
  }
`;

export default AudioPanel;
