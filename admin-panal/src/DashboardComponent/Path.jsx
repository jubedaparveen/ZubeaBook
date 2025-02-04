import React from 'react';
import { useResolvedPath } from 'react-router-dom';

const Path = () => {
  const currentPage = useResolvedPath();
  const pagePath = currentPage.pathname;
  return (
    <>
      <div className='bg-slate-700 w-[80%] px-8 text-lg text-slate-400 py-2  border-t fixed top-[4.5rem]  ' >
        <span className=''>
          <h2>{pagePath}</h2>
        </span>
      </div>
      
    </>
  )
}

export default Path
