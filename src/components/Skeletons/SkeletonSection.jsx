// components/Skeletons/SkeletonSection.jsx
import styles from "./SkeletonSection.module.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkeletonLine = ({ width = "100%", height = "1.2rem" }) => (
  <motion.div
    className={styles.skeleton}
    style={{ width, height, borderRadius: '4px' }}
    initial={{ opacity: 0.3 }}
    animate={{ opacity: [0.3, 0.7, 0.3] }}
    transition={{ duration: 1.2, repeat: Infinity }}
  />
);

SkeletonLine.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

const SkeletonSection = () => {
  return (
    <section className={styles.wrapper} aria-busy="true" aria-label="Loading content">
      <SkeletonLine width="60%" height="2rem" />
      <SkeletonLine width="80%" height="1.2rem" />
      <SkeletonLine width="75%" height="1.2rem" />
      <SkeletonLine width="90%" height="1.2rem" />
    </section>
  );
};

export default SkeletonSection;
