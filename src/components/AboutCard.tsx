import { AboutType } from "../types/types";
import GlassmorphicCard from "./GlassmorphicCard";

const AboutCard = ({ heading, description, icon }: AboutType) => {
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

export default AboutCard;
