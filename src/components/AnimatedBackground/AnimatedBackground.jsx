import { useMemo, useEffect, useState } from "react";
import styles from "./AnimatedBackground.module.css";
import { useTheme } from "../../context/ThemeContext";

const CLOUDS = [
  { id: 1, top: "12vh", left: 5,  width: 180, height: 80,  speed: 1 },
  { id: 2, top: "22vh", left: 22, width: 220, height: 100, speed: 1 },
  { id: 3, top: "32vh", left: 38, width: 160, height: 70,  speed: 1 },
  { id: 4, top: "14vh", left: 55, width: 140, height: 60,  speed: 1 },
  { id: 5, top: "24vh", left: 72, width: 200, height: 90,  speed: 1 },
  { id: 6, top: "18vh", left: 88, width: 240, height: 110, speed: 1 },
  { id: 7, top: "28vh", left: 105,width: 240, height: 110, speed: 1 },
  { id: 8, top: "20vh", left: 122,width: 240, height: 110, speed: 1 },
];


export default function AnimatedBackground() {
  const { theme } = useTheme();

  // Generate 100 stars with random positions and sizes once per render
  const stars = useMemo(() => {
    if (theme !== "dark") return []; // Don't generate stars if not dark
    const starsArray = [];
    for (let i = 0; i < 100; i++) {
      starsArray.push({
        id: i,
        top: Math.random() * 100, // percent of viewport height
        left: Math.random() * 100, // percent of viewport width
        size: 1 + Math.random() * 2,
        delay: Math.random() * 5, // seconds delay for blinking
      });
    }
    return starsArray;
  }, [theme]); // Regenerate when theme changes

  // Cloud positions state, only used for light theme
  const [cloudPositions, setCloudPositions] = useState(() => {
    // Initialize with clouds' initial left positions
    return CLOUDS.map((c) => c.left);
  });

  useEffect(() => {
    if (theme !== "light") return;

    let animationFrameId;
    let lastTimestamp = null;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000; // seconds elapsed
      lastTimestamp = timestamp;

      setCloudPositions((prevPositions) => {
        return prevPositions.map((pos, idx) => {
          const speed = CLOUDS[idx].speed; // vw per second
          let newPos = pos + speed * delta;

          // Calculate cloud width in vw relative to viewport width
          const cloudWidthVW = (CLOUDS[idx].width / window.innerWidth) * 100;

          // If cloud fully beyond right edge + cloud width, teleport to left outside viewport
          if (newPos > 100 + cloudWidthVW) {
            newPos = -cloudWidthVW;
          }

          return newPos;
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [theme]);

  return (
    <>
      <div className={styles.sky}>
        <div className={styles.gradient}></div>

        {/* Clouds only if light theme */}
        {theme === "light" && (
          <div className={styles.cloudLayer}>
            {CLOUDS.map((cloud, i) => (
              <div
                key={cloud.id}
                className={styles.cloud}
                style={{
                  top: cloud.top,
                  width: `${cloud.width}px`,
                  height: `${cloud.height}px`,
                  left: `${cloudPositions[i]}vw`,
                  filter: "blur(10px)",
                }}
              />
            ))}
          </div>
        )}
        {/* Render stars only when dark mode on */}
        {theme === "dark" &&
          stars.map(({ id, top, left, size, delay }) => (
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
