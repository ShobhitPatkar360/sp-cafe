import React from 'react';
import { motion } from 'framer-motion';

interface MenuHighlightProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const MenuHighlight: React.FC<MenuHighlightProps> = ({ title, description, price, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-soft overflow-hidden"
    >
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-serif font-medium">{title}</h3>
            <span className="text-accent-600 font-medium">{price}</span>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuHighlight;