import React from 'react';

const RealEstateStats = () => {
  return (
    <section className="py-12 bg-gray-100">
      {/* Image Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-8"> {/* Added px-4 for left and right margin */}
  <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg"> {/* Adjusted height */}
    <img
      src="https://codewithsadee.github.io/homeverse/assets/images/property-1.jpg" // Replace with your image URL
      alt="Property 1"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg"> {/* Adjusted height */}
    <img
      src="https://codewithsadee.github.io/homeverse/assets/images/blog-1.png" // Replace with your image URL
      alt="Property 2"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg"> {/* Adjusted height */}
    <img
      src="https://codewithsadee.github.io/homeverse/assets/images/blog-3.jpg" // Replace with your image URL
      alt="Property 3"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* Statistics */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Stat 1 */}
        <div>
          <h3 className="text-4xl font-bold text-red-900">2,917</h3>
          <p className="text-gray-600"># of Buy Properties</p>
        </div>

        {/* Stat 2 */}
        <div>
          <h3 className="text-4xl font-bold text-red-900">3,918</h3>
          <p className="text-gray-600"># of Sell Properties</p>
        </div>

        {/* Stat 3 */}
        <div>
          <h3 className="text-4xl font-bold text-red-900">38,928</h3>
          <p className="text-gray-600"># of All Properties</p>
        </div>

        {/* Stat 4 */}
        <div>
          <h3 className="text-4xl font-bold text-red-900">1,291</h3>
          <p className="text-gray-600"># of Agents</p>
        </div>
      </div>
    </section>
  );
};

export default RealEstateStats;
