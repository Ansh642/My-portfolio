import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 border-t border-gray-800 py-8'>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-4 md:mb-0'
          >
            <h3 className='text-2xl font-bold text-white'>@Ansh</h3>
            <p className='text-gray-400'>Full-Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex gap-6'
          >
            <a href="https://github.com/Ansh642" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors duration-300'>
              GitHub
            </a>
            <a href="https://linkedin.com/in/ansh-agarwal-b830b3218/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors duration-300'>
              LinkedIn
            </a>
            <a href="mailto:anshagarwal642@gmail.com" className='text-gray-400 hover:text-white transition-colors duration-300'>
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm'
        >
          <p>© {new Date().getFullYear()} Ansh Agarwal. All rights reserved.</p>
          <p className='mt-2'>Built with React, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;