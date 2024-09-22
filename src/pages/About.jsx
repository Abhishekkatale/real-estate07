import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FounderSection from '../components/FounderSection.jsx';
import CompanyHistorySection from '../components/CompanyHistorySection.jsx';
import OurValuesSection from '../components/OurValuesSection.jsx';
import MissionSection from '../components/MissionSection.jsx';
import bgImage from '../assets/images/hero_bg_3.jpg'; // Ensure this path is correct
import TheTeam from '../components/TheTeam.jsx';

const AboutUs = () => (
  <>
    <Navbar />

    <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4">About</h1>
        <p className="text-lg">
          <span className="text-gray-300">Home</span> / About
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>

    <FounderSection />
    <CompanyHistorySection />
    <OurValuesSection />
    <TheTeam />
    <Footer />
  </>
);

export default AboutUs;
