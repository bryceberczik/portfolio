import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiPrisma, SiZod, SiGraphql, SiPython, SiFramer, SiBootstrap, SiReactbootstrap, SiLua } from "react-icons/si"

const skills = [
    { name: "React", icon: FaReact, color: "" },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "PostgreSql", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Prisma", icon: SiPrisma },
    { name: "Zod", icon: SiZod },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Python", icon: SiPython },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "React Bootstrap", icon: SiReactbootstrap },
    { name: "Lua", icon: SiLua },
    { name: "Framer", icon: SiFramer },
];

const RenderSkillCards = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 flex flex-col items-center rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform">
              <div className="flex flex-col items-center">
                <skill.icon />
                <p className="mt-2 text-lg font-semibold">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      );
};

export default RenderSkillCards;