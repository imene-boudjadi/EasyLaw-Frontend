import React from 'react'
import { BiDetail } from "react-icons/bi";
export default function juripredenceComponent({ index }) {
    const backgroundColor = index % 2 === 0 ? 'bg-my_yellow' : 'bg-light_Blue';
  return (
    <div className={` grid grid-cols-7 p-3 bg-light_Blue ${backgroundColor} bg-opacity-15 shadow-sm`}>
       
       <div className="flex  justify-around">
                <BiDetail className='text-Deep_Blue' size={30} />
       </div> <h1 className='text-Deep_Blue font-cairo '> المحكمة العليا</h1>

        <h1 className='col-span-2 text-Dark_Blue font-cairo '> يمكن ، في حالة الطعن بالتماس إعادة النظر ، من أجل اكتشاف وثيقة مزورة ، إرجاء الفصل في هذا الطعن إلى حين الفصل في دعوى التزوير، المرفوعة أمام الجهة القضائية الجزائية .</h1>
        <h1 className='text-Deep_Blue font-cairo '> التنفيذ الجبري</h1>
        <h1 className='text-Deep_Blue font-cairo '> 12-03-2021 </h1>
        {/* <h1 className='text-Deep_Blue font-cairo '> اعتراف بحق</h1> */}
        {/* <h1 className='text-Deep_Blue font-cairo '> الاول</h1>
        <h1 className='text-Deep_Blue font-cairo '> الثالثة</h1> */}
        <h1 className='text-Deep_Blue font-cairo '>102974 </h1>
    </div>
  )
}


