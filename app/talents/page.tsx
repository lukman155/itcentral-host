import Header from '@/components/Header'
import JobPosting from '@/components/JobPosting'
import JuniorPartners from '@/components/JuniorPartners'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ui/ProjectCard'
import React from 'react'


function page() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header title="OUR TALENTS" />
      <div style={{ paddingTop: 50 }}>
        <h3 style={{ color: "#272D37", fontWeight: "bold", fontSize: 32, textAlign: "center" }}>Projects Showcase</h3>
        <p style={{ color: "#5F6D7E", fontWeight: "regular", fontSize: 16, textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur. Posuere volutpat .</p>
        <ProjectCard />
        <JuniorPartners />
        <JobPosting />
        <Footer />
      </div>
    </div>
  )
}

export default page
