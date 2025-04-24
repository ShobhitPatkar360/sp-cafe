import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ChefHat, Users, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import TestimonialCard from '../components/TestimonialCard';
import MenuHighlight from '../components/MenuHighlight';
import Gallery from '../components/Gallery';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1]" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" }}
        ></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Crafting Perfect Moments, One Cup at a Time
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Welcome to Shobhit Cafe, where happiest moments becomes a memory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn btn-accent">
                Our Story
              </Link>
              <Link to="/contact" className="btn bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                Visit Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">What Makes Us Special</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the artistry and passion that goes into everything we serve at Artisan Brews.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-soft text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-6">
                <Coffee size={30} />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Artisan Coffee</h3>
              <p className="text-gray-600">Ethically sourced beans roasted in small batches to bring out their unique flavor profiles.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-soft text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-6">
                <ChefHat size={30} />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Homemade Treats</h3>
              <p className="text-gray-600">Fresh-baked pastries and treats made daily using seasonal, local ingredients.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-soft text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-6">
                <Users size={30} />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Community Space</h3>
              <p className="text-gray-600">A welcoming environment designed for connection, creativity, and comfort.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Signature Offerings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our most loved coffee and food options, crafted with care and premium ingredients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MenuHighlight 
              title="Maple Spice Latte"
              description="Our house-made maple syrup infused with cinnamon, nutmeg, and clove, combined with our signature espresso and velvety steamed milk."
              price="$5.50"
              image="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <MenuHighlight 
              title="Artisan Cold Brew"
              description="Steeped for 18 hours, our cold brew delivers a smooth, rich flavor with chocolate notes and a hint of cherry."
              price="$4.75"
              image="https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <MenuHighlight 
              title="Rustic Sourdough Avocado Toast"
              description="House-made sourdough topped with smashed avocado, heirloom cherry tomatoes, microgreens, and a sprinkle of our signature spice blend."
              price="$9.25"
              image="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <MenuHighlight 
              title="Seasonal Berry Scone"
              description="Buttery, flaky scone filled with seasonal berries and topped with a vanilla bean glaze."
              price="$4.25"
              image="https://images.pexels.com/photos/5848695/pexels-photo-5848695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors">
              View our full menu <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Experience Our Atmosphere</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Step into our cozy space and experience the warmth of Artisan Brews.</p>
          </div>
          
          <Gallery />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Read about the experiences of our valued customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The maple spice latte is a game-changer. It's my go-to every morning now!"
              author="Sarah K."
              location="Bean City"
            />
            <TestimonialCard 
              quote="Finally found a café where I can work for hours with the perfect ambiance, wifi, and incredible pastries."
              author="Michael T."
              location="Local Designer"
            />
            <TestimonialCard 
              quote="Their commitment to quality and sustainability really sets them apart. Plus, the avocado toast is to die for!"
              author="Jamie L."
              location="Food Blogger"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1]" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" }}
        ></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Visit Us Today
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Join us for a coffee experience that will keep you coming back.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-accent-400" />
                <span>123 Coffee Street, Bean City</span>
              </div>
              <span className="hidden md:block">•</span>
              <div>
                <span>Open Daily: 7am - 7pm</span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-accent mt-8">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;