import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import MobileHeader from './MobileHeader/MobileHeader'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <MobileHeader />
        {children}
        <Footer />
    </div>
  )
}

export default Layout