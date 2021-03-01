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

const album = (imageArray, audioArray) => {
  if (!imageArray.length || !audioArray.length) {
    console.log('No available images or audios found')
  }

  if (imageArray.length !== audioArray.length) {
    console.log(`Not equal in number: audios: ${audioArray.length} | images: ${imageArray.length}`)
  }

  // 檢查是否有重覆的 audio

  // 檢查是否有重覆的 image


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