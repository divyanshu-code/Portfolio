import React from 'react'
import Navbar from './components/Navbar'
import Middle from './components/Middle'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (

    <>
     
      <CustomCursor/>
      <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>

        <Navbar />
        <Middle />

        <div className='md:mt-24'>
        <Tech />

        </div>
        <div className='mt-32 md:mt-10'>
          <Projects />
        </div>
        <Contact />

      </main>
    </>
  )
}

export default App


