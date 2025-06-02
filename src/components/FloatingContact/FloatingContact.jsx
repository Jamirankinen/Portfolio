import styles from "./FloatingContact.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AnimatedTypewriter from "../../hooks/AnimatedTypewriter";

const icons = [
  {
    href: "https://github.com/jamirankinen",
    alt: "GitHub",
    imgSrc: "/assets/contact/githubIcon.png",
    label: "GitHub",
    isButton: false,
  },
  {
    href: "https://www.linkedin.com/in/jami-rankinen/",
    alt: "LinkedIn",
    imgSrc: "/assets/contact/linkedinIcon.png",
    label: "LinkedIn",
    isButton: false,
  },
  {
    href: null,
    alt: "Email",
    imgSrc: "/assets/contact/emailIcon.png",
    label: "Email",
    isButton: true,
  },
];

const FloatingContact = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const staticText = t("contact.staticText");
  const phrases = [
    t("contact.tagline1"),
    t("contact.tagline2"),
    t("contact.tagline3"),
  ].filter(Boolean);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("your@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className={styles.floatingSection} id="contact">
      {/* Sparkle background */}
      <div className={styles.sparkles} aria-hidden="true" />

     <motion.div
  className={styles.typewriter}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <span className={styles.staticPart}>{staticText},&nbsp;</span>
  <span className={styles.dynamicPart}>
    <AnimatedTypewriter texts={phrases} />
  </span>
</motion.div>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {icons.map(({ href, alt, imgSrc, label, isButton }) => {
          const content = (
            <>
              <img
                src={imgSrc}
                alt={alt}
                className={styles.icon}
                aria-hidden="true"
              />
              <span className={styles.label}>{label}</span>
              {/* Meteor trail effect */}
              <span className={styles.meteorTrail} aria-hidden="true" />
            </>
          );

          return (
            <div key={label} className={styles.iconWrapper}>
              {isButton ? (
                <button
                  type="button"
                  onClick={handleEmailClick}
                  aria-label="Copy email to clipboard"
                  className={styles.orbButton}
                >
                  {content}
                </button>
              ) : (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.orbButton}
                >
                  {content}
                </a>
              )}
            </div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {copied && (
          <motion.div
            className={styles.tooltip}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {t("contact.copied")}
          </motion.div>
        )}
      </AnimatePresence>

      <p className={styles.footer}>{t("contact.footer", { year })}</p>
    </section>
  );
};

export default FloatingContact;
