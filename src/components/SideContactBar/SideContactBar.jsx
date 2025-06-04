import styles from './SideContactBar.module.css';

const socialLinks = [
  {
    href: 'https://github.com/jamirankinen',
    icon: '/assets/contact/githubIcon.png',
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/jami-rankinen/',
    icon: '/assets/contact/linkedinIcon.png',
    alt: 'LinkedIn',
  },
];

export default function SideContactBar() {
  return (
    <>
      <div className={styles.leftBar}>
        {socialLinks.map(({ href, icon, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={alt} className={styles.icon} />
          </a>
        ))}
        <div className={styles.line} />
      </div>

      <div className={styles.rightBar}>
        <a href="mailto:jamuxi34@gmail.com" className={styles.email}>
          jamuxi34@gmail.com
        </a>
        <div className={styles.line} />
      </div>
    </>
  );
}
