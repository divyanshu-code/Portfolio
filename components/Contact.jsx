import React from 'react'

const Contact = () => {
  return (
    <div id='cont' className='flex min-h-[90vh] min-w-full items-center justify-center '>
     
      <div className='flex flex-col gap-3 space-y-6 p-14 items-center justify-center'>

        <h1 className='text-center  text-5xl md:text-7xl'> <span className='bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent'>Get in Touch</span></h1>

        <p className='text-center text-lg font-semibold text-gray-400'> Want to chat? Send me an E-mail through this button and I'll respond 
        whenever I can.

        </p>

        <a href="mailto:divyanshubisht5734@gmail.com" className='text-nowrap rounded-lg border border-blue-500 bg-black px-5 py-3 text-lg font-bold text-white shadow-md shadow-blue-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500'> Contact Me</a>
      </div>

    </div>
  )
}

export default Contact