import React from 'react'
import { SlGlobe } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='bg-slate-800 w-[80%] flex gap-4 justify-center text-center   p-4 text-white fixed bottom-0'>
      <span>  
         All copy &copy; right 2025
        </span>
        <span>  
          <SlGlobe className='inline text-red-300'/> : www.Zubeabook.com
        </span>
        <span>
          < MdOutlineMail className='inline text-red-300'/> :  Jubedaparveenh@gmail.com 
        </span>
        <span>
          < FaPhoneAlt className='inline text-red-300'/> :  9406680070
        </span>
      </div>
    </>
  )
}

export default Footer
