import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectSlide } from "./ProjectSlide";
import { AnimatedHeading } from "../Animations/AnimatedHeading";

const Projects = () => {
  // Customize individual delays for each part of each project
  const animationDelays = [
    {
      image: 0.4,
      content: 0.8,
      title: 1.0,
      description: 1.2,
      skills: 1.4,
      links: 1.6
    },
    {
      image: 0.3,
      content: 0.6,
      title: 0.8,
      description: 1.0,
      skills: 1.2,
      links: 1.4
    },
    {
      image: 0.5,
      content: 0.9,
      title: 1.1,
      description: 1.3,
      skills: 1.5,
      links: 1.7
    }
  ];

  return (
    <section
      className={styles.container}
      id="projects"
    >
      <AnimatedHeading
              text="Projects"
              className={styles.title}
            />
      <div className={styles.slides}>
        {projects.map((project, index) => (
          <ProjectSlide
            key={index}
            project={project}
            isReversed={index % 2 !== 0}
            delays={animationDelays[index] || {}} // default to empty if not defined
          />
        ))}
      </div>
    </section>
  );
};
export default Projects;