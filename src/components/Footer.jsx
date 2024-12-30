// src/components/Footer.jsx
import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:justify-between p-6 md:p-10 text-sm md:text-lg mt-12 bg-gray-900'>
        {/* Left Section: Name and Social Icons */}
        <div className='flex flex-col items-center md:items-start space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Abhishek Kumar</h3>
            <div className='flex flex-row gap-4 md:gap-6 text-gray-400 text-3xl md:text-4xl'>
                <a href="https://linkedin.com/in/15-abhishek" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className='hover:text-white transition-colors duration-300' />
                </a>
                <a href="https://github.com/15-Ab" target='_blank' rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithubSquare className='hover:text-white transition-colors duration-300' />
                </a>
                <a href="https://instagram.com/15_abhishek" target='_blank' rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className='hover:text-white transition-colors duration-300' />
                </a>
                <a href="https://medium.com/@ab_15" target='_blank' rel="noopener noreferrer" aria-label="Medium">
                    <FaMedium className='hover:text-white transition-colors duration-300' />
                </a>
            </div>
        </div>

        {/* Right Section: Copyright */}
        <p className='text-gray-400 mt-4 md:mt-0'>&copy; 2024 Abhishek Kumar</p>
    </footer>
  )
}

export default Footer