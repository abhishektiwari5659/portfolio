import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="w-10 h-10 text-[#61DAFB]" />, level: 90 },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="w-10 h-10 text-[#F7DF1E]" />, level: 85 },
      { name: "HTML5", icon: <FaHtml5 className="w-10 h-10 text-[#E34F26]" />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt className="w-10 h-10 text-[#1572B6]" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-[#06B6D4]" />, level: 88 },
      { name: "Redux", icon: <SiRedux className="w-10 h-10 text-[#764ABC]" />, level: 80 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-10 h-10 text-[#68A063]" />, level: 85 },
      { name: "Express.js", icon: <SiExpress className="w-10 h-10 text-gray-500 dark:text-gray-300" />, level: 80 },
      { name: "Firebase", icon: <SiFirebase className="w-10 h-10 text-[#FFCA28]" />, level: 70 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-[#47A248]" />, level: 85 },
      { name: "Git & GitHub", icon: <FaGitAlt className="w-10 h-10 text-[#F05032]" />, level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center text-center mt-28 px-6 sm:px-12 overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-gray-900 dark:text-white font-bold text-4xl sm:text-5xl mb-12 relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
        <span className="block w-20 h-1 bg-[#3f8e00] mt-2 mx-auto"></span>
      </motion.h2>

      {/* Skill Categories */}
      <div className="w-full max-w-6xl space-y-12">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            className="text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-[#a1a1a1] mb-6 border-l-4 border-[#3f8e00] pl-4">
              {category.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 dark:bg-[#1a1a1a] rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-[#3f8e00]/30"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">{skill.icon}</div>

                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <p className="text-gray-900 dark:text-white font-semibold">{skill.name}</p>
                      <span className="text-[#3f8e00] text-sm font-medium">{skill.level}%</span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-[#3f8e00] to-[#8be78b] h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
