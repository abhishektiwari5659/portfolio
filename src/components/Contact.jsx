import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const contactMethods = [
  {
    icon: <FaEnvelope className="w-10 h-10 text-[#3f8e00]" />,
    title: "Email",
    info: "abhishekti5659@gmail.com",
    link: "mailto:abhishekti5659@gmail.com",
  },
  {
    icon: <FaLinkedin className="w-10 h-10 text-[#3f8e00]" />,
    title: "LinkedIn",
    info: "linkedin.com/in/abhishek-tiwari-dev",
    link: "https://www.linkedin.com/in/abhishek-tiwari-dev/",
  },
  {
    icon: <FaGithub className="w-10 h-10 text-[#3f8e00]" />,
    title: "GitHub",
    info: "github.com/abhishek",
    link: "https://github.com/abhishektiwari5659",
  },
  {
    icon: <FaPhone className="w-10 h-10 text-[#3f8e00]" />,
    title: "Phone",
    info: "+91 8591524033",
    link: "tel:+918591524033",
  },
];

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_hrsgc2p",
        "template_ji24qgs",
        formData,
        "t9YeCrHjQU59Q0_gB"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsOpen(false), 2000);
        },
        () => setStatus("error")
      );
  };

  return (
    <div id="contact" className="relative flex flex-col items-center text-center mt-28 px-6 sm:px-12 overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3f8e00]/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3f8e00]/20 blur-3xl rounded-full -z-10 animate-pulse"></div>

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
            <div className="p-4 rounded-full bg-gradient-to-br from-[#3f8e00] to-gray-200 dark:to-[#1b1b1b] mb-4 group-hover:scale-110 transition-transform duration-300">
              {method.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{method.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{method.info}</p>
            <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#3f8e00] transition-all duration-500"></span>
          </motion.a>
        ))}
      </motion.div>

      {/* Send Message Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1, boxShadow: "0 0 50px #3f8e00" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="mt-16 mb-14 inline-block bg-[#3f8e00] text-white font-bold text-2xl rounded-full px-10 py-4 shadow-[0_0_25px_#3f8e00] transition-all duration-300 hover:shadow-[0_0_60px_#3f8e00]"
      >
        Send a Message
      </motion.button>

      {/* Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-[#111] rounded-2xl shadow-xl p-8 w-11/12 sm:w-[500px] relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Send me a message</h3>
            <form onSubmit={sendEmail} className="flex flex-col gap-4">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    required
    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
      bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white 
      focus:outline-none focus:ring-2 focus:ring-[#3f8e00] focus:border-transparent 
      placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all duration-300"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    required
    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
      bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white 
      focus:outline-none focus:ring-2 focus:ring-[#3f8e00] focus:border-transparent 
      placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all duration-300"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
    rows="4"
    className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
      bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white 
      focus:outline-none focus:ring-2 focus:ring-[#3f8e00] focus:border-transparent 
      placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all duration-300"
  ></textarea>


              <button
                type="submit"
                className="bg-[#3f8e00] text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_#3f8e00] transition-all duration-300"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-sm mt-2">✅ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm mt-2">❌ Failed to send. Try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Contact;
