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
      const url = `${process.env.REACT_APP_TWITTER_BASE_URL}oauth/request_token`

      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `OAuth oauth_nonce="GsdfLZMZVhC", oauth_signature_method="HMAC-SHA1", oauth_signature="vnA9f8PDw3Tt/yU88K2k4ld7a78=", oauth_version="1.0", oauth_callback=${process.env.REACT_APP_TWITTER_CALLBACK_URL}, oauth_consumer_key=${process.env.REACT_APP_TWITTER_API_KEY}`
        }
      })

      console.log('twitter response', response)


    } catch (error) {
      console.log('twitter error', error)
    }

  }
}

export default apis