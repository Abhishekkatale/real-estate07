import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa'; // Import star icon for ratings

// Import the testimonial images
import person1 from '../assets/images/person_1-min.jpg';
import person2 from '../assets/images/person_2-min.jpg';
import person3 from '../assets/images/person_1-min.jpg';
import person4 from '../assets/images/person_2-min.jpg';
import person5 from '../assets/images/person_1-min.jpg';
import person6 from '../assets/images/person_2-min.jpg';
import person7 from '../assets/images/person_1-min.jpg';
import person8 from '../assets/images/person_2-min.jpg';


// Slick slider settings
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

// Testimonials data
const testimonials = [
  {
    name: 'Abhishek',
    image: person1,
    position: 'Designer, Co-founder',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  {
    name: 'Ghanashyam',
    image: person2,
    position: 'Designer, Co-founder',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  {
    name: 'Abhishek',
    image: person3,
    position: 'Designer, Co-founder',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  {
    name: 'Ghanashyam',
    image: person4,
    position: 'Designer, Co-founder',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  {
    name: 'Abhishek',
    image: person5,
    position: 'Designer, Co-founder',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  {
    name: 'Ghanashyam',
    image: person6,
    position: 'Designer, Co-founder',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  {
    name: 'Abhishek',
    image: person7,
    position: 'Designer, Co-founder',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  {
    name: 'Ghanashyam',
    image: person8,
    position: 'Designer, Co-founder',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  
  // Add more testimonials here as needed
];

const TestimonialCarousel = () => {
  return (
    <div className="py-12 bg-gray-100">
      {/* Heading for the testimonial section */}
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      
      {/* Slider with settings */}
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
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <FaStar key={idx} className="text-yellow-500 h-5 w-5" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="mt-2 text-gray-500">{testimonial.text}</p>
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
