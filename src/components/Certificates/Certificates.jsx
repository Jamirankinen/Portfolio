import React from "react";
import styles from "./Certificates.module.css";
import { motion } from "framer-motion";
import certificates from "../../data/certificates.json";
import { CertificateCard } from "./CertificateCard";

export const Certificates = () => {
  return (
    <motion.section
      className={styles.container}
      id="certificates"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.certificates}>
        {certificates.map((certificate, id) => {
          return <CertificateCard key={id} certificate={certificate} />;
        })}
      </div>
    </motion.section>
  );
};
