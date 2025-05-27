import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggleButton.module.css";
import { getImageUrl } from "../../utils";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

    const iconSrc =
    theme === "dark"
      ? getImageUrl("icons/theme-light.webp") // show light icon while in dark theme
      : getImageUrl("icons/theme-dark.webp"); // show dark icon while in light theme


  return (
   <button
  onClick={toggleTheme}
  aria-label="Toggle theme"
  className={styles.themeToggleBtn}
>
  <img src={iconSrc} alt="Toggle theme" className={styles.themeIcon} />
</button>
  );
}
