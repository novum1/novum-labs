import React from 'react'
import GlobalStyles from '../assets/globalStyles'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
