import React from 'react';
import { FaTrophy, FaBriefcase, FaLightbulb, FaHeart } from 'react-icons/fa';

const AwardsSection = () => {
  return (
    <div className="bg-gray-200 py-16 text-center">
      {/* Title Section */}
      <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Awards</h2>
      <h3 className="text-3xl md:text-4xl font-semibold mt-2 text-black">
          Over 1,24,000+ Happy Users Being With Us, <br /> They Love Our Services
        </h3>
      </div>

      {/* Awards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-24">
        {/* Award 1 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-500 p-4 rounded-full">
            <FaTrophy className="text-white text-4xl" />
          </div>
          <h4 className="text-4xl font-bold text-black">32 M</h4>
          <p className="text-gray-400">Blue Burmin Award</p>
        </div>

        {/* Award 2 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-500 p-4 rounded-full">
            <FaBriefcase className="text-white text-4xl" />
          </div>
          <h4 className="text-4xl font-bold text-black">43 M</h4>
          <p className="text-gray-400">Mimo X11 Award</p>
        </div>

        {/* Award 3 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-500 p-4 rounded-full">
            <FaLightbulb className="text-white text-4xl" />
          </div>
          <h4 className="text-4xl font-bold text-black">51 M</h4>
          <p className="text-gray-400">Australian UGC Award</p>
        </div>

        {/* Award 4 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-500 p-4 rounded-full">
            <FaHeart className="text-white text-4xl" />
          </div>
          <h4 className="text-4xl font-bold text-black">42 M</h4>
          <p className="text-gray-400">IITCA Green Award</p>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
