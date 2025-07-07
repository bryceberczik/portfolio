import { motion } from "framer-motion";

const AIButton = () => {
  return (
    <button
      onClick={() =>
        window.open(
          "https://github.com/bryceberczik?tab=repositories",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="text-white font-medium px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10">Click here</span>
      <motion.div
        initial={{ left: 0 }}
        animate={{ left: "-300%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "linear",
        }}
        className="bg-[linear-gradient(to_right,#683a89,#3a5f77,#008f7a)] absolute z-0 inset-0 w-[400%]"
      ></motion.div>
    </button>
  );
};

export default AIButton;
