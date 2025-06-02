import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { useIsMobile } from "../../hooks/useMobile";
import { useHasHydrated } from "../../hooks/useHasHydrated";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const splitLetters = (text) => text.split("");

const Hero = () => {
  const { t } = useTranslation();
  const heading = t("hero.heading");
  const description = t("hero.description");

  const isMobile = useIsMobile(); // ✅ detect screen
  const hasHydrated = useHasHydrated(); // Check if is hydrated

  const titles = t("hero.animatedTitles", { returnObjects: true });
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  // Start typing 1 second after heading animation
  useEffect(() => {
    const delay = setTimeout(() => setTypingStarted(true), 1000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
  if (!typingStarted) return;

  const currentTitle = titles[titleIndex];
  const isComplete = !isDeleting && charIndex === currentTitle.length;
  const isCleared = isDeleting && charIndex === 0;

  const typingSpeed = 80;
  const deletingSpeed = 60;
  const pauseBeforeDelete = 1200;
  const pauseBeforeNext = 300;

  let timeout;

  if (isComplete) {
    // Pause before starting to delete
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, pauseBeforeDelete);
  } else if (isCleared) {
    // Move to next title after deleting
    timeout = setTimeout(() => {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, pauseBeforeNext);
  } else {
    // Typing or deleting
    timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);
  }

  setDisplayText(currentTitle.substring(0, charIndex));
  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, titleIndex, typingStarted]);
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
          <a href="mailto:jamuxi34@gmail.com" className={styles.contactBtn}>
            <span className={styles.marqueeText}>{t("hero.contact")}</span>
          </a>
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
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </header>
    );
  }

  if (isMobile) {
    return (
      <>
        <header className={styles.container} id="hero">
          <div className={styles.content}>
            <h1 className={styles.title}>
              {splitLetters(heading).map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h1>
            <p className={styles.description}>{description}</p>
            <a href="mailto:jamuxi34@gmail.com" className={styles.contactBtn}>
              <span className={styles.marqueeText}>{t("hero.contact")}</span>
            </a>
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
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
        </header>
      </>
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
          {/* Static part (e.g., "Hi, I'm") */}
          <motion.span
            className={styles.staticText}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {t("hero.heading")}
          </motion.span>{" "}

          {/* Animated typewriter text */}
          <motion.span
            className={styles.animatedText}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {displayText}
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

          <motion.a
            href="mailto:jamuxi34@gmail.com"
            className={styles.contactBtn}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          >
            <span className={styles.marqueeText}>Contact me!</span>
          </motion.a>
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
