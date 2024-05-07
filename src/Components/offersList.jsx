import React, { useEffect, useState } from 'react';
import OfferComponent from '../Components/offerComponent';

export default function OffersList({ admin, onOfferClick, tarifications }) {
  return (
    <div className='flex flex-col mx-20 my-5'>
      <h1 className='text-Deep_Blue text-xl text-right'>قائمة العروض</h1>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {tarifications.map(tarification => (
          <OfferComponent
            key={tarification.id}
            onClick={() => onOfferClick(tarification)}
            active={tarification.active}
            description={tarification.description}
            duree={tarification.duree}
            serviceName={tarification.serviceName}
            tarif={tarification.tarif}
            admin={admin}
            id={tarification.id}
          />
        ))}
      </div>
    </div>
  );
}