"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

const words = {
  eng: ["think", "live", "dream", "create"],
  esp: ["pensar", "vivir", "soñar", "crear"],
};

const ChangingWord = () => {
  const searchParams = useSearchParams();
  const eng = searchParams.get("eng") === "true" ? true : false;
  const [index, setIndex] = useState(0);

  const variants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  const selectedWords = eng ? words.eng : words.esp;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % selectedWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, selectedWords.length]);

  return (
    <div className="*:text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.1 }}
          >
            {selectedWords[index]}
          </motion.h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default ChangingWord;
