import React from 'react'
import Header from '../Components/headerRegister'
import MenuPrincipal from '../Components/menuPrncipale'
import Footer from '../Components/footer'
import NewsSection from '../Components/NewsSection'

export default function newsPage() {
  return (
    <div className='bg-my_whitee h-screen bg-opacity-10'>
      <Header/> 
      <MenuPrincipal/>
      <NewsSection/>
      <Footer/>

    </div>
  )
}
