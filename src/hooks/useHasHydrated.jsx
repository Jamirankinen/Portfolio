import { useEffect, useState } from "react";

/**
 * Hook that returns true once the client has hydrated
 */
export const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
};
