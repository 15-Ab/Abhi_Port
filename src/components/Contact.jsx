// src/components/Contact.jsx
import React, { useRef } from "react"
import { FaUndo } from "react-icons/fa" // Importing the FaUndo icon
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
  // Create a reference to the form
  const formRef = useRef(null)

  // Function to reset the form fields
  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset()
    }
  }

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <form
          ref={formRef} 
          action="https://getform.io/f/bnllpwrb"
          method="POST"
          className="max-w-6xl p-5 md:p-12"
          id="form"
        >
          <p className="text-gray-100 font-bold text-xl mb-4 text-center">
            Let’s Connect 🤝
          </p>
          <input
            type="text"
            id="name"
            placeholder="Your Name ..."
            name="name"
            required
            className="mb-4 w-full rounded-md border border-purple-600 py-2 px-4 text-black"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email ..."
            name="email"
            required
            className="mb-4 w-full rounded-md border border-purple-600 py-2 px-4 text-black"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Your Message ..."
            required
            className="mb-6 w-full rounded-md border border-purple-600 py-2 px-4 text-black"
          ></textarea>
          
          {/* Buttons Container */}
          <div className="flex flex-col md:flex-row gap-4">

            
            {/* Refresh Button with Anti-Clockwise Arrow Icon and Hover Rotate */}
            <button
              type="button" // Prevent form submission
              onClick={handleReset}
              className="w-full md:w-auto py-3 px-6 rounded-md text-gray-100 font-semibold text-xl bg-gray-600 hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
              aria-label="Refresh Form" // Accessibility label
            >
              <FaUndo className="w-6 h-6 transform hover:rotate-180 transition-transform duration-500" /> {/* Rotating Icon */}
            </button>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto py-3 px-6 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:bg-primary-hover transition-colors duration-300 flex items-center justify-center"
            >
              Send Message
            </button>

          </div>
        </form>
      </Reveal>
    </div>
  )
}

export default Contact