import styled from "@emotion/styled";

import { useEffect, useState, useRef } from "react";

import Backdrop from "../components/Backdrop";
import AudioPanel from "../components/AudioPanel";
import InfoMenu from "../components/InfoMenu";
import TrackInfo from "../components/TrackInfo";
import Loader from "../components/Loader";
import Dialog from "../components/Dialog";

import { orderedTracks, backdropPromises } from "../utils/trackFactory";
import { randomizeTracks } from "../utils/helpers";

const ASMRAppJSX = () => {
  const orderedTracksWithAPIData = useRef(null);
  const [mode, setMode] = useState("loopAlbum");
  const [album, setAlbum] = useState(orderedTracks);
  const [track, setTrack] = useState(orderedTracks[0]);
  const [distToEleOrigin, setDistToEleOrigin] = useState({ left: 0, top: 0 });
  const [shouldUseAPIData, setShouldUseAPIData] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [dialogType, setDialogType] = useState("logout");

  ////////// audio control handlers
  const handleNextTrack = () => {
    setTrack((prevTrack) => {
      const prevTrackId = album.findIndex(
        (track) => track.name === prevTrack.name
      );

      // 播放到專輯最後一首時，回到第一首
      if (prevTrackId === album.length - 1) return album[0];
      return album[prevTrackId + 1];
    });
  };

  const handlePrevTrack = () => {
    setTrack((prevTrack) => {
      const prevTrackId = album.findIndex(
        (track) => track.name === prevTrack.name
      );

      // 播放到專輯第一首時，倒退至最後一首
      if (prevTrackId === 0) return album[album.length - 1];
      return album[prevTrackId - 1];
    });
  };

  const handleModeChange = (mode) => (e) => {
    setMode(mode);

    if (mode === "loopAlbum" && orderedTracksWithAPIData.current) {
      setAlbum([...orderedTracksWithAPIData.current]);
    }

    if (mode === "loopAlbum" && !orderedTracksWithAPIData.current) {
      setAlbum([...orderedTracks]);
    }

    // 如果是 Shuffle all 模式，則建立隨機排列曲目
    if (mode === "shuffleAll") {
      const randomTracks = randomizeTracks(album);
      setAlbum((prevAlbum) => [...randomTracks]);
    }
  };

  ////////// audio panel drag & drop handlers
  const handleDragStart = (e) => {
    // 取得游標和 drag item 原點的距離
    const distToDragItemOrigin = {
      left: e.clientX - e.target.offsetLeft,
      top: e.clientY - e.target.offsetTop,
    };
    setDistToEleOrigin(distToDragItemOrigin);
  };
  const handleDrag = (e) => e.preventDefault();
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    const dragItem = document.querySelector("#dragItem");

    // 計算 drag item 降落位置 (新的 left 和 top)
    const dragItemLeft = e.clientX - distToEleOrigin.left;
    const dragItemTop = e.clientY - distToEleOrigin.top;

    dragItem.style.left = `${dragItemLeft}px`;
    dragItem.style.top = `${dragItemTop}px`;
  };

  ////////// Misc handler
  const handleLogoutDialog = (status) => {
    const dialog = document.querySelector("dialog");
    if (status === "on") dialog.showModal();
    if (status === "off") dialog.close();
  };

  useEffect(() => {
    const onlineHandler = () => {
      handleLogoutDialog("off");
      setDialogType("logout");
    };

    const offlineHandler = () => {
      setDialogType("offline");
      handleLogoutDialog("on");
    };

    // 監聽 App 連線和離線變化
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    // Unmount 時清除事件監聽器，避免 memory leak
    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  useEffect(() => {
    const fetchBackdrops = async () => {
      try {
        const data = await Promise.all(backdropPromises);

        // 確認是否取得所有線上背景圖片
        if (data.some((item) => !!item === false)) {
          throw new Error("Online backdrops missing");
        }

        // 如果無法取得 Unsplash API 資料，isReady 設為 true，表示已經可用 local backdrop
        orderedTracksWithAPIData.current = orderedTracks.map(
          (track, index) => ({
            ...track,
            remoteBackdrop: { ...data[index] },
          })
        );
        // console.log('ordered tracks (API)', orderedTracksWithAPIData.current)

        setAlbum((prevAlbum) => [...orderedTracksWithAPIData.current]);
        setTrack(
          (prevTrack) => [...orderedTracksWithAPIData.current][prevTrack.order]
        );
        setShouldUseAPIData(true);
        setIsReady(true);
      } catch (error) {
        console.error("fetch error", error);

        setTimeout(() => {
          setAlbum((prevAlbum) => [...orderedTracks]);
          setTrack((prevTrack) => [...orderedTracks][prevTrack.order]);
          setShouldUseAPIData(false);
          setIsReady(true);
          setDialogType("API error");
          handleLogoutDialog("on");
        }, 2000);
      }
    };

    fetchBackdrops();
  }, []);

  return (
    <>
      {/* { console.log('[render] ASMRApp')} */}
      {isReady || <Loader />}
      <Dialog
        dialogType={dialogType}
        setDialogType={setDialogType}
        handleLogoutDialog={handleLogoutDialog}
      />
      <TrackInfo track={track} />
      <Backdrop
        track={track}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        shouldUseAPIData={shouldUseAPIData}
      />
      <AudioPanel
        track={track}
        mode={mode}
        handleNextTrack={handleNextTrack}
        handlePrevTrack={handlePrevTrack}
        handleModeChange={handleModeChange}
        handleDrag={handleDrag}
        handleDragStart={handleDragStart}
      />
      <InfoMenu
        track={track}
        shouldUseAPIData={shouldUseAPIData}
        setShouldUseAPIData={setShouldUseAPIData}
        handleLogoutDialog={handleLogoutDialog}
      />
    </>
  );
};

const ASMRApp = styled(ASMRAppJSX)`
  position: relative;
`;

export default ASMRApp;
