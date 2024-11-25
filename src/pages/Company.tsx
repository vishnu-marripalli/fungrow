import React from 'react'
import Hero from '../components/Hero'
import WhyWorkInTeens from '../components/Whywork'
import WhyWorkWithTeens from '../components/WhyWorkTeens'
import ProjectIdeas from '../components/ProjectIdeas'
import Categories from '../components/Categories'
import TrustedBySection from '../components/TrustedBy'
import TestimonialCarousel from '../components/TestimonialCarousel'
import EarningWithFunngro from '../components/Earnwithfungrow'
import FunngroSharkTank from '../components/FunngroSharkTank'
import FeaturedSection from '../components/FeaturedSection'
import FunBlogs from '../components/Blogs'
import FAQSection from '../components/FAQ'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Company = () => {
  return (
    <>
    <Navbar />
    {/* <div className="bg-gradient-to-br from-gray-50 to-blue-50 "> */}
    <div className="bg-white overflow-x-hidden">
    <Hero/>
    <ProjectIdeas/>
    <TestimonialCarousel/>
    <Categories />
    <TrustedBySection />
    <WhyWorkWithTeens />
    <EarningWithFunngro/>
    <FunBlogs/>
    <FAQSection />
    </div>
    <Footer/>
    </>
  )
}

export default Company
