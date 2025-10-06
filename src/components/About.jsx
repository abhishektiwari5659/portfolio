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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa, distinctio itaque modi sint doloremque recusandae quam veniam, saepe enim minima molestiae fuga ab. Earum temporibus alias voluptate sunt eaque?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {/* Let's Connect Button */}
          <button
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
            "
          >
            Let's Connect
          </button>

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
