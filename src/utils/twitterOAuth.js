import CryptoJS from 'crypto-js'
import Base64 from 'crypto-js/enc-base64'

// [Step 1] 建立所需要的 header parameters //
const utilities = {
  // btoa() creates a Base64 ASCII string 
  // 只要英數字元，不要特殊字元
  // nonce 不管用什麼方式或資料產出皆行，只要有隨機性即可
  createNonce: (consumerKey, timestamp) => {
    const nonce = btoa(consumerKey + timestamp)
      .replace(/[^0-9a-zA-Z]/, badCharacter => '')
    console.log('nonce', nonce)
    return nonce
  },
  createTimestamp: () => {
    const timestamp = Date.now()
    console.log('timestamp', timestamp)
    return timestamp
  }
}

const headerParams = {
  'oauth_consumer_key': process.env.REACT_APP_TWITTER_API_KEY,
  'oauth_signature_method': 'HMAC-SHA1',
  'oauth_signature': null,
  'oauth_nonce': null,
  'oauth_timestamp': null,
  'oauth_token': process.env.REACT_APP_TWITTER_ACCESS_TOKEN,
  'oauth_version': "1.0"
}

headerParams['oauth_timestamp'] = utilities.createTimestamp()
headerParams['oauth_nonce'] = utilities.createNonce(
  headerParams['oauth_consumer_key'],
  headerParams['oauth_timestamp']
)

/* [Step 2] 建立 header parameters 中的 oauth_signature (大工程)
先從 header parameters 建立 signature parameters，
再利用 signature parameters 建立 signature
*/
const status = 'Hello Ladies + Gentlemen, a signed OAuth request!'
const signatureParams = {
  ...headerParams,
  status,
  'include_entities': true
}

delete signatureParams['oauth_signature']

/* [Step 2.1] 建立 parameter string
1. Percent encode every key and value that will be signed.
2. Sort the list of parameters alphabetically [1] by encoded key [2].
3. For each key/value pair:
   a. Append the encoded key to the output string.
   b. Append the ‘=’ character to the output string.
   c. Append the encoded value to the output string.
   d. If there are more key/value pairs remaining, append a ‘&’ character to the output string.
*/
let signatureParamString = ''
let signatureParamCount = 0

// encodeURIComponent 可以把字串轉成 percent encoding 格式 ( % + ASCII 十六進位制編碼)
Object.entries(signatureParams)
  .map(entry => {
    signatureParamCount += 1
    return [encodeURIComponent(entry[0]), encodeURIComponent(entry[1])]
  })
  .sort()
  .forEach((array, index) => {
    if (index === (signatureParamCount - 1)) {
      signatureParamString += (array.join('='))
    } else {
      signatureParamString += (array.join('=')) + '&'
    }
  })

/* [Step 2.2] 建立 signature base string
1. Convert the HTTP Method to uppercase and set the output string equal to this value.
2. Append the ‘&’ character to the output string.
3. Percent encode the URL and append it to the output string.
4. Append the ‘&’ character to the output string.
5. Percent encode the parameter string and append it to the output string.
*/
const httpMethod = 'POST'
const requestBaseURL = 'https://api.twitter.com/1.1/statuses/update.json'

const signatureBaseString = httpMethod
  + '&'
  + encodeURIComponent(requestBaseURL)
  + '&'
  + encodeURIComponent(paramString)

/* [Step 2.3] 建立 signing key
The signing key is simply the percent encoded consumer secret, followed by an ampersand character ‘&’, followed by the percent encoded token secret:
*/
const signingKey = encodeURIComponent(process.env.REACT_APP_TWITTER_ACCESS_TOKEN)
  + '&'
  + encodeURIComponent(process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET)

/* [Step 2.4] 建立 signature
the signature is calculated by passing the signature base string and signing key to the HMAC-SHA1 hashing algorithm. The details of the algorithm are explained as hash_hmac function.

The output of the HMAC signing function is a binary string. This needs to be base64 encoded to produce the signature string
*/
const signature = Base64.stringify(
  CryptoJS.HmacSHA1(signatureBaseString, signingKey)
)

console.log('final signature', signature)

headerParams['oauth_signature'] = signature

/* [Step 3] 把 header parameters 轉換成 OAuth header 字串
1. Append the string “OAuth ” (including the space at the end) to DST.
2. For each key/value pair of the 7 parameters listed above:
   a. Percent encode the key and append it to DST.
   b. Append the equals character ‘=’ to DST.
   c. Append a double quote ‘”’ to DST.
   d. Percent encode the value and append it to DST.
   e. Append a double quote ‘”’ to DST.
   f. If there are key/value pairs remaining, append a comma ‘,’ and a space ‘ ‘ to DST.
*/
const headerParamCount = 7
let percentEncodedHeaderParams = ''

Object.entries(headerParams)
  .forEach((entry, index) => {
    if (index !== (headerParamCount - 1)) {
      percentEncodedHeaderParams += (
        encodeURIComponent(entry[0])
        + '='
        + '"'
        + encodeURIComponent(entry[1])
        + '"'
        + ', '
      )
    } else {
      percentEncodedHeaderParams += (
        encodeURIComponent(entry[0])
        + '='
        + '"'
        + encodeURIComponent(entry[1])
        + '"'
      )
    }
  })

console.log('percent encoded header params', percentEncodedHeaderParams)

const OAuthHeader = 'OAuth ' + percentEncodedHeaderParams

console.log('OAuth header', OAuthHeader)

export default OAuthHeader