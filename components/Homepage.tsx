import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import MidSection from './MidSection'

const Homepage = () => {
  return (
   <section className="w-screen mx-auto py-[28px]">
    
     <Navbar/>

      <Hero/>

       <MidSection/>

    </section>
  )
}

export default Homepage