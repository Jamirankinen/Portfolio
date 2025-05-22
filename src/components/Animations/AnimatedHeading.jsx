// components/AnimatedHeading.jsx
import { motion } from "framer-motion";
import { useHasHydrated } from "../../hooks/useHasHydrated";

export const AnimatedHeading = ({ text, className }) => {

  const hasHydrated = useHasHydrated();

 if (!hasHydrated) {
    return <h2 className={className}>{text}</h2>;
  }

  return (
  <motion.h2
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.05,
        },
      },
    }}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={`heading-char-${i}`}
        style={{ display: "inline-block" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.h2>
    );
};
