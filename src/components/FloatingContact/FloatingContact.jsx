import styles from "./FloatingContact.module.css";
import { motion} from "framer-motion";

const icons = [
  {
    href: "https://github.com/jamirankinen",
    alt: "GitHub",
    imgSrc: "/assets/contact/githubIcon.png",
    label: "GitHub",
    isButton: false,
  },
  {
    href: "https://www.linkedin.com/in/jami-rankinen/",
    alt: "LinkedIn",
    imgSrc: "/assets/contact/linkedinIcon.png",
    label: "LinkedIn",
    isButton: false,
  },
  {
    href: null,
    alt: "Email",
    imgSrc: "/assets/contact/emailIcon.png",
    label: "Email",
    isButton: true,
  },
];

const FloatingContact = () => {

  return (
    <motion.section
      className={styles.floatingSection}
      id="contact"
    >
      {/* Glowing sun positioned behind mountains */}
      <div className={styles.sunWrapper}>
        <div className={styles.card}>
        </div>
      </div>


    </motion.section>
  );
};

export default FloatingContact;
