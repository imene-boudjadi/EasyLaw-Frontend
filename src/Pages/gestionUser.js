import React, { useState } from 'react'
import MenuPrincipal from '../Components/menuPrincipal3'
import Header2 from '../Components/header2'
import UsersTable from '../Components/UsersTable'
import SearchBar from '../Components/SearchBar'
import Pagination from '../Components/Pagination'
import AddUser from '../Components/AddUser'
import DeleteConfirm from '../Components/DeleteConfirm'

export default function GestionUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const totalPages = 10; 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleDeletePopup = () => {
    setShowDeletePopup(!showDeletePopup); 
  };
  return (
    <div className='flex flex-row bg-my_whitee h-screen bg-opacity-10'>
       <MenuPrincipal/>
       <div className='flex flex-col w-3/4'>
        <Header2 title="ادارة المستخدمين "/>
        <SearchBar action="اضافة عضو" onClick={togglePopup}/> 
        <UsersTable onClick1={toggleDeletePopup} onClick2={togglePopup}/>
        <Pagination currentPage={currentPage} 
    totalPages={totalPages} 
    onPageChange={handlePageChange} />
       </div>

       {showPopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <AddUser onClose={togglePopup} /> {/* Passer la fonction togglePopup comme prop onClose */}
      </div>}
         {showDeletePopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <DeleteConfirm onClose={toggleDeletePopup} /> {/* Passer la fonction togglePopup comme prop onClose */}
        </div>}    
 
    </div>
  )
}
