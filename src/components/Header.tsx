import { useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { useAnimate, motion } from "framer-motion";

import { FiArrowUpRight } from "react-icons/fi";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../../public/picsvg_download.svg";

import ButtonWrapper from "./HeaderButton";
import GlassLink from "./GlassLink";

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope] = useAnimate();
  const [ref, { height }] = useMeasure();
  const navRef = useRef(null);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="glass-nav fixed left-0 right-0 top-0 z-30 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
    >
      <div className="glass-nav flex items-center justify-between px-5 py-5">
        <motion.span
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            transform: `scale(${
              hovered ? 1 : 0
            }) translateX(-50%) translateY(-50%)`,
          }}
          transition={{ duration: 0.15 }}
          ref={scope}
          className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
        >
          <FiArrowUpRight className="text-white" />
        </motion.span>

        <div className="hidden items-center md:flex">
          <GlassLink id="about" text="About" />
          <GlassLink id="projects" text="Projects" />
          <GlassLink id="skills" text="Skills" />
        </div>

        <span className="pointer-events-none relative left-0 top-[50%] z-10 text-xl text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
          <img src={logo} width={80} alt="bryce berczik logo" />
        </span>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a href="#contact" className="relative mr-4">
              <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                Contact
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>

          <ButtonWrapper />

          <div className="md:hidden">
            <Hamburger rounded color="white" onToggle={setMenuOpen} />
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? height : "0px",
        }}
        className="block overflow-hidden md:hidden"
      >
        <div ref={ref} className="flex items-center justify-between px-2 pb-4">
          <div className="flex items-center gap-1">
            <GlassLink id="about" text="About" />
            <GlassLink id="projects" text="Projects" />
            <GlassLink id="skills" text="Skills" />
          </div>
          <a href="#contact" className="relative mr-4">
            <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
              Contact
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Header;
