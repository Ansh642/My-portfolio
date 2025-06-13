import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaServer, FaDatabase } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si'; 

const projects = [
  {
    id: 1,
    title: "WebIntelAI | AI-Powered Web Scraping & Q&A",
    desc: "Developed an AI agent to scrape websites, generate embeddings, and enable context-aware Q&A using ChromaDB and vector search with Gemini API integration.",
    tags: ["Node.js", "Gemini", "ChromaDB"],
    icon: <FaRobot className="text-4xl text-cyan-400" />,
    demo: "https://github.com/Ansh642/WebIntelAI",
    category: "ai"
  },
  {
    id: 2,
    title: "ClimaCast | AI Weather Insight Agent",
    desc: "Built an MCP server agent to fetch real-time weather data using OpenWeatherMap API, delivering contextual responses and structured metadata for AI workflows.",
    tags: ["Node.js", "OpenWeather", "MCP", "AI Agent"],
    icon: <SiOpenai className="text-4xl text-blue-400" />,
    demo: "https://github.com/Ansh642/MCP-Server",
    category: "ai"
  },
  {
    id: 3,
    title: "LumiClaim | AI Automation System",
    desc: "Built an AI-integrated policy booking system automating claims processing with OCR document verification and AI-driven recommendations, improving efficiency by 60%.",
    tags: ["MERN", "OCR", "Docker"],
    icon: <FaDatabase className="text-4xl text-purple-400" />, // Changed from SiLangchain
    demo: "https://github.com/Ansh642/LumiClaim",
    category: "ai"
  },
  {
    id: 4,
    title: "HealthEase | Doctor Appointment System",
    desc: "Full-featured appointment booking platform for doctors and patients with responsive UI, authentication, and full CRUD functionality.",
    tags: ["React", "Node.js", "Tailwind", "MongoDB"],
    icon: <FaServer className="text-4xl text-green-400" />,
    demo: "https://github.com/Ansh642/HealthEase",
    category: "web"
  }
];

// Sort projects - AI first, then others
const sortedProjects = [...projects].sort((a, b) => {
  if (a.category === 'ai' && b.category !== 'ai') return -1;
  if (a.category !== 'ai' && b.category === 'ai') return 1;
  return 0;
});

// const iconComponents = {
//   ai: <FaRobot className="text-cyan-400" />,
//   web: <FaCode className="text-green-400" />,
//   database: <FaDatabase className="text-purple-400" />,
//   server: <FaServer className="text-blue-400" />
// };

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div name="projects" className='w-full bg-gradient-to-b from-gray-900 to-gray-800 py-20'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className='mb-16 text-center'
        >
          <motion.h2 variants={itemVariants} className='text-4xl font-bold text-white mb-4 inline-block relative'>
            My <span className='text-cyan-400'>AI</span> & Full-Stack Projects
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400'></span>
          </motion.h2>
          <motion.p variants={itemVariants} className='text-gray-400 text-lg mt-4 max-w-2xl mx-auto'>
            Intelligent systems and web applications built with modern technologies
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className='grid sm:grid-cols-1 lg:grid-cols-2 gap-8'
        >
          {sortedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${project.category === 'ai' ? 'from-gray-800/60 to-cyan-900/20' : 'from-gray-800/60 to-gray-900/20'} border ${project.category === 'ai' ? 'border-cyan-800/50' : 'border-gray-700'} rounded-xl shadow-lg backdrop-blur-sm overflow-hidden transition-all hover:shadow-xl ${project.category === 'ai' ? 'hover:shadow-cyan-500/20' : 'hover:shadow-gray-500/10'}`}
            >
              <div className='p-6 flex flex-col h-full'>
                <div className='flex items-start gap-4 mb-4'>
                  <div className={`p-3 rounded-lg ${project.category === 'ai' ? 'bg-cyan-500/10' : 'bg-gray-700/50'}`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>{project.title}</h3>
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className={`text-xs px-2 py-1 rounded ${project.category === 'ai' ? 'bg-cyan-900/40 text-cyan-300' : 'bg-gray-700 text-gray-300'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className='text-gray-300 mb-6 flex-grow'>{project.desc}</p>
                
                <div className='mt-auto'>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-all bg-blue-400`}
                  >
                    <FaCode className="mr-2" />
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;