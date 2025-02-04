import React, { useState } from 'react';
import { ContextVar } from '../Context/ContextApi';
import Sidebar from '../DashboardComponent/Sidebar';
import Header from '../DashboardComponent/Header';
import Path from '../DashboardComponent/Path';
import { Outlet } from 'react-router-dom';
import Footer from '../DashboardComponent/Footer';

const Layout = () => {
  const {sidebarNav, setSidebarNav} = useState(ContextVar);
  return (
    <>
      <div className= ' grid grid-cols-[20%_auto] relative h-svh' >

        <div className='bg-slate-800 p-8 text-white w-full sticky top-0 left-0'>
          <div className='  p-4 shadow-xl shadow-slate-950 border border-slate-600'>
            <Sidebar/>
          </div>
        </div>
        <div className=' border-l'>
          <div className='bg-slate-300 w-full'>
            <Header/>
            <Path/>
            <div className='p-4'>
              <Outlet />
            </div>
            
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;
