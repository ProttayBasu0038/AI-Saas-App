import React from 'react'
import NavBar from '../compnents/Navbar'
import Hero from '../compnents/Hero'
import AiTools from '../compnents/AiTools'
import Testimonial from '../compnents/Testimonial'
import Plan from '../compnents/Plan'
import Footer from '../compnents/Footer'
const Home = () => {
  return (
    <>
       <NavBar/>
       <Hero/>
       <AiTools></AiTools>
       <Testimonial/>
       <Plan></Plan>
       <Footer></Footer>
    </>
  )
}

export default Home