import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-100 dark:bg-gradient-to-b dark:from-[#111] dark:to-[#1b1b1b] mt-28 py-12 px-6 sm:px-12 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-[#3f8e00]/10 blur-3xl rounded-full -z-10"></div>

        {/* Section Divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3f8e00] to-transparent mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-8 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { href: "https://github.com/abhishektiwari5659", icon: <FaGithub /> },
            { href: "https://linkedin.com/in/abhishek-tiwari-dev", icon: <FaLinkedin /> },
            { href: "https://www.instagram.com/_._abhishek_07/", icon: <FaInstagram /> },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.25,
                color: "#3f8e00",
                textShadow: "0 0 15px #3f8e00",
              }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-900 dark:text-white text-2xl transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-gray-600 dark:text-[#9c9c9c] text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          © 2025{" "}
          <span className="text-gray-900 dark:text-white font-medium">
            Abhishek Tiwari
          </span>
          . All rights reserved.
        </motion.p>
      </footer>

      {/* Floating Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{
          scale: 1.15,
          boxShadow: "0 0 30px #3f8e00",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="fixed bottom-8 right-8 bg-[#3f8e00] text-white p-4 rounded-full shadow-[0_0_20px_#3f8e00] hover:shadow-[0_0_40px_#3f8e00] transition-all duration-300 z-50"
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default Footer;
