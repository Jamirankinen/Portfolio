import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";

const Skill = ({ imageSrc, icon, name, level }) => {
  const barRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.skill}>
      <div className={styles.skillInfo}>
        <div className={styles.skillImageContainer}>
          <img
            src={getImageUrl(imageSrc.src)}
            srcSet={imageSrc.srcSet
              .split(",")
              .map((src) => getImageUrl(src.trim()))
              .join(", ")}
            alt={`${name} icon`}
            width="45"
            height="45"
            className={styles.icon}
            loading="lazy"
          />
          <div className={styles.tooltip}>{name}</div>
        </div>
      </div>

      <div className={styles.barWrapper} ref={barRef}>
        <div
          className={styles.barFill}
          style={{ width: visible ? `${level}%` : "0%" }}
        >
          {visible && (
            <span className={styles.percentageLabel}>
              {level}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
