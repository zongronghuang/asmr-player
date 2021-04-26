const apis = {
  getRandomImage: async (searchTerm) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}photos/random?query=${searchTerm}&orientation=landscape`

      const response = await fetch(url, {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
        }
      })

      console.log('response', response)

      const { ok, statusText } = response
      if (!ok) { throw new Error(statusText) }

      const imageData = await response.json()
      console.log('Fetched image data', imageData)

      // 巢狀解構賦值 (nested destructuring) + 重新命名需要的資料
      const {
        urls: {
          regular: source
        },
        user: {
          name: photographer,
          links: {
            html: portfolio
          },
        }
      } = imageData

      return {
        photographer,
        portfolio,
        source
      }
    } catch (error) {
      return console.error(error)
    }
  },
  getTwitterOAuthToken: async () => {
    try {

      const timestamp = Date.now()
      const nonce = btoa(timestamp + process.env.REACT_APP_TWITTER_API_KEY)
      const callbackURI = encodeURIComponent(process.env.REACT_APP_TWITTER_CALLBACK_URL)

      console.log(
        'timestamp', timestamp,
        'nonce', nonce,
        'callbackURI', callbackURI
      )

      const url = "/oauth/request_token"

      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Oauth oauth_nonce=, oauth_callback=, oauth_signature_method="HMAC-SHA1", oauth_timestamp=, oauth_consumer_key=, oauth_signature="Pc%2BMLdv028fxCErFyi8KXFM%2BddU%3D", oauth_version="1.0"`
        }
      })

      console.log('twitter response', response)


    } catch (error) {
      console.log('twitter error', error)
    }

  }
}

export default apis