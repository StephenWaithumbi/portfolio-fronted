import React from 'react';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">{personalInfo.name}</h2>
              <p className="text-blue-200 mt-1">{personalInfo.title}</p>
            </div>
            
            <div className="flex space-x-6">
              {personalInfo.socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div dangerouslySetInnerHTML={{ __html: social.icon }} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-x-8 gap-y-2">
                <li>
                  <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-200 transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;