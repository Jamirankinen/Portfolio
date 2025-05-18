import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getImageUrl } from "../../utils";
import styles from "./CertificateCard.module.css";

export const CertificateCard = ({
  certificate: { title, date, imageSrc, description, skills, source },

  // Custom animation controls
  cardAnimation = {
    delay: 0.5,
    duration: 0.6,
  },
  imageAnimation = {
    delay: 0.8,
    duration: 0.5,
  },
  titleAnimation = {
    delay: 1,
    duration: 0.5,
  },
  dateAnimation = {
    delay: 1.2,
    duration: 0.5,
  },
}) => {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // `once` ensures it triggers once per mount

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}} // Animate only when in view
      transition={{
        delay: cardAnimation.delay,
        duration: cardAnimation.duration,
        ease: "easeOut",
      }}
    >
      <div
        className={`${styles.card} ${flipped ? styles.flipped : ""}`}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        style={{ perspective: 1500 }}
        aria-label={`Certificate card for ${title}`}
      >
        {/* Front Side */}
        <div className={styles.front}>
          <motion.img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
            draggable={false}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              delay: imageAnimation.delay,
              duration: imageAnimation.duration,
              ease: "easeOut",
            }}
          />
          <motion.h3
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              delay: titleAnimation.delay,
              duration: titleAnimation.duration,
              ease: "easeOut",
            }}
          >
            {title}
          </motion.h3>
          <motion.p
            className={styles.date}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              delay: dateAnimation.delay,
              duration: dateAnimation.duration,
              ease: "easeOut",
            }}
          >
            {date}
          </motion.p>
        </div>

        {/* Back Side */}
        <div className={styles.back}>
          <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            <a
              href={source}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
