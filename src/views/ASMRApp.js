import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

import Backdrop from "../components/Backdrop";
import AudioPanel from "../components/AudioPanel";
import InfoMenu from "../components/InfoMenu";
import TrackInfo from "../components/TrackInfo";
import Loader from "../components/Loader";
import Dialog from "../components/Dialog";
import useNetworkListeners from "../hooks/useNetworkListeners";

import { addAPIData } from "../redux/audioSlice";
import { backdropPromises } from "../utils/trackFactory";

const ASMRAppJSX = () => {
  const track = useSelector((state) => ({ ...state.audio.track }));
  const dispatch = useDispatch();

  // 用 useReducer 整理或 useState 整理?
  const [distToEleOrigin, setDistToEleOrigin] = useState({ left: 0, top: 0 });
  const [shouldUseAPIData, setShouldUseAPIData] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [dialogType, setDialogType] = useState("logout");

  ////////// audio panel drag & drop handlers
  // 整理成 custom hook?
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

  // 監聽網路連線狀態
  useNetworkListeners({
    onlineHandler() {
      handleLogoutDialog("off");
      setDialogType("logout");
    },
    offlineHandler() {
      setDialogType("offline");
      handleLogoutDialog("on");
    },
  });

  useEffect(() => {
    const fetchBackdrops = async () => {
      try {
        const data = await Promise.all(backdropPromises);

        // 確認是否取得所有線上背景圖片
        if (data.some((item) => !!item === false)) {
          throw new Error("Online backdrops missing");
        }
        // 加入 API 資料 (背景圖片) 到 redux store
        dispatch(addAPIData({ data }));
        setShouldUseAPIData(true);
        // 可用本地及 API 背景圖片
        setIsReady(true);
      } catch (error) {
        console.error("fetch error", error);

        setTimeout(() => {
          setShouldUseAPIData(false);
          setDialogType("API error");
          handleLogoutDialog("on");
          // 可用本地背景圖片
          setIsReady(true);
        }, 2000);
      }
    };

    // fetchBackdrops();
  }, []);

  return (
    <>
      {/* { console.log('[render] ASMRApp')} */}
      {/* {isReady || <Loader />} */}
      {true || <Loader />}
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
