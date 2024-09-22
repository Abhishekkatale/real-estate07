import { useState } from 'react';
import { FaBars, FaTimes, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="p-6 bg-secondary shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-accent">Property</span>
        </Link>
        <button onClick={toggleMenu} className="lg:hidden text-accent z-50">
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
        <ul className={`fixed top-0 right-0 w-full bg-secondary lg:bg-transparent lg:relative lg:flex lg:space-x-6 lg:items-center lg:justify-center transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 pt-16' : 'translate-x-full lg:translate-x-0'} ${isOpen ? 'flex flex-col items-center' : ''} shadow-lg lg:shadow-none`}>
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/services', label: 'Services' },
            { to: '/our-team', label: 'Properties' },
            { to: '/contactUs', label: 'Contact Us' },
          ].map((item, idx) => (
            <li key={idx} className={`${isOpen ? 'text-center mb-4' : ''}`}>
              <Link
                to={item.to}
                className="py-2 px-4 lg:py-0 lg:px-4 hover:text-red-500 flex items-center relative group transition-colors duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Link
            to="/"
            className="bg-red-500 text-primary py-2 px-6 rounded hover:bg-opacity-80 flex items-center justify-center transition-colors duration-300 ease-in-out w-32 h-10"
          >
            <FaSignInAlt className="mr-2" /> Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
