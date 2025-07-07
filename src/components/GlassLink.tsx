type GlassLinkProps = {
  text: string;
  id: string;
  onClick?: () => void;
};

const GlassLink = ({ text, id, onClick }: GlassLinkProps) => {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};

export default GlassLink;
