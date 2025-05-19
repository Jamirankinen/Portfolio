import { Suspense, lazy } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";

// Lazily load components
const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certificates = lazy(() => import("./components/Certificates/Certificates"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
        <Hero />
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
