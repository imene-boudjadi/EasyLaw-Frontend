import React, { useState,useEffect } from 'react'
import MenuPrincipal from '../Components/menuPrincipal3'
import Header2 from '../Components/header2'
import UsersTable from '../Components/UsersTable'
import Pagination from '../Components/Pagination'
import AddUser from '../Components/AddUser'
import DeleteConfirm from '../Components/DeleteConfirm'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";


export default function GestionUser() {
  const perPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [users, setUsers] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
    const [totalPages, setTotalPages] = useState(0);


  const toggleDeletePopup = (userId) => {
    console.log(`L'icône de la poubelle de l'utilisateur ${userId} a été cliquée.`);
    setUserIdToDelete(userId);
    setShowDeletePopup(!showDeletePopup);
  };
  
  

  const onConfirm = (userId) => {
    fetch(`http://localhost:5000/delete_user?id=${userId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de l\'utilisateur');
      }
      // Supprimer l'utilisateur de l'état local
      setUsers(users.filter(user => user.id !== userId));
    })
    .catch(error => console.error('Erreur:', error));    console.log(`L'utilisateur ${userId} a été supprimé.`);
  };


  useEffect(() => {
    console.log(localStorage.getItem('token'))
    fetch(`http://localhost:5000/users?page=${currentPage}&per_page=${perPage}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => { 
      setUsers(data.users);
      setTotalPages(data.total_pages);
    })
    .catch(error => console.error('Erreur:', error));
  }, [currentPage]);
  


   
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  
  


  return (
    <div className='flex flex-row bg-my_whitee h-screen bg-opacity-10'>
       <MenuPrincipal/>
       <div className='flex flex-col w-3/4'>
        <Header2 title="ادارة المستخدمين "/>
        <div className='flex self-start mx-5 mt-3'>
         
      <div className='flex flex-row gap-5 mt-5'>
        
        <div className='px-5 py-2 flex flex-row justify-between inputStyle md:ml-auto'>
          <input className='w-full text-right font-cairo border-0 bg-transparent outline-none focus:border-0' placeholder='البحث' />
          <IoMdSearch className='text-Deep_Blue' />
        </div>
       <Link to="/GestionModirateur"><button className='btn_Bleu' >حسابات المشرفين</button></Link> 
      </div>
    </div>
        <UsersTable users={users} onClick1={toggleDeletePopup} onClick2={togglePopup}/>
        <Pagination currentPage={currentPage} 
    totalPages={totalPages} 
    onPageChange={handlePageChange} />
       </div>

       {showPopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <AddUser onClose={togglePopup} /> {/* Passer la fonction togglePopup comme prop onClose */}
      </div>}
      {showDeletePopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
  <DeleteConfirm onClose={toggleDeletePopup} onConfirm={() => onConfirm(userIdToDelete)} /> {/* Passer la fonction onConfirm comme prop onConfirm */}
</div>}

          
 
    </div>
  )
}
