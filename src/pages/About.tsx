import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Leaf, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn pt-20">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1]" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2600301/pexels-photo-2600301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" }}
        ></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              From a small passion project to a beloved community hub
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">The Beginning</h2>
              <p className="text-gray-700 mb-4">
                Artisan Brews began in 2015 as a small coffee cart at the local farmers market. Founder Elena Martinez, a third-generation coffee farmer's daughter, wanted to share the art of specialty coffee with her community.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a weekend hobby quickly gained a devoted following. People would line up before the market opened just to get a cup of Elena's carefully crafted coffee.
              </p>
              <p className="text-gray-700">
                Two years later, with the support of loyal customers and like-minded coffee enthusiasts, Artisan Brews opened its first brick-and-mortar location in the heart of Bean City.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/6205624/pexels-photo-6205624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Coffee shop owner preparing coffee" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do at Artisan Brews.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-soft flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
                  <Coffee size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium mb-3">Quality Above All</h3>
                <p className="text-gray-600">We never compromise on the quality of our ingredients. From ethically sourced coffee beans to locally produced milk and organic produce, we believe that quality ingredients make for quality experiences.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-soft flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
                  <Leaf size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium mb-3">Sustainability</h3>
                <p className="text-gray-600">We're committed to sustainable practices throughout our business. From compostable packaging to energy-efficient equipment and a reduced carbon footprint, we strive to make choices that benefit our planet.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-soft flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
                  <Heart size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium mb-3">Community Focus</h3>
                <p className="text-gray-600">We believe in fostering a sense of belonging and connection. Our café is designed to be a community hub where everyone feels welcome, from hosting local artists to supporting neighborhood initiatives.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-soft flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
                  <Sparkles size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium mb-3">Continuous Innovation</h3>
                <p className="text-gray-600">While we honor coffee traditions, we're not afraid to experiment and innovate. We regularly introduce new seasonal offerings, brewing methods, and flavor combinations to delight our customers.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The passionate individuals who bring Artisan Brews to life every day.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Elena Martinez" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-serif font-medium">Elena Martinez</h3>
              <p className="text-primary-700 mb-2">Founder & Head Roaster</p>
              <p className="text-gray-600 text-sm">Third-generation coffee farmer with a passion for bringing out the unique characteristics of each bean.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="James Wilson" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-serif font-medium">James Wilson</h3>
              <p className="text-primary-700 mb-2">Head Barista</p>
              <p className="text-gray-600 text-sm">Award-winning barista with an eye for detail and perfect latte art execution.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Sophie Chen" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-serif font-medium">Sophie Chen</h3>
              <p className="text-primary-700 mb-2">Pastry Chef</p>
              <p className="text-gray-600 text-sm">Culinary institute graduate specializing in artisanal baked goods with global influences.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/8108150/pexels-photo-8108150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="Marcus Johnson" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-serif font-medium">Marcus Johnson</h3>
              <p className="text-primary-700 mb-2">Community Manager</p>
              <p className="text-gray-600 text-sm">Former social worker who ensures our café remains a welcoming space for everyone.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Come Be Part of Our Story
            </h2>
            <p className="text-lg opacity-90 mb-8">
              We'd love to welcome you to Artisan Brews and share our passion for exceptional coffee and community.
            </p>
            <button className="btn btn-accent">
              Visit Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;