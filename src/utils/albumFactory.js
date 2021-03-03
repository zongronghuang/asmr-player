import Audio_0 from '../assets/audios/country_bird.mp3'
import Audio_1 from '../assets/audios/seaside_seagulls.mp3'
import Audio_2 from '../assets/audios/train_interior.mp3'
import Audio_3 from '../assets/audios/walk_in_the_park.mp3'

import Img_0 from '../assets/images/backdrop_0.jpg'
import Img_1 from '../assets/images/backdrop_1.jpg'
import Img_2 from '../assets/images/backdrop_2.jpg'
import Img_3 from '../assets/images/backdrop_3.jpg'

const imgs = [Img_0, Img_1, Img_2, Img_3]
const audios = [Audio_0, Audio_1, Audio_2, Audio_3]


// 檢查是否有重覆的檔案
// 顯示重覆檔案 id
const findRedundantItems = (fileArray, mediaType) => {
  // 進行檔案分類並列出 id
  // {'檔案 a': [id, id, ...]}
  const sortedFiles = fileArray.reduce((base, element, index) => {
    if (!base[element]) {
      base[element] = []
      base[element].push(index)
      return base
    } else {
      base[element].push(index)
      return base
    }
  }, {})

  // 找出 id 數量大於 1 的檔案
  // ['檔案 a', [id, id, ...]]
  Object.entries(sortedFiles).forEach(file => {
    if (file[1].length > 1) {
      console.log(`Redundant ${mediaType}: ${file[0]} | id: ${file[1]}`)
    }
  })
}

const album = (imageArray, audioArray) => {
  // 必須至少有一個 image 和 audio
  if (!imageArray.length || !audioArray.length) {
    console.log('No available images or audios found')
  }

  // image 和 audio 數量必須一致
  if (imageArray.length !== audioArray.length) {
    console.log(`Not equal in number: audios: ${audioArray.length} | images: ${imageArray.length}`)
  }

  findRedundantItems(audioArray, 'audio')
  findRedundantItems(imageArray, 'image')

  // 建立曲目清單
  const trackList = Array(audios.length)
    .fill({})
    .map((track, index) => ({
      order: index,
      name: `track_${index}`,
      audioSrc: audios[index],
      imageSrc: imgs[index],
    }))

  console.log('track list', trackList)

  return trackList
}

export default album(imgs, audios)