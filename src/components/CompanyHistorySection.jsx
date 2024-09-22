import React from 'react';
import { FaStar, FaHome, FaLeaf, FaGlassMartini, FaShieldAlt } from 'react-icons/fa'; // Import relevant icons

const RealEstateSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-8 lg:px-24 bg-white">
      {/* Left Image Section */}
      <div className="relative lg:w-1/2 w-full flex items-center justify-center">
        {/* Main Image */}
        <img
          src="https://codewithsadee.github.io/homeverse/assets/images/about-banner-1.png"
          alt="Room Interior"
          className="w-full max-w-md shadow-lg rounded-lg"
        />
        {/* Overlapping Image */}
        <img
          src="https://codewithsadee.github.io/homeverse/assets/images/about-banner-2.jpg"
          alt="Couch"
          className="absolute bottom-0 left-12 w-1/2 shadow-lg rounded-lg transform translate-y-8"
        />
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 w-full mt-12 lg:mt-0 lg:ml-12">
        {/* Tag */}
        <div className="bg-red-100 text-red-600 font-semibold px-4 py-1 inline-block rounded-full mb-4">
          About Us
        </div>
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">
          The Leading Real Estate Rental Marketplace.
        </h2>
        {/* Description */}
        <p className="text-gray-600 mb-6">
          Over 39,000 people work for us in more than 70 countries all over the world. This breadth of global coverage, combined with specialist services.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <span className="bg-red-100 text-red-600 p-2 rounded-full">
              <FaHome />
            </span>
            <span>Smart Home Design</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-red-100 text-red-600 p-2 rounded-full">
              <FaLeaf />
            </span>
            <span>Beautiful Scene Around</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-red-100 text-red-600 p-2 rounded-full">
              <FaGlassMartini />
            </span>
            <span>Exceptional Lifestyle</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-red-100 text-red-600 p-2 rounded-full">
              <FaShieldAlt />
            </span>
            <span>Complete 24/7 Security</span>
          </div>
        </div>

        {/* Testimonial */}
        <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600 mb-6">
          "Enimad minim veniam quis nostrud exercitation ullamco laboris."
        </blockquote>

        {/* Button */}
        <a
          href="/services"
          className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition"
        >
          OUR SERVICES
        </a>
      </div>
    </section>
  );
};

export default RealEstateSection;
