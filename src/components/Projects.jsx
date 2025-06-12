import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "WebIntelAI",
    subtitle: "AI-Powered Web Scraping & Q&A",
    desc: "Developed an AI agent to scrape websites, generate Gemini-based embeddings, and enable context-aware Q&A using ChromaDB and vector search.",
    tags: ["Node.js", "Gemini", "ChromaDB", "LangChain"],
    demo: "https://github.com/Ansh642/WebIntelAI",
  },
  {
    id: 2,
    title: "ClimaCast",
    subtitle: "AI-Powered Weather Insight Agent",
    desc: "Built an MCP server agent to fetch real-time weather data using the OpenWeatherMap API, delivering contextual responses and structured metadata for AI workflows.",
    tags: ["Node.js", "OpenWeather", "MCP", "AI Agent"],
    demo: "https://github.com/Ansh642/ClimaCast",
  },
  {
    id: 3,
    title: "LumiClaim",
    subtitle: "MERN Stack + AI Automation",
    desc: "Built an AI-integrated policy booking system, automating claims processing with OCR-based document verification and AI-driven recommendations, improving efficiency by 60%.",
    tags: ["MERN", "OCR", "Docker", "LangGraph"],
    demo: "https://github.com/Ansh642/LumiClaim",
  },
  {
    id: 4,
    title: "HealthEase",
    subtitle: "Appointment Booking System",
    desc: "Appointment booking system for doctors and patients with responsive UI and full CRUD functionality.",
    tags: ["React", "Node.js", "Tailwind"],
    demo: "https://github.com/Ansh642/HealthEase",
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div name="projects" className='w-full bg-gradient-to-b from-gray-900 to-gray-800 py-20'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className='mb-16 text-center'
        >
          <motion.h2 variants={itemVariants} className='text-4xl font-bold text-white mb-4 inline-block relative'>
            My Projects
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400'></span>
          </motion.h2>
          <motion.p variants={itemVariants} className='text-gray-400 text-lg mt-4 max-w-2xl mx-auto'>
            A selection of intelligent applications and systems I’ve built using full-stack and AI technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className='grid sm:grid-cols-1 md:grid-cols-2 gap-10'
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className='bg-gray-800/60 border border-gray-700 rounded-2xl shadow-xl backdrop-blur-sm overflow-hidden flex flex-col hover:shadow-cyan-700/30 transition-all'
            >
              {/* GLOWING TITLE BLOCK */}
              <div className='p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-b border-gray-700 text-center'>
                <h3 className='text-white text-2xl font-bold tracking-wide animate-pulse'>
                  {project.title}
                </h3>
                <p className='text-cyan-400 text-sm mt-1 italic'>{project.subtitle}</p>
              </div>

              <div className='p-6 flex-1 flex flex-col justify-between'>
                <p className='text-gray-300 text-sm mb-4'>{project.desc}</p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.map((tag, index) => (
                    <span key={index} className='text-xs bg-gray-700/50 text-cyan-400 px-2 py-1 rounded'>
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='block text-center py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded transition-colors duration-300'
                >
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
