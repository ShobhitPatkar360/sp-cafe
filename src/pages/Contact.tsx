import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    try {
      // Replace with your actual AWS API Gateway endpoint
      const response = await fetch('__aws_api_gateway_invoke_url/__resource', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage('There was a problem sending your message. Please try again later.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <div className="animate-fadeIn pt-20">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1]" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1415734/pexels-photo-1415734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" }}
        ></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              We'd love to hear from you. Reach out with questions, feedback, or just to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-medium mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">Our Location</h3>
                    <address className="not-italic text-gray-600">
                      Dharmapuri, Forest Colony<br />
                      Tajganj, Agra<br />
                      Uttar Pradesh
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: <a href="mailto:hello@artisanbrews.com" className="text-primary-700 hover:underline">shobhitpatkar2000@outlook.com</a><br />
                      Careers: <a href="mailto:jobs@artisanbrews.com" className="text-primary-700 hover:underline">jobs@some.domain.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">Call Us</h3>
                    <p className="text-gray-600">
                      Phone: <a href="tel:+15551234567" className="text-primary-700 hover:underline">(555) 123-4567</a><br />
                      Hours: 7am - 7pm, Monday to Friday
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-serif font-medium mb-4">Hours of Operation</h3>
                <table className="w-full text-gray-600">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Monday - Friday</td>
                      <td className="py-2 text-right">7:00 AM - 7:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">Saturday</td>
                      <td className="py-2 text-right">8:00 AM - 8:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday</td>
                      <td className="py-2 text-right">8:00 AM - 6:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-serif font-medium mb-8">Send Us a Message</h2>
              
              {formStatus === 'success' ? (
                <div className="bg-accent-100 text-accent-800 p-4 rounded-md mb-6 flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <p>Your message has been sent successfully! We'll get back to you shortly.</p>
                </div>
              ) : formStatus === 'error' ? (
                <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6 flex items-start gap-3">
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <p>{errorMessage}</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Catering">Catering</option>
                    <option value="Job Application">Job Application</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`btn btn-primary w-full flex justify-center items-center ${formStatus === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-medium mb-8 text-center">Find Us</h2>
          <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
            {/* Replace with actual map embedding - for now showing a placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4005540576463!2d78.03956727544868!3d27.17514477649168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1745990701813!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;