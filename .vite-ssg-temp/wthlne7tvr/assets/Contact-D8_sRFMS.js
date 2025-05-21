import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useState } from 'react';

const contactSection = "_contactSection_kqrzg_5";
const line = "_line_kqrzg_23";
const tagline = "_tagline_kqrzg_45";
const glassCard = "_glassCard_kqrzg_57";
const iconWrapper = "_iconWrapper_kqrzg_79";
const icon = "_icon_kqrzg_79";
const tooltip = "_tooltip_kqrzg_135";
const footer = "_footer_kqrzg_163";
const styles = {
	contactSection: contactSection,
	line: line,
	tagline: tagline,
	glassCard: glassCard,
	iconWrapper: iconWrapper,
	icon: icon,
	tooltip: tooltip,
	footer: footer
};

const githubIcon = "/assets/contact/githubIcon.png";

const linkedinIcon = "/assets/contact/linkedinIcon.png";

const emailIcon = "/assets/contact/emailIcon.png";

const Contact = () => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const [copied, setCopied] = useState(false);
  const handleEmailClick = () => {
    navigator.clipboard.writeText("your@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return /* @__PURE__ */ jsxs("section", { className: styles.contactSection, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        id: "contacts",
        className: styles.line,
        initial: { width: 0 },
        whileInView: { width: "100%" },
        transition: { duration: 1 }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        className: styles.tagline,
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { delay: 0.5, duration: 0.6 },
        children: "Would thou check my socials...?"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: styles.glassCard,
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { delay: 0.8, duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/jamirankinen",
              target: "_blank",
              rel: "GitHub Jami Rankinen",
              className: styles.iconWrapper,
              children: /* @__PURE__ */ jsx("img", { src: githubIcon, alt: "GitHub", className: styles.icon, loading: "lazy" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.linkedin.com/in/jami-rankinen/",
              target: "_blank",
              rel: "LinkedIn Jami Rankinen",
              className: styles.iconWrapper,
              children: /* @__PURE__ */ jsx("img", { src: linkedinIcon, alt: "LinkedIn", className: styles.icon })
            }
          ),
          /* @__PURE__ */ jsx("button", { onClick: handleEmailClick, className: styles.iconWrapper, children: /* @__PURE__ */ jsx("img", { src: emailIcon, alt: "Email", className: styles.icon }) }),
          copied && /* @__PURE__ */ jsx(
            motion.div,
            {
              className: styles.tooltip,
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: -20 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.3 },
              children: "Copied!"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: styles.footer, children: [
      "© ",
      year,
      " Jami Rankinen"
    ] })
  ] });
};

export { Contact as default };
