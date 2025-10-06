import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: <FaEnvelope className="w-10 h-10 text-[#3f8e00]" />,
    title: "Email",
    info: "abhishek@example.com",
    link: "mailto:abhishek@example.com",
  },
  {
    icon: <FaLinkedin className="w-10 h-10 text-[#3f8e00]" />,
    title: "LinkedIn",
    info: "linkedin.com/in/abhishek",
    link: "https://linkedin.com/in/abhishek",
  },
  {
    icon: <FaGithub className="w-10 h-10 text-[#3f8e00]" />,
    title: "GitHub",
    info: "github.com/abhishek",
    link: "https://github.com/abhishek",
  },
  {
    icon: <FaPhone className="w-10 h-10 text-[#3f8e00]" />,
    title: "Phone",
    info: "+91 9876543210",
    link: "tel:+919876543210",
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex flex-col items-center text-center mt-28 px-6 sm:px-12 overflow-hidden transition-colors duration-500"
    >
      {/* Decorative background effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3f8e00]/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3f8e00]/20 blur-3xl rounded-full -z-10 animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        className="text-gray-900 dark:text-white font-bold text-4xl sm:text-5xl mb-16 relative"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in Touch
        <span className="block w-24 h-1 bg-[#3f8e00] mt-2 mx-auto"></span>
      </motion.h2>

      {/* Contact Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-100 dark:bg-[#0f0f0f] shadow-md dark:shadow-lg hover:shadow-[0_0_25px_#3f8e00] transition-all duration-500 border border-gray-200 dark:border-[#222] hover:border-[#3f8e00]/60 group"
          >
            {/* Icon Glow */}
            <div className="p-4 rounded-full bg-gradient-to-br from-[#3f8e00] to-gray-200 dark:to-[#1b1b1b] mb-4 group-hover:scale-110 transition-transform duration-300">
              {method.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {method.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {method.info}
            </p>

            {/* Subtle animated border */}
            <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#3f8e00] transition-all duration-500"></span>
          </motion.a>
        ))}
      </motion.div>

      {/* Floating CTA Button */}
      <motion.a
        href="mailto:abhishek@example.com"
        whileHover={{ scale: 1.1, boxShadow: "0 0 50px #3f8e00" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="mt-16 mb-14 inline-block bg-[#3f8e00] text-white font-bold text-2xl rounded-full px-10 py-4 shadow-[0_0_25px_#3f8e00] transition-all duration-300 hover:shadow-[0_0_60px_#3f8e00]"
      >
        Send a Message
      </motion.a>
    </div>
  );
};

export default Contact;
