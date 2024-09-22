import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import bgImage from '../assets/images/hero_bg_1.jpg'; // Ensure this path is correct

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <section
                className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="text-center text-white z-10">
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg">
                        <span className="text-gray-300">Home</span> / Contact
                    </p>
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </section>
            <div className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Section - Contact Info */}
                    <div className="space-y-8">
                        {/* Location */}
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-white bg-red-800 p-2 rounded-full text-3xl w-10 h-10 flex items-center justify-center" />
                            <div>
                                <h4 className="font-bold text-lg">Location:</h4>
                                <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                            </div>
                        </div>

                        {/* Open Hours */}
                        <div className="flex items-center space-x-4">
                            <FaClock className="text-white bg-red-800 p-2 rounded-full text-3xl w-10 h-10 flex items-center justify-center" />
                            <div>
                                <h4 className="font-bold text-lg">Open Hours:</h4>
                                <p>Sunday–Friday: 11:00 AM – 23:00 PM</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-white bg-red-800 p-2 rounded-full text-3xl w-10 h-10 flex items-center justify-center" />
                            <div>
                                <h4 className="font-bold text-lg">Email:</h4>
                                <p>info@Untree.co</p>
                            </div>
                        </div>

                        {/* Call */}
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-white bg-red-800 p-2 rounded-full text-3xl w-10 h-10 flex items-center justify-center" />
                            <div>
                                <h4 className="font-bold text-lg">Call:</h4>
                                <p>+1 1234 55488 55</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div>
                        <form className="space-y-6">
                            {/* Name and Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            {/* Subject */}
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />

                            {/* Message */}
                            <textarea
                                placeholder="Message"
                                rows="6"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-red-700 text-white rounded-md py-3 hover:bg-red-800 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
