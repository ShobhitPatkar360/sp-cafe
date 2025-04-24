import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <Coffee 
              size={24} 
              className={`transition-colors ${isScrolled ? 'text-primary-700' : 'text-primary-600'}`} 
            />
            <span className="font-serif text-xl font-semibold text-primary-800">Shobhit Cafe</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `text-base font-medium hover:text-primary-700 transition-colors ${
                      isActive ? 'text-primary-700' : isScrolled ? 'text-gray-800' : 'text-gray-800'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `text-base font-medium hover:text-primary-700 transition-colors ${
                      isActive ? 'text-primary-700' : isScrolled ? 'text-gray-800' : 'text-gray-800'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `text-base font-medium hover:text-primary-700 transition-colors ${
                      isActive ? 'text-primary-700' : isScrolled ? 'text-gray-800' : 'text-gray-800'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-primary-700" />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-primary-700' : 'text-primary-700'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="container-custom">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `block py-2 text-base font-medium ${isActive ? 'text-primary-700' : 'text-gray-800'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `block py-2 text-base font-medium ${isActive ? 'text-primary-700' : 'text-gray-800'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `block py-2 text-base font-medium ${isActive ? 'text-primary-700' : 'text-gray-800'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;