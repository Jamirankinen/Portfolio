import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return  (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jami</h1>
        <p className={styles.description}>I'm third-year Information Technology student at Oulu University of Applied Science. Reach out if you'd like to learn more! 
        </p>
        <a href="mailto:jami34@windowslive.com" className={styles.contactBtn}>Contact me
        </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} 
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
  </section>
  )
}
