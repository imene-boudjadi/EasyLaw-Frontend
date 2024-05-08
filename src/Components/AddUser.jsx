import React, { useState } from 'react';  // Ajoutez useState
import { MdCancelPresentation } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function AddUser({ onClose }) {
  // Ajoutez un état pour chaque champ du formulaire
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [niveau, setNiveau] = useState(2);
  const [role, setRole] = useState('moderateur');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      username: username,
      password: password,
      niveau: 2,
      role: "moderateur",
      phoneNumber: phoneNumber,
      email: email,
      deleted: false
    };
  
    fetch('http://localhost:5000/add_moderator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(data => {
      if (data.message === 'Token is invalid') {
        // Rediriger vers une autre page si le token est invalide
        navigate('/login');
      } else {
        console.log('Le modérateur a été ajouté avec succès :', data);
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
      <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>اضافة  مشرفم </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:اسم المستخدم</label>
          <input value={username} onChange={e => setUsername(e.target.value)} className='inputStyle w-full px-2 py-1'/>
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:كلمة السر</label>
          <input value={password} onChange={e => setPassword(e.target.value)} className='inputStyle w-full px-2 py-1'/>
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
