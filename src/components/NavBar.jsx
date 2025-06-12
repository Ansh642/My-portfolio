import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'skills', label: 'Skills' },
    { id: 4, link: 'projects', label: 'Projects' },
    { id: 5, link: 'contact', label: 'Contact' }
  ];

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800'
    >
      <div className='max-w-6xl mx-auto px-8 flex justify-between items-center h-20'>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className='text-2xl font-bold text-cyan-400'
        >
          <span className='text-white'>@</span>Ansh
        </motion.div>

        <ul className='hidden md:flex gap-8'>
          {links.map(({ id, link, label }) => (
            <motion.li 
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='relative'
            >
              <Link 
                to={link} 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                className='text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer'
              >
                {label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full'></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <div 
          onClick={() => setNav(!nav)} 
          className='md:hidden cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-300'
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {nav && (
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-sm flex flex-col items-center py-4 gap-6'
          >
            {links.map(({ id, link, label }) => (
              <motion.li 
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='text-gray-300 hover:text-cyan-400 transition-colors duration-300'
              >
                <Link 
                  onClick={() => setNav(false)}
                  to={link} 
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact='true' 
                  offset={-80}
                  className='px-4 py-2'
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
};

export default NavBar;