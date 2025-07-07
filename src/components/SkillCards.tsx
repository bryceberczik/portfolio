import { motion } from "framer-motion";
import skills from "../data/skills";

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
