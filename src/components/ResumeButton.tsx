import { motion } from "framer-motion";
import resume from "../files/myResume.pdf";

const ResumeButton = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "bryceberczik_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  return (
    <button onClick={handleDownload} className="text-white font-medium px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10">Download Resume</span>
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
      ></motion.div>a
    </button>
  );
};

export default ResumeButton;