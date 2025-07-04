import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaRocket } from "react-icons/fa";
import {
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
  SiReact
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#58C4DC" },
  { name: "TypeScript", icon: SiTypescript, color: "#2F74C0" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#00BCFF" },
  { name: "Node", icon: FaNodeJs, color: "#58A846" },
  { name: "PostgreSql", icon: SiPostgresql, color: "whitesmoke" },
  { name: "MongoDB", icon: SiMongodb, color: "#17AE55" },
  { name: "Prisma", icon: SiPrisma, color: "#191D3D" },
  { name: "Zod", icon: SiZod, color: "whitesmoke" },
  { name: "Python", icon: SiPython, color: "#FFCE41" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#8A18FD" },
  { name: "Lua", icon: SiLua, color: "#0A0987" },
  { name: "Aerospike", icon: SiAerospike, color: "#F7F410" },
  { name: "AWS", icon: SiAmazonwebservices, color: "whitesmoke" },
  { name: "Expo", icon: SiExpo, color: "whitesmoke" },
  { name: "Docker", icon: SiDocker, color: "#1C63ED" },
  { name: "Redis", icon: SiRedis, color: "#FF4438" },
  { name: "React Native", icon: SiReact, color: "#57C4DC" },
  { name: "QDrant DB", icon: FaRocket, color: "#DC244C" }
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
        <motion.div
          key={skill.name}
          className="p-4 flex flex-col h-24 w-32 items-center rounded-2xl shadow-lg bg-white/20 backdrop-blur-lg"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { delay: index * 0.05, duration: 0.5, ease: "easeOut" } }
          }}
        >
          <div className="flex flex-col items-center">
            <skill.icon style={{ color: skill.color, fontSize: "20px" }} />
            <p className="mt-2 text-[whitesmoke] text-lg font-semibold">{skill.name}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default RenderSkillCards;
