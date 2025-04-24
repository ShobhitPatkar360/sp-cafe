import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Interior of cafe with wooden tables and chairs"
    },
    {
      src: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Barista making coffee"
    },
    {
      src: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Coffee being poured"
    },
    {
      src: "https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Fresh pastries display"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="overflow-hidden rounded-lg shadow-soft h-64"
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;