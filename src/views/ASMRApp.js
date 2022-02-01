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
import useDragAndDrop from "../hooks/useDragAndDrop";

import { addRemoteImages, addAudioSrcs } from "../redux/audioSlice";
import { backdropPromises } from "../utils/trackFactory";
import { fetchAudioURLs } from "../apis/firebase/fetchAudioURLs";

const ASMRAppJSX = () => {
  const track = useSelector((state) => ({ ...state.audio.track }));
  const dispatch = useDispatch();

  // 用 useReducer 整理或 useState 整理?
  const [shouldUseAPIData, setShouldUseAPIData] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [dialogType, setDialogType] = useState("logout");
  const dialogRef = useRef();
  const audioPanelRef = useRef();
  const backdropRef = useRef();

  // 建立 logout dialog 處理器
  const handleLogoutDialog = (status) => {
    if (status === "on") dialogRef.current.showModal();
    if (status === "off") dialogRef.current.close();
  };

  // 添加 drag and drop 功能
  useDragAndDrop({ dragItemRef: audioPanelRef, dropZoneRef: backdropRef });

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

  // 取得 Firebase 上的 audio 網址
  useEffect(() => {
    const resolveAudioURLs = async () => {
      try {
        const urls = await fetchAudioURLs();
        if (!urls.length) throw new Error("[Error] No available audios found");
        dispatch(addAudioSrcs({ urls }));
      } catch (error) {
        console.error(`[Error] Failed to resolve audio URLs: ${error}`);
        setDialogType("audio error");
        handleLogoutDialog("on");
        setIsReady(true);
      }
    };

    resolveAudioURLs();
  }, []);

  // 取得 Unsplash 的圖片網址
  useEffect(() => {
    const fetchBackdrops = async () => {
      try {
        const data = await Promise.all(backdropPromises);

        // 確認是否取得所有線上背景圖片
        if (data.some((item) => !!item === false)) {
          throw new Error("[Error] Some remote backdrops missing");
        }
        // 加入 API 資料 (背景圖片) 到 redux store
        dispatch(addRemoteImages({ data }));
        setShouldUseAPIData(true);
        // 可用本地及 API 背景圖片
        setIsReady(true);
      } catch (error) {
        console.error(`[Error] Failed to fetch remote backdrops: ${error}`);

        setTimeout(() => {
          setShouldUseAPIData(false);
          setDialogType("image error");
          handleLogoutDialog("on");
          // 可用本地背景圖片
          setIsReady(true);
        }, 2000);
      }
    };

    fetchBackdrops();
  }, []);

  return (
    <>
      {/* { console.log('[render] ASMRApp')} */}
      {isReady || <Loader />}
      {/* {true || <Loader />} */}
      <Dialog
        dialogType={dialogType}
        setDialogType={setDialogType}
        handleLogoutDialog={handleLogoutDialog}
        ref={dialogRef}
      />
      <TrackInfo track={track} />
      <Backdrop
        track={track}
        ref={backdropRef}
        shouldUseAPIData={shouldUseAPIData}
      />
      <AudioPanel track={track} ref={audioPanelRef} />
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
