import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BASE_TRANSITION } from "../constants/baseTransition";
import { FormType } from "../types/types";

import FormSelect from "./FormSelect";

const Form = ({
  selected,
  setSelected,
  isSwitching,
  setIsSwitching,
}: FormType) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (isSwitching) return;
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
        // ADD ALERT
    } else {
      console.log("Error", data);
        // ADD ALERT
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === "company"
          ? "shadow-lg bg-white/10 backdrop-blur-lg"
          : "shadow-lg bg-white/10 backdrop-blur-lg"
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
            selected === "company"
              ? "shadow-lg bg-white/10 backdrop-blur-lg"
              : "shadow-lg bg-white/10 backdrop-blur-lg"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6 flex flex-col items-center">
        <p className="text-xl mb-2">and I represent..</p>
        <FormSelect
          selected={selected}
          setSelected={setSelected}
          setIsSwitching={setIsSwitching}
        />
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

export default Form;