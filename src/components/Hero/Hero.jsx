import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import heroData from "../../data/hero.json";
import { useIsMobile } from "../../hooks/useMobile";
import { Helmet } from "react-helmet-async";

const splitLetters = (text) => text.split("");

const Hero = () => {
  const { heading, description } = heroData[0];
  const isMobile = useIsMobile(); // ✅ detect screen

  <Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Jami Rankinen",
      "url": "https://portfolio-jami-rankinen.netlify.app",
      "jobTitle": "Web Developer",
      "sameAs": [
        "https://github.com/jamirankinen",
        "https://linkedin.com/in/jami-rankinen"
      ]
    })}
  </script>
</Helmet>


  if (isMobile) {
    const heading = "Hi, I'm Jami.";
    const description =
      "Welcome to my portfolio! On this page you will find everything you need to know about me. Feel free to explore my portfolio and contact me if you're interested!";

    // 🟢 Plain non-animated version for mobile/tablet
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
            <span className={styles.marqueeText}>Contact me!</span>
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

  // 💻 Motion-animated version for desktop
  return (
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
          {splitLetters(heading).map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {char}
            </motion.span>
          ))}
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
  );
};

export default Hero;
