import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return  (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jami</h1>
        <p className={styles.description}>I'm fourth-year Information Technology student at Oulu University of Applied Science. I'm looking for a internship/work in IT. Preferred roles would be Front-End or Full-Stack Developer. Check my projects below and contact me if you are interested!
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
