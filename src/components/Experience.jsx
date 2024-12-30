import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { FaBriefcase } from 'react-icons/fa'; // Experience Icon
import useWindowWidth from '../hooks/useWindowWidth'; // Custom Hook for Window Width

const experienceData = [
  {
    role: 'Research Intern',
    company: 'National Institute of Technology Patna',
    duration: 'May 2024 - July 2024',
    location: 'Patna, India',
    description:
      'Led research on Multi-Author Identification using the PAN23 dataset, achieving very good model accuracy with DL. Designed, trained, and optimized LSTM, GRU, and RNN models, incorporating TF-IDF and GloVe embeddings.',
  },
  {
    role: 'Apprentice',
    company: 'Amazon',
    duration: 'June 2024 - July 2024',
    location: 'Remote',
    description:
      'Amazon ML Summer School on AI/ML. Various machine learning models and their applications.',
  },
  {
    role: 'Summer Intern',
    company: 'Personifwy',
    duration: 'June 2022 - July 2022',
    location: 'Remote',
    description:
      'It was an Industrial program on Artificial Intelligence. Hand Written Digit Classification with CNN and News Classification using NLP',
  },
];

const variants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenBottom: { opacity: 0, y: 100 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const Experience = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <section
      className="relative container mx-auto p-4 md:p-8 max-w-6xl"
      id="experience"
      aria-labelledby="experience-title"
    >
      {/* Central Dashed Vertical Line - Visible only on md and above */}
      <div className="hidden md:block absolute left-1/2 top-24 bottom-24 transform -translate-x-1/2 border-l-2 border-green-500 border-dashed z-0"></div>

      <h1
        id="experience-title"
        className="text-3xl md:text-5xl text-green-800 dark:text-gray-100 font-bold text-center mb-8 md:mb-12"
      >
        Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12">
        {experienceData.map((experience, index) => {
          const isEven = index % 2 === 0;
          return (
            <Reveal key={index}>
              {/* Grid Item: Assign to Column 1 or 2 based on index */}
              <div
                className={`relative flex ${
                  isMobile
                    ? 'justify-center'
                    : isEven
                    ? 'md:justify-start'
                    : 'md:justify-end'
                }`}
              >
                {/* Connector Dot with Icon - Visible only on md and above */}
                <div
                  className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 ${
                    isEven ? '-right-4' : '-left-4'
                  } z-10 bg-white p-1 rounded-full shadow-md`}
                  aria-hidden="true"
                >
                  {/* <FaBriefcase className="w-4 h-4 text-green-500" aria-hidden="true" />*/}
                </div>

                {/* Experience Card */}
                <motion.div
                  initial={
                    isMobile
                      ? 'hiddenBottom'
                      : isEven
                      ? 'hiddenRight'
                      : 'hiddenLeft'
                  }
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  variants={
                    isMobile
                      ? {
                          hiddenBottom: { opacity: 0, y: 100 },
                          visible: { opacity: 1, y: 0 },
                        }
                      : variants
                  }
                  className={`w-full md:w-5/6 bg-green-700/10 border border-green-500 p-6 rounded-lg shadow-lg 
                              hover:bg-green-600/10 transition-colors duration-300`}
                >
                  <h2 className="text-lime-800 dark:text-gray-100 text-xl md:text-2xl font-semibold flex items-center">
                    <FaBriefcase className="mr-2 text-green-500" aria-hidden="true" />
                    {experience.role}
                  </h2>
                  <h3 className="text-lime-700 dark:text-gray-200 text-lg md:text-xl font-medium mt-2">
                    {experience.company}
                  </h3>
                  <div className="mt-2">
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{experience.duration}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{experience.location}</p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm md:text-base">{experience.description}</p>
                </motion.div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;