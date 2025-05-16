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
        <h2>Hello there!</h2>
        <p>Would thou check my socials...?</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:jamuxi34@gmail.com">Mail here!</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/jami-rankinen-6322612b9">
            LinkedIn too!
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
          <a href="https://github.com/Jamiiiiii">Last but not least GitHub!</a>
        </li>
      </ul>
    </motion.footer>
  );
};
