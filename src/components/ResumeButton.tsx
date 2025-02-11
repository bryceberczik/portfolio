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
    };

    return (
        <button 
            onClick={handleDownload} 
            className="relative overflow-hidden text-white font-medium px-4 py-2 rounded-md transition-transform hover:scale-105 active:scale-95 flex items-center justify-center"
        >
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
                className="absolute inset-0 w-[400%] bg-[linear-gradient(to_right,#683a89,#3a5f77,#008f7a)] pointer-events-none"
            />
        </button>
    );
};

export default ResumeButton;
