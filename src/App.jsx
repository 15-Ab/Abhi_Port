import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";
import CodingProfiles from "./components/CodingProfiles";
import ProfessionalProfiles from "./components/ProfessionalProfiles";
import Chatbot from "./components/Chatbot";
export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      
      <Portfolio/>
      <Experience/>
      <Education/>
      <ProfessionalProfiles/>
      <CodingProfiles/>
      <Contact/>
      <Chatbot/>
      <Footer/>
    </>
  )
}