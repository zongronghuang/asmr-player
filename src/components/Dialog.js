import { useContext } from 'react'
import styled from '@emotion/styled'

import AuthContext from '../contexts/AuthContext'

const DialogJSX = ({ className, handleLogoutDialog }) => {
  const userAuth = useContext(AuthContext)

  const chooseLogoutMethod = (authProvider) => () => {
    // [特例] FB 使用者之前登入過，但沒有登出就關閉分頁，重開分頁貼上網址後會讀取留下的 cookie，就會自動登入進到 /app
    // 沒有手動按登入鍵 => 無法設定 userAuth.authProvider，因此無法選出要用的登出方法
    // 所以 userAuth.authProvider 無值時，以 'FB' 為預設值
    // Google 用 OAuth 登入，不會留下 cookie，因此沒有這個問題 (除非把 access token 記到 cookie 中，但很危險!)
    if (!authProvider) authProvider = 'FB'
    userAuth[authProvider].logoutMethod()
  }

  return (
    <dialog className={className}>
      {/* {console.log('[render] Dialog')} */}
      <header>
        <strong>Logout</strong>
      </header>
      <hr></hr>
      <section>
        <span>Are you sure you want to log out of this app?</span>
      </section>
      <footer>
        <button onClick={chooseLogoutMethod(userAuth.authProvider)} alt="Log out">Log out</button>
        <button onClick={handleLogoutDialog('off')} alt="Stay">Stay</button>
      </footer>
    </dialog>
  )
}

const Dialog = styled(DialogJSX)`
  top: 50%;
  transform: translateY(-50%);
  width: 30%;
  min-width: 200px;
  max-width: 300px;
  border: 3px solid goldenrod;
  border-radius: 15px;
  background-color: black;
  color: goldenrod;
  font-family: Arial, Helvetica, sans-serif;

  header {
    text-align: center;
    font-weight: bold;
  }

  hr {
    width: 100%;
    background-color: goldenrod;
    border: 1px solid goldenrod;
  }

  section {
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 25px;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    line-height: 30px;

    button {
      border-radius: 10px;
      font-weight: bold;
      color: goldenrod;
      background-color: black;
      border: 2px solid goldenrod;
      line-height: 20px;
      margin-left: 5px;

      &:hover {
        box-shadow: 3px 3px goldenrod, -3px 3px goldenrod, 3px -3px goldenrod, -3px -3px goldenrod;
      }
    }
  }
`

export default Dialog