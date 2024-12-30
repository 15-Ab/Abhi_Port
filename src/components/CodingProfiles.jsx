import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaCodepen,
} from 'react-icons/fa'

import gfg from '../assets/icons/gfg icon.png';
import leetcode from '../assets/icons/leetcode icon.png';
import codechef from '../assets/icons/codechef icon.png';
import codeforces from '../assets/icons/codeforces icon.png';
import hackerrank from '../assets/icons/HackerRank_logo.png';


import { SiLeetcode, SiGitlab } from 'react-icons/si'

const profiles = [
    /*{
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/15-abhishek',
    name: 'LinkedIn',
    color: '#333', // GitHub's characteristic color
    achievements: [
      'LinkedIn Profile.',
    ],
  },*/
    {
    icon: <img src={leetcode} width={50} height={50} alt="LeetCode" />,
    url: 'https://leetcode.com/Ab__23/',
    name: 'LeetCode',
    color: '#333', // GitHub's characteristic color
    achievements: [
      'Top 5 % Coder worldwide.',
      'Knight badge in LeetCode.',
    ],
  },
  {
    icon: <img src={codechef} width={60} height={60} alt="CodeChef" />,
    url: 'https://www.codechef.com/users/coder_dorabhi',
    name: 'CodeChef',
    color: '#333', // GitHub's characteristic color
    achievements: [
      '3 Star Coder in CodeChef.',
    ],
  },
  {
    icon: <img src={codeforces} width={60} height={60} alt="CodeForces" />,
    url: 'https://codeforces.com/profile/Ab1518233',
    name: 'CodeForces',
    color: '#333', // GitHub's characteristic color
    achievements: [
      'Specialist at CodeForces.',
    ],
  },
  {
    icon: <img src={gfg} width={60} height={60} alt="GeeksForGeeks" />,
    url: 'https://auth.geeksforgeeks.org/user/officialaiuha',
    name: 'GeeksForGeeks',
    color: '#333', 
    achievements: [
        'Top 3 % Coder worldwide.',
        '4 Star Coder in GeeksForGeeks.',
    ],
  },
  {
    icon: <img src={hackerrank} width={60} height={60} alt="HackerRank" />,
    url: 'https://www.hackerrank.com/profile/officialabhi2023',
    name: 'HackerRank',
    color: '#333', 
    achievements: [
        '5 Star Coder in Java.',
    ],
  },
/*{
  icon: <FaGithub />,
  url: 'https://github.com/15-Ab',
  name: 'GitHub',
  color: '#333', // GitHub's characteristic color
  achievements: [
    'Contributed to the open-source projects.',
    'Contributed to the Hackathon projects.',
  ],
},*/
// ... [other profiles remain unchanged]
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

const CodingProfiles = () => {
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
        Coding Profiles
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
            className="group relative flex flex-col items-center max-w-xs w-full text-center mx-auto"
            variants={itemVariants}
          >
            <motion.a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl md:text-6xl transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
              whileHover={{ scale: 1.2, color: profile.color }}
              style={{ color: '#6B7280' }} 
              aria-label={profile.name}
            >
              {profile.icon}
            </motion.a>

            {/* Platform Name */}
            <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300">
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
            <ul className="md:hidden text-sm text-gray-600 dark:text-gray-400 mt-2">
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

export default CodingProfiles