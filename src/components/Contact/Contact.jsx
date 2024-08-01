import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:jami34@windowslive.com">jami34@windowslive.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/jami-rankinen-6322612b9">linkedin.com/jami-rankinen</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                <a href="https://github.com/Jamiiiiii">github.com/Jamiiiiii</a>
            </li>
        </ul>
    </footer>
  )
}
