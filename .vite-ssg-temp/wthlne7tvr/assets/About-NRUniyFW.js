import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { g as getImageUrl } from '../main.mjs';
import 'react-dom/client';
import 'react';

const aboutItems$1 = [
	{
		title: "Frontend Developer",
		description: "I'm passionate about every aspect of frontend development, especially web development. I love the entire process of building websites—from designing the interface and developing functionality to styling and ensuring everything is responsive and performs smoothly. I'm also committed to continuously improving my skills. I love to learn, grow, and push my boundaries every day."
	},
	{
		title: "Lifelong Learner & Adventure Seeker",
		description: "Outside of coding, I love to travel and explore different cultures whenever I have the time and opportunity. Just as I enjoy leveling up my development skills, I also believe in physical growth. That’s why I practice Muay Thai, calisthenics, climbing, and running. I strongly believe there's always room for growth—in both personal and professional life."
	},
	{
		title: "UI Designer",
		description: "As a UI designer, I create intuitive, user-centered designs that elevate digital experiences. My focus is on crafting visually appealing, responsive layouts that adapt seamlessly to any device. I aim to design beautiful yet functional interfaces that provide smooth and meaningful user journeys across all platforms."
	}
];

const container = "_container_106af_5";
const title = "_title_106af_37";
const aboutIcon = "_aboutIcon_106af_71";
const aboutItems = "_aboutItems_106af_85";
const aboutItem = "_aboutItem_106af_49";
const styles = {
	container: container,
	title: title,
	aboutIcon: aboutIcon,
	aboutItems: aboutItems,
	aboutItem: aboutItem
};

const icons = [
  "about/cursorIcon.webp",
  "about/smileIcon.webp",
  "about/uiIcon.webp"
];
const About = () => {
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      className: styles.container,
      id: "about",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsx("h2", { className: styles.title, children: "About me" }),
        /* @__PURE__ */ jsx("ul", { className: styles.aboutItems, children: aboutItems$1.map((item, index) => {
          const baseDelay = 0.3 + index * 0.4;
          return /* @__PURE__ */ jsxs(
            motion.li,
            {
              className: styles.aboutItem,
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.5, delay: baseDelay },
              viewport: { once: true, amount: 0.5 },
              children: [
                /* @__PURE__ */ jsx(
                  motion.img,
                  {
                    src: getImageUrl(icons[index]),
                    alt: `${item.title} icon`,
                    className: styles.aboutIcon,
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.5, delay: baseDelay + 0.1 },
                    viewport: { once: true }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: styles.aboutItemText, children: [
                  /* @__PURE__ */ jsx(
                    motion.h3,
                    {
                      className: styles.aboutItemtitle,
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                      transition: { duration: 0.5, delay: baseDelay + 0.2 },
                      viewport: { once: true },
                      children: item.title
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.p,
                    {
                      className: styles.description,
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                      transition: { duration: 0.5, delay: baseDelay + 0.3 },
                      viewport: { once: true },
                      children: item.description
                    }
                  )
                ] })
              ]
            },
            index
          );
        }) })
      ]
    }
  );
};

export { About as default };
