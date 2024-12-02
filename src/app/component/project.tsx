import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Project = () => {
  return (
    <div id="Projects">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div  data-aos="zoom-in-up" className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 text-[24px] mx-auto leading-relaxed text-base">
       Here are my some Projects, which i have mentioned below
      </p>
    </div>
    <div data-aos="zoom-in-up" className="flex flex-wrap -m-5 -mt-18">
      


      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/Assign.jpg" width={600} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-[sm]  text-1xl title-font font-medium text-pink-500 mb-1">
              Project 1
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Class Assignment
            </h1>
            <p className="leading-relaxed line-clamp-2">
               Completed my class Assignment before deadline date, i&apos;ll be gratefull if you wil like it...
            </p>
            <Link href={"https://assignment-5-jw3t.vercel.app/"}>
            <p className="text-pink-500 hover:underline text-1xl leading relaxed">View Project</p>
            </Link>
          </div>
        </div>
        </div>


        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/resume.jpg" width={600} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-[sm]  text-1xl title-font font-medium text-pink-500 mb-1">
              Project 2
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Dynamic Resume Builder
            </h1>
            <p className="leading-relaxed line-clamp-2">
              I have completed a challenging Resume builder hacakthon which was given
               by Sir Ameen. Try it out and do let me know what you think...
            </p>
            <Link href={"https://milestone5-resume-woad.vercel.app/"}>
            <p className="text-pink-500 hover:underline text-1xl leading relaxed">View Project</p>
            </Link>
          </div>
        </div>
      </div>


        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/nextjs.png" width={600} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-[sm]  text-1xl title-font font-medium text-pink-500 mb-1">
              Project 3
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Next.js
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is beginning of Next.js,which i learnt during class...
            </p>
            <Link href={"https://assignment-3-x19j.vercel.app/"}>
            <p className="text-pink-500 hover:underline text-1xl leading relaxed">View Project</p>
            </Link>
          </div>
        </div>
      </div>
        
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
