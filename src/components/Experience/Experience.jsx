import React from "react";
import { motion } from "framer-motion";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
   const totalLineHeight = 207 * (history.length - 1); // Estimate height for the full line

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: totalLineHeight,
      transition: {
        delay: 0.5,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (index) => ({
    scale: 1.2, // slight bounce
    opacity: 1,
    boxShadow: [
      "0 0 0px var(--color-primary)", // start
      "0 0 12px var(--color-primary)", // glow in
      "0 0 8px var(--color-primary)",  // settle
    ],
      transition: {
        delay: 0.3 + index * 1.5,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  return (
        <motion.section
      className={styles.container}
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className={styles.title}>Tech stack & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div className={styles.skill} key={id}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <div className={styles.timeline}>
          {/* Animated single vertical line */}
          <motion.div
            className={styles.timelineLine}
            variants={lineVariants}
          />

          {history.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <motion.div
                  className={`${styles.timelineDot} ${styles[`timelineDot${index + 1}`]}`}
                  custom={index}
                  variants={dotVariants}
                />
                <div className={styles.timelineDetails}>
                  <h3>{`${item.role}, ${item.organisation}`}</h3>
                  <p>{`${item.startDate} - ${item.endDate}`}</p>
                  <ul>
                    {item.experiences.map((exp, id) => (
                      <li key={id}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
