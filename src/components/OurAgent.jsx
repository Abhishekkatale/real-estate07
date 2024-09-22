import React from 'react';
import Slider from 'react-slick';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons for social media

// Import the testimonial images
import person1 from '../assets/images/person_1-min.jpg';
import person2 from '../assets/images/person_2-min.jpg';
import person3 from '../assets/images/person_1-min.jpg';
import person4 from '../assets/images/person_2-min.jpg';


// Slick slider settings
const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
                slidesToShow: 1,
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

// Testimonials data
const testimonials = [
    {
        name: 'Abhishek',
        image: person1,
        position: 'Designer, Co-founder',
        message: 'This is a fantastic platform! It has changed the way I work.',
    },
    {
        name: 'Ghanashyam',
        image: person2,
        position: 'Designer, Co-founder',
        message: 'Amazing experience, highly recommend to everyone i think.',
    },
    {
        name: 'Abhishek',
        image: person3,
        position: 'Designer, Co-founder',
        message: 'The support team is very responsive and helpful journey.',
    },
    {
        name: 'Ghanashyam',
        image: person4,
        position: 'Designer, Co-founder',
        message: 'A great place to learn , grow and sharing knowledge with commuinity',
    },
   
];

const TestimonialCarousel = () => {
    return (
        <div className="py-12 bg-white-100">
            <h2 className="text-3xl font-bold text-center mb-8">Our Agents</h2>
            <div className="container mx-auto px-8">
                <Slider {...slickSettings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full w-20 h-20 mx-auto mb-4"
                                />
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                    <p className="text-gray-600 mb-4">{testimonial.position}</p>
                                    <p className="text-gray-500 mb-4">{testimonial.message}</p> {/* Message added here */}
                                    
                                    {/* Social Media Icons */}
                                    <div className="flex justify-center space-x-4">
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className="text-black h-6 w-6 hover:text-red-500 transition-colors duration-300" />
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <FaTwitter className="text-black h-6 w-6 hover:text-red-500 transition-colors duration-300" />
                                        </a>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="text-black h-6 w-6 hover:text-red-500 transition-colors duration-300" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
