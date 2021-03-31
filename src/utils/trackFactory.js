import Audio_0 from '../assets/audios/country_bird.mp3'
import Audio_1 from '../assets/audios/seaside_seagulls.mp3'
import Audio_2 from '../assets/audios/train_interior.mp3'
import Audio_3 from '../assets/audios/walk_in_the_park.mp3'

import Image_0 from '../assets/images/backdrop_0.jpg'
import Image_1 from '../assets/images/backdrop_1.jpg'
import Image_2 from '../assets/images/backdrop_2.jpg'
import Image_3 from '../assets/images/backdrop_3.jpg'

const images = [Image_0, Image_1, Image_2, Image_3]
const audios = [Audio_0, Audio_1, Audio_2, Audio_3]

// ----- 建立 defaultTracks() 製作符合一般順序的曲目列表 -----

const findRedundantItems = (fileArray, mediaType) => {
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
      console.log(`Redundant ${mediaType}: ${file[0]} | id: ${file[1]}`)
    }
  })
}

const defaultTracks = (audioArray, imageArray) => {
  // 必須至少有一個 image 和 audio
  if (!imageArray.length || !audioArray.length) {
    console.log('No available audios or images')
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
      imageSrc: images[index],
      photographer: 'Vivian Maier',
      profileURL: 'http://www.vivianmaier.com/',
      webURL: 'http://www.vivianmaier.com/about-vivian-maier/'
    }))

  console.log('track list', trackList)

  return trackList
}

export default defaultTracks(audios, images)