import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaCodepen,
} from 'react-icons/fa'
import { SiLeetcode, SiGitlab } from 'react-icons/si'

const profiles = [
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/15-abhishek',
      name: 'LinkedIn',
      color: '#0077B5', 
      achievements: [
      ],
    },
  {
    icon: <FaGithub />,
    url: 'https://github.com/15-Ab',
    name: 'GitHub',
    color: '#333', // GitHub's characteristic color
    achievements: [
      'Contributed to the open-source projects.',
      'Contributed to the Hackathon projects.',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
}

const ProfessionalProfiles = () => {
  return (
    <section
      className="container mx-auto p-8 max-w-6xl"
      id="coding-profiles"
      aria-labelledby="coding-profiles-title"
    >
      <h2
        id="coding-profiles-title"
        className="text-3xl md:text-4xl text-cyan-800 dark:text-gray-100 font-bold text-center mb-8"
      >
        Professional Profiles
      </h2>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col items-center mx-auto"
            variants={itemVariants}
          >
            <motion.a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl md:text-6xl transition transform hover:scale-110"
              whileHover={{ scale: 1.2, color: profile.color }}
              style={{ color: '#6B7280' }} // Default icon color
              aria-label={profile.name}
            >
              {profile.icon}
            </motion.a>

            {/* Platform Name */}
            <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center">
              {profile.name}
            </p>

            {/* Achievements Tooltip for Desktop */}
            <div className="hidden md:flex absolute bottom-12 bg-gray-800 text-white text-sm rounded-lg p-4 w-48 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="list-none">
                {profile.achievements.map((achievement, idx) => (
                  <li key={idx} className="mb-2">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements for Mobile */}
            <ul className="md:hidden text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
              {profile.achievements.map((achievement, idx) => (
                <li key={idx}>• {achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ProfessionalProfiles