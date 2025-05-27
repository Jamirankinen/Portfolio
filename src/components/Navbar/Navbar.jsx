import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useScrollSpy } from "../../utils/useScrollSpy";
import ThemeToggleButton from "../Theme/ThemeToggleButton";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const sectionIds = [
    "about",
    "experience",
    "projects",
    "certificates",
    "contacts",
  ];
  const activeId = useScrollSpy(sectionIds, 100);

  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fi" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      {/* Logo / title */}
      <a className={styles.title} href="/">
        Portfolio
      </a>

      {/* Right controls: language switcher, theme toggle, menu button */}
      <div className={styles.rightControls} ref={menuRef}>
        <div className={styles.menuWrapper}>
          <button
            onClick={toggleLanguage}
            className={styles.langSwitcher}
            aria-label="Switch language"
          >
            {i18n.language === "en" ? "FI" : "EN"}
          </button>

          <div className={styles.themeToggleWrapper}>
            <ThemeToggleButton />
          </div>

          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <img
              src={
                menuOpen
                  ? getImageUrl("nav/closeIcon.png")
                  : getImageUrl("nav/menuIcon.png")
              }
              alt="menu icon"
            />
          </button>
        </div>

        {/* Dropdown menu */}
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? styles.active : ""}
              >
                {t(`navbar.${id}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
