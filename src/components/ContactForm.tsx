import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

const ShiftingContactForm = () => {
  const [selected, setSelected] = useState("individual");
  const [isSwitching, setIsSwitching] = useState(false); // Track switching

  return (
    <section className="p-4">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form selected={selected} setSelected={setSelected} isSwitching={isSwitching} setIsSwitching={setIsSwitching} />
        <Images selected={selected} />
      </div>
    </section>
  );
};

const Form = ({ selected, setSelected, isSwitching, setIsSwitching }: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (isSwitching) return; // Prevent form submission while switching
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "73a6d637-0dd7-4625-ba1a-3c217cac240a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      Swal.fire({
        title: "Message submitted!",
        text: "I'll get back to you as soon as possible!",
        icon: "success",
        background: "#3c1e5b",
        color: "#fff",
        confirmButtonText: "Close",
        confirmButtonColor: "#00bc7d"
      });
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Message failed!",
        text: "Something went wrong, please try again.",
        icon: "error",
        background: "#3c1e5b",
        color: "#fff",
        confirmButtonText: "Close",
        confirmButtonColor: "#00bc7d"
      });
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === "company" ? "shadow-lg bg-white/10 backdrop-blur-lg" : "shadow-lg bg-white/10 backdrop-blur-lg"
      }`}
    >
      {/* Name input */}
      <div className="mb-6">
        <p className="text-xl mb-2">My name is..</p>
        <input
          name="name"
          type="text"
          placeholder="Enter name here.."
          className={`${
            selected === "company" ? "shadow-lg bg-white/10 backdrop-blur-lg" : "shadow-lg bg-white/10 backdrop-blur-lg"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6 flex flex-col items-center">
        <p className="text-xl mb-2">and I represent..</p>
        <FormSelect selected={selected} setSelected={setSelected} setIsSwitching={setIsSwitching} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-xl mb-2">by the name of..</p>
            <input
              name="company"
              type="text"
              placeholder="Enter company name.."
              className="shadow-lg bg-white/10 backdrop-blur-lg transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="text-xl mb-2">Let's talk about..</p>
        <textarea
          name="message"
          placeholder="Enter message here.."
          className="shadow-lg bg-white/10 backdrop-blur-lg transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0"
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        disabled={isSwitching || isSubmitting} // Disable when switching or submitting
        className="shadow-lg bg-white/10 backdrop-blur-lg transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold"
      >
        {isSubmitting ? <>Submitting...</> : <>Submit</>}
      </motion.button>
    </form>
  );
};

const FormSelect = ({ selected, setSelected, setIsSwitching }: any) => {
  const handleSelection = (value: string) => {
    setIsSwitching(true); // Set switching state to true
    setSelected(value);
    setTimeout(() => {
      setIsSwitching(false); // Reset switching state after transition
    }, 750); // Match the duration of your transition
  };

  return (
    <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
      <button
        className={`${
          selected === "individual" ? "text-white" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => handleSelection("individual")}
      >
        <span className="relative z-10">An individual</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 shadow-lg bg-white/10 backdrop-blur-lg"
          />
        )}
      </button>
      <button
        className={`${
          selected === "company" ? "text-white" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => handleSelection("company")}
      >
        <span className="relative z-10">A company</span>
        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 shadow-lg bg-white/10 backdrop-blur-lg"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }: any) => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default ShiftingContactForm;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };
