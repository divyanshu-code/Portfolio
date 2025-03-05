import React from 'react'
import image from '/public/my.jpg'
import {motion} from 'framer-motion'

const Middle = () => {
  return (
    <div id='home' className='px-16 min-h-screen w-full flex  items-center justify-center py-28 md:px-32 '>

      <div className='flex flex-col gap-10 items-center justify-center text-white'>

        <motion.div 
            initial={{y:-50, opacity:0}}
            animate={ {y:0, opacity:1}}
            transition={{ duration: 0.7 , delay:0.2}}
        >
          
          <img src={image} alt="error" id='yes' className='width-[300px] cursor-pointer  shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5  hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]' />

        </motion.div>
           
        <motion.div
        
        initial={{y:50, opacity:0}}
        animate={ {y:0, opacity:1}}
        transition={{ duration: 0.7 , delay:0.2}}
        className='flex  max-w-[600px] flex-col gap-5 items-center text-center justify-center'>
          <h1 className='bg-gradient-to-r from-blue-600 to-red-600  bg-clip-text text-transparent  text-5xl font-light md:text-7xl'>Divyanshu</h1>
          <h3 className='bg-gradient-to-r from-red-600 to-blue-600  bg-clip-text text-transparent  text-xl font-light md:text-3xl'> Software Engineer</h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>
          I’m a passionate software engineer with a strong foundation in designing, developing. I love turning complex problems into efficient, user-friendly solutions. With expertise in javascript , React , Node.js etc. I enjoy building seamless digital experiences that make an impact.
          I enjoy collaborating with teams, learning new technologies, and continuously improving my skills to stay ahead in the ever-evolving tech landscape.
          Let's build something amazing together!
          </p>

           <a href="https://drive.google.com/file/d/1iYxaPZBml1ET6sFKuhdirxF7Qnd1dooK/view?usp=drivesdk  " alt="error" className='bg-indigo-500 rounded-lg  text-sm px-10 py-3 p-5 m-5 top-80 '> Check My Resume</a>
        </motion.div>
      </div>
    </div>
  )
}

export default Middle
