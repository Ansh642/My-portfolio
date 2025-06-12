import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiCplusplus, SiDocker } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { GrSystem } from 'react-icons/gr';
import { AiOutlineDatabase } from 'react-icons/ai';

const skills = [
  { name: 'React', icon: <FaReact className='text-4xl text-cyan-400' />, level: 90 },
  { name: 'JavaScript', icon: <TbBrandJavascript className='text-4xl text-yellow-400' />, level: 85 },
  { name: 'Node.js', icon: <FaNodeJs className='text-4xl text-green-500' />, level: 80 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-4xl text-cyan-300' />, level: 90 },
  { name: 'MongoDB', icon: <SiMongodb className='text-4xl text-green-400' />, level: 75 },
  { name: 'Express', icon: <SiExpress className='text-4xl text-gray-300' />, level: 70 },
  { name: 'C++', icon: <SiCplusplus className='text-4xl text-blue-500' />, level: 85 },
  { name: 'Docker', icon: <SiDocker className='text-4xl text-blue-400' />, level: 80 },
  { name: 'System Design', icon: <GrSystem className='text-4xl text-white' />, level: 70 },
  { name: 'SQL', icon: <AiOutlineDatabase className='text-4xl text-orange-300' />, level: 75 },
];

const Experience = () => {
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
    <div name="skills" className='w-full bg-gradient-to-b from-gray-800 to-gray-900 py-20'>
      <div className='max-w-6xl mx-auto px-8'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className='mb-16'
        >
          <motion.h2 variants={itemVariants} className='text-4xl font-bold text-white mb-4 relative inline-block'>
            My Skills
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400'></span>
          </motion.h2>
          <motion.p variants={itemVariants} className='text-gray-400 text-lg max-w-3xl'>
            Technologies I've been working with recently
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className='bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm flex flex-col items-center'
            >
              <div className='mb-4'>{skill.icon}</div>
              <h3 className='text-white font-semibold text-lg mb-2'>{skill.name}</h3>
              <div className='w-full bg-gray-700 rounded-full h-2.5'>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600'
                ></motion.div>
              </div>
              <span className='text-gray-400 text-sm mt-2'>{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
