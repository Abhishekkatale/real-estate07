import React from "react";
import Slider from "react-slick";
import { FaBed, FaBath } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link

// Sample Data
const properties = [
  {
    imgSrc: "https://themewagon.github.io/property/images/img_1.jpg",
    price: "$1,291,000",
    address: "5232 California Fake, Ave. 21BC",
    location: "California, USA",
    beds: 2,
    baths: 2,
  },
  {
    imgSrc: "https://themewagon.github.io/property/images/img_6.jpg",
    price: "$1,291,000",
    address: "5232 California Fake, Ave. 21BC",
    location: "California, USA",
    beds: 2,
    baths: 2,
  },
  {
    imgSrc: "https://themewagon.github.io/property/images/img_2.jpg",
    price: "$1,291,000",
    address: "5232 California Fake, Ave. 21BC",
    location: "California, USA",
    beds: 2,
    baths: 2,
  },
];

const PropertyCard = ({ property }) => (
  <div className="p-4 bg-white shadow-lg rounded-lg">
    <img
      src={property.imgSrc}
      alt="Property"
      className="w-full h-60 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-red-700">{property.price}</h3>
      <p className="text-gray-600">{property.address}</p>
      <p className="text-gray-800">{property.location}</p>
      <div className="flex items-center text-gray-500 mt-2">
        <FaBed className="mr-2" /> {property.beds} beds
        <FaBath className="ml-4 mr-2" /> {property.baths} baths
      </div>
      <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded-md">
        See details
      </button>
    </div>
  </div>
);

const PropertyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative"> {/* Decreased side margins */}
      <div className="flex justify-between items-center mb-6"> {/* Flex container for title and button */}
        <h2 className="text-3xl font-bold text-gray-800 text-left">Popular Properties</h2>
        <Link
            to="/our-team"
            className="inline-block bg-red-500 text-white py-3 px-8 rounded hover:bg-red-600 transition-colors duration-300 ease-in-out"
          >
            View All Properties
          </Link>
      </div>
      
      <Slider {...settings}>
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </Slider>
    </div>
  );
};

export default PropertyCarousel;
