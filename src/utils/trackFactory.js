import { getRandomImage } from "../apis/unsplash/getRandomImage";

const orderedTracks = [
  {
    order: 0,
    name: "Bird chirps",
    searchTerm: "forest",
    audioSrc: "",
  },
  {
    order: 1,
    name: "Breaking waves",
    searchTerm: "sea",
    audioSrc: "",
  },
  {
    order: 2,
    name: "Train in motion",
    searchTerm: "train",
    audioSrc: "",
  },
  {
    order: 3,
    name: "Street bustle",
    searchTerm: "street",
    audioSrc: "",
  },
];

const backdropPromises = orderedTracks.reduce((base, track) => {
  base.push(getRandomImage(track.searchTerm));
  return base;
}, []);

export { orderedTracks, backdropPromises };
