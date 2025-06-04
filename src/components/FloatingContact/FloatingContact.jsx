import styles from "./FloatingContact.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedTypewriter from "../../hooks/AnimatedTypewriter";

const FloatingContact = () => {
  const { t } = useTranslation();

  return (
    <motion.section className={styles.floatingSection} id="contact">
      {/* Animated contact content */}
      <motion.div
        className={styles.contactContent}
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>
          <span className={styles.staticText}>
          {t("contact.title")}
          </span>{" "}
          <span className={styles.animated}>
            <AnimatedTypewriter texts={t("contact.animatedTitles", { returnObjects: true })} />
          </span>
        </h2>
        <p className={styles.subtitle}>{t("contact.description")}</p>
        <a href="mailto:your.email@example.com" className={styles.emailButton}>
          Send an Email
        </a>
      </motion.div>

      {/* Sun behind mountains */}
      <div className={styles.sunWrapper}>
        <div className={styles.card}></div>
      </div>
    </motion.section>
  );
};

export default FloatingContact;
