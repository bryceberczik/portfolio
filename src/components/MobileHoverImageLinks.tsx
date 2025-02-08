import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import stellabyte from "../images/stellabyte.png";
import digbiai from "../images/digbi.png";
import pronx from "../images/pronx.png";
import codebounty from "../images/codebounty.png";

export const MobileHoverImageLinks = () => {
  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Stellabyte"
          subheading="Cloud storage with a cosmic twist using AWS"
          imgSrc={stellabyte}
          href="https://stellabyte-production.up.railway.app"
          link="https://github.com/ZVKubajak/Stellabyte"
        />
        <Link
          heading="Digbi AI"
          subheading="AI Chatbot that finds patterns in JSON data"
          imgSrc={digbiai}
          href="https://digbiai.com"
          link="https://github.com/bryceberczik/Digbi-AI"
        />
        <Link
          heading="pronx."
          subheading="A productivity tool and motivational app"
          imgSrc={pronx}
          href="https://pronx-p203.onrender.com"
          link="https://github.com/bryceberczik/pronx"
        />
        <Link
          heading="codeBounty"
          subheading="Freelance development app for web developers"
          imgSrc={codebounty}
          href="https://codebounty.onrender.com/"
          link="https://github.com/bryceberczik/codeBounty"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, subheading, href, link }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-between border-b-2 border-white py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div className="w-full">
        <span className="relative z-10 flex text-4xl items-center gap-5 font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl">
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-white">{heading}</h1>
            </div>
            <div
              className="px-3 pb-1"
              onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            >
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faGithub}
              />
            </div>
          </div>
        </span>
        <span className="relative z-10 mt-4 block text-sm text-left text-white transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>
    </a>
  );
};
