const apiHelpers = {
  checkOnlineStatus() {
    console.log('online status')
  },
  getRandomImage: async (track) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}photos/random`

      const response = await fetch(url, {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
        }
      })

      const { ok } = response
      if (!ok) { throw new Error() }

      const imageData = await response.json()
      console.log('image data', imageData)
    } catch (error) {
      return console.log(error)
    }
  }
}

export default apiHelpers