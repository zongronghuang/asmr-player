import { useEffect } from "react";

const useNetworkListeners = ({ onlineHandler, offlineHandler }) => {
  useEffect(() => {
    // 監聽 App 連線和離線變化
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    // Unmount 時清除事件監聽器，避免 memory leak
    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);
};

export default useNetworkListeners;
