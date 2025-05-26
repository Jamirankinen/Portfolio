import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import "@fontsource/outfit";
import "@fontsource/roboto";

if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");

  const WrappedApp = (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, WrappedApp);
  } else {
    createRoot(rootElement).render(WrappedApp);
  }
}
