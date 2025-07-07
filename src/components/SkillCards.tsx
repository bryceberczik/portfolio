import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaRocket,  } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiDigitalocean,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiZod,
  SiPython,
  SiBootstrap,
  SiLua,
  SiAerospike,
  SiAmazonwebservices,
  SiExpo,
  SiDocker,
  SiRedis,
  SiReact,
} from "react-icons/si";

type SkillsType = {
  name: string;
  icon: IconType;
  color: string;
  link: string;
};

const skills: SkillsType[] = [
    {
    name: "HTML",
    icon: SiHtml5,
    color: "#F16B32",
    link: "https://www.w3schools.com/html/",
  },
    {
    name: "CSS",
    icon: SiCss3,
    color: "#3068F0",
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#58C4DC",
    link: "https://react.dev/",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#2F74C0",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#00BCFF",
    link: "https://tailwindcss.com",
  },
  {
    name: "Node",
    icon: FaNodeJs,
    color: "#58A846",
    link: "https://nodejs.org/en",
  },
  {
    name: "PostgreSql",
    icon: SiPostgresql,
    color: "whitesmoke",
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#17AE55",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#191D3D",
    link: "https://www.prisma.io/",
  },
  { name: "Zod", icon: SiZod, color: "whitesmoke", link: "https://zod.dev/" },
  {
    name: "Python",
    icon: SiPython,
    color: "#FFCE41",
    link: "https://www.python.org/",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#8A18FD",
    link: "https://getbootstrap.com/",
  },
  { name: "Lua", icon: SiLua, color: "#0A0987", link: "https://www.lua.org/" },
  {
    name: "Aerospike",
    icon: SiAerospike,
    color: "#F7F410",
    link: "https://aerospike.com/",
  },
    {
    name: "DigitalOcean",
    icon: SiDigitalocean,
    color: "#0168FF",
    link: "https://www.digitalocean.com/",
  },
  {
    name: "AWS",
    icon: SiAmazonwebservices,
    color: "whitesmoke",
    link: "https://aws.amazon.com/",
  },
  {
    name: "Expo",
    icon: SiExpo,
    color: "whitesmoke",
    link: "https://expo.dev/",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#1C63ED",
    link: "https://www.docker.com/",
  },
  { name: "Redis", icon: SiRedis, color: "#FF4438", link: "https://redis.io/" },
  {
    name: "React Native",
    icon: SiReact,
    color: "#57C4DC",
    link: "https://reactnative.dev/",
  },
  {
    name: "QDrant",
    icon: FaRocket,
    color: "#DC244C",
    link: "https://qdrant.tech/",
  },
];

const RenderSkillCards = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 p-6 xl:px-16 2xl:px-96"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {skills.map((skill, index) => (
        <motion.a
          key={skill.name}
          href={skill.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 flex flex-col h-24 w-32 items-center rounded-2xl shadow-lg bg-white/20 backdrop-blur-lg no-underline"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center">
            <skill.icon style={{ color: skill.color, fontSize: "20px" }} />
            <p className="mt-2 text-[whitesmoke] text-lg font-semibold whitespace-nowrap">
              {skill.name}
            </p>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};


export default RenderSkillCards;
