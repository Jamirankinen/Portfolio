import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/outfit";
import "@fontsource/roboto";
import './i18n';

if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");

  const WrappedApp = (
      <App />
  );

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, WrappedApp);
  } else {
    createRoot(rootElement).render(WrappedApp);
  }
}
