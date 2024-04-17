import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import HeaderAfterLogin from '../Components/headerAfterLogin'
import MenuAfterLogin from '../Components/menuAfterLogin';
import HistFactTable from '../Components/histFactTable'
import Pagination from '../Components/Pagination'
import Footer from '../Components/footer'

export default function HistoriquesFacturationPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
   <div>
        <HeaderAfterLogin/> 
        <MenuAfterLogin/>
        <h1 className='text-2xl font-cairo font-bold self-end mt-12 mb-8' style={{color : '#0C6291', marginLeft : '60%'}}> سجل الفواتير  </h1>
        <div className='flex self-start mx-5 mt-3' style={{ marginLeft : '57%'}}>
            <div className='flex flex-row gap-5 mt-5'>
                <div className='relative' style={{width: '350px'}}>
                    <input className='w-full text-right font-cairo border border-gray-300 pl-5 pr-10 py-2 outline-none' style={{borderRadius : '12px'}} placeholder='البحث عن فاتورة' />
                    <IoMdSearch className='absolute top-1/2 transform -translate-y-1/2 right-3 text-Deep_Blue' />
                </div>
            </div>
        </div>
        <HistFactTable/>
        <Pagination currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} />
        <Footer/>
   </div> 
  )
}
