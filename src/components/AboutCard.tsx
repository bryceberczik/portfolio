import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IAbout } from "../interfaces/interfaces";
import {
  faUser,
  faHeart,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";

const AboutCard = () => {
  return (
    <div className="px-4 xl:px-3 py-12 2xl:px-40 xl:flex xl:flex-row xl:justify-center">
      <GlassmorphicCard
        icon={faUser}
        heading="About Me"
        description="Junior full-stack engineer passionate about turning ideas into code. Specializing in React, TypeScript, and Tailwind on the frontend, with Node.js and Prisma + PostgreSQL on the backend. Also proficient in the MERN stack and other technologies."
      />
      <GlassmorphicCard
        icon={faHeart}
        heading="Education"
        description="I completed full-stack development Coding Bootcamp at UTSA, focusing on React and Node.js. During the program, I built dynamic web apps and gained hands-on experience with modern frameworks and backend development."
      />
      <GlassmorphicCard
        icon={faLightbulb}
        heading="Problem Solving"
        description="I thrive on problem-solving, turning complex issues into efficient solutions. Whether it's debugging, optimizing performance, or designing scalable architectures, I enjoy tackling challenges and creating impactful solutions while continuously learning."
      />
    </div>
  );
};

const GlassmorphicCard = ({ heading, description, icon }: IAbout) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg py-5 transition-all duration-500 hover:scale-[1.01]">
      <div className="relative custom-z flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-white/10 backdrop-blur-lg p-8 shadow-lg transition-colors duration-500 group-hover:bg-white/20">
        <FontAwesomeIcon
          icon={icon}
          className="relative z-10 mb-10 mt-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-white/20 p-4 text-2xl text-white backdrop-blur-md"
        />

        <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
          {heading}
        </h4>
        <p className="relative z-10 text-slate-200">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
