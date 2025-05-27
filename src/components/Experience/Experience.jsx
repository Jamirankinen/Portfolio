import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
import { AnimatedHeading } from "../Animations/AnimatedHeading";

const Experience = () => {
  const { t } = useTranslation();
  const experienceItems = t("experience.items", { returnObjects: true });

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
        duration: 3.8,
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
        delay: 0.3 + index * 1.2,
        duration: 0.6,
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
      {/* Particles background */}
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

      <AnimatedHeading text={t("experience.title")} className={styles.title} />

      <div className={styles.content}>
        {/* Skills section */}
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
                visible: () => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                  },
                }),
              }}
            >
              <div className={styles.skillImageContainer}>
                <img
                  src={getImageUrl(skill.imageSrc.src)}
                  srcSet={`
                    ${getImageUrl("skills/" + skill.title.toLowerCase() + "-45.webp")} 1x,
                    ${getImageUrl("skills/" + skill.title.toLowerCase() + "-90.webp")} 2x
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

        {/* Timeline section */}
        <div className={styles.timeline}>
          <motion.div
            className={styles.timelineLine}
            variants={lineVariants}
            ref={lineRef}
          />

          {history.map((item, index) => {
            const translated = experienceItems[index];
            return (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <motion.div
                    ref={index === history.length - 1 ? lastDotRef : null}
                    className={`${styles.timelineDot} ${styles[`timelineDot${index + 1}`]}`}
                    custom={index}
                    variants={dotVariants}
                  />
                  <div className={styles.timelineDetails}>
                    {/* Role & Organisation */}
                    <motion.h3
                      className={styles.roleTitle}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 3, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      {translated.role}, {translated.organisation}
                    </motion.h3>

                    {/* Dates */}
                    <motion.p
                      className={styles.date}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 3, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      {translated.start} - {translated.end}
                    </motion.p>

                    {/* Bullet Points */}
                    <ul>
                      {translated.bullets.map((exp, id) => (
                        <div key={id} className={styles.bulletItem}>
                          <motion.div
                            className={styles.bulletDot}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                          <motion.p
                            className={styles.bulletText}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 3, ease: "easeOut" }}
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
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
