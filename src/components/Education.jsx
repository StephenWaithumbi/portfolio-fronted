import React from 'react';
import { personalInfo } from '../data/personalInfo';

const Education = () => {
  const { education } = personalInfo;

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            Education
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-1 bg-blue-900"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {edu.year}
                    </span>
                    <div className="text-blue-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <h4 className="text-gray-700 font-medium mb-4">{edu.institution}</h4>
                  
                  <div className="text-gray-600 mb-4">{edu.location}</div>
                  
                  {edu.description && (
                    <p className="text-gray-700">{edu.description}</p>
                  )}
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-800 mb-1">Achievements:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications & Awards */}
          {personalInfo.certifications && personalInfo.certifications.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8 text-blue-800">Certifications & Awards</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                {personalInfo.certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-start">
                      <div className="text-blue-900 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.name}</h3>
                        <p className="text-gray-700 mb-1">{cert.issuer}</p>
                        <p className="text-sm text-gray-600">{cert.date}</p>
                        {cert.url && (
                          <a 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center mt-2"
                          >
                            View Certificate
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;