const apiHelpers = {
  checkOnlineStatus() {
    console.log('online status')
  },
  getRandomImage: async (track) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}photos/random?query=${track.searchTerm}?orientation=landscape`

      const response = await fetch(url, {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
        }
      })

      const { ok, statusText } = response
      if (!ok) { throw new Error(statusText) }

      const imageData = await response.json()
      console.log('image data', imageData)

      // nested destructuring
      const {
        urls: {
          regular: remoteImageURL
        },
        user: {
          name: name,
          links: {
            html: portfolioURL
          },
        }
      } = imageData
      console.log('remoteImageURL', remoteImageURL, 'portfolio', portfolioURL, 'name', name)

      const onlineTrack = {
        ...track,
        imageSrc: remoteImageURL,
        photographer: {
          ...track.photographer,
          name: name,
          portfolioURL,
          remoteImageURL
        }
      }

      console.log('&&&&&&&', onlineTrack)

      return onlineTrack
    } catch (error) {
      return console.log(error)
    }
  }
}

export default apiHelpers