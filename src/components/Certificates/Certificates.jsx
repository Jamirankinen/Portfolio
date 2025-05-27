import styles from "./Certificates.module.css";
import { motion } from "framer-motion";
import { CertificateCard } from "./CertificateCard";
import { AnimatedHeading } from "../Animations/AnimatedHeading";
import { useTranslation } from "react-i18next";

const Certificates = () => {

  const { t } = useTranslation();
   const certTranslations = t("certificates.items", { returnObjects: true });

    const certificateStaticData = [
    {
      imageSrc: "certificates/IBM_Front_end_Developer_certificate",
      source: "https://www.coursera.org/account/accomplishments/professional-cert/7VGFA53TCB8H",
    },
    {
      imageSrc: "certificates/Google_digital_marketing_certificate",
      source: "https://www.coursera.org/account/accomplishments/professional-cert/X9VBAV3SAY69",
    },
    {
      imageSrc: "certificates/AWS_cloud_consultant_certificate",
      source: "https://www.coursera.org/account/accomplishments/professional-cert/FRSVZ6GG6YX3",
    },
  ];

    const certificates = certTranslations.map((cert, index) => ({
    ...cert,
    ...certificateStaticData[index],
  }));

  return (
    <motion.section
      className={styles.container}
      id="certificates"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <AnimatedHeading
              text={t("certificates.title")}
              className={styles.title}
            />
      <div className={styles.certificates}>
        {certificates.map((certificate, id) => (
          <CertificateCard key={id} certificate={certificate} />
        ))}
      </div>
    </motion.section>
  );
};
export default Certificates;
