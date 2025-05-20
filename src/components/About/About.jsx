import React from "react";
import { motion } from "framer-motion";
import aboutItems from "../../data/about.json";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


const icons = [
  "about/cursorIcon.webp",
  "about/smileIcon.webp",
  "about/uiIcon.webp",
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
        {aboutItems.map((item, index) => {
          const baseDelay = 0.3 + index * 0.4;

          return (
            <motion.li
              className={styles.aboutItem}
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: baseDelay }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.img
                src={getImageUrl(icons[index])}
                alt={`${item.title} icon`}
                className={styles.aboutIcon}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: baseDelay + 0.1 }}
                viewport={{ once: true }}
              />

              <div className={styles.aboutItemText}>
                <motion.h3
                  className={styles.aboutItemtitle}
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ duration: 0.5, delay: baseDelay + 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className={styles.description}
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ duration: 0.5, delay: baseDelay + 0.3 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
};
export default About;
