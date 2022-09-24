import { ImageMetadata, TimeStamp } from "../types";

// 判斷能否更新 localStorage 裡的圖片網址
const canSendImageRequests = (currentTime: TimeStamp): boolean => {
  const maxInterval = 3600000; // 3600000 ms = 1 小時
  const lastFetchTime = Number(localStorage.getItem("last_fetch_time")) || 0;
  const canUpdate = currentTime - lastFetchTime > maxInterval;

  return canUpdate;
};

// 取得 localStorage 裡的 remote backdrop URLs
const getImagesFromLocalStorage = (): string | null => {
  console.log("get images from local");
  const imageData = localStorage.getItem("image_urls");
  if (!imageData) {
    return null;
  }
  return JSON.parse(localStorage.getItem("image_urls") || "null");
};

// 更新 localStorage 的 remote backdrop URLs 和取得時間
const updateImagesToLocalStorage = ({
  currentTime,
  imageData,
}: {
  currentTime?: TimeStamp;
  imageData?: ImageMetadata[];
}): void => {
  if (currentTime) {
    localStorage.setItem("last_fetch_time", JSON.stringify(currentTime));
  }

  if (Array.isArray(imageData)) {
    localStorage.setItem("image_urls", JSON.stringify(imageData));
  } else {
    localStorage.setItem("image_urls", "null");
  }
};

export {
  canSendImageRequests,
  getImagesFromLocalStorage,
  updateImagesToLocalStorage,
};
