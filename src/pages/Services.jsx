import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testinomials from '../components/Testinomials.jsx';
import { FaHome, FaBuilding, FaUserTie, FaHouseDamage } from 'react-icons/fa'; // Import icons from react-icons/fa
import bgImage from '../assets/images/hero_bg_4.jpg'; // Ensure this path is correct

// Feature data and components
const features = [
  {
    icon: <FaHome />, // Use FaHome for the icon
    title: "Quality Properties",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    delay: "300",
  },
  {
    icon: <FaUserTie />, // Use FaUserTie for a different icon
    title: "Top Rated Agent",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    delay: "400",
  },
  {
    icon: <FaBuilding />, // Use FaBuilding for property-related services
    title: "Property for Sale",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    delay: "500",
  },
  {
    icon: <FaHouseDamage />, // Use FaHouseDamage for house-related services
    title: "House for Sale",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    delay: "600",
  },
  {
    icon: <FaHome />, // Use FaHome for the icon
    title: "Quality Properties",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    delay: "300",
  },
  {
    icon: <FaUserTie />, // Use FaUserTie for a different icon
    title: "Top Rated Agent",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    delay: "400",
  },
  {
    icon: <FaBuilding />, // Use FaBuilding for property-related services
    title: "Property for Sale",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    delay: "500",
  },
  {
    icon: <FaHouseDamage />, // Use FaHouseDamage for house-related services
    title: "House for Sale",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    delay: "600",
  },
  // Add more features if needed
];

const FeatureBox = ({ icon, title, description, delay }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="text-4xl mb-4 text-red-600">{icon}</div>
      <h3 className="text-black text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-red-600 underline hover:text-green-800">
        Read more
      </a>
    </div>
  );
};
const FeaturesSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-12"> {/* Increased left-right padding */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8"> {/* Updated grid layout */}
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


const ServicesPage = () => (
  <>
    <Navbar />
    <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4">Services</h1>
        <p className="text-lg">
          <span className="text-gray-300">Home</span> / Services
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>

    {/* Features Section */}
    <FeaturesSection />
    <Testinomials />
<br/>
    <Footer />
  </>
);

export default ServicesPage;
