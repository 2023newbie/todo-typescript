import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { createPortal } from 'react-dom'

import 'react-toastify/dist/ReactToastify.css'
import { onAuthStateChanged } from 'firebase/auth'
import auth from './firebase/auth'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  useEffect(() => {
    const keyupListener = (event: KeyboardEvent) => {
      const inputEle = document.getElementById('mission-input')!
      if (event.key === 'Enter' && document.activeElement === inputEle) {
        document.getElementById('submit-btn')?.click()
      }

      if (event.key === '/') {
        document.getElementById('mission-input').focus()
      }
    }
    document.addEventListener('keyup', keyupListener)

    return () => document.removeEventListener('keyup', keyupListener)
  }, [])

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // const uid = user.uid;
      console.log(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div className="relative bg-slate-900 w-screen min-h-screen pt-32 flex flex-col items-center">
      <Navbar />
      <Outlet />
      {createPortal(<ToastContainer />, document.body)}
    </div>
  )
}

export default App