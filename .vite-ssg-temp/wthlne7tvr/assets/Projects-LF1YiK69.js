import { jsxs, jsx } from 'react/jsx-runtime';
import { g as getImageUrl } from '../main.mjs';
import { motion } from 'framer-motion';
import { A as AnimatedHeading } from './AnimatedHeading-CW_F_saN.js';
import 'react-dom/client';
import 'react';

const container = "_container_11002_5";
const title$1 = "_title_11002_23";
const slides = "_slides_11002_41";
const styles$1 = {
	container: container,
	title: title$1,
	slides: slides
};

const projects = [
	{
		title: "First Mobile app",
		startDate: "04/2023",
		endDate: "05/2023",
		imageSrc: "projects/mobile_app",
		description: "This was my first mobile applicaton made with react-native, focusing on functionality with very simple CSS.",
		skills: [
			"React Native",
			"Node",
			"Sass",
			"JavaScript"
		],
		source: "https://www.github.com/Jamiiiiii/Mini-Yahtzee"
	},
	{
		title: "Chat app",
		startDate: "08/2024",
		endDate: "09/2024",
		imageSrc: "projects/chat-app",
		description: "This was a web application with chatting, chatgpt and dall-e features. Made it with very simple styling close to whatsapp's styles.",
		skills: [
			"TypeScript",
			"Node",
			"Clerk",
			"Convex"
		],
		demo: "https://chat-app-project-tau.vercel.app",
		source: "https://github.com/Jamiiiiii/chat-app-project"
	},
	{
		title: "Portfolio",
		startDate: "04/2025",
		endDate: "For now",
		imageSrc: "projects/portfolio",
		description: "This is my latest online resume which is still in development, Hope you enjoy it!",
		skills: [
			"React",
			"HTML",
			"CSS",
			"Vite.js"
		],
		demo: "https://portfolio-jami-rankinen.netlify.app",
		source: ""
	}
];

const projectSlide = "_projectSlide_11e71_5";
const reversed = "_reversed_11e71_27";
const imageContainer = "_imageContainer_11e71_35";
const image = "_image_11e71_35";
const content = "_content_11e71_73";
const title = "_title_11e71_87";
const date = "_date_11e71_95";
const description = "_description_11e71_113";
const skills = "_skills_11e71_125";
const skill = "_skill_11e71_125";
const links = "_links_11e71_159";
const link = "_link_11e71_159";
const styles = {
	projectSlide: projectSlide,
	reversed: reversed,
	imageContainer: imageContainer,
	image: image,
	content: content,
	title: title,
	date: date,
	description: description,
	skills: skills,
	skill: skill,
	links: links,
	link: link
};

const ProjectSlide = ({ project, isReversed, delays = {} }) => {
  const {
    title,
    imageSrc,
    description,
    skills,
    demo,
    source,
    startDate,
    endDate
  } = project;
  const {
    image = 1,
    content = 1.3,
    title: titleDelay = 1.5,
    date: dateDelay = 1.1,
    description: descDelay = 1.7,
    skills: skillsDelay = 1.9,
    links: linksDelay = 2.1
  } = delays;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: `${styles.projectSlide} ${isReversed ? styles.reversed : ""}`,
      initial: { opacity: 0, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: true, amount: 0.8 },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: styles.imageContainer,
            initial: { opacity: 0, x: isReversed ? 40 : -40 },
            whileInView: { opacity: 1, x: 0 },
            transition: { delay: image, duration: 0.6, ease: "easeOut" },
            viewport: { once: true },
            layout: true,
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: getImageUrl(`${imageSrc}.webp`),
                srcSet: `
          ${getImageUrl(`${imageSrc}-small.webp`)} 480w,
          ${getImageUrl(`${imageSrc}-medium.webp`)} 768w,
          ${getImageUrl(`${imageSrc}.webp`)} 1280w
          `,
                sizes: "(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw",
                alt: `Screenshot of ${title}`,
                className: styles.image,
                loading: "lazy",
                width: "1280",
                height: "800"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: styles.content,
            initial: { opacity: 0, x: isReversed ? -40 : 40 },
            whileInView: { opacity: 1, x: 0 },
            transition: { delay: content, duration: 0.6, ease: "easeOut" },
            viewport: { once: true },
            layout: true,
            children: [
              /* @__PURE__ */ jsx(
                motion.h3,
                {
                  className: styles.title,
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: titleDelay, duration: 0.5, ease: "easeOut" },
                  viewport: { once: true },
                  layout: true,
                  children: title
                }
              ),
              (startDate || endDate) && /* @__PURE__ */ jsxs(
                motion.p,
                {
                  className: styles.date,
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: dateDelay, duration: 0.4, ease: "easeOut" },
                  viewport: { once: true },
                  layout: true,
                  children: [
                    startDate,
                    " – ",
                    endDate
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  className: styles.description,
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: descDelay, duration: 0.5, ease: "easeOut" },
                  viewport: { once: true },
                  layout: true,
                  children: description
                }
              ),
              /* @__PURE__ */ jsx(
                motion.ul,
                {
                  className: styles.skills,
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: skillsDelay, duration: 0.5, ease: "easeOut" },
                  viewport: { once: true },
                  layout: true,
                  children: skills.map((skill, index) => /* @__PURE__ */ jsx("li", { className: styles.skill, children: skill }, index))
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: styles.links,
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: linksDelay, duration: 0.5, ease: "easeOut" },
                  viewport: { once: true },
                  layout: true,
                  children: [
                    demo && /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: demo,
                        className: styles.link,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Demo"
                      }
                    ),
                    source && /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: source,
                        className: styles.link,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Source"
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};

const Projects = () => {
  const animationDelays = [
    {
      image: 0.4,
      content: 0.8,
      title: 1,
      description: 1.2,
      skills: 1.4,
      links: 1.6
    },
    {
      image: 0.3,
      content: 0.6,
      title: 0.8,
      description: 1,
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
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: styles$1.container,
      id: "projects",
      children: [
        /* @__PURE__ */ jsx(
          AnimatedHeading,
          {
            text: "Projects",
            className: styles$1.title
          }
        ),
        /* @__PURE__ */ jsx("div", { className: styles$1.slides, children: projects.map((project, index) => /* @__PURE__ */ jsx(
          ProjectSlide,
          {
            project,
            isReversed: index % 2 !== 0,
            delays: animationDelays[index] || {}
          },
          index
        )) })
      ]
    }
  );
};

export { Projects as default };
