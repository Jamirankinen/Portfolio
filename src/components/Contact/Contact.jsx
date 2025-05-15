import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.footer
      className={styles.container}
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:jamuxi34@gmail.com">jamuxi34@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/jami-rankinen-6322612b9">
            linkedin.com/jami-rankinen
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
          <a href="https://github.com/Jamiiiiii">github.com/Jamiiiiii</a>
        </li>
      </ul>
    </motion.footer>
  );
};
