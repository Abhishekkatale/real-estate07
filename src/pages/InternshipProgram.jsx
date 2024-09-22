import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaCloud, FaDatabase, FaPencilAlt } from 'react-icons/fa';
import { SiCyberdefenders } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

const internshipTopics = [
  { title: 'Cloud Internship', icon: <FaCloud className="text-green-500 text-6xl" />, syllabusLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_CLOUD', brochureLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_CLOUD' },
  { title: 'Cybersecurity Internship', icon: <SiCyberdefenders className="text-green-500 text-6xl" />, syllabusLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_CYBERSECURITY', brochureLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_CYBERSECURITY' },
  { title: 'DevOps', icon: <FaCloud className="text-green-500 text-6xl" />, syllabusLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_DEVOPS', brochureLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_DEVOPS' },
  { title: 'Backend Internship', icon: <FaDatabase className="text-green-500 text-6xl" />, syllabusLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_BACKEND', brochureLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_BACKEND' },
  { title: 'Data Science Internship', icon: <GiArtificialIntelligence className="text-green-500 text-6xl" />, syllabusLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_DATA_SCIENCE', brochureLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_DATA_SCIENCE' },
  { title: 'Frontend Internship', icon: <FaCode className="text-green-500 text-6xl" />, syllabusLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_FRONTEND', brochureLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_FRONTEND' },
  { title: 'Full Stack Internship', icon: <FaCode className="text-green-500 text-6xl" />, syllabusLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_FULL_STACK', brochureLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_FULL_STACK' },
  { title: 'Graphics Internship', icon: <FaPencilAlt className="text-green-500 text-6xl" />, syllabusLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_GRAPHICS', brochureLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_GRAPHICS' },
];

const InternshipProgramPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Explore Our Exciting Internship Opportunities
            </h1>
            <p className="text-lg text-gray-700">
              Dive into our diverse range of internship programs and gain hands-on experience in various fields. Our programs are designed to provide you with the skills and knowledge needed to excel in your career.
            </p>
          </motion.div>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {internshipTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:border-green-500 transition-all duration-300 relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center mb-6">
                      {topic.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-700 mb-4">
                      Learn and grow in the field of {topic.title}. Gain valuable experience and enhance your skills with our comprehensive internship program.
                    </p>
                    <div className="flex flex-col gap-4">
                      <a
                        href={topic.syllabusLink}
                        className="inline-flex items-center justify-center px-6 py-2 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
                        download
                      >
                        Explore Syllabus
                      </a>
                      <a
                        href={topic.brochureLink}
                        className="inline-flex items-center justify-center px-6 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300"
                        download
                      >
                        Download Brochure
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Get Started?</h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScgnj1VZZm-pGXFULQpuFzN_AXHhVnCGkwtqbpdROzST3xy3g/viewform"
              className="relative inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-full overflow-hidden group"
            >
              Apply Now
              <span className="absolute w-full h-32 -top-8 -left-2 bg-green-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="absolute w-full h-32 -top-8 -left-2 bg-green-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              <span className="group-hover:opacity-100 opacity-0 absolute  z-10">Apply Now</span>
            </a>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InternshipProgramPage;
