import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.css";
import { getImageUrl } from "../../utils";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className={styles.scrollButton}>
        <img
          src={getImageUrl("ScrollToTop/arrow_up.png")} 
          alt="Scroll to top"
        />
      </button>
    )
  );
};

export default ScrollToTopButton;
