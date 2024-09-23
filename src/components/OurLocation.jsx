
import React from "react";

const locations = [
  {
    image: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLHKkhPncgQFY6m7wGI-L2R9IMI4rFmtPxQ&usqp=CAU')",
    name: "New Orleans, Louisiana",
    villas: 12,
    offices: 7,
    apartments: 10,
  },
  {
    image: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_ZVRic62c_vv7hJhbbh869nHQyPcjC2xdA&usqp=CAU')",
    name: "Jersey, United State",
    villas: 12,
    offices: 7,
    apartments: 10,
  },
  {
    image: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREm9nfUK6ta2gVv5ia4-9eTidgkC2sqN__g&usqp=CAU')",
    name: "Liverpool, London",
    villas: 12,
    offices: 7,
    apartments: 10,
  },
  {
    image: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOHJ_mApaqfBAdmin5DcD9JHth-WCRx9VjA&usqp=CAU')",
    name: "New York, United States",
    villas: 12,
    offices: 7,
    apartments: 10,
  },
  {
    image: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQbuW3Ynh3Gz_3P3O3WnzqTo0mviVlET0Qg&usqp=CAU')",
    name: "Montreal, Canada",
    villas: 12,
    offices: 7,
    apartments: 10,
  },
  {
    image: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9sO8lsSmIjDbe1xh2ZduXHJX_j9AbTqFrw&usqp=CAU')",
    name: "California, USA",
    villas: 12,
    offices: 7,
    apartments: 10,
  },
];
const App = () => {
    return (
      <div className="container mx-auto px-12 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Explore By Location</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden shadow-lg"
              style={{ backgroundImage: location.image }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-4">
                <h2 className="text-xl font-semibold">{location.name}</h2>
                <p className="mt-2 text-sm">
                  {location.villas} Villas &bull; {location.offices} Offices &bull; {location.apartments} Apartments
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default App;
  
