// 判斷能否更新 localStorage 裡的圖片網址
const canSendImageRequests = (currentTime) => {
  const maxInterval = 3600000; // 3600000 ms = 1 小時
  // const lastFetchTime = localStorage.getItem("last_fetch_time") || null;
  const lastFetchTime = localStorage.getItem("last_fetch_time") || 0;
  // const canUpdate = !lastFetchTime || currentTime - lastFetchTime > maxInterval;
  const canUpdate = currentTime - lastFetchTime > maxInterval;

  return canUpdate;
};

// 取得 localStorage 裡的 remote backdrop URLs
const getImagesFromLocalStorage = () => {
  console.log("get images from local");
  const imageData = localStorage.getItem("image_urls");
  if (!imageData) {
    return null;
  }
  return JSON.parse(localStorage.getItem("image_urls"));
};

// 更新 localStorage 的 remote backdrop URLs 和取得時間
const updateImagesToLocalStorage = ({ currentTime, imageData }) => {
  if (currentTime) {
    localStorage.setItem("last_fetch_time", JSON.stringify(currentTime));
  }

  if (Array.isArray(imageData)) {
    localStorage.setItem("image_urls", JSON.stringify(imageData));
  } else {
    localStorage.setItem("image_urls", null);
  }
};

export {
  canSendImageRequests,
  getImagesFromLocalStorage,
  updateImagesToLocalStorage,
};