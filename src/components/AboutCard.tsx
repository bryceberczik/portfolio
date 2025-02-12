import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IAbout } from "../interfaces/interfaces";

const AboutCard = ({ heading, description, icon }: IAbout) => {
  return (
    <div className="px-4 xl:px-3 py-12 2xl:px-10">
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
          className="relative z-10 mb-10 mt-2 flex h-6 w-6 items-center justify-center rounded-full border-2 text-[whitesmoke] p-5 text-2xl"
        />

        <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
          {heading}
        </h4>
        <p className="relative z-10 text-slate-200">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;