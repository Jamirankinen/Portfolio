import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { useHasHydrated } from "../../hooks/useHasHydrated";
import { useTranslation } from "react-i18next";
import AnimatedTypewriter from "../../hooks/AnimatedTypewriter";

const splitLetters = (text) => text.split("");

const Hero = () => {
  const { t, i18n } = useTranslation();
  const heading = t("hero.heading");
  const description = t("hero.description");
  const titles = t("hero.animatedTitles", { returnObjects: true });


  const hasHydrated = useHasHydrated(); // Check if is zhydrated
  const language = i18n.language;
  const cvLink = language === "fi" ? "/cv-fi.pdf" : "/cv-en.pdf";

  const CVButton = (
    <a
      href={cvLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.contactBtn}
    >
      <span >{t("hero.cvLink")}</span>
    </a>
  );

  // Show plain fallback if hydration not ready
  if (!hasHydrated) {
    return (
      <header className={styles.container} id="hero">
        <div className={styles.content}>
          <h1 className={styles.title}>
            {splitLetters(heading).map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
          <p className={styles.description}>{description}</p>
          {CVButton}
        </div>
        <img
          src={getImageUrl("hero/heroImage.webp")}
          srcSet={`
            ${getImageUrl("hero/heroImage-small.webp")} 480w,
            ${getImageUrl("hero/heroImage-medium.webp")} 768w,
            ${getImageUrl("hero/heroImage.webp")} 1280w
          `}
          sizes="(max-width: 600px) 80vw, (max-width: 1024px) 50vw, 30vw"
          alt="Professional photo of Jami Rankinen"
          width={400}
          height={408}
          className={styles.heroImg}
        />
      </header>
    );
  }

  // 💻 Motion-animated version for desktop
  return (
    <>
      <motion.header
        className={styles.container}
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            <motion.span
              className={styles.staticText}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {t("hero.heading")}
            </motion.span>{" "}
            <motion.span
              className={styles.animatedText}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <AnimatedTypewriter texts={titles} />
            </motion.span>
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          >
            {CVButton}
          </motion.div>
        </div>

        <motion.img
          src={getImageUrl("hero/heroImage.webp")}
          srcSet={`
          ${getImageUrl("hero/heroImage-small.webp")} 480w,
          ${getImageUrl("hero/heroImage-medium.webp")} 768w,
          ${getImageUrl("hero/heroImage.webp")} 1280w
        `}
          sizes="(max-width: 600px) 80vw, (max-width: 1024px) 50vw, 30vw"
          alt="Professional photo of Jami Rankinen"
          width={400}
          height={408}
          className={styles.heroImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        />

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </motion.header>
    </>
  );
};

export default Hero;
