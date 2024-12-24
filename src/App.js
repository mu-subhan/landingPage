import React from 'react'
import './App.css';
import LandingPage from './LandingPage';
import AboutMe from './components/AboutMe';
import Featured from './components/Featured';
import Skill from "./components/Skill"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer"
const App = () => {
  return (
    <>
    <LandingPage/>
    <AboutMe/>
    <Featured/>
    <Skill/>
    <Testimonial/>
    <Footer/>
    
    </>
  )
}

export default App 
