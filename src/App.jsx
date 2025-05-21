import { Suspense, lazy } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import Hero from "./components/Hero/Hero"; // Eager load Hero for SEO

// Lazy-load only sections further down
const About = lazy(() => import("./components/About/About"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certificates = lazy(() =>
  import("./components/Certificates/Certificates")
);
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero /> {/* Don't lazy load Hero */}
      <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </Suspense>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
