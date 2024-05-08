import React, { useState, useEffect } from 'react';
import { MdCancelPresentation } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


export default function UpdateModerator({ id, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    
    fetch(`http://localhost:5000/get_moderator_by_id?id=${id}`, {
        method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => { 
        if (data.message === 'Token is invalid'||localStorage.getItem('token')==null) {
            // Rediriger vers une autre page si le token est invalide
            navigate('/autrePage');
        }
      setUsername(data.user.userName);
      setEmail(data.user.Email);
      setPhoneNumber(data.user.phoneNumber);
    })
    .catch(error => console.error('Erreur:', error));
  }, [id]);

 
  const handleSubmit = (event) => {
    event.preventDefault();
    

    const data = {
        id:id,
      username: username,
      
      niveau: 2,
      role: "moderateur",
      phoneNumber: phoneNumber,
      email: email,
      deleted: false
    };
  
        fetch('http://localhost:5000/update_moderator', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(data => {
    if (data.message === 'Token is invalid'||localStorage.getItem('token')==null) {
        // Rediriger vers une autre page si le token est invalide
        navigate('/autrePage');
    } else {
        console.log('Le modérateur a été modifié avec succès :', data);
        navigate('/GestionUser');
    }
    })
    .catch(error => {
    console.error('Erreur:', error);
    });

  };

  



  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-auto md:w-1/4 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
      <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
      <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>تعديل مشرف </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:اسم المستخدم</label>
          <input value={username} onChange={e => setUsername(e.target.value)} className='inputStyle w-full px-2 py-1'/>
        </div>
    
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:البريد الالكتروني</label>
          <input value={email} onChange={e => setEmail(e.target.value)} className='inputStyle w-full px-2 py-1'/>
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:رقم الهاتف</label>
          <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className='inputStyle w-full px-2 py-1'/>
        </div>
        <button type="submit" className='btn_Bleu w-full mt-5 mb-2'>اضافة</button>
      </div>
    </form>
  )
  }
