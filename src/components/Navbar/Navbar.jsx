import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useScrollSpy } from "../../utils/useScrollSpy";
import ThemeToggleButton from "../Theme/ThemeToggleButton";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const menuRef = useRef(null);
  const sectionIds = [
    "about",
    "experience",
    "projects",
    "certificates",
    "contact",
  ];
  const activeId = useScrollSpy(sectionIds, 100);

  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fi" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`${styles.navbar} ${
        showNavbar ? styles.visible : styles.hidden
      }`}
      aria-label="Main Navigation"
    >
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
            <img
              src={
                i18n.language === "en"
                  ? "/assets/icons/fi.webp"
                  : "/assets/icons/en.webp"
              }
              alt={
                i18n.language === "en"
                  ? "Switch to Finnish"
                  : "Switch to English"
              }
              className={styles.langIcon}
              width={24}
              height={24}
            />
          </button>

          <div className={styles.themeToggleWrapper}></div>

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
