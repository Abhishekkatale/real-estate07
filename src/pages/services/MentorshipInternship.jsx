import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaUserTie, FaBookOpen, FaHandshake, FaCalendarAlt, FaClock, FaLaptop } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const faqs = [
  { question: 'What is included in your mentorship program?', answer: 'Our mentorship program includes one-on-one sessions with industry professionals, guidance on career development, and support for personal growth.' },
  { question: 'How can I apply for an internship?', answer: 'You can apply for an internship by submitting your resume through our application portal. Our team will review your application and contact you with further steps.' },
  { question: 'What are the benefits of participating in your programs?', answer: 'Participants gain valuable industry experience, receive mentorship from experts, and have the opportunity to network with professionals in their field.' },
  { question: 'Are the programs paid?', answer: 'Yes, both our mentorship and internship programs offer compensation based on the role and level of responsibility.' },
];

const testimonials = [
  {
    name: 'Jane Matthews',
    role: 'Designer',
    company: 'Musitech',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet.',
    imageUrl: 'https://shorturl.at/bNNLR',
  },
  {
    name: 'Mary Smith',
    role: 'Developer',
    company: 'Musitech',
    testimonial: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem.',
    imageUrl: 'https://shorturl.at/bNNLR',
  },
  {
    name: 'Mary Smith',
    role: 'Developer',
    company: 'Musitech',
    testimonial: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem.',
    imageUrl: 'https://shorturl.at/bNNLR',
  },
  {
    name: 'Mary Smith',
    role: 'Developer',
    company: 'Musitech',
    testimonial: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem.',
    imageUrl: 'https://shorturl.at/bNNLR',
  },
  // Add more testimonials...
];

const MentorshipAndInternshipPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <>
      <Navbar />
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Empower Your Career with Our Mentorship & Internship Programs
            </h1>
            <p className="text-lg text-gray-700">
              At MusiTech, we provide exceptional mentorship and internship opportunities to help you grow professionally and achieve your career goals. Whether you're looking for guidance or hands-on experience, our programs are designed to support your success.
            </p>
          </motion.div>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                  <div className="mb-4">
                    <FaBookOpen className="text-green-500 text-4xl mb-2" />
                    <h2 className="text-2xl font-semibold mb-2">Cloud Computing (AWS)</h2>
                    <p className="text-gray-600">
                      Learn AWS and DevOps from Scratch and Kickstart your career in and DevOps                    </p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Starting from 2nd September 2024</p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaClock className="text-gray-500 mr-2" />
                    <p className="text-gray-600">6:00 PM - 7:00 PM</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <FaLaptop className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Online</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <img src="https://shorturl.at/nUAUs" alt="Instructor" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="text-gray-900 font-semibold">Raj Raut</p>
                      <p className="text-gray-500 text-sm">Instructor</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-green-600 mb-4">₹ 999/-</div>

                  {/* Call-to-Action Button */}
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
                      Enroll Now
                    </button>
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                  <div className="mb-4">
                    <FaBookOpen className="text-green-500 text-4xl mb-2" />
                    <h2 className="text-2xl font-semibold mb-2">Frontend Development</h2>
                    <p className="text-gray-600">
                      Learn Frontend Development and Become Internship Ready in Just 2 Months
                    </p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Starting from 2nd September 2024</p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaClock className="text-gray-500 mr-2" />
                    <p className="text-gray-600">6:00 PM - 7:00 PM</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <FaLaptop className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Online</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <img src="https://shorturl.at/S9eXm" alt="Instructor" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="text-gray-900 font-semibold">Sayuri Kamble</p>
                      <p className="text-gray-500 text-sm">Instructor</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-green-600 mb-4">₹ 999/-</div>

                  {/* Call-to-Action Button */}
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
                      Enroll Now
                    </button>
                  </a>
                </div>


              </div>
            </div>
          </section>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="max-w-2xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <div
                      className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg shadow-md cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-xl font-semibold">{faq.question}</h3>
                      <div>
                        {activeIndex === index ? (
                          <FaArrowUp className="text-green-500 text-xl" />
                        ) : (
                          <FaArrowDown className="text-green-500 text-xl" />
                        )}
                      </div>
                    </div>
                    {activeIndex === index && (
                      <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 lg:px-12 bg-gray-100">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
              <div className="max-w-2xl mx-auto">
                <Slider {...slickSettings} className="py-4">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg flex p-6"
                      style={{ width: '600px', height: '220px' }} // Adjust card size
                    >
                      {/* Left Section: Image, Name, Role, and Company */}
                      <div className="w-1/3 flex flex-col justify-center items-center">
                        <img
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <p className="text-lg font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}, <span className="text-green-500">{testimonial.company}</span>
                        </p>
                      </div>

                      {/* Right Section: Testimonial Text */}
                      <div className="w-2/3 pl-6 text-left flex flex-col justify-center">
                        <p className="text-gray-600 italic">
                          "{testimonial.testimonial}"
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>


          <section className="py-12 px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Check Out Internship Program</h2>
            <a
              href="/internship-program" // Replace with the actual link to your internship program page
              className="relative inline-flex items-center justify-center w-auto min-w-[200px] h-12 p-7 bg-black text-white text-lg font-bold rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-in-out delay-200"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out delay-400"></span>
              <span className="relative z-10">Explore Internship Opportunities</span>
            </a>


          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MentorshipAndInternshipPage;
