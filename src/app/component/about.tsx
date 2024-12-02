import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
      <section id="About" className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div data-aos="zoom-in-up" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed">
        I started my web development journey a few months ago when I first learned how to create basic 
        websites with HTML and CSS. As I dove deeper into coding, I discovered the power of JavaScript and 
        eventually TypeScript. I have since worked on basic projects, which you can check out in my portfolio.
      </p>
      <div className="flex w-full md:justify-start justify-center items-end"> 
        <a href="/cv.pdf">
        <button className="inline-flex text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg">
          View CV
        </button>
        </a>
      </div>
      
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src="/about.jpg"
      width={500}
      height={300}
      
      />
    </div>
  </div>
</section>


  )
}

export default About
