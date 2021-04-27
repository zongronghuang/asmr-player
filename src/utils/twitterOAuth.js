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

const runPercentEncoding = () => {
  // 對 url 和
}