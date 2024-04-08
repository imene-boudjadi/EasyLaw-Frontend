import React from 'react'
import Header from '../Components/header'
import MenuPrincipal from '../Components/menuPrncipale'
import Footer from '../Components/footer'
import DetailsFacture from '../Components/detailsFacture'
export default function detailFacture() {
    
  return (
    <div className='bg-my_whitee h-screen bg-opacity-10'>
      <Header/> 
      <MenuPrincipal/>
      <DetailsFacture/>
      <Footer/>

    </div>

  )
}
