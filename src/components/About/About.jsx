import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useRef, useEffect } from "react";

const icons = [
  "about/cursorIcon.webp",
  "about/uiIcon.webp",
  "about/smileIcon.webp",
];

const About = () => {
  const { t } = useTranslation();
  const items = t("about.items", { returnObjects: true });

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 }); // Trigger when ~30% is visible
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // optional: reset when not in view
    }
  }, [inView, controls]);

  return (
    
    <motion.section
      ref={ref}
      className={styles.container}
      id="about"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.title}>{t("about.sectionTitle")}</h2>
      <ul className={styles.aboutItems}>
        {items.map((item, index) => (
          <motion.li
            className={styles.aboutItem}
            key={index}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <motion.img
              src={getImageUrl(icons[index])}
              alt={`${item.title} icon`}
              className={styles.aboutIcon}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 1 }}
            />
            <div className={styles.aboutItemText}>
              <motion.h3
                className={styles.aboutItemtitle}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 1 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className={styles.description}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 1 }}
              >
                {item.description}
              </motion.p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default About;
