import { jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

const AnimatedHeading = ({ text, className }) => /* @__PURE__ */ jsx(
  motion.h2,
  {
    className,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    variants: {
      hidden: {},
      visible: {
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.05
        }
      }
    },
    children: text.split("").map((char, i) => /* @__PURE__ */ jsx(
      motion.span,
      {
        style: { display: "inline-block" },
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        },
        transition: {
          duration: 0.4,
          ease: "easeOut"
        },
        children: char === " " ? " " : char
      },
      `heading-char-${i}`
    ))
  }
);

export { AnimatedHeading as A };
