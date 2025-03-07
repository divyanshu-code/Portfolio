import React from 'react'
import image1 from '/public/photo1.png'
import image2 from '/public/photo2.png'
import image3 from '/public/photo3.png'
import { motion } from 'framer-motion'
import image4 from '/public/photo4.jpg'


const projects = [
    {
         image : image1,
         title: 'Employee Task Management App',
         description: 'A web application that allows employees to create, update and delete tasks also developed a web-based system.',
         technologies: ['Html', 'Css', 'React', 'Local Storage']

    },
    {

         image : image2,
         title: 'Real Restaurant Website',
         description: 'A website for a restaurant that displays the menu and contact information also developed a fully functional with an interactive UI for customers.',
         technologies: ['Html', 'Css', 'Tailwind Css' , 'React', 'Node.js' , 'Express.js' , 'MongoDB']
    },

    {
            image : image3,
            title: 'Voice chatbot',
            description: 'A voice chatbot that can answer questions very effciently , polite intelligent and polite responses.',
            technologies: ['Html', 'Css', 'JavaScript']
    }
    ,
    {
         image : image4,
         title: ' Portfolio',
         description: 'A portfolio website that displays about me , my projects and contact information.',
         technologies: ['Html', 'Tailwind Css', 'React', 'Framer Motion']
    }

]



const ProjectCard = ({project}) => {
   return (

       
      <motion.div
      initial={{opacity:0 , y:100}}
      whileInView={{opacity:1 , y:0}}
      viewport={{once:true}}
      transition={{duration:0.8}}
      
      className='flex flex-col gap-8 items-center md:flex-row md:gap-24 '> 
        <img src={project.image} alt="error"  className='w-full cursor-pointer rounded-2xl transition-all duration-300
        hover:scale-105 md:w-[300px]'/>

        <div className='flex flex-col gap-5'>
             
             <div className='flex flex-col gap-3'>
                <div className='text-xl font-semibold'>{project.title}</div>
                <p className='text-gray-400'>{project.description}</p>
             </div>

             <div className='flex  flex-wrap gap-5'>
                {
                    project.technologies.map((tech , index)=>(
                        <span key={index} className='rounded-lg bg-black p-3'>{tech}</span>
                    ))
                }
             </div>
        </div>
      </motion.div>
      
   )


}

const Projects = () => {

  return (
      
     <div id='pro' className=' flex min-h-screen flex-col items-center justify-center gap-16 p-4 w-full md:px-14 md:py-24'>

    
        <motion.h1
         initial={{opacity:0 , y:100}}
         whileInView={{opacity:1 , y:0}}
         viewport={{once:true}}
         transition={{duration:0.8}}

        className='text-4xl font-light text-white md:text-6xl'>My Projects</motion.h1>
       

        <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>

         {
                projects.map((project , index)=>(
                  <ProjectCard key={index} project={project}/>
                ))
                
         }
        </div>
     </div>

  )
}

export default Projects