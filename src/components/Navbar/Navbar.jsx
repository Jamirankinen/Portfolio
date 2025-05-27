import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useScrollSpy } from "../../utils/useScrollSpy";
import ThemeToggleButton from "../Theme/ThemeToggleButton";

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

  // Close menu when clicking outside
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

      {/* Right side: theme toggle + menu button + dropdown menu */}
      <div className={styles.rightControls} ref={menuRef}>
        <div className={styles.menuWrapper}>
          {/* Theme toggle */}
          <div className={styles.themeToggleWrapper}>
            <ThemeToggleButton />
          </div>

          {/* Hamburger / close menu button */}
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
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
