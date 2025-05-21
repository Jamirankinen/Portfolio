import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import githubIcon from "/assets/contact/githubIcon.png";
import linkedinIcon from "/assets/contact/linkedinIcon.png";
import emailIcon from "/assets/contact/emailIcon.png";
import { useState } from "react";

const Contact = () => {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("your@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className={styles.contactSection}>
      {/* Animated Line Separator */}
      <motion.div
        id="contacts"
        className={styles.line}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
      />

      {/* Tagline */}
      <motion.h2
        className={styles.tagline}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Would thou check my socials...?
      </motion.h2>

      {/* Glass Card with Custom Icons */}
      <motion.div
        className={styles.glassCard}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a
          href="https://github.com/jamirankinen"
          target="_blank"
          rel="GitHub Jami Rankinen"
          className={styles.iconWrapper}
        >
          <img src={githubIcon} alt="GitHub" className={styles.icon} loading="lazy" />
        </a>
        <a
          href="https://www.linkedin.com/in/jami-rankinen/"
          target="_blank" 
          rel="LinkedIn Jami Rankinen"
          className={styles.iconWrapper}
        >
          <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
        </a>
        <button onClick={handleEmailClick} className={styles.iconWrapper}>
          <img src={emailIcon} alt="Email" className={styles.icon} />
        </button>
        {copied && (
          <motion.div
            className={styles.tooltip}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            Copied!
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
      <p className={styles.footer}>© {year} Jami Rankinen</p>
    </section>
  );
};
export default Contact;
