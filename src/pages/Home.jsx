import { useState } from 'react';
import { FaCode, FaBullhorn, FaPenNib, FaUsers, FaHandshake,FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import OurAgent from '../components/OurAgent.jsx';



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-primary text-text">
      <Navbar/>
      <Hero/>

      <main className="container mx-auto px-4 py-12" id='services'>
        <ServicesSection />
        <AboutUs />
        <WhyChooseUs />
        <OurAgent />
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
