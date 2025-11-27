import React from 'react'
import Navbar from "./Components/Navbar"
import About from './Components/About'
import Team from './Components/Team'
import Service from './Components/Service'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Slider from "./Components/Slider"
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Team/>
      <Service/>
      <Skills/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default App