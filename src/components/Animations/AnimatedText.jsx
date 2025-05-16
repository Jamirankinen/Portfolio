import React from "react";
import { motion } from "framer-motion";

export const AnimatedText = ({
  text,
  startDelay = 0,
  stagger = 0.03,
  duration = 0.4,
  ease = "easeOut",
}) => {
  return (
    <motion.span
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
      initial="hidden"
      animate="visible"
    >
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: startDelay + i * stagger,
            duration: duration,
            ease: ease,
          }}
          style={{
            display: "inline-block",
            whiteSpace: "pre-wrap",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
