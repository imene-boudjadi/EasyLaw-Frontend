import React, { useState } from 'react';
import FilterOffres from '../Components/filterOffres';
import Header from '../Components/header';
import MenuPrincipal from '../Components/menuPrncipale';
import Footer from '../Components/footer';
import OffersList from '../Components/offersList';
import PaymentMethod from '../Components/paymentMethod';
export default function OffresPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOfferClick = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  
  return (
    <div className="relative bg-my_whitee h-screen bg-opacity-10">
      <Header/>
      <MenuPrincipal/>
      <FilterOffres/>
      <OffersList onOfferClick={handleOfferClick}/>
      <Footer/>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
          <PaymentMethod onClose={handleClosePopup}/>
        </div>
      )}
     
    </div>
  );
}
