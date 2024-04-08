import React, { useState } from 'react'
import JuripredenceComponent from './juripredenceComponent'
import Pagination from './Pagination'

export default function JuripredenceList() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; 
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  return (
    <div className='flex flex-col gap-4 mx-10 my-10'>
    <h1 className='text-Deep_Blue text-2xl font-cairo text-right'>نتائج البحث</h1>
    <div className='grid grid-cols-7 p-3 bg-light_Blue bg-opacity-40 gap-10'>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> التفاصيل</h1>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> الهيئة</h1>
        <h1 className=' col-span-2 text-Deep_Blue font-cairo font-bold'> المبدا</h1>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> الموضوع</h1>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> تاريخ القرار</h1>
        {/* <h1 className='text-Deep_Blue font-cairo font-bold'> التكييف </h1> */}
        {/* <h1 className='text-Deep_Blue font-cairo font-bold'> القسم</h1> */}
        {/* <h1 className='text-Deep_Blue font-cairo font-bold'> الغرفة</h1> */}
        <h1 className='text-Deep_Blue font-cairo font-bold'>رقم القرار</h1>

    </div>
{[...Array(4)].map((_, index) => (
  <JuripredenceComponent key={index} index={index} />
))}
<Pagination  
currentPage={currentPage} 
totalPages={totalPages} 
onPageChange={handlePageChange} 
/>
</div>
  )
}
