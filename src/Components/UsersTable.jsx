import React from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";

export default function UsersTable({users, onClick1}) {
  
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
          {users.map((user, index) => (
            <tr key={index} className='border-2 border-light_Blue p-4 '>
              <td className='py-2 flex flex-row justify-center'>
              <RiDeleteBin4Line onClick={() => onClick1(user.id)} size={25} className='text-my_Red' />
              </td>
              <td className='py-2'>مستخدم</td>
              <td className='py-2'>{user.phoneNumber}</td>
              <td className='py-2'>{user.Email}</td>
              <td className='py-2'>{user.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

