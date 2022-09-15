import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRemoteImages, addAudioSrcs } from "../redux/audioSlice";
import styled from "@emotion/styled";

import Backdrop from "../components/Backdrop";
import AudioPanel from "../components/AudioPanel";
import InfoMenu from "../components/InfoMenu";
import TrackInfo from "../components/TrackInfo";
import Loader from "../components/Loader";
import Dialog from "../components/Dialog";

import useNetworkListeners from "../hooks/useNetworkListeners";
import useDragAndDrop from "../hooks/useDragAndDrop";

import { getRandomImage } from "../apis/unsplash/getRandomImage";
import { fetchAudioURLs } from "../apis/firebase/fetchAudioURLs";
import { trackList } from "../utils/track_list";
import {
  canSendImageRequests,
  getImagesFromLocalStorage,
  updateImagesToLocalStorage,
} from "../utils/image_helpers";

const ASMRAppJSX = () => {
  const track = useSelector((state) => ({ ...state.audio.track }));
  const dispatch = useDispatch();

  // 用 useReducer 整理或 useState 整理?
  const [shouldUseAPIData, setShouldUseAPIData] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);
  const [dialogType, setDialogType] = useState("logout");
  const dialogRef = useRef<HTMLDialogElement>();
  const audioPanelRef = useRef<HTMLDivElement>();
  const backdropRef: React.MutableRefObject<HTMLDivElement | undefined> =
    useRef<HTMLDivElement>();

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
        console.error(error);
        setDialogType("audio error");
        handleLogoutDialog("on");
        setIsAppReady(true);
      }
    };

    resolveAudioURLs();
  }, []);

  // 取得 Unsplash 的圖片網址
  useEffect(() => {
    const fetchBackdrops = async () => {
      try {
        const currentTime = Date.now();

        // 如果不能發 API => 從 local storage 拿舊圖片
        if (!canSendImageRequests(currentTime)) {
          const imageData = getImagesFromLocalStorage();
          if (imageData) {
            dispatch(addRemoteImages({ data: imageData }));
            setShouldUseAPIData(true);
          }
          setIsAppReady(true);
        }

        // 如果能夠發 API => 從 API 拿新圖片
        if (canSendImageRequests(currentTime)) {
          updateImagesToLocalStorage({ currentTime });

          const imageRequests = trackList.map((track) =>
            getRandomImage(track.searchTerm)
          );
          const imageData = await Promise.all(imageRequests);

          // console.log("imageData", imageData);
          dispatch(addRemoteImages({ data: imageData }));
          setShouldUseAPIData(true);
          setIsAppReady(true); // 可用本地及 API 背景圖片
          updateImagesToLocalStorage({ imageData });
        }
      } catch (error) {
        // API 請求得到錯誤 => 從 local storage 拿舊圖片
        console.error("[Unsplash Error]", error);
        const imageData = getImagesFromLocalStorage();
        if (imageData) {
          dispatch(addRemoteImages({ data: imageData }));
          setShouldUseAPIData(true);
        }

        // 如果 local storage 沒有舊圖片 => 跳出錯誤訊息
        setTimeout(() => {
          if (!imageData) {
            setDialogType("image error");
            handleLogoutDialog("on");
          }
          setIsAppReady(true);
        }, 1000);
      }
    };

    fetchBackdrops();
  }, []);

  return (
    <>
      {/* { console.log('[render] ASMRApp')} */}
      {isAppReady || <Loader />}
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
