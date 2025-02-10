import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiZod,
  SiGraphql,
  SiPython,
  SiFramer,
  SiBootstrap,
  SiReactbootstrap,
  SiLua,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#58C4DC" },
  { name: "TypeScript", icon: SiTypescript, color: "#2F74C0" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#00BCFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#58A846" },
  { name: "PostgreSql", icon: SiPostgresql, color: "whitesmoke" },
  { name: "MongoDB", icon: SiMongodb, color: "#17AE55" },
  { name: "Prisma", icon: SiPrisma, color: "#191D3D" },
  { name: "Zod", icon: SiZod, color: "whitesmoke" },
  { name: "GraphQL", icon: SiGraphql, color: "#E63BAE" },
  { name: "Python", icon: SiPython, color: "#FFCE41" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#8A18FD" },
  { name: "React BS", icon: SiReactbootstrap, color: "#46E1FE" },
  { name: "Lua", icon: SiLua, color: "#0A0987" },
  { name: "Framer", icon: SiFramer, color: "black" },
];

const RenderSkillCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="p-4 flex flex-col items-center rounded-2xl shadow-lg bg-white/20 backdrop-blur-lg hover:scale-105 transition-transform"
        >
          <div className="flex flex-col items-center">
            <skill.icon style={{ color: skill.color, fontSize: "20px", }} />
            <p className="mt-2 text-[whitesmoke] text-lg font-semibold">{skill.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderSkillCards;
