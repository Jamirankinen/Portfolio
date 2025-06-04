import { useEffect, useState } from "react";

const AnimatedTypewriter = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  // Start typing after 1 second delay
  useEffect(() => {
    const delay = setTimeout(() => setTypingStarted(true), 1000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!typingStarted) return;

    const currentTitle = texts[titleIndex];
    const isComplete = !isDeleting && charIndex === currentTitle.length;
    const isCleared = isDeleting && charIndex === 0;

    const typingSpeed = 60;
    const deletingSpeed = 40;
    const pauseBeforeDelete = 1200;
    const pauseBeforeNext = 300;

    let timeout;

    if (isComplete) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isCleared) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % texts.length);
      }, pauseBeforeNext);
    } else {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    setDisplayText(currentTitle.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, typingStarted, texts]);

  return <span>{displayText}</span>;
};

export default AnimatedTypewriter;
