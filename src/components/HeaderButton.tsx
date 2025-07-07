const ButtonWrapper = () => {
  const handleEmailClick = () => {
    const email = "bryceberczik.dev@gmail.com";
    const subject = encodeURIComponent("Let's Connect!");
    const body = encodeURIComponent(
      "Hey Bryce, I saw your portfolio and had some thoughts.."
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      "_blank"
    );
  };
  return (
    <div className="group relative w-fit transition-transform duration-300 active:scale-95">
      <button
        onClick={handleEmailClick}
        className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110"
      >
        <span className="block rounded-md px-3 py-1 text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
          Let's Chat
        </span>
      </button>
      <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
    </div>
  );
};

export default ButtonWrapper;
