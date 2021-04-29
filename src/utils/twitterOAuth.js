const OAuthHeader = {
  consumerKey: process.env.REACT_APP_TWITTER_API_KEY,
  consumerSecret: process.env.REACT_APP_TWITTER_API_SECRET,
  signatureMethod: 'HMAC-SHA1',
  signature: null,
  nonce: null,
  timestamp: null,
  token: null,
  version: "1.0"
}


const createNonce = (consumerKey, timestamp) => {
  // btoa() creates a Base64 ASCII string 
  const nonce = btoa(consumerKey + timestamp)
  console.log('nonce', nonce)
  return nonce
}

const createTimestamp = () => {
  const timestamp = Date.now()
  console.log('timestamp', timestamp)
  return timestamp
}

const createSignature = () => {

}

const runPercentEncoding = (text) => {
  // 目標：對 url 字元進行轉換，改用 percent encoding 格式 ( % + ASCII 十六進位制編碼)
  // charCodeAt() 提供 UTF-16 字元的十進位對應碼 (上限 65536)
  // toString(16) 將數字轉換為 16 進位制，並轉成字串
  const text = encodeURIComponent(text).map(character => {
    return '%' + character.charCodeAt(0).toString(16)
  })
}