import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutCard = () => {
  return (
    <div className="px-4 py-12">
      <GlassmorphicCard />
    </div>
  );
};

const GlassmorphicCard = () => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg p-0.5 transition-all duration-500 hover:scale-[1.01]">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-white/10 backdrop-blur-lg p-8 shadow-lg transition-colors duration-500 group-hover:bg-white/20">
        <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-white bg-white/20 p-4 text-7xl text-white backdrop-blur-md" />

        <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
          Go faster
        </h4>
        <p className="relative z-10 text-slate-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum
          sed blanditiis iste molestias nemo nobis repellendus nisi dolorum
          itaque optio impedit cum voluptatem facilis minima, quasi laborum.
          Nihil, quaerat.
        </p>
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
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default AboutCard;