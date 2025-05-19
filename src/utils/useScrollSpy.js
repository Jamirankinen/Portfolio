import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let currentId = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= offset) currentId = id;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
};
