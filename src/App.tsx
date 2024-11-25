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

function App() {
  return (
   <>
   <Navbar />
   <div className="">
   <Hero/>
   </div>
   <WhyWorkInTeens />
   <ProjectIdeas/>
   <Categories />
   <TrustedBySection />
   <EarningWithFunngro/>
   <FunngroSharkTank />
   <FunBlogs/>
   <Footer/>
   </>
  )
}

export default App
