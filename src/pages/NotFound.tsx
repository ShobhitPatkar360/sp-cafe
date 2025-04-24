import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >
        <Coffee size={64} className="text-primary-500 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          It seems the page you're looking for has disappeared like the last sip of a perfect latte.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary inline-flex items-center"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;