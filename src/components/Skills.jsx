import React from 'react';
import { personalInfo } from '../data/personalInfo';

const Skills = () => {
  const { skills } = personalInfo;

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            Skills &amp; Expertise
          </h2>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-800">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.technical.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-blue-900 mb-3">
                    <i className={skill.icon} style={{ fontSize: "2.5rem" }}></i>
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{skill.name}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div 
                        className="bg-blue-700 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 mt-1">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-800">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.soft.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-blue-900 mb-3">
                      <i className={skill.icon} style={{ fontSize: "2.5rem" }}></i>
                    </div>
                    <h4 className="font-semibold text-lg text-center">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-800">Tools &amp; Technologies</h3>
            <div className="flex flex-wrap gap-4">
              {skills.tools.map((tool, index) => (
                <span 
                  key={index}
                  className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-gray-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;