import React, { useState } from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";


const Navbar = () => {

  const [open, setopen] = useState(false)

  const handleOpen = () => {
    setopen(!open)
  }

  return (
    <nav className='fixed top-0 z-10 flex w-full justify-between items-center border-b border-b-gray-700 bg-black/70 px-16 py-6  text-white backdrop-blur-md md:justify-evenly'>

      <a href='#home' className='bg-gradient-to-r from-blue-600 to-red-600  bg-clip-text text-transparent opacity-85 text-2xl font-semibold transition-all duration-300 hover:opacity-100'>Divyanshu</a>


      <ul className='hidden md:flex gap-10'>

        <a href="#home" className='cursor-pointer opacity-60  transition-all duration-300 hover:opacity-100'> <li>Home</li></a>
        <a href="#tech" className='cursor-pointer opacity-60  transition-all duration-300 hover:opacity-100'> <li>Tech</li></a>
        <a href="#pro" className='cursor-pointer opacity-60  transition-all duration-300 hover:opacity-100'> <li>Projects</li></a>
        <a href="#cont" className='cursor-pointer opacity-60  transition-all duration-300 hover:opacity-100'> <li>Contact </li></a>

      </ul>

      <ul className='hidden md:flex gap-7'>

        <a href="https://www.linkedin.com/in/divyanshu-bisht-92b974291"><li className='cursor-pointer text-xl transition-all opacity-70 duration-300 hover:text-blue-500 hover:opacity-100'>
          <BsLinkedin />
        </li></a>


        <a href=" https://x.com/divyanshu_9899?t=iUPIuy2UhWktP2hjYw1eJw&s=08 "><li className='cursor-pointer text-xl transition-all opacity-70 duration-300 hover:text-blue-500 hover:opacity-100'>
          <BsTwitterX />
        </li></a>


        <a href="https://github.com/divyanshu-code"> <li className='cursor-pointer text-xl transition-all opacity-70 duration-300 hover:text-blue-500 hover:opacity-100'>
          <BsGithub />
        </li>
        </a>

        <a href="https://www.instagram.com/_.divyanshu_20/"><li className='cursor-pointer text-xl transition-all opacity-70 duration-300 hover:text-blue-500 hover:opacity-100'>
          <BsInstagram />
        </li></a>


      </ul>

      {open ? (
        <BiX className='block md:hidden text-4xl' size={30} onClick={handleOpen} />
      ) : (
        <BiMenu className='block md:hidden text-4xl' size={30} onClick={handleOpen} />
      )}

      {open && (
        <div className={`fixed right-0 top-[64px] flex flex-col w-2/3 h-screen border-l border-gray-900 bg-black/50  p-12 gap-10 justify-start items-start ${open ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col gap-8'>

            <a href="#home" className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'> <li onClick={handleOpen}>Home</li></a>
            <a href="#tech" className='cursor-pointer opacity-60  transition-all duration-300 hover:opacity-100'> <li onClick={handleOpen}>Tech</li></a>
            <a href="#pro" className='cursor-pointer opacity-60  transition-all duration-300 hover:opacity-100'> <li onClick={handleOpen}>Projects</li></a>
            <a href="#cont" className='cursor-pointer opacity-60  transition-all duration-300 hover:opacity-100'> <li onClick={handleOpen}>Contact </li></a>
          </ul>

          <ul className='flex flex-wrap gap-5'>

            <a href="https://www.linkedin.com/in/divyanshu-bisht-92b974291"><li className='cursor-pointer text-xl transition-all opacity-70 duration-300 hover:text-blue-500 hover:opacity-100'>
              <BsLinkedin />
            </li></a>


            <a href=" https://x.com/divyanshu_9899?t=iUPIuy2UhWktP2hjYw1eJw&s=08 "><li className='cursor-pointer text-xl transition-all opacity-70 duration-300 hover:text-blue-500 hover:opacity-100'>
              <BsTwitterX />
            </li></a>


            <a href="https://github.com/divyanshu-code"> <li className='cursor-pointer text-xl transition-all opacity-70 duration-300 hover:text-blue-500 hover:opacity-100'>
              <BsGithub />
            </li>
            </a>

            <a href="https://www.instagram.com/_.divyanshu_20/"><li className='cursor-pointer text-xl transition-all opacity-70 duration-300 hover:text-blue-500 hover:opacity-100'>
              <BsInstagram />
            </li></a>

          </ul>


        </div>
      )}
    </nav>
  )
}

export default Navbar
