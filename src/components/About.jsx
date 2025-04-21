import React from 'react';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            About Me
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 w-full">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-blue-900 max-w-sm mx-auto">
                <img
                  src="/assets/images/weather.jpg"  
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 w-full space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                {personalInfo.longBio.split('\n\n')[0]}
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                {personalInfo.longBio.split('\n\n')[1]}
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {personalInfo.details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-blue-900 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">{detail.label}:</span>{' '}
                      <span className="text-gray-700">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 flex justify-start">
                <a 
                  href={personalInfo.resumeLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;