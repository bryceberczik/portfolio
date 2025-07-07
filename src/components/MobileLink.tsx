import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LinkProp } from "../types/types";

const MobileLink = ({ heading, subheading, href, link, technologies }: LinkProp) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-between border-b-2 border-white py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div className="w-full">
        <span className="relative flex text-4xl items-center gap-5 font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl">
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-white">{heading}</h1>
            </div>
            {link === "" ? null : (
              <div
                className="px-3 pb-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(link, "_blank", "noopener,noreferrer");
                }}
              >
                <FontAwesomeIcon
                  className="text-white text-2xl"
                  icon={faGithub}
                />
              </div>
            )}
          </div>
        </span>
        <span className="relative  mt-4 block text-sm text-left text-white transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
        {technologies && technologies.length > 0 && (
          <div className="relative z-10 mt-3 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg transition-all duration-300 group-hover:text-white group-hover:bg-white/20 group-hover:border-white/30 group-hover:shadow-xl group-hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default MobileLink;
