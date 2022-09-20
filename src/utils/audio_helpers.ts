import { Track } from "../types";

const getRandomNum = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const isInIncrementalOrder = (trackArray: Track[]): boolean => {
  // 以 order 0 的曲目作為分界點，將 trackArray 拆成兩個子陣列
  const orderZeroId = trackArray.findIndex((track) => track.order === 0);
  const tracksFromOrderZero = trackArray.slice(orderZeroId);
  const tracksBeforeOrderZero = trackArray.slice(0, orderZeroId);

  // 重新接合子陣列，確認 track order 是否從 0 開始逐次加一
  // true (播放順序不符合直觀的隨機順序) false (播放順序符合直觀的隨機順序)
  return tracksFromOrderZero
    .concat(tracksBeforeOrderZero)
    .every((track, id) => track.order === id);
};

// 建立 randomizeTracks() 讓專輯曲目順序符合直觀的隨機順序
const randomizeTracks = (trackArray: Track[]): Track[] => {
  const usedIndexes: number[] = [];
  const randomTracks = Array(trackArray.length);
  let index = getRandomNum(trackArray.length);

  trackArray.forEach((track) => {
    // 如果 index 已存在於 usedIndexes，就重新建立 index
    while (usedIndexes.includes(index)) {
      index = getRandomNum(trackArray.length);
    }
    usedIndexes.push(index);
    randomTracks[index] = track;
  });

  if (isInIncrementalOrder(randomTracks)) {
    return randomizeTracks(trackArray);
  }

  return randomTracks;
};

export { randomizeTracks };
