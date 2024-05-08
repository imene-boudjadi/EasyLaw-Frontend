import React, { useState,useEffect } from 'react'
import MenuPrincipal from '../Components/menuPrincipal3'
import Header2 from '../Components/header2'
import ModirateurTable from '../Components/modirateurTable'
import Pagination from '../Components/Pagination'
import AddUser from '../Components/AddUser'
import DeleteConfirm from '../Components/DeleteConfirm'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom'

export default function GestionModirateur() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [moderators, setmoderators] = useState([]);
  const [userIdToDelete, setUserIdToDelete] = useState(null);


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
        throw new Error('Erreur lors de la suppression du moderateur');
      }
      // Supprimer l'utilisateur de l'état local
      setmoderators(moderators.filter(moderator => moderator.id !== userId));
    })
    .catch(error => console.error('Erreur:', error));    console.log(`L'utilisateur ${userId} a été supprimé.`);
  };


   

  useEffect(() => {
    console.log(localStorage.getItem('token'))
    fetch(`http://localhost:5000/moderators`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => { 
      setmoderators(data);
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
        <button className='btn_Bleu' onClick={togglePopup}>اضافة عضو</button> {/* Utilisation de onClick pour définir l'événement de clic */}
        <Link to="/GestionUser"><button className='btn_Bleu' >حسابات المستخدمين</button></Link> 
      </div>
    </div>
       
        <ModirateurTable moderators={moderators} onClick1={toggleDeletePopup} onClick2={togglePopup}/>
       
       </div>

       {showPopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <AddUser onClose={togglePopup} /> {/* Passer la fonction togglePopup comme prop onClose */}
      </div>}
         {showDeletePopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <DeleteConfirm onClose={toggleDeletePopup} onConfirm={() => onConfirm(userIdToDelete)}  /> {/* Passer la fonction togglePopup comme prop onClose */}
        </div>}    
 
    </div>
  )
}
