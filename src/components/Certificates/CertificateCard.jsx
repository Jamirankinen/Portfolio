import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./CertificateCard.module.css";

export const CertificateCard = ({
  certificate: { title, date, imageSrc, description, skills, source },
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      aria-label={`Certificate card for ${title}`}
    >
      {/* Front Side */}
      <div className={styles.front}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
          draggable={false}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{date}</p>
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
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
