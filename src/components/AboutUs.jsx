import React from "react";

// Card data
const propertyTypes = [
  { icon: "🏠", title: "Family House", count: 122, color: "bg-white", textColor: "text-red-500" },
  { icon: "🏡", title: "House & Villa", count: 155, color: "bg-white", textColor: "text-green-500" },
  { icon: "🏢", title: "Apartment", count: 300, color: "bg-white", textColor: "text-yellow-500" },
  { icon: "🏬", title: "Office & Studio", count: 80, color: "bg-white", textColor: "text-purple-500" },
  { icon: "🏛️", title: "Villa & Condo", count: 80, color: "bg-white", textColor: "text-blue-500" },
];

// Card component
const PropertyCard = ({ icon, title, count, color, textColor }) => {
  return (
    <div className={`p-6 ${color} rounded-lg shadow-md flex flex-col items-center justify-center`}>
      <div className={`text-5xl ${textColor} mb-4`}>{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{count} Properties</p>
    </div>
  );
};

// Main component
const PropertyTypes = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Featured Property Types</h2>
        <p className="text-gray-500">Find All Type of Property.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-8xl mx-auto px-6">
        {propertyTypes.map((property, index) => (
          <PropertyCard
            key={index}
            icon={property.icon}
            title={property.title}
            count={property.count}
            color={property.color}
            textColor={property.textColor}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
