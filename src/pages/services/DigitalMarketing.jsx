import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaBullhorn, FaChartLine, FaSearch, FaHandshake } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from 'react-slick';

const faqs = [
  { question: 'What is included in your digital marketing services?', answer: 'Our digital marketing services encompass SEO, social media marketing, content marketing, email marketing, and paid advertising to drive traffic and increase your online presence.' },
  { question: 'How do you measure the success of a digital marketing campaign?', answer: 'We use various metrics such as traffic, engagement, conversion rates, and ROI to assess the effectiveness of our digital marketing strategies.' },
  { question: 'Can you help with social media management?', answer: 'Yes, we offer comprehensive social media management services to help you grow and engage with your audience on platforms like Facebook, Instagram, LinkedIn, and Twitter.' },
  { question: 'What are the benefits of SEO?', answer: 'SEO helps improve your website’s visibility on search engines, leading to increased organic traffic, higher credibility, and better user experience.' },
];

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const DigitalMarketingPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
              Elevate Your Brand with Our Digital Marketing Services
            </h1>
            <p className="text-lg text-gray-700">
              At MusiTech, our digital marketing services are designed to boost your online visibility and drive results. From strategic SEO to targeted advertising, our team is committed to enhancing your brand's presence and achieving your marketing goals.
            </p>
          </motion.div>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaBullhorn className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Content Marketing</h2>
                  <p>
                    We create compelling content that engages your audience and drives conversions. Our strategies include blog posts, infographics, and videos.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaChartLine className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">SEO Optimization</h2>
                  <p>
                    Improve your website's search engine ranking with our SEO services. We focus on on-page and off-page strategies to boost your online presence.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaSearch className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Paid Advertising</h2>
                  <p>
                    Maximize your reach with targeted paid advertising campaigns. We manage PPC, social media ads, and more to drive quality traffic to your site.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaHandshake className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Social Media Management</h2>
                  <p>
                    Engage with your audience and build your brand through strategic social media management. We handle content creation, scheduling, and analytics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Trusted By</h2>
            <div className="relative">
              <Slider {...slickSettings} className="py-4">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 p-4"
                  >
                    <div className="bg-gray-200 rounded-lg flex items-center justify-center p-2">
                      <img
                        src="https://via.placeholder.com/150x50?text=Logo"
                        alt={`Logo ${index}`}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
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

          <section className="py-12 px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <a
              href="https://wa.me/7822857872" // Replace with your WhatsApp number
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="mr-2 text-2xl" />
              Chat with Us on WhatsApp
            </a>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DigitalMarketingPage;
