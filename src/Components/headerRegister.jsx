import React, { useState } from 'react';
import Profil from '../Images/Profil.png';
import Logo from '../Images/logo.png';
import { FaUser, FaFileInvoice, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function HeaderRegister() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='bg-Dark_Blue w-full flex flex-col md:flex-row justify-between items-center py-4 px-8'>
            <div className='flex flex-col md:flex-row items-center md:items-start mt-4'>
                <div className='flex flex-col'>
                    <p className='text-my_yellow font-bold font-cairo'>المشرف</p>
                    <p className='text-Deep_Blue font-cairo'>عباسي زوليخة</p>
                </div>
                <div className="relative">
                    <img src={Profil} alt="Profil" className='w-12 h-auto rounded-full border-2 border-Deep_Blue' onClick={toggleMenu}/>
                    {showMenu && (
                        <div className="absolute right-0 top-12 bg-my_whitee border border-light_Blue rounded shadow-md mt-2">
                            <ul>
                                <Link to ="/ProfilePage"><li className="py-2 px-4 flex items-center cursor-pointer hover:bg-Deep_Blue">
                                    <FaUser className=" font-cairo " />
                                    ملف شخصي
                                </li></Link>
                                <Link to ="/historiquesFact"><li className="py-2 px-4 flex items-center cursor-pointer hover:bg-Deep_Blue">
                                    <FaFileInvoice className=" font-cairo " />
                                    فواتير
                                </li></Link>
                                <Link to = "/GestionUser"><li className="py-2 px-4 flex items-center cursor-pointer hover:bg-Deep_Blue">
                                    <FaCog className=" font-cairo " />
                                    الادارة
                                </li></Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className='text-center md:text-right mb-4 md:mb-0'>
                <p className='text-my_yellow font-cairo text-base md:text-3xl'>
                    مرحبًا بك في نظامنا الذكي للبحث ومراقبة القوانين!
                </p>
            </div>
            <div className='flex justify-center md:justify-end'>
                <img src={Logo} alt='Logo' className='w-12 h-auto md:w-20' />
            </div>
        </div>
    );
}
