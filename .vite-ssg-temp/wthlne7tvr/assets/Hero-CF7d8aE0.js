import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { g as getImageUrl } from '../main.mjs';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import 'react-dom/client';

const container = "_container_eff36_5";
const content = "_content_eff36_29";
const title = "_title_eff36_45";
const description = "_description_eff36_73";
const contactBtn = "_contactBtn_eff36_89";
const marqueeText = "_marqueeText_eff36_141";
const heroImg = "_heroImg_eff36_197";
const topBlur = "_topBlur_eff36_265";
const bottomBlur = "_bottomBlur_eff36_293";
const styles = {
	container: container,
	content: content,
	title: title,
	description: description,
	contactBtn: contactBtn,
	marqueeText: marqueeText,
	heroImg: heroImg,
	topBlur: topBlur,
	bottomBlur: bottomBlur
};

const heroData = [
	{
		heading: "Hi, I'm Jami",
		description: "Welcome to my portfolio! On this page you will find everything you need to know about me. Feel free to explore my portfolio and contact me if you're interested!"
	}
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return isMobile;
};

const splitLetters = (text) => text.split("");
const Hero = () => {
  const { heading, description } = heroData[0];
  const isMobile = useIsMobile();
  if (isMobile) {
    const heading2 = "Hi, I'm Jami.";
    const description2 = "Welcome to my portfolio! On this page you will find everything you need to know about me. Feel free to explore my portfolio and contact me if you're interested!";
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("header", { className: styles.container, id: "hero", children: [
      /* @__PURE__ */ jsxs("div", { className: styles.content, children: [
        /* @__PURE__ */ jsx("h1", { className: styles.title, children: splitLetters(heading2).map((char, index) => /* @__PURE__ */ jsx("span", { children: char }, index)) }),
        /* @__PURE__ */ jsx("p", { className: styles.description, children: description2 }),
        /* @__PURE__ */ jsx("a", { href: "mailto:jamuxi34@gmail.com", className: styles.contactBtn, children: /* @__PURE__ */ jsx("span", { className: styles.marqueeText, children: "Contact me!" }) })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: getImageUrl("hero/heroImage.webp"),
          srcSet: `
            ${getImageUrl("hero/heroImage-small.webp")} 480w,
            ${getImageUrl("hero/heroImage-medium.webp")} 768w,
            ${getImageUrl("hero/heroImage.webp")} 1280w
          `,
          sizes: "(max-width: 600px) 80vw, (max-width: 1024px) 50vw, 30vw",
          alt: "Professional photo of Jami Rankinen",
          width: 400,
          height: 408,
          className: styles.heroImg
        }
      ),
      /* @__PURE__ */ jsx("div", { className: styles.topBlur }),
      /* @__PURE__ */ jsx("div", { className: styles.bottomBlur })
    ] }) });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    motion.header,
    {
      className: styles.container,
      id: "hero",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles.content, children: [
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              className: styles.title,
              initial: "hidden",
              animate: "visible",
              variants: {
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05 }
                }
              },
              children: splitLetters(heading).map((char, index) => /* @__PURE__ */ jsx(
                motion.span,
                {
                  variants: {
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  },
                  children: char
                },
                index
              ))
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              className: styles.description,
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1, duration: 0.8, ease: "easeOut" },
              children: description
            }
          ),
          /* @__PURE__ */ jsx(
            motion.a,
            {
              href: "mailto:jamuxi34@gmail.com",
              className: styles.contactBtn,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.6, duration: 1, ease: "easeOut" },
              children: /* @__PURE__ */ jsx("span", { className: styles.marqueeText, children: "Contact me!" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.img,
          {
            src: getImageUrl("hero/heroImage.webp"),
            srcSet: `
          ${getImageUrl("hero/heroImage-small.webp")} 480w,
          ${getImageUrl("hero/heroImage-medium.webp")} 768w,
          ${getImageUrl("hero/heroImage.webp")} 1280w
        `,
            sizes: "(max-width: 600px) 80vw, (max-width: 1024px) 50vw, 30vw",
            alt: "Professional photo of Jami Rankinen",
            width: 400,
            height: 408,
            className: styles.heroImg,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.8, duration: 0.8, ease: "easeOut" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: styles.topBlur }),
        /* @__PURE__ */ jsx("div", { className: styles.bottomBlur })
      ]
    }
  ) });
};

export { Hero as default };
