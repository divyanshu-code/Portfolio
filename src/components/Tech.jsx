import React from 'react'
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import image from '/public/icons8-c++-48.png'
import {motion} from 'framer-motion'
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Tech = () => {

     const variants = {
        hidden: { opacity: 0 , y: 50},
        visible: { opacity: 1 , y:0},
      }
  return (
    <div id='tech' className=' flex min-h-[90vh] w-full flex-col items-center justify-center gap-14 md:gap-32 '>
       
       <motion.h1
        initial='hidden'
        whileInView='visible'
        variants={variants}
        transition={{ duration: 0.5}}
       className='text-[8vw] font-light text-white md:text-6xl '>Tools & Technologies</motion.h1>

        <div className='flex flex-wrap gap-10 items-center justify-center p-10'>
            
            <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
            >
            <DiHtml5 className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='Html'/>
            </motion.div>

            <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
            >
            <DiCss3  className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='Css'/>
            </motion.div>

            <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}

            >
            <DiJavascript  className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='Javascript'/>
            </motion.div>

             <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
             >
             <RiTailwindCssFill  className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='Tailwind Css'/>
             </motion.div>

             <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
             >
             <DiMongodb className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='Mongo db' />
             </motion.div>

            <motion.div
            initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
            >
            <SiExpress className='cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='Express' />
            </motion.div>

            <motion.div
            initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
            >
             <DiReact className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='React' />
             </motion.div>

             <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
             >
             <DiNodejsSmall  className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='Node js' />
             </motion.div>

             <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
             >
               <img src={image} title='C++' className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[200px]' alt="error" />
             </motion.div>

             <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
             >
               <FaGitAlt className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='Git' />
             </motion.div>
             <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
             >
               <FaGithub className='cursor-pointer text-[70px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[100px]' title='GitHub' />
             </motion.div>
             <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
             >
               <SiPostman className='cursor-pointer text-[70px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[90px] md:text-[100px]' title='Postman' />
             </motion.div>

             <motion.div
             initial='hidden'
             whileInView='visible'
             variants={variants}
             transition={{ duration: 0.5}}
             >
               <TbBrandFramerMotion className='cursor-pointer text-[70px] bg-gradient-to-r from-pink-600 to-blue-600 rounded-full transition-all duration-300 hover:-translate-y-5 sm:text-[90px] md:text-[100px]' title='Framer Motion' />
             </motion.div>

        </div>
    </div>
  )
}

export default Tech
