import React, { useState } from 'react';
//icons
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { IoNotificationsCircle } from "react-icons/io5";

import { ContextVar } from '../Context/ContextApi';
//Pages
import Profile from './Profile';

const Header = () => {
    const {sidebarNav, setSidebarNav} = useState(ContextVar);
    const [width, setWidth] = useState(false);
    const [show, setShow] = useState(false);

  return (
    <>
      <div className='bg-slate-800 w-[80%] px-8  py-4 text-white fixed top-0 ' >
        <div className='flex justify-between'>
            <div className='flex gap-5 items-center '>
                <span className=''>
                    <FaBars size={30} />
                </span>
            </div>
            <div className='text-slate-950 font-extralight basis-[60%] relative'>
                <form method='post'>
                    <input 
                    type="search" 
                    placeholder='Search by Book Name, Author, Publisher '
                    name='search' 
                    className='text-center text-slate-900 px-4 py-2.5 w-full rounded-xl tracking-widest'
                    />
                    <span className='absolute left-0 top-0 bg-slate-300 px-3 py-2.5 rounded-[0.75rem_0rem_0rem_0.75rem] text-slate-900'><CiSearch size={25} /></span>
                </form>
            </div>
            <div className='flex gap-8'>
                <div className=''>
                    {show === false ? <CiLight size={27} className='font-bold mt-1'/> : <CiDark size={27} className='font-bold mt-1'/>}
                </div> 
                <div className='relative'>
                    <IoNotificationsCircle size={27} className=' mt-1'/>
                    <span className='bg-red-500 rounded-full w-4 h-4 absolute top-[-0] left-5  text-md font-bold items-center flex justify-center'>1</span>
                </div> 
                <div>
                    <Profile/>
                </div>
            </div>
            
        </div>
        
      </div>
     
    </>
  )
}

export default Header
