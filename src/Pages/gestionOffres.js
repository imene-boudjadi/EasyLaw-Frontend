import React, { useEffect, useState } from 'react';
import MenuPrincipal from '../Components/menuPrincipal3';
import Header2 from '../Components/header2';
import AddOffer from '../Components/AddOffer';
import OffersList from '../Components/offersList';

export default function GestionOffres() {
  const [tarifications, setTarifications] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTarification, setSelectedTarification] = useState(null);

  useEffect(() => {
    // Effectue la requête pour récupérer les tarifications
    fetch('http://127.0.0.1:8000/tarifications')
      .then(response => response.json())
      .then(data => setTarifications(data.tarifications))
      .catch(error => console.error('Error fetching tarifications:', error));
  }, []);

  // Fonction pour afficher ou cacher le popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Fonction pour gérer le clic sur un élément OfferComponent
  const handleOfferClick = (tarification) => {
    setSelectedTarification(tarification);
    setShowPopup(true);
  };

  // Fonction pour mettre à jour la tarification
  const updateTarification = (updatedTarification) => {
    const updatedTarifications = tarifications.map(tarification =>
      tarification.id === updatedTarification.id ? updatedTarification : tarification
    );
    setTarifications(updatedTarifications);
  };

  return (
    <div>
      <div className={`flex flex-row bg-my_whitee h-screen bg-opacity-10 ${showPopup ? '=[-[[====[===' : ''}`}>
        <MenuPrincipal/>
        <div className='flex flex-col w-3/4 '>
          <Header2 title="ادارة العروض "/>
          <div className=' h-screen'>
            <div className=''>
              <OffersList admin={true} onOfferClick={handleOfferClick} tarifications={tarifications} />
            </div>
          </div>
        </div>
      </div>
      {showPopup && <div className='fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50'><AddOffer onClose={togglePopup} tarification={selectedTarification} updateTarification={updateTarification} /></div>}
    </div>
  );
}