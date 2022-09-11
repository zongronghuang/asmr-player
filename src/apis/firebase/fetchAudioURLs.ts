import { firebaseApp } from "./createFirebaseApp";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// 取得 Firebase Cloud Storage 內所有音訊檔網址
const storage = getStorage(firebaseApp);
const audioFolder = "audios";
const listRef = ref(storage, audioFolder);

export const fetchAudioURLs = async () => {
  try {
    // 取得 audioFolder 內所有音檔的 full path
    const urlPromises = [];
    const data = await listAll(listRef);
    data.items.forEach((itemRef) => {
      const urlPromise = getDownloadURL(ref(storage, itemRef.fullPath));
      urlPromises.push(urlPromise);
    });

    // 用音檔的 full path 取得下載 URL
    const urls = await Promise.all(urlPromises);
    return urls;
  } catch (error) {
    console.error("[Firebase API Error] Failed to fetch audio URLs ", error);
  }
};
