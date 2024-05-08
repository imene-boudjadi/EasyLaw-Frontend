import React, { useState, useEffect } from 'react';
import { MdCancelPresentation } from "react-icons/md";

export default function UpdateModerator({ id, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/get_moderator_by_id?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => { 
      setUsername(data.userName);
      setEmail(data.Email);
      setPhoneNumber(data.phoneNumber);
    })
    .catch(error => console.error('Erreur:', error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, password, email, phoneNumber });
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
