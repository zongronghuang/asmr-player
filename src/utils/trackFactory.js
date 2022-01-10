import apis from "../components/apis/apis";

import Audio_0 from "../assets/audios/country_bird.mp3";
import Audio_1 from "../assets/audios/seaside_seagulls.mp3";
import Audio_2 from "../assets/audios/train_interior.mp3";
import Audio_3 from "../assets/audios/walk_in_the_park.mp3";

const orderedTracks = [
  {
    order: 0,
    name: "Bird chirps",
    searchTerm: "forest",
    audioSrc: Audio_0,
  },
  {
    order: 1,
    name: "Breaking waves",
    searchTerm: "sea",
    audioSrc: Audio_1,
  },
  {
    order: 2,
    name: "Train in motion",
    searchTerm: "train",
    audioSrc: Audio_2,
  },
  {
    order: 3,
    name: "Street bustle",
    searchTerm: "street",
    audioSrc: Audio_3,
  },
];

const backdropPromises = orderedTracks.reduce((base, track) => {
  base.push(apis.getRandomImage(track.searchTerm));
  return base;
}, []);

// console.log('backdrop promises', backdropPromises)

export { orderedTracks, backdropPromises };
