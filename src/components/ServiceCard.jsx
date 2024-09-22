import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <motion.a
    href={link} // Navigate to the specific link
    className="relative block max-w-sm mx-auto overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg group transition-transform duration-300 ease-in-out hover:scale-105"
    target="_blank" // Open in a new tab
    rel="noopener noreferrer" // Security measure for opening external links
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col items-center p-6 text-center group-hover:bg-gray-100 transition-colors duration-300 ease-in-out">
      <Icon className="h-12 w-12 text-accent mb-4" />
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <div className="mt-6">
        <span className="text-red-500 font-bold">Check Out</span>
      </div>
    </div>
  </motion.a>
);

export default ServiceCard;
