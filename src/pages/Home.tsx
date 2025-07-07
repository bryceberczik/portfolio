import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  faUser,
  faHeart,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";

import ProfilePic from "../images/IMG_0240.jpg";

import AboutCard from "../components/AboutCard";
import MobileShuffleCards from "../components/MobileShuffleCards";
import ShuffleCards from "../components/ShuffleCards";
import HoverImageLinks from "../components/HoverImageLinks";
import { MobileHoverImageLinks } from "../components/MobileHoverImageLinks";
import RenderSkillCards from "../components/SkillCards";
import AIButton from "../components/GithubRepoButton";
import ShiftingContactForm from "../components/ContactForm";
import ResumeButton from "../components/ResumeButton";
import Footer from "../components/Footer";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="mt-[150px] w-[150px] mx-auto h-[150px] ">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          src={ProfilePic}
          className="rounded-full w-full h-full object-cover box"
          alt="Profile picture of Bryce Berczik"
        />
      </div>
      <div className="text-center">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-lg mt-5 font-semibold"
        >
          Hey I'm Bryce Berczik. 🧑‍💻
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="jse text-2xl mt-2"
        >
          Full Stack Developer
        </motion.p>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white text-xl mt-4 px-3 md:px-16"
        >
          Focused on building scalable apps and mastering new technologies.
        </motion.p>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}
        className="flex flex-row gap-3 mt-[30px]"
      >
        <a
          href="https://github.com/bryceberczik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[whitesmoke] hover:text-gray-400"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/bryce-berczik-9b4874323/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[whitesmoke] hover:text-gray-400"
        >
          <FaLinkedin size={40} />
        </a>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-9"
      >
        <ResumeButton />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        id="about"
        className="scroll-mt-48 w-full text-center mt-[90px]"
      >
        <h1 className="text-white font-semibold text-2xl 2xl:text-3xl">
          About
        </h1>
        <div className="xl:flex xl:flex-row xl:justify-center">
          <>
            <AboutCard
              icon={faUser}
              heading="About Me"
              description="Versatile Full‑stack Developer skilled in React, TypeScript, JavaScript, and Python. I build responsive front‑ends and robust back‑end services, integrating AI agents and vector search to create intelligent, user‑centric experiences."
            />
            <AboutCard
              icon={faHeart}
              heading="Education"
              description="I completed a full-stack development Coding Bootcamp at UTSA, focusing on React and Node.js. During the program, I built dynamic web apps and gained hands-on experience with modern frameworks and backend development."
            />
            <AboutCard
              icon={faLightbulb}
              heading="Problem Solving"
              description="I tackle challenges with an agile mindset, emphasizing testing, security, and automation. From designing scalable architectures to fine‑tuning AI workflows, I iterate continuously to deliver polished, production‑ready software."
            />
          </>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {isMobile ? <MobileShuffleCards /> : <ShuffleCards />}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="projects"
        className="scroll-mt-48 w-full text-center mt-[100px]"
      >
        <h1 className="text-white font-semibold text-2xl 2xl:text-3xl">
          Projects
        </h1>

        {isMobile ? <MobileHoverImageLinks /> : <HoverImageLinks />}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="startup"
        className="scroll-mt-48 w-full text-center mt-[100px] px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
          Co‑Founder of Byte Club
        </h1>
        <p className="text-[whitesmoke] text-base sm:text-lg lg:text-xl mt-4 max-w-2xl mx-auto">
          While Byte Club is not yet released, it’s my biggest project to date.
          We’re building a community-driven food review platform where users
          earn points for sharing photos and insights on their favorite
          dishes—and redeem those points for gift cards. I lead both the
          front‑end in React Native/TypeScript and our AI validation agents to
          ensure authentic, high‑quality content.
        </p>
        <a
          href="https://docs.google.com/presentation/d/1iOjyOw4eTKpZ7pYSLlNu0btY9SRFsKFRHFo1cMeUjzg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-block
          mt-6
          px-6 py-3
          text-white
          text-base sm:text-lg lg:text-sm
          font-medium
          rounded-2xl
          shadow-lg
          bg-gradient-to-r from-indigo-500 to-purple-600
          transform hover:scale-105
          transition-transform transition-colors duration-300 ease-in-out
          "
        >
          View Byte Club Slides
        </a>
      </motion.div>

      <div className="text-center mt-9">
        <h1 className="text-[whitesmoke] text-lg mb-4">
          Want to see more of my work?
        </h1>
        <AIButton />
      </div>

      <div id="skills" className="scroll-mt-48 w-full mt-[50px] text-center">
        <h1 className="text-white font-semibold text-2xl 2xl:text-3xl mb-7">
          Skills
        </h1>
        <div>
          <RenderSkillCards />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="scroll-mt-48 w-full text-center mt-[100px]"
        id="contact"
      >
        <h1 className="text-white font-semibold text-2xl mb-[40px] 2xl:text-3xl">
          Contact
        </h1>
        <div>
          <ShiftingContactForm />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
