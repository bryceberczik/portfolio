import { motion } from "framer-motion";
import { BASE_TRANSITION } from "../constants/baseTransition";
import { FormType } from "../types/types";

const FormSelect = ({ selected, setSelected, setIsSwitching }: FormType) => {
  const handleSelection = (value: string) => {
    setIsSwitching(true);
    setSelected(value);
    setTimeout(() => {
      setIsSwitching(false);
    }, 750);
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

export default FormSelect;
