import React from 'react';
import { personalInfo } from '../data/personalInfo';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-16 pb-12"
      style={{
        backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/assets/images/placeholder.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-blue-200">
            {personalInfo.title}
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            {personalInfo.shortBio}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors text-lg font-medium"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-blue-900 transition-colors text-lg font-medium"
            >
              View My Work
            </a>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white opacity-80 hover:opacity-100">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;