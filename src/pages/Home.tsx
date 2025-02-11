import AboutCard from "../components/AboutCard";
import ProfilePic from "../images/IMG_0240.jpg";
import {
  faUser,
  faHeart,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";
import MobileShuffleCards from "../components/MobileShuffleCards";
import ShuffleCards from "../components/ShuffleCards";
import { HoverImageLinks } from "../components/HoverImageLinks";
import { useState, useEffect } from "react";
import { MobileHoverImageLinks } from "../components/MobileHoverImageLinks";
import RenderSkillCards from "../components/SkillCards";
import AIButton from "../components/GithubRepoButton";
import ShiftingContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeButton from "../components/ResumeButton";
import { motion } from "framer-motion";

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
          Hey I'm Bryce. 🧑‍💻
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
          Focused on building impactful apps and mastering new technologies.
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
          <AboutCard
            icon={faUser}
            heading="About Me"
            description="Junior full-stack engineer passionate about turning ideas into code. Specializing in React, TypeScript, and Tailwind on the frontend, with Node.js and Prisma + PostgreSQL on the backend. Also proficient in the MERN stack and other technologies."
          />
          <AboutCard
            icon={faHeart}
            heading="Education"
            description="I studied full-stack development at UTSA, focusing on React and Node.js. During the program, I built dynamic web apps and gained hands-on experience with modern frameworks and backend development, finishing strong and learning a lot."
          />
          <AboutCard
            icon={faLightbulb}
            heading="Problem Solving"
            description="I thrive on problem-solving, turning complex issues into efficient solutions. Whether it's debugging, optimizing performance, or designing scalable architectures, I enjoy tackling challenges and creating impactful solutions while continuously learning."
          />
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
