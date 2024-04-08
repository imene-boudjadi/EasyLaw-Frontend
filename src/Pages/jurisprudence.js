import React from 'react'
import MenuPrincipal2 from '../Components/menuPrincipale2'
import Header from '../Components/header';
import Footer from '../Components/footer';
import JuripredenceList from '../Components/juripredenceList';
import Filterjuripridence from '../Components/filterjuripridence';

export default function jurisprudence() {
  return (
    <div className='bg-my_whitee'>
        <Header/>
        <MenuPrincipal2/> 
        <Filterjuripridence/>
        <JuripredenceList/>
        <Footer/>
    </div> 
  )
}
