import React from 'react'
import { Toaster } from 'react-hot-toast'

const ToastContainer = () => {
  return (
    <Toaster position='top center' reverseOrder={false} gutter={8} toastOptions={{duration: 2000}} />
  )
}

export default ToastContainer