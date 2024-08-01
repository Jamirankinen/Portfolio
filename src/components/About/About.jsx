import React from 'react'

import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
    </div>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Curosr icon" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I'm Frontend developer with experience in building responsive and optimized sites

                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}> 
                <h3>Backend Developer</h3>
                <p>I'm Backend developer with experience in building responsive and optimized sites
                    
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>I'm UI Desingner with experience in designing responsive and beautiful sites
                    
                </p>
            </div>
        </li>
        </ul>
  </section>
  )
}
