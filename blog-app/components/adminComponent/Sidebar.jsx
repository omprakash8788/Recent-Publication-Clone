import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiLogoDigitalocean } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
          <Link href='/'>
        <BiLogoDigitalocean
          width={180}
          className="w-[180px] h-10 text-[#022072]  sm:w-auto"
        />
          
          </Link>
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
           <div className='w-[50%] sm:w-[80%] absolute right-0'>
             <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-sm'>
             <FaCirclePlus width={28} className='text-[#022072]'/>
            <p>Add blogs</p>

             </Link>

             <Link href='/admin/blogList' className='flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-sm'>
             <FaRegPenToSquare width={28} className='text-[#022072]'/>
            <p>Blog list</p>

             </Link>

             <Link href='/admin/subscriptions' className='flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-sm'>
             <MdEmail width={28} className='text-[#022072]'/>
            <p>Subscription</p>

             </Link>
           </div>
        </div>
    </div>
  )
}

export default Sidebar
