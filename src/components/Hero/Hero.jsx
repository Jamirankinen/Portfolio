import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const splitLetters = (text) => text.split("");
const splitWords = (text) => text.split(" ");

export const Hero = () => {
  const heading = "Hi, I'm Jami";
  const description =
    "I have a Bachelor's degree in Business and Information Systems. I'm looking for a junior or entry-level position in IT. My preferred roles are Front-End or Full-Stack Developer. Feel free to check out my projects and certificates below, and contact me if you're interested!";

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
        {/* Animate heading */}
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
        {/* Paragraph animation: one word at a time */}
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
          href="mailto:jami34@windowslive.com"
          className={styles.contactBtn}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.1, duration: 1, ease: "easeOut" }}
        >
          <span className={styles.marqueeText}>Contact me!</span>
        </motion.a>
      </div>
      {/* Hero image */}
      <motion.img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4.5, duration: 0.6, ease: "easeOut" }}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </motion.section>
  );
};
