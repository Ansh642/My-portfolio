import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const About = () => {
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

  const downloadPDF = () => {
    const pdfURL = 'https://drive.google.com/file/d/18LLtO9Y0fLAnhKnjmYraa-hOFXRW14-7/view?usp=drive_link';
    window.open(pdfURL, '_blank');
  };

  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-900 to-gray-800 py-20'>
      <div className='max-w-6xl mx-auto px-8'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className='mb-16'
        >
          <motion.h2 variants={itemVariants} className='text-4xl font-bold text-white mb-4 relative inline-block'>
            About Me
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400'></span>
          </motion.h2>
          <motion.p variants={itemVariants} className='text-gray-400 text-lg max-w-3xl'>
            Get to know more about who I am and what I do
          </motion.p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='absolute -top-8 -left-8 w-64 h-64 bg-cyan-400/10 rounded-lg'></div>
            <div className='relative bg-gray-800/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm'>
              <h3 className='text-2xl font-bold text-white mb-4'>Who am I?</h3>
              <p className='text-gray-300 mb-6'>
                I’m Ansh Agarwal, currently working as a <strong>Software Developer Intern at Lumiq.ai</strong>, where I contribute to full-stack features and intelligent automation workflows using React, Node.js, and Docker.
              </p>
              <p className='text-gray-300 mb-6'>
                Previously, I interned at <strong>Inditech Health Solutions</strong> as a Product Development Intern, where I worked with PHP and SQL to enhance healthcare systems. I also served as a MERN stack intern at a startup, building dynamic web applications.
              </p>
              <p className='text-gray-300 mb-6'>
                I’ve built over 10 projects, including <strong>LumiClaim</strong>, <strong>WebIntelAI</strong>, and <strong>HealthEase</strong>, using modern tools like Docker, TypeScript, and Gemini AI. My passion lies in building scalable, AI-integrated solutions that make an impact.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadPDF}
                className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white'
              >
                <AiOutlineCloudDownload />
                Download CV
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='grid grid-cols-2 gap-4'
          >
            {[ 
              { title: 'Experience', value: '1.5+ Years', desc: 'Across 2 internships & 15+ projects' },
              { title: 'Education', value: 'B.Tech CSE', desc: 'JIIT Noida (2021–2025)' },
              { title: 'Projects', value: '10+', desc: 'LumiClaim, WebIntelAI, HealthEase, more' },
              { title: 'Tech Stack', value: '7+', desc: 'MERN, Docker, TypeScript, AI, and more' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className='bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm'
              >
                <h4 className='text-cyan-400 text-lg font-semibold'>{item.title}</h4>
                <p className='text-white text-2xl font-bold my-2'>{item.value}</p>
                <p className='text-gray-400 text-sm'>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
