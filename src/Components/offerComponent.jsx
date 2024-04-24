import React from 'react'

export default function offerComponent({ onClick }) {
  return (
    <div className='flex flex-col gap-5 items-center border-2 border-light_Blue rounded-xl shadow-md px-5 py-10' onClick={onClick}>
  <h1 className='font-cairo font-bold text-2xl text-Dark_Blue underline'>تسعير مخصص </h1>
  <div className='flex flex-row text-center'>      
    <p className='text-my_yellow font-bold font-cairo text-xl'>3000 DZ  </p><p>/شهري</p>
  </div>
  <p className='text-Deep_Blue font-cairo text-right text-xl'>الاستفادة من خدمات البحث  المتقدم و الذكي للقوانين الاساسية</p>
</div>

  )
}
