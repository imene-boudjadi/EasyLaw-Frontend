import React, { useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";


export default function FilterLaw() {
    const [selectedType, setSelectedType] = useState('');
    
    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
    };
  return (
    <div className='flex flex-col mt-5 mx-10'>
                
        <div className='px-5 py-2  flex flex-row justify-between w-1/2 inputStyle md:ml-auto '> 
          <input className='font-cairo border-0 outline-none focus:border-0' placeholder='البحث'/>
          <IoMdSearch className='text-Deep_Blue' />
        </div>
        

        {/* filter  */}
        <h1 className='text-Deep_Blue text-2xl font-cairo text-right mt-4 mb-2'>الفرز</h1>
        <div className='flex flex-wrap gap-4 self-end mb-5'>
        
         <div className='flex flex-col'>
         <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base  text-right">
رقم الجريدة الرسمية
         </label>
      <input
        id="lawType"
        type="number"
        className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
        value={selectedType}
        onChange={handleTypeChange}
      />
     </div>
     <div className='flex flex-col'>
         <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base text-right">
        المجال
         </label>
        <select id="lawType" className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
        value={selectedType} onChange={handleTypeChange}>
        <option value="">اختر المجال</option>
        <option value="مرسوم">الرياضة</option>
        <option value="قرار"> الصحة</option>
        <option value="امر">الاقتصاد</option>
        <option value="تصريح">التعليم</option>
        <option value="تقرير">الفنون</option>
      </select>
      
         </div>
     <div className='flex flex-col'>
         <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base text-right">
        الوزارة
         </label>
        <select id="lawType" className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
        value={selectedType} onChange={handleTypeChange}>
        <option value="">اختر الوزارة</option>
        <option value="مرسوم">الشؤون الاجتماعية </option>
        <option value="قرار">بريد و مواصلات </option>
        <option value="امر">امن عمومي</option>
        <option value="تصريح">اشغال عمومية</option>
        <option value="تقرير">التعليم العالي</option>
      </select>
      
         </div>


     <div className='flex flex-col'>
         <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base text-right">
           نوع القانون:
         </label>
        <select id="lawType" className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
        value={selectedType} onChange={handleTypeChange}>
        <option value="">اختر النوع</option>
        <option value="مرسوم">مرسوم</option>
        <option value="قرار">قرار</option>
        <option value="امر">أمر</option>
        <option value="تصريح">تصريح</option>
        <option value="تقرير">تقرير</option>
      </select>
         </div>


     </div>

     <div className='flex flex-row gap-2 border-2 border-light_Blue rounded-md shadow-sm text-right p-2 self-end'>
     <input className="text-right self-end text-Deep_Blue" placeholder='xx-xx-xxxx'/>
     <p>الى</p>
     <input className="text-right self-end text-Deep_Blue" placeholder='xx-xx-xxxx'/>
     <p>الفترة الممتدة</p>
     </div>
       





    </div>
  )
}
