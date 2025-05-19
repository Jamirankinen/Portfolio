import React from "react";
import styles from "./ProjectSlide.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const ProjectSlide = ({ project, isReversed, delays = {} }) => {
  const {
    title,
    imageSrc,
    description,
    skills,
    demo,
    source,
    startDate,
    endDate,
  } = project;

  const {
    image = 1.0,
    content = 1.3,
    title: titleDelay = 1.5,
    date: dateDelay = 1.1,
    description: descDelay = 1.7,
    skills: skillsDelay = 1.9,
    links: linksDelay = 2.1,
  } = delays;

  return (
    <motion.div
      className={`${styles.projectSlide} ${isReversed ? styles.reversed : ""}`}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {/* Image Section */}
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: image, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        layout
      >
        <img
          src={getImageUrl(`${imageSrc}.webp`)}
          srcSet={`
          ${getImageUrl(`${imageSrc}-small.webp`)} 480w,
          ${getImageUrl(`${imageSrc}-medium.webp`)} 768w,
          ${getImageUrl(`${imageSrc}.webp`)} 1280w
          `}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={`Screenshot of ${title}`}
          className={styles.image}
          loading="lazy"
          width="1280"
          height="800"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: content, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        layout
      >
        <motion.h3
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: titleDelay, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          layout
        >
          {title}
        </motion.h3>

        {/* Date Range */}
        {(startDate || endDate) && (
          <motion.p
            className={styles.date}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: dateDelay, duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            layout
          >
            {startDate} – {endDate}
          </motion.p>
        )}

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: descDelay, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          layout
        >
          {description}
        </motion.p>

        <motion.ul
          className={styles.skills}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: skillsDelay, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          layout
        >
          {skills.map((skill, index) => (
            <li key={index} className={styles.skill}>
              {skill}
            </li>
          ))}
        </motion.ul>

        <motion.div
          className={styles.links}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: linksDelay, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          layout
        >
          {demo && (
            <a
              href={demo}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
          {source && (
            <a
              href={source}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
