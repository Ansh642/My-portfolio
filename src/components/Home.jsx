import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsGithub, BsLinkedin, BsArrowRight } from 'react-icons/bs';
import Dp from "../assets/dp.jpeg";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <div name="home" className='w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className='max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-center h-full gap-12'>
        <motion.div 
          className='flex-1'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className='mb-8'>
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-4'>
              Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600'>Ansh</span>
            </h1>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-300'>
              Software Developer | MERN & AI
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className='text-gray-400 text-lg max-w-lg mb-8'>
            I'm a Full Stack Developer with hands-on experience at companies like Lumiq.ai and Inditech Health Solutions. I build intelligent, scalable web applications using the MERN stack, AI agents, and modern tooling like Docker and TypeScript.
          </motion.p>

          <motion.div variants={itemVariants} className='flex flex-wrap gap-4'>
            <Link 
              to="projects" 
              smooth 
              duration={500}
              className='group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg overflow-hidden'
            >
              <span className='relative z-10'>View Work</span>
              <BsArrowRight className='relative z-10 transition-transform duration-300 group-hover:translate-x-1' />
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </Link>

            <a 
              href="mailto:anshagarwal642@gmail.com"
              className='group relative flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg overflow-hidden hover:text-white'
            >
              <span className='relative z-10'>Hire Me</span>
              <HiOutlineMail className='relative z-10' />
              <div className='absolute inset-0 bg-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className='flex gap-4 mt-8'>
            <a href="https://www.linkedin.com/in/ansh-agarwal-b830b3218/" target="_blank" rel="noreferrer" className='p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300'>
              <BsLinkedin className='text-2xl' />
            </a>
            <a href="https://www.github.com/Ansh642" target="_blank" rel="noreferrer" className='p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300'>
              <BsGithub className='text-2xl' />
            </a>
          </motion.div>
          
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='relative flex-1 flex justify-center'
        >
          <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/20'>
            <img 
              src={Dp} 
              alt="Profile" 
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-cyan-400/10 mix-blend-overlay'></div>
          </div>
          <div className='absolute -z-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-cyan-400/10 blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
