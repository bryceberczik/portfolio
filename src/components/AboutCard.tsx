import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { IAbout } from "../interfaces/interfaces";

const AboutCard = ({ heading, description, icon }: IAbout) => {
  return (
    <div className="px-4 py-12">
      <GlassmorphicCard
        heading={heading}
        description={description}
        icon={icon}
      />
    </div>
  );
};

const GlassmorphicCard = ({ heading, description, icon }: IAbout) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg p-0.5 transition-all duration-500 hover:scale-[1.01]">
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

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#3c1e5b] via-indigo-200/0 to-[#004d42] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default AboutCard;
