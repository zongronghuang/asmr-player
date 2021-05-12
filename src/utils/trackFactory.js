import apis from '../components/apis/apis'

import Audio_0 from '../assets/audios/country_bird.mp3'
import Audio_1 from '../assets/audios/seaside_seagulls.mp3'
import Audio_2 from '../assets/audios/train_interior.mp3'
import Audio_3 from '../assets/audios/walk_in_the_park.mp3'

import Image_0 from '../assets/images/backdrop_0.jpg'
import Image_1 from '../assets/images/backdrop_1.jpg'
import Image_2 from '../assets/images/backdrop_2.jpg'
import Image_3 from '../assets/images/backdrop_3.jpg'

// 製作曲目的材料
const audios = [Audio_0, Audio_1, Audio_2, Audio_3]
const images = [Image_0, Image_1, Image_2, Image_3]
const searchTerms = ['forest', 'seaside', 'train', 'street']
const titles = ['Bird chirps', 'Breaking waves', 'Train in motion', 'Street bustle']

// 檢查有無重覆的音訊或圖片
const findRedundantItems = (fileArray, dataType) => {
  // 進行檔案分類並列出 id
  // 無重複檔案：{'檔案 a (路徑)': [id]}
  // 有重複檔案：{'檔案 a (路徑)': [id, id, ...]}
  const numeratedFiles = fileArray.reduce((base, element, index) => {
    if (!base[element]) {
      base[element] = []
      base[element].push(index)
      return base
    } else {
      base[element].push(index)
      return base
    }
  }, {})

  // 計算每個檔案擁有的 id 數量
  // 列出 id 數量大於 1 的檔案：['檔案 a (路徑)', [id, id, ...]]
  Object.entries(numeratedFiles).forEach(file => {
    if (file[1].length > 1) {
      console.log(`Redundant ${dataType}: ${file[0]} | id: ${file[1]}`)
    }
  })
}

// 建立請求背景圖片的 Promise 陣列
const makeBackdropPromises = async () => {
  try {
    const backdropPromises = searchTerms.reduce((base, searchTerm) => {
      base.push(apis.getRandomImage(searchTerm))
      return base
    }, [])

    const response = await Promise.all(backdropPromises)

    return [...response]
  } catch (error) {
    console.error(error)
  }
}

const createDefaultTracks = (titleArray, audioArray, imageArray, keywordArray) => {
  // 必須至少有一個 image 和 audio
  if (!imageArray.length || !audioArray.length || !titleArray.length || !keywordArray.length) {
    console.log('No available audios or images')
  }

  // image 和 audio 數量必須一致
  const numberOfTracks = 4
  const sameInNumber = [titleArray, audioArray, imageArray, keywordArray]
    .every(array => array.length === numberOfTracks)

  if (!sameInNumber) {
    console.log(`Not equal in number: audios: ${audioArray.length} | images: ${imageArray.length} | titles: ${titleArray.length} | keywords: ${keywordArray.length}`)
  }

  findRedundantItems(audioArray, 'audio')
  findRedundantItems(imageArray, 'image')
  findRedundantItems(titleArray, 'title')
  findRedundantItems(keywordArray, 'keyword')

  // 建立曲目清單
  const trackList = Array(audios.length)
    .fill({})
    .map((track, index) => ({
      order: index,
      name: titleArray[index],
      searchTerm: keywordArray[index],
      audioSrc: audioArray[index],
      localBackdrop: {
        photographer: 'Vivian Maier',
        portfolio: 'http://www.vivianmaier.com/',
        source: imageArray[index]
      }
    }))

  console.log('track list', trackList)

  return trackList
}

const defaultTracks = createDefaultTracks(titles, audios, images, searchTerms)

export { defaultTracks, makeBackdropPromises }

