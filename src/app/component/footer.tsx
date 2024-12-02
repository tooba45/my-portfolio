import React from 'react'
import { GrLinkedinOption } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r  to-slate-400 from-pink-500 mt-10 ">
        <footer className="text-gray-600 body-font">
  <div className="container mx-auto flex items-center sm:flex-row flex-col p-4">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image className='w-[50px]'
       src="/logo (2).png" alt="logo" width={200} height={100}/>
      <span className="ml-3 text-xl">My Portfolio</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white 
    sm:py-2 sm:mt-0 mt-4">
      © 2024 My Portfolio —
      <a
        href="https://www.instagram.com/tooba_naz_45/profilecard/?igsh=emJ3YTZ1ZmJoaWdl"
        className="text-white ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        @tooba_naz_45 </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target="-blank"
       href={"https://www.linkedin.com/in/tooba-naz-2883082bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
      className="text-white">
       <GrLinkedinOption className="text-2xl hover:text-[#0A66C2]" />
      </Link>
      <Link target="-blank" 
      href={"https://www.facebook.com/tooba.soomro.790?mibextid=ZbWKwL"}
      className="ml-3 text-white">
      <BsFacebook className="text-2xl hover:text-[#0165E1] "/>
      </Link>

    </span>
  </div>
</footer>

      
    </div>
  )
}

export default Footer;
