import React from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";

export default function modirateurTable({moderators, onClick1, onClick2}) {
  return (
    <div className="mt-10 flex justify-center">
      <table className="w-full max-w-4xl">
        <thead>
          <tr className="bg-transparent border-2 border-light_Blue rounded-t-lg text-Deep_Blue font-bold">
            <th className="py-2 px-4">تعديل</th>
            <th className="py-2 px-4">الدور</th>
            <th className="py-2 px-4">رقم الهاتف</th>
            <th className="py-2 px-4">البريد الالكتروني </th>
            <th className="py-2 px-4">اسم المستخدم</th>
          </tr>
        </thead> 
        <tbody>
          {moderators.map((moderator, index) => (
            <tr key={index} className='border-2 border-light_Blue p-4 '>
              <td className='py-2 flex flex-row justify-center'>
                <RiDeleteBin4Line onClick={() => onClick1(moderator.id)} size={25} className='text-my_Red cursor-pointer' />
                <MdAppRegistration onClick={() => onClick2(moderator.id)} size={25} className='text-Deep_Blue cursor-pointer'/>

 </td>
              <td className='py-2'>مشرف</td>
              <td className='py-2'>{moderator.phoneNumber}</td>
              <td className='py-2'>{moderator.Email}</td>
              <td className='py-2'>{moderator.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
