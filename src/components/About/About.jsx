import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const splitLetters = (text) => text.split("");
const splitWords = (text) => text.split(" ");

export const About = () => {
  const title1 = "Frontend Developer";
  const title2 = "Backend Developer";
  const title3 = "UI Designer";
  const description1 =
    "As a Frontend Developer, I specialize in building dynamic and visually appealing user interfaces using React, TypeScript,JavaScript, HTML, and CSS. I strive to create high-performance,responsive websites with reusable components that enhance the user experience, ensuring seamless interactions across all devices.";
  const description2 =
    "With experience in backend development, I focus on building robust and scalable server-side applications using Node.js and various modern technologies. I prioritize performance, security, and maintainability to deliver solutions that support seamlessintegrations and optimized workflows.";
  const description3 =
    "As a UI Designer, I craft intuitive, user-centered designs that bring digital experiences to life. My expertise lies in creating visually stunning, responsive layouts that adapt seamlessly to different screen sizes. I aim to design beautiful, functional interfaces that ensure a smooth user journey across all platforms.";
  return (
    <motion.section
      className={styles.container}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}></div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
          <div className={styles.aboutItemText}>
            <motion.h3
              className={styles.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {splitLetters(title1).map((char, index) => (
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
            </motion.h3>
            <motion.p
              className={styles.description}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
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
              {splitWords(description1).map((word, index) => (
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
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
          <div className={styles.aboutItemText}>
            <motion.h3
              className={styles.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {splitLetters(title2).map((char, index) => (
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
            </motion.h3>
            <motion.p
              className={styles.description}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
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
              {splitWords(description2).map((word, index) => (
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
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
          <div className={styles.aboutItemText}>
            <motion.h3
              className={styles.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {splitLetters(title3).map((char, index) => (
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
            </motion.h3>
            <motion.p
              className={styles.description}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
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
              {splitWords(description3).map((word, index) => (
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
          </div>
        </li>
      </ul>
    </motion.section>
  );
};
