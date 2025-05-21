import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getImageUrl } from "../../utils";
import styles from "./CertificateCard.module.css";

export const CertificateCard = ({
  certificate: { title, date, imageSrc, description, skills, source },
  index = 0,
}) => {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Animation timings using index
  const baseDelay = 0.4 + index * 0.4;

  const cardAnimation = {
    delay: baseDelay,
    duration: 0.6,
  };

  const imageAnimation = {
    delay: baseDelay + 0.5,
    duration: 0.5,
  };

  const titleAnimation = {
    delay: baseDelay + 0.8,
    duration: 0.5,
  };

  const dateAnimation = {
    delay: baseDelay + 1,
    duration: 0.5,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
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
        {/* Front */}
        <div className={styles.front}>
          <motion.img
            src={getImageUrl(`${imageSrc}.webp`)}
            srcSet={`
              ${getImageUrl(`${imageSrc}-small.webp`)} 480w,
              ${getImageUrl(`${imageSrc}-medium.webp`)} 768w,
              ${getImageUrl(`${imageSrc}.webp`)} 1280w
            `}
            sizes="(max-width: 600px) 90vw, (max-width: 1024px) 40vw, 25vw"
            alt={`Image of ${title}`}
            loading="lazy"
            className={styles.image}
            draggable={false}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={imageAnimation}
          />
          <motion.h3
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={titleAnimation}
          >
            {title}
          </motion.h3>
          <motion.p
            className={styles.date}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={dateAnimation}
          >
            {date}
          </motion.p>
        </div>

        {/* Back */}
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
