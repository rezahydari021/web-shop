import React from 'react'
import Header from './header'
import Footer from './footer'


export default function Layout({ children, category, addCart, name, setHasActiveLogin }) {
  return (
    <>
      <Header category={category} addCart={addCart} name={name} setHasActiveLogin={setHasActiveLogin} />
      {children}
      <Footer category={category} />
    </>
  )
}
