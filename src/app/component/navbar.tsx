import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IoMdDownload } from "react-icons/io";


const Navbar = () => {
  return (
    <div  className="bg-gradient-to-r  to-slate-400 from-pink-500  z-50 sticky top-0">
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <Image className='w-[60px]'
       src="/logo (2).png" alt="logo" width={300} height={200}/>
      <span className="ml-3 text-[25px]">My Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-[22px] text-white">
      <Link href={"/"} className="mr-5 hover:text-blue-900">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-blue-900">About</Link>
     
      <Link href={"#Projects"} className="mr-5 hover:text-blue-900">Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <a href="/cv.pdf">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 
    focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> 
    Download CV 
    <IoMdDownload className='text-xl ml-2'/>
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar
