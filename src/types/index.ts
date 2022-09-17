export type ImageMetadata = {
  photographer: string;
  portfolio: string;
  source: string;
};

// remoteBackdrop 在收到 API 回應後才會加入 track
export type Track = {
  order: number;
  name: string;
  searchTerm: string;
  audioSrc: string;
  remoteBackdrop?: ImageMetadata;
};
