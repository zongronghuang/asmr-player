import apis from '../components/apis/apis'

import Audio_0 from '../assets/audios/country_bird.mp3'
import Audio_1 from '../assets/audios/seaside_seagulls.mp3'
import Audio_2 from '../assets/audios/train_interior.mp3'
import Audio_3 from '../assets/audios/walk_in_the_park.mp3'

import Image_0 from '../assets/images/backdrop_0.jpg'
import Image_1 from '../assets/images/backdrop_1.jpg'
import Image_2 from '../assets/images/backdrop_2.jpg'
import Image_3 from '../assets/images/backdrop_3.jpg'

const orderedTracks = [
  {
    order: 0,
    name: 'Bird chirps',
    searchTerm: 'forest',
    audioSrc: Audio_0,
    localBackdrop: {
      photographer: 'Sebastian Unrau',
      portfolio: 'https://unsplash.com/@sebastian_unrau',
      source: Image_0
    }
  },
  {
    order: 1,
    name: 'Breaking waves',
    searchTerm: 'sea',
    audioSrc: Audio_1,
    localBackdrop: {
      photographer: 'Patrick Robert Doyle',
      portfolio: 'https://unsplash.com/@teapowered',
      source: Image_1
    }
  },
  {
    order: 2,
    name: 'Train in motion',
    searchTerm: 'train',
    audioSrc: Audio_2,
    localBackdrop: {
      photographer: '2y.kang',
      portfolio: 'https://unsplash.com/@2ykang',
      source: Image_2
    }
  },
  {
    order: 3,
    name: 'Street bustle',
    searchTerm: 'street',
    audioSrc: Audio_3,
    localBackdrop: {
      photographer: 'Artur Kraft',
      portfolio: 'https://unsplash.com/@kraft',
      source: Image_3
    }
  }
]

const backdropPromises = orderedTracks.reduce((base, track) => {
  base.push(apis.getRandomImage(track.searchTerm))
  return base
}, [])

console.log('backdrop promises', backdropPromises)

export { orderedTracks, backdropPromises }

