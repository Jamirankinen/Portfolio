import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return  (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jami</h1>
        <p className={styles.description}>I have a Bachelor's degree in Business and Information Systems. I'm looking for a junior or entry-level position in IT. My preferred roles are Front-End or Full-Stack Developer. Feel free to check out my projects and certificates below, and contact me if you're interested!
        </p>
        <a href="mailto:jami34@windowslive.com" className={styles.contactBtn}>Contact me by e-mail
        </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} 
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
  </section>
  )
}
