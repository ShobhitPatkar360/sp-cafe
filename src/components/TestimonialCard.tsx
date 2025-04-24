import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, location }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-soft"
    >
      <Quote size={24} className="text-primary-300 mb-4" />
      <p className="italic text-gray-800 mb-6">{quote}</p>
      <div>
        <p className="font-medium text-primary-700">{author}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;