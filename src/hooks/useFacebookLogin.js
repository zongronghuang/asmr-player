import { useState, useEffect } from 'react'

const useFacebookLogin = () => {
  const [FBResponse, setFBResponse] = useState()

  useEffect(function logInToFB() {
    // IIFE 立即取得 FB SDK
    (function loadFBSDK(d, s, id) {
      let js
      let fjs = d.getElementsByTagName(s)[0]

      if (d.getElementById(id)) {
        return
      }

      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')

    // FB SDK 初始化
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,  // 補上
        cookie: true,
        xfbml: true,
        version: process.env.REACT_APP_FB_API_VERSION  // 補上
      })

      console.log('[!FB SDK initialized!]')

      // 取得登入狀態並記錄到 localStorage
      window.FB.getLoginStatus(function (response) {
        localStorage.setItem('facebookClientToken', response?.authResponse?.accessToken)
        setFBResponse(response)
      })

      // 顯示 FB 登入頁面
      window.FB.AppEvents.logPageView()
    }
  }, [])

  // 登入 FB 並取得 access token
  const handleFBLogin = () => {
    window.FB.login(function (response) {
      console.log('log in response', response)
      setFBResponse(response)
      localStorage.setItem('facebookClientToken', response?.authResponse?.accessToken)
    }, { scope: 'public_profile,email' })
  }

  // 登出並取得 access token
  const handleFBLogout = () => {
    window.FB.logout(function (response) {
      localStorage.setItem('facebookClientToken', response?.authResponse?.accessToken)
      setFBResponse(response)
    })
  }

  return [FBResponse, handleFBLogin, handleFBLogout]
}

export default useFacebookLogin

