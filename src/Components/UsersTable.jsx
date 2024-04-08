import React from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";

export default function UsersTable({onClick1 ,onClick2 }) {
  return (
    <div className="mt-10 flex justify-center">
    <table className="w-full max-w-4xl">
      <thead>
        <tr className="bg-transparent border-2 border-light_Blue rounded-t-lg text-Deep_Blue font-bold">
          <th className="py-2 px-4">تعديل</th>
          <th className="py-2 px-4">معلومات الاتصال </th>
          <th className="py-2 px-4">البريد الالكتروني </th>
          <th className="py-2 px-4">اسم المستخدم</th>
        </tr>
      </thead> 
      <tbody >
      {Array.from({ length: 6 }).map((_, index) => (
    <tr key={index} className='border-2 border-light_Blue p-4 '>
      <td className='py-2 flex flex-row justify-center'>
        <RiDeleteBin4Line onClick={onClick1} size={25} className='text-my_Red' />
        <MdAppRegistration onClick={onClick2} size={25} className='text-Deep_Blue'/>
      </td>
      <td className='py-2'> 0793921328 </td>
      <td className='py-2'>kz_abbaci@esi.dz</td>
      <td className='py-2'>عباسي زوليخة </td>
     
    </tr>
  ))}

      </tbody>
    </table>
  </div>
  )
}
