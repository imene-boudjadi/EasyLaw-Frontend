import React, { useState } from 'react';
import MenuPrincipal2 from '../Components/menuPrincipale2';
import Header from '../Components/header';
import Footer from '../Components/footer';
import LawList from '../Components/lawList';
import FilterLaw from '../Components/filterLaw';

export default function LawPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
    console.log("hiii"+searchTerm)
  };

  return (
    <div>
      <Header />
      <MenuPrincipal2 />
      <FilterLaw onSearchTermChange={handleSearchTermChange} />
      <LawList searchTerm={searchTerm} /> 
      <Footer /> 
    </div>
  );
}
