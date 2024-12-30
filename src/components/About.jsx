import React from "react"
import { motion } from "framer-motion"
import Reveal from "./Reveal"
import { Link } from "react-scroll"

const About = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="about">
      <Reveal>
        <div className="grid grid-cols-1 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I’m Abhishek, a passionate software engineer with a strong focus on machine learning, computer vision, and full-stack development. I enjoy solving complex problems and continuously learning new technologies to improve my skills. With a keen interest in innovation, I aim to contribute to impactful projects and work in dynamic, fast-paced environments.
              </p>
              <p className="text-justify leading-7 w-11/12 mx-auto mt-4">
                I specialize in technologies like React, Node.js, and Python, and have a strong foundation in problem-solving and algorithmic thinking. My expertise extends to developing robust backend systems, intricate frontend interfaces, and integrating machine learning models to enhance application capabilities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center mt-10 gap-7">
              {/* Projects Card */}
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="w-full max-w-xs cursor-pointer"
              >
                <div className="bg-gray-800/40 p-5 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    5<span>+</span>
                  </h3>
                  <p className="text-xs md:text-base">
                    <span>Projects</span>
                  </p>
                </div>
              </Link>

              {/* Experience Card */}
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="w-full max-w-xs cursor-pointer"
              >
                <div className="bg-gray-800/40 p-5 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    1<span>+</span>
                  </h3>
                  <p className="text-xs md:text-base">
                    <span>Years of Experience</span>
                  </p>
                </div>
              </Link>

              {/* Coding Profiles Card */}
              <Link
                to="coding-profiles"
                smooth={true}
                duration={500}
                className="w-full max-w-xs cursor-pointer"
              >
                <div className="bg-gray-800/40 p-5 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    5<span>+</span>
                  </h3>
                  <p className="text-xs md:text-base">
                    <span>Coding Profiles</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default About