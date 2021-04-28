import { useRef } from 'react'
import styled from '@emotion/styled'

const DialogJSX = ({ className, handleFBLogout }) => {
  const dialogRef = useRef(null)

  const handleLogoutDialog = (status) => () => {
    if (status === 'on') {
      console.log('open the dialog')
      dialogRef.current.show()
    }

    if (status === 'off') {
      console.log('close the dialog')
      dialogRef.current.close()
    }
  }

  return (
    <dialog className={className} ref={dialogRef}>
      <header><strong>Logout</strong></header>
      <hr></hr>
      <section>
        <span>Are you sure you want to log out of this app now?</span>
      </section>
      <footer>
        <button onClick={handleFBLogout}>Log out</button>
        <button onClick={handleLogoutDialog('off')}>Stay</button>
      </footer>
    </dialog>
  )
}

const Dialog = styled(DialogJSX)`
  top: 50%;
  transform: translateY(-50%);
  width: 30%;
  min-width: 200px;
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
        box-shadow: 1px 1px goldenrod, -1px 1px goldenrod, 1px -1px goldenrod, -1px -1px goldenrod;
      }
    }
  }
`

export default Dialog