"use client";
import Image from 'next/image';
import React from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


const Hero = () => {
  return (
    
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custome-image">
  <div className="container  flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image
        className="object-cover object-center rounded mx-auto w-[400px] "
        alt="hero"
        src="/profilepic.jpeg"
        width={500}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-800">
        Hey! I am
        <br className="hidden lg:inline-block" />
        <Typewriter
       options={{
       strings: [
        'Web Developer',
        'Front End Developer',
        'UI/UX Designer'],
       autoStart: true,
       loop: true,
       }}
       />


      </h1>
      <p data-aos="zoom-in-up" className="mb-8 leading-relaxed">
      &quot;I&apos;m a passionate Front-End Developer with experience in creating responsive, 
      user-friendly websites and web applications. I work primarily with HTML, CSS, JavaScript,
       and modern frameworks. My focus is on creating seamless user experiences that not only 
       look great but also provide intuitive functionality across devices.&quot;


      </p>
      <div data-aos="zoom-in-up" className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none
         hover:bg-pink-400 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

  
  )
}

export default Hero;
