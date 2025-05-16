import React from "react";
import { motion } from "framer-motion";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
import { AnimatedText } from "../Animations/AnimatedText";

export const Experience = () => {
  const totalLineHeight = 218 * (history.length - 1);

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
        "0 0 8px var(--color-primary)", // settle
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
          <motion.div className={styles.timelineLine} variants={lineVariants} />

          {history.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <motion.div
                  className={`${styles.timelineDot} ${
                    styles[`timelineDot${index + 1}`]
                  }`}
                  custom={index}
                  variants={dotVariants}
                />
                <div className={styles.timelineDetails}>
                  <h3>
                    <AnimatedText
                      text={`${item.role}, ${item.organisation}`}
                      startDelay={0.3 + index * 1.5}
                      stagger={0.04}
                      duration={0.5}
                    />
                  </h3>
                  <p>
                    <AnimatedText
                      text={`${item.startDate} - ${item.endDate}`}
                      startDelay={0.3 + index * 1.5 + 0.2}
                      stagger={0.03}
                      duration={0.4}
                    />
                  </p>
                  <ul>
                    {item.experiences.map((exp, id) => (
                      <div key={id} className={styles.bulletItem}>
                        <motion.div
                          className={styles.bulletDot}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.3 + index * 1.5 + 0.4 + id * 0.3,
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                        />
                        <AnimatedText
                          text={exp}
                          startDelay={0.3 + index * 1.5 + 0.4 + id * 0.3}
                          stagger={0.02}
                          duration={0.3}
                        />
                      </div>
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
