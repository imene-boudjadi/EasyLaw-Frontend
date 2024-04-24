import React from 'react'
import { MdCancelPresentation } from "react-icons/md";
 
export default function AddUser({ onClose }) {
  return (
    <div className='flex flex-col items-center w-auto md:w-1/4 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
      <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
      <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>اضافة مستخدم </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:اسم المستخدم</label>
          <input className='inputStyle w-full px-2 py-1'/>
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:البريد الالكتروني</label>
          <input className='inputStyle w-full px-2 py-1'/>
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:الرقم السري</label>
          <input className='inputStyle w-full px-2 py-1'/>
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:تاكيد الرقم السري</label>
          <input className='inputStyle w-full px-2 py-1'/>
        </div>
          <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:رتبة المستخدم </label>
          <div className='grid grid-cols-2 gap-4 self-end'>
          
          <div className='flex flex-row w-full  justify-end'>
            <label className='text-right text-Deep_Blue font-cairo'> مدير</label>
            <input type="checkbox" className="ml-2"/>
          </div>

          <div className='flex flex-row w-full justify-end'>
            <label className='text-right text-Deep_Blue font-cairo'>مشرف</label>
            <input type="checkbox" className="ml-2"/>
          </div>
          </div>

        </div>
        
      </div>
      <button className='btn_Bleu w-full mt-5 mb-2'>اضافة</button>
    </div>
  )
}
