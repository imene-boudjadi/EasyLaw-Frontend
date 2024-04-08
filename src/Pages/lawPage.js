import React from 'react'
import MenuPrincipal2 from '../Components/menuPrincipale2'
import Header from '../Components/header';
import Footer from '../Components/footer';
import LawList from '../Components/lawList'
import FilterLaw from '../Components/filterLaw'

export default function lawPage() {
  return (
    <div>
        <Header/>
        <MenuPrincipal2/>
        <FilterLaw/>
        <LawList/>
        <Footer/> 
    </div>
  )
}
