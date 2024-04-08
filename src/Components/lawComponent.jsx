import React from 'react'
import { IoNewspaperOutline } from "react-icons/io5";
import { BsFiletypePdf } from "react-icons/bs";
export default function lawComponent({ index }) {
    const backgroundColor = index % 2 === 0 ? 'bg-my_yellow' : 'bg-light_Blue';
  return (
    
    <div className={`flex flex-col justify-around md:flex-row rounded-md shadow-md ${backgroundColor} bg-opacity-15 py-4`}>
       {/* the first */}
       
       <div className='flex flex-col text-right'>
         <p className='text-Dark_Blue font-cairo'>الجريدة الرسمية عدد 11 الصفحة 9</p>
         <p className='text-Dark_Blue font-cairo'>المؤرخة في 27 فبراير 2022</p>
         <div className='flex flex-row gap-4 self-end'>
            <p className='text-light_Blue font-cairo'>التطلع على التفاصيل</p>
            <BsFiletypePdf  size={25} className='text-my_Red'/>
         </div>
       </div>
       {/* the second */}
       <div className='flex flex-col'>
        <div className='flex flex-row gap-4 self-end'>
        <h1 className='text-Deep_Blue font-cairo font-bold'>مرسوم تنفيذي رقم 22-69 ممضي في 10 فبراير 2022</h1>
        <IoNewspaperOutline size={30} className='text-Deep_Blue'/>
        </div>
        <p className='text-Dark_Blue font-cairo'>يتضمن تحويل المعهد الوطني للاتصالات وتكنولوجيات الإعلام والاتصال- عبد الحفيظ بوصوف - "معهد وطني للتكوين العالي" إلى مدرسة عليا.</p>
       </div>
    </div>
  )
}
