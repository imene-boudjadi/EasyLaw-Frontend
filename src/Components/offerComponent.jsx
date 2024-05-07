import React from 'react';

export default function OfferComponent({ admin, onClick, active, description, duree, serviceName, tarif, id }) {
  let dureeText;

  // Vérifier la valeur de duree et définir le texte correspondant
  if (duree === 'Annuelle') {
    dureeText = 'سنوي';
  } else if (duree === 'Mensuelle') {
    dureeText = 'شهري';
  } else {
    // Si la valeur de duree n'est ni 'Annuelle' ni 'Mensuelle', utiliser la valeur de duree telle quelle
    dureeText = duree;
  }

  const handleClick = () => {
    if (admin) {
      // Effectuer la requête pour changer l'état de la tarification
      fetch(`http://localhost:8000/tarification/switch/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('Tarification status updated successfully');
            // Peut-être mettre à jour l'état local pour refléter le changement
          } else {
            console.error('Failed to update tarification status:', data.message);
          }
        })
        .catch(error => {
          console.error('Error updating tarification status:', error);
        });
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Empêcher la propagation du clic au parent
    handleClick(); // Appeler la fonction handleClick
  };

  return (
    <div className='flex flex-col gap-5 items-center border-2 border-light_Blue rounded-xl shadow-md px-5 py-10' onClick={onClick}>
      <div className='flex flex-row text-center'>      
        <p className='text-my_yellow font-bold font-cairo text-xl'>{tarif} DZ  </p><p>/{dureeText}</p>
      </div>
      <p className='text-Deep_Blue font-cairo text-right text-xl font-bold'>الخدمة: {serviceName}</p>
      {admin ? (
  active ? (
    <button className='btn_Bleu w-full mt-5 mb-2 bg-green-600' onClick={handleButtonClick}>
      اخفاء
    </button>
  ) : (
    <button className='btn_Bleu w-full mt-5 mb-2 bg-green-600' onClick={handleButtonClick}>
      تفعيل
    </button>
  )
) : (
  <p className='text-Deep_Blue font-cairo text-right text-xl'>{description}</p>
)}

    </div>
  );
}