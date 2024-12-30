import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { FaGraduationCap } from 'react-icons/fa' // Educational Icon

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'National Institute of Technology Patna',
    period: 'December 2021 - Present',
    grade: 'CGPA : 8.2/10.0',
    description:
      'Currently pursuing my Bachelor of Technology in Computer Science and Engineering with a CGPA of 8.2/10.0. I am a dedicated and hardworking student with a passion for learning and a strong work ethic. I am a quick learner and have a knack for problem-solving. I am a team player and have a strong work ethic. I am a quick learner and have a knack for problem-solving. I am a team player and have a strong work ethic.',
  },
  {
    degree: 'Senior Secondary Education',
    institution: 'Central Public School, Samastipur',
    period: '2018 - 2020',
    grade: 'Percentage : 87.2%',
    description:
      'Completed my Senior Secondary Education with a percentage of 87.2% on PCM stream & physical education.',
  },
  {
    degree: 'Secondary Education',
    institution: 'Campus Public School, Samastipur',
    period: '2011 - 2018',
    grade: 'Percentage : 87.2%',
    description:
      'Completed my Secondary Education with a percentage of 87.2% on Science stream & Regional Languages.',
  },
]

const variants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  hiddenMobile: { opacity: 0, y: 100 },
  visibleMobile: { opacity: 1, y: 0 },
}

const Education = () => {
  return (
    <section
      className="relative container mx-auto p-8 max-w-6xl"
      id="education"
      aria-labelledby="education-title"
    >
      {/* Central Dashed Vertical Line - Visible only on md and above */}
      <div className="hidden md:block absolute left-1/2 top-24 bottom-24 transform -translate-x-1/2 border-l-2 border-blue-500 border-dashed z-0"></div>

      <h1
        id="education-title"
        className="text-4xl text-blue-800 dark:text-gray-100 font-bold text-center mb-12"
      >
        Education
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
        {educationData.map((education, index) => {
          const isEven = index % 2 === 0
          return (
            <Reveal key={index}>
              <div
                className={`relative flex ${
                  isEven ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Connector Dot with Icon - Visible only on md and above */}
                <div
                  className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 ${
                    isEven ? '-right-4' : '-left-4'
                  } z-10 bg-white p-1 rounded-full shadow-md`}
                  aria-hidden="true"
                >
                  {/*<FaGraduationCap className="w-4 h-4 text-blue-500" />*/}
                </div>

                {/* Education Card */}
                <motion.div
                  initial={
                    isEven ? 'hiddenRight' : 'hiddenLeft'
                  }
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  variants={variants}
                  className={`w-full md:w-5/6 bg-blue-700/10 border border-blue-500 p-6 rounded-lg shadow-lg 
                              hover:bg-blue-600/10 transition-colors duration-300`}
                >
                  <h2 className="text-cyan-800 dark:text-gray-100 text-2xl font-semibold flex items-center">
                    <FaGraduationCap className="mr-2 text-blue-500" aria-hidden="true" />
                    {education.degree}
                  </h2>
                  <h3 className="text-cyan-700 dark:text-gray-200 text-xl font-medium mt-2">
                    {education.institution}
                  </h3>
                  <div className="mt-2">
                    <p className="text-gray-600 dark:text-gray-300">{education.period}</p>
                    {education.grade && (
                      <p className="text-gray-600 dark:text-gray-400 mt-1 ">{education.grade}</p>
                    )}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-4">{education.description}</p>
                </motion.div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Education