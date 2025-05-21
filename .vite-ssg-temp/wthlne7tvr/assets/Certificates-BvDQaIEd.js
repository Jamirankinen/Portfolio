import { jsx, jsxs } from 'react/jsx-runtime';
import { useInView, motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { g as getImageUrl } from '../main.mjs';
import { A as AnimatedHeading } from './AnimatedHeading-CW_F_saN.js';
import 'react-dom/client';

const container = "_container_11cm4_5";
const title$1 = "_title_11cm4_23";
const certificates$1 = "_certificates_11cm4_39";
const styles$1 = {
	container: container,
	title: title$1,
	certificates: certificates$1
};

const certificates = [
	{
		title: "IBM Front-End Developer",
		date: "April 23, 2024",
		imageSrc: "certificates/IBM_Front_end_Developer_certificate",
		description: "This course is completed online in Coursera to improve my skills. Part of my studies in University.",
		skills: [
			"React",
			"JavaScript",
			"HTML",
			"CSS"
		],
		source: "https://www.coursera.org/account/accomplishments/professional-cert/7VGFA53TCB8H"
	},
	{
		title: "Google Digital Marketing & E-Commerce",
		date: "May 30, 2024",
		imageSrc: "certificates/Google_digital_marketing_certificate",
		description: "This course is completed online in Coursera to improve my skills.",
		skills: [
			"E-commerce",
			"Social Media",
			"SEO"
		],
		source: "https://www.coursera.org/account/accomplishments/professional-cert/X9VBAV3SAY69"
	},
	{
		title: "AWS Cloud Technology Consultant",
		date: "June 4, 2024",
		imageSrc: "certificates/AWS_cloud_consultant_certificate",
		description: "This course is completed online in Coursera to improve my skills.",
		skills: [
			"DevOps",
			"Python",
			"Cloud"
		],
		source: "https://www.coursera.org/account/accomplishments/professional-cert/FRSVZ6GG6YX3"
	}
];

const card = "_card_lr6uj_5";
const flipped = "_flipped_lr6uj_53";
const front = "_front_lr6uj_65";
const back = "_back_lr6uj_67";
const image = "_image_lr6uj_147";
const title = "_title_lr6uj_171";
const date = "_date_lr6uj_185";
const description = "_description_lr6uj_207";
const skills = "_skills_lr6uj_223";
const skill = "_skill_lr6uj_223";
const links = "_links_lr6uj_257";
const link = "_link_lr6uj_257";
const styles = {
	card: card,
	flipped: flipped,
	front: front,
	back: back,
	image: image,
	title: title,
	date: date,
	description: description,
	skills: skills,
	skill: skill,
	links: links,
	link: link
};

const CertificateCard = ({
  certificate: { title, date, imageSrc, description, skills, source },
  index = 0
}) => {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const baseDelay = 0.4 + index * 0.4;
  const cardAnimation = {
    delay: baseDelay,
    duration: 0.6
  };
  const imageAnimation = {
    delay: baseDelay + 0.5,
    duration: 0.5
  };
  const titleAnimation = {
    delay: baseDelay + 0.8,
    duration: 0.5
  };
  const dateAnimation = {
    delay: baseDelay + 1,
    duration: 0.5
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0 },
      animate: inView ? { opacity: 1 } : {},
      transition: {
        delay: cardAnimation.delay,
        duration: cardAnimation.duration,
        ease: "easeOut"
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${styles.card} ${flipped ? styles.flipped : ""}`,
          onMouseEnter: () => setFlipped(true),
          onMouseLeave: () => setFlipped(false),
          style: { perspective: 1500 },
          "aria-label": `Certificate card for ${title}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: styles.front, children: [
              /* @__PURE__ */ jsx(
                motion.img,
                {
                  src: getImageUrl(`${imageSrc}.webp`),
                  srcSet: `
              ${getImageUrl(`${imageSrc}-small.webp`)} 480w,
              ${getImageUrl(`${imageSrc}-medium.webp`)} 768w,
              ${getImageUrl(`${imageSrc}.webp`)} 1280w
            `,
                  sizes: "(max-width: 600px) 90vw, (max-width: 1024px) 40vw, 25vw",
                  alt: `Image of ${title}`,
                  loading: "lazy",
                  className: styles.image,
                  draggable: false,
                  initial: { opacity: 0 },
                  animate: inView ? { opacity: 1 } : {},
                  transition: imageAnimation
                }
              ),
              /* @__PURE__ */ jsx(
                motion.h3,
                {
                  className: styles.title,
                  initial: { opacity: 0 },
                  animate: inView ? { opacity: 1 } : {},
                  transition: titleAnimation,
                  children: title
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  className: styles.date,
                  initial: { opacity: 0 },
                  animate: inView ? { opacity: 1 } : {},
                  transition: dateAnimation,
                  children: date
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles.back, children: [
              /* @__PURE__ */ jsx("p", { className: styles.description, children: description }),
              /* @__PURE__ */ jsx("ul", { className: styles.skills, children: skills.map((skill, id) => /* @__PURE__ */ jsx("li", { className: styles.skill, children: skill }, id)) }),
              /* @__PURE__ */ jsx("div", { className: styles.links, children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: source,
                  className: styles.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Source"
                }
              ) })
            ] })
          ]
        }
      )
    }
  );
};

const Certificates = () => {
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      className: styles$1.container,
      id: "certificates",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsx(
          AnimatedHeading,
          {
            text: "Certificates",
            className: styles$1.title
          }
        ),
        /* @__PURE__ */ jsx("div", { className: styles$1.certificates, children: certificates.map((certificate, id) => /* @__PURE__ */ jsx(CertificateCard, { certificate }, id)) })
      ]
    }
  );
};

export { Certificates as default };
