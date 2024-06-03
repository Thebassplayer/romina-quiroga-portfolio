"use client";
import React from "react";
import { motion } from "framer-motion";

const rominaQuirogaText = "Romina Quiroga";

const letters = rominaQuirogaText.split("");

const rightMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    x: -50,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const leftMotion = {
  rest: { opacity: 1, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const letterEffect = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const TextTransition = () => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex cursor-pointer gap-4 font-roboto font-bold *:text-2xl"
    >
      <motion.div variants={leftMotion}>
        <p>RQ</p>
      </motion.div>
      <motion.div variants={rightMotion}>
        {letters.map((letter, index) => (
          <motion.span
            variants={letterEffect}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 * index }}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TextTransition;
