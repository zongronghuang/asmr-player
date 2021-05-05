import { useEffect } from 'react'

const useGoogleLogin = () => {

  useEffect(() => {
    (function loadGoogleLibrary() {
      const loadedScripts = document.querySelectorAll('script')

      const isPresentGoogleLoginLibrary = Object.values(loadedScripts)
        .filter(script => script.src === process.env.REACT_APP_GOOGLE_LOGIN_LIBRARY_URL)

      if (isPresentGoogleLoginLibrary) {
        console.log('google login library already exists')
        return
      }

      const script = document.createElement('script')
      script.src = process.env.REACT_APP_GOOGLE_LOGIN_LIBRARY_URL
      script.async = true
      script.defer = true
      console.log('new google script addeds', script)
    })()

  }, [])
}

export default useGoogleLogin