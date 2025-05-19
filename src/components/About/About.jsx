import React from "react";
import { motion } from "framer-motion";
import aboutItems from "../../data/about.json";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const splitLetters = (text) => text.split("");
const splitWords = (text) => text.split(" ");

const icons = [
  "about/cursorIcon.png",
  "about/serverIcon.png",
  "about/uiIcon.png",
];

const About = () => {
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
      <ul className={styles.aboutItems}>
        {aboutItems.map((item, index) => (
          <li className={styles.aboutItem} key={index}>
            <img src={getImageUrl(icons[index])} alt={`${item.title} icon`} className={styles.aboutIcon} />
            <div className={styles.aboutItemText}>
              <motion.h3
                className={styles.aboutItemtitle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05 },
                  },
                }}
              >
                {splitLetters(item.title).map((char, i) => (
                  <motion.span
                    key={i}
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
                {splitWords(item.description).map((word, i) => (
                  <motion.span
                    key={i}
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
        ))}
      </ul>
    </motion.section>
  );
};
export default About;
