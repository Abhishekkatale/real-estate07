import { FaHome, FaBuilding, FaUserTie } from 'react-icons/fa'; // Import icons
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
// Feature data
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
];

// FeatureBox component
const FeatureBox = ({ icon, title, description, delay }) => (
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

// ServicesSection component
const ServicesSection = () => (
  <section className="text-center mb-12">
    <h2 className="text-4xl font-bold text-accent mb-4">Our Services</h2>
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
        {/* View All Services button */}
        <div className="mt-8">
          <Link
            to="/services"
            className="inline-block bg-red-500 text-white py-3 px-8 rounded hover:bg-red-600 transition-colors duration-300 ease-in-out"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
