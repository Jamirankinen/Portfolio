import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import heroData from "../../data/hero.json";

const splitLetters = (text) => text.split("");
const splitWords = (text) => text.split(" ");

const Hero = () => {
  const { heading, description } = heroData[0];

  return (
    <motion.section
      className={styles.container}
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        {/* Animated heading */}
        <motion.h1
          className={styles.title}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {splitLetters(heading).map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated description */}
        <motion.p
          className={styles.description}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.8,
                staggerChildren: 0.07,
              },
            },
          }}
        >
          {splitWords(description).map((word, index) => (
            <motion.span
              key={index}
              style={{ marginRight: "6px", display: "inline-block" }}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Contact button */}
        <motion.a
          href="mailto:jamuxi34@gmail.com"
          className={styles.contactBtn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1, ease: "easeOut" }}
        >
          <span className={styles.marqueeText}>Contact me!</span>
        </motion.a>
      </div>

      {/* Hero image */}
      <motion.img
        src={getImageUrl("hero/heroImage.webp")}
        srcSet={`
          ${getImageUrl("hero/heroImage-small.webp")} 480w,
          ${getImageUrl("hero/heroImage-medium.webp")} 768w,
          ${getImageUrl("hero/heroImage.webp")} 1280w
          `}
        sizes="(max-width: 600px) 80vw, (max-width: 1024px) 50vw, 30vw"
        alt="Hero image of me"
        className={styles.heroImg}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4.1, duration: 1, ease: "easeOut" }}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </motion.section>
  );
};
export default Hero;
