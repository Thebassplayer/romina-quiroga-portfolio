import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type GoTopButtonProps = {
  topRef: React.RefObject<HTMLDivElement>;
};

const GoTopButton = ({ topRef }: GoTopButtonProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed bottom-10 right-10 border border-white bg-black p-4 text-white *:font-roboto"
        >
          Go Top
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoTopButton;
