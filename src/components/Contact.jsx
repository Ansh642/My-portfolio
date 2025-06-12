import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast.success("Message sent successfully!");
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div name="contact" className='w-full bg-gradient-to-b from-gray-800 to-gray-900 py-20'>
      <div className='max-w-6xl mx-auto px-8'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className='mb-16'
        >
          <motion.h2 variants={itemVariants} className='text-4xl font-bold text-white mb-4 relative inline-block'>
            Get In Touch
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400'></span>
          </motion.h2>
          <motion.p variants={itemVariants} className='text-gray-400 text-lg max-w-3xl'>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm'
          >
            <h3 className='text-white text-2xl font-bold mb-6'>Contact Information</h3>
            
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='p-3 bg-cyan-600/10 rounded-lg'>
                  <svg className='w-6 h-6 text-cyan-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className='text-gray-400 text-sm'>Email</h4>
                  <a href="mailto:anshagarwal642@gmail.com" className='text-cyan-400 hover:text-cyan-300 transition-colors duration-300'>anshagarwal642@gmail.com</a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='p-3 bg-cyan-600/10 rounded-lg'>
                  <svg className='w-6 h-6 text-cyan-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className='text-gray-400 text-sm'>Phone</h4>
                  <a href="tel:+918171579897" className='text-cyan-400 hover:text-cyan-300 transition-colors duration-300'>+91 81715 79897</a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='p-3 bg-cyan-600/10 rounded-lg'>
                  <svg className='w-6 h-6 text-cyan-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className='text-gray-400 text-sm'>Location</h4>
                  <p className='text-white'>Noida, India</p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className='text-white text-lg font-semibold mb-4'>Follow Me</h4>
              <div className='flex gap-4'>
                <a href="https://github.com/Ansh642" target="_blank" rel="noopener noreferrer" className='p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300'>
                  <svg className='w-5 h-5 text-white' fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/ansh-agarwal-b830b3218/" target="_blank" rel="noopener noreferrer" className='p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300'>
                  <svg className='w-5 h-5 text-white' fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className='bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm'
          >
            <div className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-gray-300 text-sm mb-2'>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white'
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-gray-300 text-sm mb-2'>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white'
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-gray-300 text-sm mb-2'>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white'
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className='w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300'
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Contact;