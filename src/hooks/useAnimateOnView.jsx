import { useRef, useEffect } from "react";
import { useInView, useAnimation } from "framer-motion";

/**
 * Custom hook that returns:
 * - ref to attach to the element to watch in view
 * - animation controls to connect with motion components
 * 
 * Animations start on entering viewport, reset on leaving viewport.
 * 
 * @param {Object} options - options for useInView hook (e.g. { amount: 0.3 })
 */
export function useAnimateOnView(options = { amount: 0.3 }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, options);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return { ref, controls };
}
