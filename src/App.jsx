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
      <Suspense fallback={<div className={styles.loading}>Loading pixels...</div>}>
        <Hero />
        </Suspense>
        <Suspense fallback={<div className={styles.loading}>Building in process</div>}>
        <About />
        </Suspense>
        <Suspense fallback={<div className={styles.loading}>Loading animations</div>}>
        <Experience />
        </Suspense>
        <Suspense fallback={<div className={styles.loading}>Loading all the stuff</div>}>
        <Projects />
        </Suspense>
        <Suspense fallback={<div className={styles.loading}>Loading stuff again</div>}>
        <Certificates />
        </Suspense>
        <Suspense fallback={<div className={styles.loading}>Loading more stuff</div>}>
        <Contact />
        </Suspense>
      
      <ScrollToTopButton />
    </div>
  );
}

export default App;
