import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => (
  <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
    <p className="text-lg text-gray-700 mx-auto max-w-3xl">
      To deliver customized digital solutions that enhance our clients' online presence and achieve their business goals. We strive to build long-lasting partnerships by providing exceptional services and support. Our mission is to transform our clients' vision into reality through a combination of innovation, expertise, and dedication. We are committed to exceeding expectations and driving meaningful growth for every client we serve.
    </p>
  </motion.div>
);

export default MissionSection;
