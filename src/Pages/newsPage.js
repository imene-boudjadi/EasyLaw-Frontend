import React from 'react'
import Header from '../Components/header'
import MenuPrincipal from '../Components/menuPrncipale'
import Footer from '../Components/footer'
import NewsSection from '../Components/NewsSection'

export default function newsPage() {
  return (
    <div>
      <Header/> 
      <MenuPrincipal/>
      <NewsSection/>
      <Footer/>

    </div>
  )
}
