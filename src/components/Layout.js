import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ minHeight: '100vh' }}>{children}</div>
      <Footer />
    </div>
  )
}