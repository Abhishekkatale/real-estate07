import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaPen, FaVideo, FaImage, FaClipboard } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from 'react-slick';

const faqs = [
  { question: 'What is included in your content creation services?', answer: 'Our content creation services cover a range of formats including blog posts, videos, infographics, and social media content. We aim to create engaging content that resonates with your audience.' },
  { question: 'How do you ensure content quality?', answer: 'We follow a thorough process that includes research, planning, creation, and review. Our team of experienced writers, designers, and videographers ensures high-quality content tailored to your brand.' },
  { question: 'Can you help with content strategy?', answer: 'Yes, we offer content strategy services to plan and execute content that aligns with your business goals and target audience. This includes content planning, distribution strategies, and performance analysis.' },
  { question: 'Do you provide content for social media?', answer: 'Absolutely! We create tailored social media content that engages your audience and drives interactions. This includes posts, stories, and ads designed to enhance your social media presence.' },
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

const ContentCreationPage = () => {
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
              Elevate Your Brand with Engaging Content Creation
            </h1>
            <p className="text-lg text-gray-700">
              At MusiTech, our content creation services are designed to capture your audience's attention and drive engagement. From compelling copy to stunning visuals and videos, we provide a comprehensive approach to content that aligns with your brand’s voice and goals.
            </p>
          </motion.div>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaPen className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Copywriting</h2>
                  <p>
                    Crafting compelling and persuasive copy for websites, blogs, and other digital platforms to engage your audience and drive conversions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaVideo className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Video Production</h2>
                  <p>
                    Producing high-quality videos that tell your brand’s story and capture the attention of your audience. We handle everything from scripting to editing.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaImage className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Graphic Design</h2>
                  <p>
                    Creating visually appealing graphics and infographics to enhance your content and communicate your message effectively.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaClipboard className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Content Strategy</h2>
                  <p>
                    Developing a strategic plan for your content to ensure it aligns with your business goals and effectively reaches your target audience.
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

export default ContentCreationPage;
