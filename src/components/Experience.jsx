import React from 'react';
import { personalInfo } from '../data/personalInfo';

const Experience = () => {
  const { experience } = personalInfo;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            Work Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Time period */}
                  <div className="md:w-1/2 mb-8 md:mb-0 px-6">
                    <div className={`text-center md:text-right ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      <span className="inline-block py-1 px-4 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
                        {job.period}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{job.company}</h3>
                      <p className="text-gray-600">{job.location}</p>
                    </div>
                  </div>
                  
                  {/* Circle on timeline */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                  
                  {/* Job details */}
                  <div className="md:w-1/2 px-6 relative">
                    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                      <h4 className="text-lg font-bold text-blue-900 mb-2">{job.title}</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                      {job.achievements && job.achievements.length > 0 && (
                        <div className="mt-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {job.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;