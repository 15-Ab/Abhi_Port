import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import careconnect from "../assets/careconnect-hpage.png"
import sh from "../assets/selfhealth.png"
import medi from "../assets/medimage_login.png"
import induko from "../assets/induko.jpg"

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: careconnect,
      title: "CareConnect",
      description: "Robust healthcare platform designed to streamline patient registration, appointment scheduling, and medical record management.",
      links: {
        site: "https://careplus-lovat.vercel.app/",
        github: "https://careplus-lovat.vercel.app/",
      },
    },
    {
      img: sh,
      title: "Self Health",
      description: "Built at a hackathon, it’s a website for all the health related facilities at a single place. Along with navigable symptoms checker, there are many other parts of website to explore, each one precisely curated.",
      links: {
        site: "https://15-ab.github.io/Self_Health/",
        github: "https://github.com/15-Ab/Self_Health",
      },
    },
    {
      img: medi,
      title: "MedImage",
      description: "Enables users to upload medical bills, extracts text via OCR, and compares charges against official pricing for transparency. A full-stack web app (MERN stack) with user authentication, MongoDB data storage, and OCR integration.",
      links: {
        site: "https://github.com/15-Ab/MedImage",
        github: "https://github.com/15-Ab/MedImage",
      },
    },
    {
      img: induko,
      title: "Induko Education",
      description: "Built at a hackathon, it is designed and developed for the solution of lack of a unified platform for the competitive preparation",
      links: {
        site: "https://15-ab.github.io/INDUKO_EDUCATION-P.github.io/",
        github: "https://github.com/15-Ab/INDUKO_EDUCATION-P.github.io",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">

        {/* <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2> */}
        <h1
        id="portfolio-title"
        className="text-4xl text-white dark:text-white-100 font-bold text-center mb-12"
      >
        Portfolio
      </h1>

        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio