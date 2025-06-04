import { useMemo } from "react";
import styles from "./AnimatedBackground.module.css";

export default function AnimatedBackground() {
  // Generate 100 stars with random positions and sizes once per render
  const stars = useMemo(() => {
    const starsArray = [];
    for (let i = 0; i < 100; i++) {
      starsArray.push({
        id: i,
        top: Math.random() * 100, // percent of viewport height
        left: Math.random() * 100, // percent of viewport width
        size: 1 + Math.random() * 2, // 0.5px to 2px
        delay: Math.random() * 5, // seconds delay for blinking
      });
    }
    return starsArray;
  }, []);

  return (
    <>
    <div className={styles.sky}>
      <div className={styles.gradient}></div>

      {/* Render all stars */}
      {stars.map(({ id, top, left, size, delay }) => (
        <div
          key={id}
          className={styles.star}
          style={{
            top: `${top}vh`,
            left: `${left}vw`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
    <div className={styles.mountains}></div>
    </>
  );
}
