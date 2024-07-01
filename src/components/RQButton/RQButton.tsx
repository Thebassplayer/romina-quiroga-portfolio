"use client";

import { motion } from "framer-motion";
import cx from "@/app/utils/classesReducer";

type RQButtonProps = {
  className?: string;
};

const rominaQuirogaText = "Romina Quiroga";

const rightMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    x: -60,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const leftMotion = {
  rest: { opacity: 1, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    x: -60,
    opacity: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const letterEffect = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

const RQButton = ({ className }: RQButtonProps) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={cx(
        "relative flex cursor-pointer gap-4 font-roboto *:text-3xl",
        className,
      )}
    >
      <motion.div variants={leftMotion}>
        <p className="p-2 backdrop-blur-sm">RQ</p>
      </motion.div>
      <motion.div
        variants={rightMotion}
        className="absolute -right-[240px] top-0 w-max"
      >
        <p className="p-2 backdrop-blur-sm">{rominaQuirogaText}</p>
      </motion.div>
    </motion.div>
  );
};

export default RQButton;
