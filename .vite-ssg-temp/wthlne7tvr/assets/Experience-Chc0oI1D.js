import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { g as getImageUrl } from '../main.mjs';
import { A as AnimatedHeading } from './AnimatedHeading-CW_F_saN.js';
import 'react-dom/client';

const skills$1 = [
	{
		title: "HTML",
		imageSrc: {
			src: "skills/html-45.webp",
			srcSet: "skills/html-45.webp 1x, skills/html-90.webp 2x"
		}
	},
	{
		title: "CSS",
		imageSrc: {
			src: "skills/css-45.webp",
			srcSet: "skills/css-45.webp 1x, skills/css-90.webp 2x"
		}
	},
	{
		title: "JavaScript",
		imageSrc: {
			src: "skills/javascript-45.webp",
			srcSet: "skills/javascript-45.webp 1x, skills/javascript-90.webp 2x"
		}
	},
	{
		title: "Node",
		imageSrc: {
			src: "skills/node-45.webp",
			srcSet: "skills/node-45.webp 1x, skills/node-90.webp 2x"
		}
	},
	{
		title: "React",
		imageSrc: {
			src: "skills/react-45.webp",
			srcSet: "skills/react-45.webp 1x, skills/react-90.webp 2x"
		}
	},
	{
		title: "TypeScript",
		imageSrc: {
			src: "skills/typescript-45.webp",
			srcSet: "skills/typescript-45.webp 1x, skills/typescript-90.webp 2x"
		}
	},
	{
		title: "Firebase",
		imageSrc: {
			src: "skills/firebase-45.webp",
			srcSet: "skills/firebase-45.webp 1x, skills/firebase-90.webp 2x"
		}
	}
];

const history = [
	{
		role: "Salesman",
		organisation: "Gigantti",
		startDate: "Sep, 2021",
		endDate: "Dec, 2022",
		experiences: [
			"One of the top salesman",
			"Customer service specialist"
		],
		imageSrc: "history/gigantti.png"
	},
	{
		role: "Event Coordinator",
		organisation: "Outo ry",
		startDate: "Jan, 2022",
		endDate: "Aug, 2023",
		experiences: [
			"Organized events with other business partners",
			"Cooperation with other companies"
		],
		imageSrc: "history/outory.jpg"
	},
	{
		role: "React.js Developer intern",
		organisation: "Diilimurkku",
		startDate: "Nov, 2024",
		endDate: "Mar, 2025",
		experiences: [
			"Web development",
			"Jira for project management",
			"Slack for communication and GitHub for CD/CI."
		],
		imageSrc: "history/diilimurkku.jpg"
	}
];

const container = "_container_11hju_5";
const title = "_title_11hju_37";
const content = "_content_11hju_53";
const skills = "_skills_11hju_71";
const skill = "_skill_11hju_71";
const skillImageContainer = "_skillImageContainer_11hju_97";
const timeline = "_timeline_11hju_143";
const timelineLine = "_timelineLine_11hju_155";
const timelineItem = "_timelineItem_11hju_183";
const timelineContent = "_timelineContent_11hju_195";
const timelineDot = "_timelineDot_11hju_207";
const timelineDot1 = "_timelineDot1_11hju_235";
const timelineDot2 = "_timelineDot2_11hju_243";
const timelineDot3 = "_timelineDot3_11hju_251";
const timelineDetails = "_timelineDetails_11hju_259";
const bulletItem = "_bulletItem_11hju_301";
const bulletDot = "_bulletDot_11hju_315";
const fadeInDot = "_fadeInDot_11hju_1";
const particles = "_particles_11hju_351";
const particle = "_particle_11hju_351";
const floatUp = "_floatUp_11hju_1";
const timelineImage = "_timelineImage_11hju_487";
const styles = {
	container: container,
	title: title,
	content: content,
	skills: skills,
	skill: skill,
	skillImageContainer: skillImageContainer,
	timeline: timeline,
	timelineLine: timelineLine,
	timelineItem: timelineItem,
	timelineContent: timelineContent,
	timelineDot: timelineDot,
	timelineDot1: timelineDot1,
	timelineDot2: timelineDot2,
	timelineDot3: timelineDot3,
	timelineDetails: timelineDetails,
	bulletItem: bulletItem,
	bulletDot: bulletDot,
	fadeInDot: fadeInDot,
	particles: particles,
	particle: particle,
	floatUp: floatUp,
	timelineImage: timelineImage
};

const Experience = () => {
  const lineRef = useRef(null);
  const lastDotRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  useEffect(() => {
    if (lineRef.current && lastDotRef.current) {
      const lineTop = lineRef.current.getBoundingClientRect().top;
      const dotTop = lastDotRef.current.getBoundingClientRect().top;
      setLineHeight(dotTop - lineTop + 10);
    }
  }, []);
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: lineHeight,
      transition: {
        delay: 0.5,
        duration: 3,
        ease: "easeInOut"
      }
    }
  };
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({
      scale: 1.2,
      opacity: 1,
      boxShadow: [
        "0 0 0px var(--color-primary)",
        "0 0 12px var(--color-primary)",
        "0 0 8px var(--color-primary)"
      ],
      transition: {
        delay: 0.3 + index * 1.5,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      className: styles.container,
      id: "experience",
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsx("div", { className: styles.particles, children: [...Array(12)].map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: styles.particle,
            style: {
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 10}%`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 10}s`
            }
          },
          i
        )) }),
        /* @__PURE__ */ jsx(AnimatedHeading, { text: "Experience", className: styles.title }),
        /* @__PURE__ */ jsxs("div", { className: styles.content, children: [
          /* @__PURE__ */ jsx("div", { className: styles.skills, children: skills$1.map((skill, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: styles.skill,
              custom: index,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: {
                hidden: { opacity: 0, y: 30 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.6 + i * 0.1,
                    // 🔧 Adjust delay per item
                    duration: 0.4,
                    // 🔧 Adjust animation speed
                    ease: "easeOut"
                    // 🔧 Adjust easing
                  }
                })
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: styles.skillImageContainer, children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: getImageUrl(skill.imageSrc.src),
                    srcSet: `
                    ${getImageUrl(
                      "skills/" + skill.title.toLowerCase() + "-45.webp"
                    )} 1x,
                    ${getImageUrl(
                      "skills/" + skill.title.toLowerCase() + "-90.webp"
                    )} 2x
                    `,
                    alt: skill.title,
                    width: "45",
                    height: "45",
                    loading: "lazy"
                  }
                ) }),
                /* @__PURE__ */ jsx("p", { children: skill.title })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsxs("div", { className: styles.timeline, children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: styles.timelineLine,
                variants: lineVariants,
                ref: lineRef
              }
            ),
            history.map((item, index) => /* @__PURE__ */ jsx("div", { className: styles.timelineItem, children: /* @__PURE__ */ jsxs("div", { className: styles.timelineContent, children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  ref: index === history.length - 1 ? lastDotRef : null,
                  className: `${styles.timelineDot} ${styles[`timelineDot${index + 1}`]}`,
                  custom: index,
                  variants: dotVariants
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: styles.timelineDetails, children: [
                /* @__PURE__ */ jsxs(
                  motion.h3,
                  {
                    className: styles.roleTitle,
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: {
                      delay: 0.8 + index * 1.4,
                      duration: 0.5,
                      ease: "easeOut"
                    },
                    viewport: { once: true },
                    children: [
                      item.role,
                      ", ",
                      item.organisation
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.p,
                  {
                    className: styles.date,
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: {
                      delay: 1.2 + index * 1.5,
                      duration: 0.4,
                      ease: "easeOut"
                    },
                    viewport: { once: true },
                    children: [
                      item.startDate,
                      " - ",
                      item.endDate
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("ul", { children: item.experiences.map((exp, id) => /* @__PURE__ */ jsxs("div", { className: styles.bulletItem, children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: styles.bulletDot,
                      initial: { scale: 0, opacity: 0 },
                      whileInView: { scale: 1, opacity: 1 },
                      transition: {
                        delay: 1.7 + index * 1.5,
                        duration: 0.5,
                        ease: "easeOut"
                      },
                      viewport: { once: true }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.p,
                    {
                      className: styles.bulletText,
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                      transition: {
                        delay: 1.8 + index * 1.5,
                        duration: 0.5,
                        ease: "easeOut"
                      },
                      viewport: { once: true },
                      children: exp
                    }
                  )
                ] }, id)) })
              ] })
            ] }) }, index))
          ] })
        ] })
      ]
    }
  );
};

export { Experience as default };
