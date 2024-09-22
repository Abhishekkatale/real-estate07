import React from 'react';
/* my react */
const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-12 flex flex-col md:flex-row items-center justify-between px-8 md:px-24">
      {/* Left Content Section */}
      <div className="flex flex-col space-y-6 max-w-lg md:order-1">
        <div className="flex items-center space-x-2">
          <span className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7l9 9m0 0l9-9m-9 9V3"
              />
            </svg>
          </span>
          <p className="text-gray-600 font-medium">Real Estate Agency</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Find Your Dream <br /> House By Us
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <button className="bg-red-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-red-600 transition">
          Make An Enquiry
        </button>
      </div>

      {/* Right Image Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 md:order-2">
        <img
          src="https://codewithsadee.github.io/homeverse/assets/images/hero-banner.png"
          alt="House Illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
