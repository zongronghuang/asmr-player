import { useEffect } from "react";

type UseNetworkListenersProps = {
  onlineHandler: () => void;
  offlineHandler: () => void;
};

const useNetworkListeners = ({
  onlineHandler,
  offlineHandler,
}: UseNetworkListenersProps) => {
  useEffect(() => {
    // console.log("[hook] useNetworkListeners");
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
