import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import byteclub from "../images/byteclub.png";
import stellabyte from "../images/stellabyte.png";
import ragbot from "../images/ragbot.png";
import projectc from "../images/projectc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const HoverImageLinks = () => {
  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Byte Club"
          subheading="AI-driven food rewards start up"
          imgSrc={byteclub}
          href="https://docs.google.com/presentation/d/1iOjyOw4eTKpZ7pYSLlNu0btY9SRFsKFRHFo1cMeUjzg/edit"
          link=""
        />
        <Link
          heading="Stellabyte"
          subheading="Cloud storage with a cosmic twist using AWS"
          imgSrc={stellabyte}
          href="https://stellabyte-production.up.railway.app"
          link="https://github.com/ZVKubajak/Stellabyte"
        />
        <Link
          heading="RAG Chatbot"
          subheading="A vector database–powered chatbot for semantic responses."
          imgSrc={ragbot}
          href="https://rag-chatbot-production-ffa2.up.railway.app/"
          link="https://github.com/ZVKubajak/rag-chatbot"
        />
        <Link
          heading="Project C"
          subheading="My very first app. Used for helping with my finances."
          imgSrc={projectc}
          href="https://bryceberczik.github.io/project-c/"
          link="https://github.com/bryceberczik/project-c"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href, link }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between border-b-2 border-white py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 flex text-xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          <div className="flex items-center gap-7 w-full">
            <div className="flex">
              {heading.split("").map((l: any, i: any) => (
                <motion.span
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  transition={{ type: "spring" }}
                  className="inline-block text-white"
                  key={i}
                >
                  {l}
                </motion.span>
              ))}
            </div>
            {link === "" ? null : (
              <div
                className="mb-2 icon-container transition duration-300 ease-in-out"
                onClick={() =>
                  window.open(link, "_blank", "noopener,noreferrer")
                }
              >
                <FontAwesomeIcon
                  className="text-white text-4xl icon-active transition duration-300 ease-in-out"
                  icon={faGithub}
                />
              </div>
            )}
          </div>
        </motion.span>
        <span className="relative z-10 mt-4 block text-left text-white transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
