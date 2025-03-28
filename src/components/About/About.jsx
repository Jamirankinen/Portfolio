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
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>As a Frontend Developer, I specialize in building dynamic and visually appealing user interfaces using React, TypeScript, JavaScript, HTML, and CSS. I strive to create high-performance, responsive websites with reusable components that enhance the user experience, ensuring seamless interactions across all devices.
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}> 
                <h3>Backend Developer</h3>
                <p>With experience in backend development, I focus on building robust and scalable server-side applications using Node.js and various modern technologies. I prioritize performance, security, and maintainability to deliver solutions that support seamless integrations and optimized workflows.
                    
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>As a UI Designer, I craft intuitive, user-centered designs that bring digital experiences to life. My expertise lies in creating visually stunning, responsive layouts that adapt seamlessly to different screen sizes. I aim to design beautiful, functional interfaces that ensure a smooth user journey across all platforms.
                    
                </p>
            </div>
        </li>
        </ul>
  </section>
  )
}
