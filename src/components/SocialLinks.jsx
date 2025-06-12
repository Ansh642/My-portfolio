import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/Ansh642",
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    {
      id: 2,
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/ansh-agarwal-b830b3218/",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      id: 3,
      icon: <HiOutlineMail className="w-5 h-5" />,
      href: "mailto:anshagarwal642@gmail.com",
      label: "Email",
      color: "hover:bg-cyan-600"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-6 bottom-6 hidden lg:flex flex-col gap-4 z-50"
    >
      {links.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border border-gray-700 text-white ${link.color} transition-colors duration-300 group relative`}
        >
          {link.icon}
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {link.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;