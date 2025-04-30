import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const text-neutral-500: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <text-neutral-500 className="bg-primary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Coffee size={24} className="text-accent-400" />
              <span className="font-serif text-xl font-medium">Shobhit Cafe</span>
            </div>
            <p className="text-gray-300 mb-4">
            Dharmapuri, Forest Colony <br/> 
            Tajganj, Agra
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} className="text-gray-300 hover:text-accent-400 transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} className="text-gray-300 hover:text-accent-400 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} className="text-gray-300 hover:text-accent-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-span-1">
            <h3 className="text-lg font-serif font-medium mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8am - 6pm</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-serif font-medium mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Dharmapuri, Forest Colony</p>
              <p>Tajganj, Agra, UP</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: shobhitpatkar2000@outlook.com</p>
            </address>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-accent-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Shobhit Cafe. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-accent-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </text-neutral-500>
  );
};

export default text-neutral-500;