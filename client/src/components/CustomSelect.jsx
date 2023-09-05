import React, { useState} from "react";
import { motion } from "framer-motion";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function CustomSelect({ options, setState, theChoose, label}) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(0);
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative px-6 mt-4 mb-4"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className={`border-2 border-green-500 dropdown-button text-xl  ${
          input === 0 ? "text-neutral-400" : "text-black"
        } font-semibold text-left bg-white bg-opacity-40 w-full p-3 md:py-6 md:text-xl rounded-lg`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {input === 0 ? label : theChoose}
      </motion.button>
      <motion.div
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className={`${
          isOpen ? "block" : "hidden"
        } dropdown-content max-h-40 overflow-y-scroll no-scrollbar bg-green-500 bg-opacity-90 w-full mt-1 rounded-lg cursor-pointer text-center`}
      >
        {options.map((option) => (
          <motion.p
            key={option}
            variants={itemVariants}
            onClick={() => {
              setInput(option);
              setState(option);
              setIsOpen(false);
            }}
            className="block px-4 py-2 text-white font-semibold"
          >
            {option}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
