import React from 'react';
import { MdCancelPresentation } from "react-icons/md";

export default function AddOffer({ onClose }) {
  return (
    <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
      <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
      <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>اضافة عرض </h1>
      <div className='flex flex-col'>
        <div className='flex flex-row mb-3'>
          <div className='flex flex-col mr-4 w-full'>
            <label className='text-right text-Deep_Blue font-cairo'>:السعر</label>
            <input className='inputStyle w-full px-5 py-1'/>
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-right text-Deep_Blue font-cairo'>:مدة الصلاحية</label>
            <input className='inputStyle w-full px-5 py-1'/>
          </div>
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:الخدمات</label>
          <div className='grid grid-cols-2 gap-4 self-end'>
          
          <div className='flex flex-row w-full  justify-end'>
            <label className='text-right text-Deep_Blue font-cairo'>قوانين الاساسية</label>
            <input type="checkbox" className="ml-2"/>
          </div>

          <div className='flex flex-row w-full justify-end'>
            <label className='text-right text-Deep_Blue font-cairo'>الاجتهادات القضائية</label>
            <input type="checkbox" className="ml-2"/>
          </div>
          <div className='flex flex-row w-full justify-end'>
            <label className='text-right text-Deep_Blue font-cairo'>روبوت المحادثة</label>
            <input type="checkbox" className="ml-2"/>
          </div>
          <div className='flex flex-row w-full justify-end'>
            <label className='text-right text-Deep_Blue font-cairo'>الاشعارات</label>
            <input type="checkbox" className="ml-2"/>
          </div>
          </div>
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:نص التحفيزي</label>
          <input className='inputStyle w-full px-5 py-2'/>
        </div>
      </div>
      <button className='btn_Bleu w-full mt-5 mb-2'>واصل</button>
    </div>
  );
}
