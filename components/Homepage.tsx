"use client"
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import dynamic from 'next/dynamic'

const Homepage = () => {
  const MidSection = dynamic(() => import('./MidSection'), {
  loading: () => <div className="h-screen bg-white" />, 
  ssr: true // Keep true for SEO
});

const Footer = dynamic(() => import('./Footer'), {
  ssr: false 
});

  return (
     <section className="w-screen mx-auto py-[28px]">
    
     <Navbar/>

      <Hero/>

       <MidSection/>

      <Footer/>

    </section>
  )
}

export default Homepage