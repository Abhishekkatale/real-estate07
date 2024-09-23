import React from "react";
import { FaBed, FaBath } from "react-icons/fa";

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

const PropertyGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Centered title and description */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Property Listed</h2>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.slice(0, 3).map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {properties.slice(3, 6).map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
