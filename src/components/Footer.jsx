import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-text py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* Left Section: Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          {/* Logo as text */}
          <h1 className="text-2xl font-bold mb-4">Property</h1>
          <p className="text-base text-center md:text-left">
            Easiest way to find your dream home.
          </p>
          <ul className="flex justify-center md:justify-start space-x-6 mt-4">
            <li><a href="https://facebook.com" aria-label="Facebook" className="hover:text-red-500"><FaFacebookF size={20} /></a></li>
            <li><a href="https://twitter.com" aria-label="Twitter" className="hover:text-red-500"><FaTwitter size={20} /></a></li>
            <li><a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-red-500"><FaLinkedinIn size={20} /></a></li>
            <li><a href="https://instagram.com" aria-label="Instagram" className="hover:text-red-500"><FaInstagram size={20} /></a></li>
          </ul>
        </div>
        
        {/* Center Section: Quick Links and Legal */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Home</a></li>
              <li><a href="/about" className="hover:text-red-500">About</a></li>
              <li><a href="/services" className="hover:text-red-500">Services</a></li>
              <li><a href="/our-team" className="hover:text-red-500">Properties</a></li>
              <li><a href="/contactUs" className="hover:text-red-500">Contact Us</a></li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0 text-center md:text-left">
            <h3 className="font-semibold mb-4 text-black">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-red-500">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section: Contact */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold mb-4 text-black">Get in Touch</h3>
          <div className="flex justify-center md:justify-end items-center space-x-2">
            <FaEnvelope size={24} className="text-black" />
            <a href="mailto:support@codehelp.in" className="hover:text-red-500">Contact@property.in</a>
          </div>
        </div>
        
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        <p>&copy; 2024 MusiTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
