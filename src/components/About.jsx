import React from 'react'
import profileImg from '../assets/me.jpg'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-28 px-6 sm:px-12 gap-10 transition-colors duration-500">
      
      {/* Text Column */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="font-bold text-4xl sm:text-6xl text-gray-900 dark:text-white transition-colors duration-500">
          Abhishek Tiwari
        </h1>

        <p className="mt-6 max-w-xl text-gray-600 dark:text-[#9c9c9c] transition-colors duration-500">
  I’m a results-driven <span className="font-semibold text-[#3f8e00]">MERN Stack Developer</span> with hands-on experience in building and deploying scalable full-stack applications. 
  Proficient in <span className="font-semibold">React.js, Node.js, Express.js, and MongoDB</span>, I focus on creating responsive, user-friendly, and high-performance web solutions. 
  My portfolio includes projects like a <span className="font-semibold">Jewellery E-Commerce Platform</span> and an <span className="font-semibold">AI-powered Movie Discovery Website</span>, showcasing my ability to integrate modern technologies such as <span className="font-semibold">Razorpay, Firebase, and AI APIs</span>. 
  I am passionate about writing clean code, optimizing performance, and continuously improving my technical and problem-solving skills to deliver impactful digital experiences.
</p>


        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {/* Let's Connect Button (LinkedIn) */}
<a
  href="https://www.linkedin.com/in/abhishek-tiwari-dev/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-[#3f8e00]
    text-white
    font-semibold
    text-xl
    rounded-lg
    px-8 py-4
    shadow-[0_0_15px_#3f8e00]
    hover:shadow-[0_0_30px_#3f8e00]
    transition-all
    duration-300
    hover:scale-105
    text-center
  "
>
  Let's Connect
</a>


          {/* Download Resume Button */}
          <a
            href="/Abhishek-Tiwari-Web-Developer.pdf" // ensure the file is in your public folder
            download
            className="
              border-2 border-[#3f8e00]
              font-semibold
              text-xl
              rounded-lg
              px-8 py-4
              transition-all
              duration-300
              hover:scale-105
              shadow-[0_0_15px_#3f8e00]
              text-[#3f8e00] dark:text-[#3f8e00]
              bg-transparent
              hover:bg-[#3f8e00]
              hover:text-white
            "
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Column */}
      <div className="flex justify-center">
        <img
          src={profileImg}
          alt="Abhishek Tiwari"
          className="
            w-64 h-64 sm:w-80 sm:h-80
            rounded-full
            object-cover
            shadow-[0_0_25px_rgba(0,0,0,0.2)]
            dark:shadow-[0_0_25px_rgba(255,255,255,0.15)]
            transition-all duration-500
          "
        />
      </div>
    </div>
  )
}

export default About
