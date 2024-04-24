import React from 'react'
import OfferComponent from '../Components/offerComponent';

export default function offersList({ onOfferClick }) {
  return (
   <div className='flex flex-col mx-20 my-5'>
    <h1 className='text-Deep_Blue text-xl text-right '>:قائمة العروض</h1>
    <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-8 '>
    <OfferComponent onClick={onOfferClick}/>
    <OfferComponent onClick={onOfferClick}/>
    <OfferComponent onClick={onOfferClick}/>
    <OfferComponent onClick={onOfferClick}/>
    <OfferComponent onClick={onOfferClick}/>
  </div>
   </div> 
  )
}
