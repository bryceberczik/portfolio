import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CardType } from "../types/types";

import testimonials from "../data/testimonials";

const MobileShuffleCards = () => {
  const [order, setOrder] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    const lastItem = orderCopy.pop();
    if (lastItem !== undefined) {
      orderCopy.unshift(lastItem);
    }
    setOrder(orderCopy);
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden px-2 py-12 text-slate-50">
      <div className="relative h-[350px] w-[250px]">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            {...testimonial}
            position={order[index]}
            handleShuffle={handleShuffle}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  handleShuffle,
  testimonial,
  position,
  imgUrl,
  author,
}: CardType) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e: any) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e: any) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  const x = position === "front" ? "0%" : position === "middle" ? "15%" : "30%";
  const rotateZ =
    position === "front" ? "-3deg" : position === "middle" ? "0deg" : "3deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{ zIndex }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{ duration: 0.35 }}
      className={`absolute right-9 grid h-[350px] w-[250px] select-none place-content-center space-y-3 rounded-2xl border border-slate-700 bg-slate-800/20 p-3 shadow-lg backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={imgUrl}
        alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-20 w-20 rounded-full border border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-xs italic text-slate-400">
        "{testimonial}"
      </span>
      <span className="text-center text-[10px] font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );
};

export default MobileShuffleCards;
