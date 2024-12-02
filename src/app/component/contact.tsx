import React from 'react'

const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div data-aos="zoom-in-up" className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact
      </h1>
      <p className="lg:w-2/3 text-[24px] mx-auto leading-relaxed text-base">
        Feel Free To Reach Out Anytime!!
      </p>
    </div>
    <div data-aos="zoom-in-up" className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-blue-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-pink-400 border-0 py-2 px-8 focus:outline-none hover:bg-purple-400 rounded text-lg">
            Send Message
          </button>
        </div>
        
      </div>
    </div>
  </div>
</section>
</div>
   
  )
}

export default Contact
