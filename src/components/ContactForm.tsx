import { useState } from "react";

import Form from "./Form";
import Images from "./images";

const ShiftingContactForm = () => {
  const [selected, setSelected] = useState("individual");
  const [isSwitching, setIsSwitching] = useState(false);

  return (
    <section className="p-4">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form
          selected={selected}
          setSelected={setSelected}
          isSwitching={isSwitching}
          setIsSwitching={setIsSwitching}
        />
        <Images selected={selected} />
      </div>
    </section>
  );
};

export default ShiftingContactForm;
