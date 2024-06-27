"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useLanguage from "@/hooks/useLang";

const MOVING_WORDS = {
  eng: ["thinking", "living", "dreaming", "creating"],
  esp: ["pensar", "vivir", "soñar", "crear"],
};

const ChangingWord = () => {
  const lang = useLanguage();
  const texts = MOVING_WORDS[lang];

  const [index, setIndex] = useState(0);
  const variants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, texts.length]);

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
            {texts[index]}
          </motion.h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default ChangingWord;
