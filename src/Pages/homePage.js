import React from 'react'
import Header from '../Components/header'
import Services from '../Components/services'
import Menu from '../Components/menuPrncipale'
import About from '../Components/about'
import OurTeam from '../Components/ourTeam'
import ContacterNous from '../Components/ContacterNous'
import Footer from '../Components/footer'

export default function homePage() {
  return (
   <div>
   <Header/> 
   <Menu/>
   <Services/>
   <About/>
   <OurTeam/>
   <ContacterNous/>
   <Footer/>
   </div>
   
  )
}
