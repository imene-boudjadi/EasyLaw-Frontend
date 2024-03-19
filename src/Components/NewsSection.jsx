import React, { useState } from 'react'
import NewsBox from './newsBox'
import { IoMdSearch } from "react-icons/io";
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

export default function NewsSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; 
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className="flex flex-col justify-between gap-10 my-5">
        <div className='px-5 py-2 mx-10 flex flex-row justify-between w-1/3 border-2 border-light_Blue rounded-md shadow-md md:ml-auto'> 
          <input className='font-cairo' placeholder='البحث'/>
          <IoMdSearch className='text-Deep_Blue' />
        </div>
  
       <Link to="/News/DetailNews/1"><NewsBox /></Link>
       <Link to="/News/DetailNews/1"><NewsBox /></Link>
       <Link to="/News/DetailNews/1"><NewsBox /></Link>
       <Link to="/News/DetailNews/1"><NewsBox /></Link>
  
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </div>
    );
}
