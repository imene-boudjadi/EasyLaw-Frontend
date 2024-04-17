import React from 'react'
import eyeIcon from '../Images/eyeIcon.png'; 
import downloadIcon from '../Images/downloadIcon.png'; 

export default function HistFactTable() {
  return (
    <div className="mt-10 flex justify-center">
    <table className="w-full max-w-4xl">
      <thead>
        <tr className="bg-transparent border-2 border-light_Blue rounded-t-lg text-Deep_Blue font-bold">
          <th className="py-2 px-4"></th>
          <th className="py-2 px-4">حالة الفاتورة</th>
          <th className="py-2 px-4">مبلغ الفاتورة </th>
          <th className="py-2 px-4">تاريخ الفاتورة</th>
          <th className="py-2 px-4">رقم الفاتورة</th>
        </tr>
      </thead> 
      <tbody >
      {Array.from({ length: 6 }).map((_, index) => (
        <tr key={index} className='border-2 border-light_Blue p-4 '>
            <td className='py-2' style={{ display: 'flex', alignItems: 'center' }}>
            <img src={downloadIcon} alt="Télécharger" style={{ width: '30px', height: '35px' , marginLeft : '30%'}} />
            <img src={eyeIcon} alt="voir Détails" style={{ width: '40px', height: '25px', marginLeft: '20%' }} />
            </td>
            <td className='py-2'>مدفوع</td>
            <td className='py-2'> 1000.00 دج</td>
            <td className='py-2'>2023-10-23</td>
            <td className='py-2'>00125425</td> 
      </tr>
  ))}
      </tbody>
    </table>
  </div>
  )
}