// 一般 JavaScript 物件用
export type Object = {
  [key: string]: any;
};

// Unsplash API response 整理後的資料
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

// 描述 AuthContenxt 內部結構
type AuthUtilities = {
  authResponse: string;
  loginMethod: () => void;
  logoutMethod: () => void;
};

export type AuthContextData = Object & {
  authProvider: string;
  FB: AuthUtilities;
  Google: AuthUtilities;
};
