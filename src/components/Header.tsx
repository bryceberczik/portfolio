import { useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import ButtonWrapper from "./HeaderButton";
import { Spin as Hamburger } from 'hamburger-react'

const Example = () => {
  return <GlassNavigation />
};

const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope] = useAnimate();
  const navRef = useRef(null);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="glass-nav fixed left-0 right-0 top-0 z-10 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
    >
      <div className="glass-nav flex items-center justify-between px-5 py-5">
        <Cursor hovered={hovered} scope={scope} />

        <Links />

        <Logo />

        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({ hovered, scope }: any) => {
  return (
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
  );
};

const Logo = () => (
  <span className="pointer-events-none relative left-0 top-[50%] z-10 text-2xl text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
    Bryce Berczik
  </span>
);

const Links = () => (
  <div className="hidden items-center gap-2 md:flex">
    <GlassLink id="about" text="About" />
    <GlassLink id="projects" text="Projects" />
    <GlassLink text="Skills" />
  </div>
);

const GlassLink = ({ text, id }: any) => {
  return (
    <a
      href={`#${id}`}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};

const Buttons = ({ setMenuOpen }: any) => (
  <div className="flex items-center gap-4">
    <div className="hidden md:block">
      <ContactButton />
    </div>

    <ButtonWrapper />

    <Hamburger rounded color="white" onToggle={setMenuOpen} />
  </div>
);

const ContactButton = () => {
  return (
    <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        Contact
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
};

const MobileMenu = ({ menuOpen }: any) => {
  const [ref, { height }] = useMeasure();
  return (
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
        <GlassLink text="Skills" />
        </div>
        <ContactButton />
      </div>
    </motion.div>
  );
};

export default Example;