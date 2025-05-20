import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
import { AnimatedHeading } from "../Animations/AnimatedHeading";

const Experience = () => {
  const lineRef = useRef(null);
  const lastDotRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current && lastDotRef.current) {
      const lineTop = lineRef.current.getBoundingClientRect().top;
      const dotTop = lastDotRef.current.getBoundingClientRect().top;
      setLineHeight(dotTop - lineTop + 10);
    }
  }, []);

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: lineHeight,
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
      scale: 1.2,
      opacity: 1,
      boxShadow: [
        "0 0 0px var(--color-primary)",
        "0 0 12px var(--color-primary)",
        "0 0 8px var(--color-primary)",
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
      {/* Add particles behind content */}
      <div className={styles.particles}>
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 10}%`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      <AnimatedHeading text="Experience" className={styles.title} />
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <motion.div
              className={styles.skill}
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.6 + i * 0.1, // 🔧 Adjust delay per item
                    duration: 0.4, // 🔧 Adjust animation speed
                    ease: "easeOut", // 🔧 Adjust easing
                  },
                }),
              }}
            >
              <div className={styles.skillImageContainer}>
                <img
                  src={getImageUrl(skill.imageSrc.src)}
                  srcSet={`
                    ${getImageUrl(
                      "skills/" + skill.title.toLowerCase() + "-45.webp"
                    )} 1x,
                    ${getImageUrl(
                      "skills/" + skill.title.toLowerCase() + "-90.webp"
                    )} 2x
                    `}
                  alt={skill.title}
                  width="45"
                  height="45"
                  loading="lazy"
                />
              </div>
              <p>{skill.title}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.timeline}>
          <motion.div
            className={styles.timelineLine}
            variants={lineVariants}
            ref={lineRef}
          />

          {history.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <motion.div
                  ref={index === history.length - 1 ? lastDotRef : null}
                  className={`${styles.timelineDot} ${
                    styles[`timelineDot${index + 1}`]
                  }`}
                  custom={index}
                  variants={dotVariants}
                />

                <div className={styles.timelineDetails}>
                  {/* Role & Organisation */}
                  <motion.h3
                    className={styles.roleTitle}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{
                      delay: 0.8 + index * 1.4,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {item.role}, {item.organisation}
                  </motion.h3>

                  {/* Dates */}
                  <motion.p
                    className={styles.date}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                      delay: 1.2 + index * 1.5,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true}}
                  >
                    {item.startDate} - {item.endDate}
                  </motion.p>

                  {/* Bullet Points */}
                  <ul>
                    {item.experiences.map((exp, id) => (
                      <div key={id} className={styles.bulletItem}>
                        <motion.div
                          className={styles.bulletDot}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 1.7 + index * 1.5,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        />
                        <motion.p
                          className={styles.bulletText}
                          initial={{ opacity: 0}}
                          whileInView={{ opacity: 1}}
                          transition={{
                            delay: 1.8 + index * 1.5,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        >
                          {exp}
                        </motion.p>
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
export default Experience;
