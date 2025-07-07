import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutType } from "../types/types";

const GlassmorphicCard = ({ heading, description, icon }: AboutType) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg p-0.5 transition-all duration-500 hover:scale-[1.01]">
      <div className="relative custom-z flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-white/10 backdrop-blur-lg p-8 shadow-lg transition-colors duration-500 group-hover:bg-white/20">
        <FontAwesomeIcon
          icon={icon}
          className="relative z-20 mb-10 mt-2 flex h-7 w-7 items-center justify-center rounded-full border-2 text-[whitesmoke] p-4 text-2xl"
        />

        <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
          {heading}
        </h4>
        <p className="relative z-10 text-slate-200">{description}</p>
      </div>
    </div>
  );
};

export default GlassmorphicCard;
