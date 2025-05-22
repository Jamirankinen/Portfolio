import { useEffect, useState } from "react";

const LayoutWithHydration = ({ children, fallback = null }) => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  if (!hasHydrated) {
    return fallback;
  }

  return children;
};

export default LayoutWithHydration;
