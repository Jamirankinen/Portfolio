import { Suspense, lazy } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import LayoutWithHydration from "./components/LayoutWithHydration/LayoutWithHydration";
import SkeletonSection from "./components/Skeletons/SkeletonSection";
import Hero from "./components/Hero/Hero"; // Eager load Hero for SEO

// Lazy-load only sections further down
const About = lazy(() => import("./components/About/About"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certificates = lazy(() => import("./components/Certificates/Certificates"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero /> 
       <LayoutWithHydration fallback={<div className={styles.loading}>Extinguishing thrist...</div>}>
      <Suspense fallback={<SkeletonSection />}>
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </Suspense>
      <ScrollToTopButton />
      </LayoutWithHydration>
    </div>
  );
}

export default App;
