import React, { useEffect, useState } from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import SmallMenu from './smallMenu'

export default function ScrapingTextJuriTable({onClick1 , onClick2 , onClick3 , onClick4, onClick5}) {
    const [showScrapingAuto, setShowScrapingAuto] = useState(true);
    const [showScrapingMnu, setShowScrapingMnu] = useState(false);
   
    const toggleAutoPopup = () => {
        setShowScrapingAuto(true);
        setShowScrapingMnu(false);
    };
      
    const toggleMnuPopup = () => {
        setShowScrapingMnu(true);
        setShowScrapingAuto(false);
    };
     
    
    
  return (
    <div className='flex flex-col mt-5'>
        <SmallMenu onclick1={toggleAutoPopup} onclick2={toggleMnuPopup}  />
        {
    showScrapingAuto ? (
        <div className='flex flex-col'>
            <div className="flex items-center justify-end mx-7 space-x-3">
                <button className="btn_Bleu" onClick={onClick2}>اضافة مصدر للتجريف</button>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1">
                    <IoMdSearch className="text-Deep_Blue" />
                    <input className="w-full text-right font-cairo bg-transparent focus:outline-none" placeholder="البحث" />
                </div>
            </div>

            <h1 className='mr-8 mt-5 text-xl font-cairo text-Deep_Blue text-right'>قائمة مصادر التجريف </h1>
            <div className="mt-3 flex justify-center">
                <table className="w-full max-w-4xl">
                    <thead>
                        <tr className="bg-transparent border-2 border-light_Blue rounded-t-lg text-Deep_Blue font-bold">
                            <th className="py-2 px-4">التجريف العادي</th>
                            <th className="py-2 px-4">العملية</th>
                            <th className="py-2 px-4">التجريف الالي  </th>
                            <th className="py-2 px-4">المحتوى</th>
                            <th className="py-2 px-4">المصدر </th>
                        </tr>
                    </thead>
                    <tbody >
                        {Array.from({ length: 6 }).map((_, index) => (
                            <tr key={index} className='border-2 border-light_Blue p-4 '>
                                <td className='py-2'><button className='bg-my_yellow text-Deep_Blue font-cairo text-lg shadow-md px-5 py-1 hover:bg-Deep_Blue rounded-md  hover:text-my_whitee bg-opacity-50'>
                                     جرف </button></td>
                                <td className='py-2 flex flex-row justify-center'>
                                    <RiDeleteBin4Line onClick={onClick1} size={25} className='text-my_Red' />
                                    <MdAppRegistration onClick={onClick3} size={25} className='text-Deep_Blue' />
                                </td>
                                <td className='py-2'>مفعل</td>
                                <td className='py-2'>القوانين الاساسية</td>
                                <td className='py-2'>موقع الجريدة الرسمية</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    ) : (  null)
}
{showScrapingMnu ? (
              <div className='flex flex-col'>
            <div className="flex items-center justify-end mx-7 space-x-3">
                <button className="btn_Bleu" onClick={onClick5}>  تجريف صورة </button>
                <button className="btn_Bleu" onClick={onClick4}>  تجريف ملف PDF</button>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1">
                    <IoMdSearch className="text-Deep_Blue" />
                    <input className="w-full text-right font-cairo bg-transparent focus:outline-none" placeholder="البحث" />
                </div>
            </div>

            <h1 className='mr-8 mt-5 text-xl font-cairo text-Deep_Blue text-right'>قائمة مصادر التجريف </h1>
            <div className="mt-3 flex justify-center">
                <table className="w-full max-w-4xl">
                    <thead>
                        <tr className="bg-transparent border-2 border-light_Blue rounded-t-lg text-Deep_Blue font-bold">
                            <th className="py-2 px-4">العملية</th>
                            <th className="py-2 px-4">تاريخ التجريف   </th>
                            <th className="py-2 px-4">نوع الوثيقة</th>
                            <th className="py-2 px-4">الوثيقة </th>
                        </tr>
                    </thead>
                    <tbody >
                        {Array.from({ length: 4 }).map((_, index) => (
                            <tr key={index} className='border-2 border-light_Blue p-4 '>
                                
                                <td className='py-2 flex flex-row justify-center'>
                                    <RiDeleteBin4Line onClick={onClick1} size={25} className='text-my_Red' />
                                    <MdAppRegistration onClick={onClick3} size={25} className='text-Deep_Blue' />
                                </td>
                                <td className='py-2'>12-04-2023</td>
                                <td  className='py-2'> pdf ملف</td>
                                <td className='py-2'>  الجريدة الرسمية رقم 23 لسنة 2020</td>
                            </tr>
                        ))}
                         {Array.from({ length: 2 }).map((_, index) => (
                            <tr key={index} className='border-2 border-light_Blue p-4 '>
                                <td className='py-2 flex flex-row justify-center'>
                                    <RiDeleteBin4Line onClick={onClick1} size={25} className='text-my_Red' />
                                    <MdAppRegistration onClick={onClick3} size={25} className='text-Deep_Blue' />
                                </td>
                                <td className='py-2'>12-04-2023</td>
                                <td   className='py-2'>  صورة</td>
                                <td className='py-2'>  الجريدة الرسمية رقم 23 لسنة 2020</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
            ) : null}
    </div>
  )
}
