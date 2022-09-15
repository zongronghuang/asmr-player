import { useEffect } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Track } from "../utils/track_list";

// 音訊資訊元件 (名稱)
const TrackInfoJSX = ({
  className,
  track,
}: {
  className: string;
  track: Track;
}) => {
  // 更換 track 時，重新設定動畫 + 播放動畫
  // CSS 動畫效果無法依特定條件重覆播放，需用 JavaScript Animation API 達成
  useEffect(() => {
    const animationTarget = document
      .getElementById("animation-target")!
      .animate([{ opacity: 1 }, { opacity: 0 }], {
        fill: "forwards",
        duration: 5000,
      });

    animationTarget.play();
  }, [track]);

  return (
    <div className={className} id="animation-target">
      {/* { console.log('[render] TrackInfo')} */}
      <span>
        <FontAwesomeIcon icon={["fas", "music"]} />
        {`\u00A0  ${track.order} \u00A0${track.name}`}
      </span>
    </div>
  );
};

const TrackInfo = styled(TrackInfoJSX)`
  position: absolute;
  top: 5vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  min-width: 100px;
  border: 3px solid goldenrod;
  border-radius: 15px;
  padding: 0.8rem 1.2rem;

  /* z-index: 10; */
  color: goldenrod;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;

  span {
    margin-left: 10px;
    margin-right: 10px;
  }

  /* ------------------ */
  /* MEDIA QUERIES */
  /* ------------------ */
  /* MEDIUM MOBILE 375px */
  @media (min-width: 23em) {
    font-size: 1.6rem;
  }

  /* LARGE MOBILE 425PX */
  @media (min-width: 26em) {
    font-size: 1.8rem;
  }

  /* TABLET 768px */
  @media (min-width: 48em) {
    font-size: 2rem;
  }

  /* LAPTOP 1024px */
  @media (min-width: 64em) {
    font-size: 2.4rem;
  } ;
`;

export default TrackInfo;
