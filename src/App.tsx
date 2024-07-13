import List from './components/List'
import Form from './components/Form'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { createPortal } from 'react-dom'

import 'react-toastify/dist/ReactToastify.css'

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

  return (
    <div className="bg-slate-800 w-screen min-h-screen pt-12 flex justify-center">
      <div className="flex flex-col w-5/6 sm:w-2/3 md:w-1/2 max-w-lg gap-8">
        <Form />
        <List />
      </div>
      {createPortal(<ToastContainer />, document.body)}
    </div>
  )
}

export default App