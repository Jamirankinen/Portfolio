import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const icons = [
  "about/cursorIcon.webp",
  "about/uiIcon.webp",
  "about/smileIcon.webp",
];

const About = () => {
  const { t } = useTranslation();
  const items = t("about.items", { returnObjects: true });

  return (
    <motion.section
      className={styles.container}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.title}>{t("about.sectionTitle")}</h2>
      <ul className={styles.aboutItems}>
        {items.map((item, index) => {
          return (
            <motion.li
              className={styles.aboutItem}
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={getImageUrl(icons[index])}
                alt={`${item.title} icon`}
                className={styles.aboutIcon}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />

              <div className={styles.aboutItemText}>
                <motion.h3
                  className={styles.aboutItemtitle}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className={styles.description}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
};
export default About;
