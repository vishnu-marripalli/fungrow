import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Categories from './components/Categories'
import WhyWorkInTeens from './components/Whywork'
import EarningWithFunngro from './components/Earnwithfungrow'
import TrustedBySection from './components/TrustedBy'
import FunngroSharkTank from './components/FunngroSharkTank'
import FunBlogs from './components/Blogs'
import ProjectIdeas from './components/ProjectIdeas'
import FeaturedSection from './components/FeaturedSection'
import TestimonialCarousel from './components/TestimonialCarousel'
import WhyWorkWithTeens from './components/WhyWorkTeens'
import FAQSection from './components/FAQ'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teen from './pages/Teen'
import Company from './pages/Company'

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Teen/>}/>
      <Route path='/company' element={<Company/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
