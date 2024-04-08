import React, { useState } from 'react'
import LawComponent from './lawComponent'
import Pagination from './Pagination'

export default function LawList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className='flex flex-col gap-4 mx-10 my-10'>
        <h1 className='text-Deep_Blue text-2xl font-cairo text-right'>نتائج البحث</h1>
    {[...Array(4)].map((_, index) => (
      <LawComponent key={index} index={index} />
    ))}
    <Pagination  
    currentPage={currentPage} 
    totalPages={totalPages} 
    onPageChange={handlePageChange} 
    />
  </div>
  )
}
