import AboutCard from "../components/AboutCard";
import ProfilePic from "../images/IMG_0240.jpg";
import { faUser, faHeart, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import ShuffleCards from "../components/ShuffleCards";
const Home = () => {
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
        <p className="jse text-2xl mt-2">Junior Software Engineer</p>
        <p className="text-white text-2xl mt-4 px-3">
          Focused on building impactful apps and mastering new technologies.
        </p>
      </div>

      <div id="about" className="w-full text-center mt-[100px]">
        <h1 className="text-white font-semibold text-2xl">About</h1>
        <AboutCard icon={faUser} heading="About Me" description="A young junior full-stack software engineer passionate about bringing ideas to life through code. I specialize in React, TypeScript, and Tailwind on the frontend, with Node.js handling the backend. Experienced in both SQL and NoSQL databases, primarily using Prisma with PostgreSQL (PERN stack), but also proficient in the MERN stack and other technologies." />
        <AboutCard icon={faHeart} heading="Passion" description="I've always been fascinated by computers and technology, and my curiosity led me to explore software development. In 2024, I took a coding bootcamp to turn that passion into a skill, and I instantly fell in love with the process. Now, I focus on building beautiful, fast, and efficient applications that deliver great user experiences." />
        <AboutCard icon={faLightbulb} heading="Problem Solving" description="I thrive on problem-solving and the challenge of turning complex issues into seamless solutions. Whether it's debugging code, optimizing performance, or designing scalable architectures, I enjoy breaking down problems and finding the most efficient way to solve them. Software development allows me to continuously learn, adapt, and create solutions that make a real impact." />
        <ShuffleCards />
      </div>
    </div>
  );
};

export default Home;
