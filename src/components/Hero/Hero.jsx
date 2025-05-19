import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import heroData from "../../data/hero.json";

const Hero = () => {
  const { heading, description } = heroData[0];

  return (
    <motion.section
      className={styles.container}
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        {/* Animated heading */}
         <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {heading}
        </motion.h1>

        {/* Animated description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {/* Contact button */}
        <motion.a
          href="mailto:jamuxi34@gmail.com"
          className={styles.contactBtn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
        >
          <span className={styles.marqueeText}>Contact me!</span>
        </motion.a>
      </div>

      {/* Hero image */}
      <motion.img
        src={getImageUrl("hero/heroImage.webp")}
        srcSet={`
          ${getImageUrl("hero/heroImage-small.webp")} 480w,
          ${getImageUrl("hero/heroImage-medium.webp")} 768w,
          ${getImageUrl("hero/heroImage.webp")} 1280w
          `}
        sizes="(max-width: 600px) 80vw, (max-width: 1024px) 50vw, 30vw"
        alt="Hero image of me"
        width={400} // <-- add intrinsic width here
        height={408} // <-- add intrinsic height here
        className={styles.heroImg}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </motion.section>
  );
};
export default Hero;
