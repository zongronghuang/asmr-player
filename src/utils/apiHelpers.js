const apiHelpers = {
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
      // <dirty code>
      const { ok, statusText } = response
      if (!ok) { throw new Error(statusText) }

      const remoteImageData = await response.json()
      console.log('remote image data', remoteImageData)

      // nested destructuring
      // 重新命名需要的資料
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
      } = remoteImageData

      return {
        photographer,
        portfolio,
        source
      }
    } catch (error) {
      return console.log(error)
    }
    // </dirty code>
  }
}

export default apiHelpers