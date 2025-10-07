import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Jewelry E-Commerce Website',
    description: 'Full-stack e-commerce website with cart, payment gateway, and admin panel.',
    image: '/images/jewelry.png',
    link: 'https://github.com/abhishektiwari5659/Jewellery-ecommerce'
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive and modern personal portfolio built with React and TailwindCSS.',
    image: '/images/portfolio.png',
    link: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'GalaticVisions',
    description: "GalacticVisions is a web project that brings the beauty of space to your screen using NASA's public APIs. Explore daily space images, celestial events, and cosmic wonders. Designed for astronomy lovers and curious minds, it’s a simple, responsive site built with HTML, CSS, and JavaScript.",
    image: '/images/GalaticVisions.png',
    link: 'https://galatic-visions.vercel.app'
  },
  {
    title: 'Foodify – Swiggy Clone',
    description: 'Full-stack food delivery web app inspired by Swiggy with menu browsing, cart, and checkout functionality.',
    image: '/images/foodify.png',
    link: 'https://foodify-woad.vercel.app'
  },
  {
    title: 'MovieMate – AI-Powered Movie Discovery',
    description: 'Netflix-inspired web app using React, TailwindCSS, and Redux Toolkit. Integrated Firebase authentication, TMDB API, and Google Gemini AI for personalized recommendations. Features include "Get What You Like" page, dynamic movie details, trailers, cast info, and live deployment on Vercel.',
    image: '/images/moviemate.png',
    link: 'https://moviemate-opal.vercel.app'
  }
];


const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className='flex flex-col items-center text-center mt-28 px-6 sm:px-12 transition-colors duration-500'>
      
      <h2 className='text-gray-900 dark:text-white font-bold text-4xl sm:text-5xl mb-16 relative'>
        Projects
        <span className='block w-20 h-1 bg-[#3f8e00] mt-2 mx-auto'></span>
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='relative rounded-xl overflow-hidden shadow-md dark:shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer'
            data-aos="fade-up"
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-64 object-cover rounded-xl transform transition-transform duration-500 hover:scale-110'
            />
            <div className='absolute inset-0 bg-black dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-gray-200 dark:text-gray-300 mb-4'>{project.description}</p>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-[#3f8e00] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300'
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
