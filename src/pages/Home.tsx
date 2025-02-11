import AboutCard from "../components/AboutCard";
import ProfilePic from "../images/IMG_0240.jpg";
import { faUser, faHeart, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import MobileShuffleCards from "../components/MobileShuffleCards";
import ShuffleCards from "../components/ShuffleCards";
import { HoverImageLinks } from "../components/HoverImageLinks";
import { useState, useEffect } from "react";
import { MobileHoverImageLinks } from "../components/MobileHoverImageLinks";
import RenderSkillCards from "../components/SkillCards";
import AIButton from "../components/GithubRepoButton";
import ShiftingContactForm from "../components/ContactForm";
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
        <img
          src={ProfilePic}
          className="rounded-full w-full h-full object-cover box"
          alt="Profile picture of Bryce Berczik"
        />
      </div>
      <div className="text-center">
        <h1 className="text-white text-lg mt-5 font-semibold">Hey I'm Bryce. 🧑‍💻</h1>
        <p className="jse text-2xl mt-2">Full Stack Developer</p>
        <p className="text-white text-2xl mt-4 px-3">
          Focused on building impactful apps and mastering new technologies.
        </p>
      </div>

      <div id="about" className="w-full text-center mt-[100px]">
        <h1 className="text-white font-semibold text-2xl">About</h1>
        <AboutCard icon={faUser} heading="About Me" description="A young junior full-stack software engineer passionate about bringing ideas to life through code. I specialize in React, TypeScript, and Tailwind on the frontend, with Node.js handling the backend. Experienced in both SQL and NoSQL databases, primarily using Prisma with PostgreSQL (PERN stack), but also proficient in the MERN stack and other technologies." />
        <AboutCard icon={faHeart} heading="Education" description="I attended UTSA in San Antonio, where I studied full-stack development with a focus on React and Node.js. Throughout the program, I gained hands-on experience building dynamic web applications, working with modern frameworks, and mastering backend development. I completed the program successfully, finishing strong and learning a tremendous amount along the way." />
        <AboutCard icon={faLightbulb} heading="Problem Solving" description="I thrive on problem-solving and the challenge of turning complex issues into seamless solutions. Whether it's debugging code, optimizing performance, or designing scalable architectures, I enjoy breaking down problems and finding the most efficient way to solve them. Software development allows me to continuously learn, adapt, and create solutions that make a real impact." />
        {isMobile ? (
          <MobileShuffleCards />
        ) : (
          <ShuffleCards />
        )}
      </div>

      <div id="projects" className="w-full text-center mt-[100px]">
        <h1 className="text-white font-semibold text-2xl">Projects</h1>
        <p className="text-white mt-2">Some of my best work</p>

        {isMobile ? (
          <MobileHoverImageLinks />
        ) : (
          <HoverImageLinks />
        )}
      </div>

      <div className="text-center mt-9">
        <h1 className="text-[whitesmoke] text-lg mb-4">Want to see more of my work?</h1>
        <AIButton />
      </div>

      <div id="skills" className="w-full mt-[50px] text-center">
        <h1 className="text-white font-semibold text-2xl">Skills</h1>
        <div>
          <RenderSkillCards />
        </div>
      </div>

      <div className="w-full text-center mt-[100px]" id="contact">
        <h1 className="text-white font-semibold text-2xl mb-[20px]">Contact</h1>
        <div>
          <ShiftingContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
