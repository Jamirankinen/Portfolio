import { jsxs, jsx } from 'react/jsx-runtime';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, useRef, lazy, Suspense } from 'react';

const App$1 = "_App_e7lyj_5";
const loading = "_loading_e7lyj_17";
const styles$2 = {
	App: App$1,
	loading: loading
};

const navbar = "_navbar_q9kpy_5";
const title = "_title_q9kpy_31";
const menu = "_menu_q9kpy_45";
const menuBtn = "_menuBtn_q9kpy_57";
const menuItems = "_menuItems_q9kpy_81";
const active = "_active_q9kpy_121";
const menuOpen = "_menuOpen_q9kpy_203";
const styles$1 = {
	navbar: navbar,
	title: title,
	menu: menu,
	menuBtn: menuBtn,
	menuItems: menuItems,
	active: active,
	menuOpen: menuOpen
};

const getImageUrl = (path) => {
  return `/assets/${path}`; // Path relative to the public folder
};

const useScrollSpy = (sectionIds, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let currentId = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= offset) currentId = id;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const sectionIds = [
    "about",
    "experience",
    "projects",
    "certificates",
    "contacts"
  ];
  const activeId = useScrollSpy(sectionIds, 100);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /* @__PURE__ */ jsxs("nav", { className: styles$1.navbar, "aria-label": "Main Navigation", children: [
    /* @__PURE__ */ jsx("a", { className: styles$1.title, href: "/", children: "Portfolio" }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.menu, ref: menuRef, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: styles$1.menuBtn,
          onClick: () => setMenuOpen(!menuOpen),
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png"),
              alt: "menu icon"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "ul",
        {
          className: `${styles$1.menuItems} ${menuOpen ? styles$1.menuOpen : ""}`,
          onClick: () => setMenuOpen(false),
          children: sectionIds.map((id) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: `#${id}`,
              className: activeId === id ? styles$1.active : "",
              children: id.charAt(0).toUpperCase() + id.slice(1)
            }
          ) }, id))
        }
      )
    ] })
  ] });
};

const scrollButton = "_scrollButton_1rfw2_1";
const styles = {
	scrollButton: scrollButton
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return isVisible && /* @__PURE__ */ jsx("button", { onClick: scrollToTop, className: styles.scrollButton, children: /* @__PURE__ */ jsx(
    "img",
    {
      src: getImageUrl("ScrollToTop/arrow_up.png"),
      alt: "Scroll to top"
    }
  ) });
};

const Hero = lazy(() => import('./assets/Hero-CF7d8aE0.js'));
const About = lazy(() => import('./assets/About-NRUniyFW.js'));
const Experience = lazy(() => import('./assets/Experience-Chc0oI1D.js'));
const Projects = lazy(() => import('./assets/Projects-LF1YiK69.js'));
const Certificates = lazy(
  () => import('./assets/Certificates-BvDQaIEd.js')
);
const Contact = lazy(() => import('./assets/Contact-D8_sRFMS.js'));
function App() {
  return /* @__PURE__ */ jsxs("div", { className: styles$2.App, children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs(
      Suspense,
      {
        fallback: /* @__PURE__ */ jsx("div", { className: styles$2.loading, children: "Loading pixels..." }),
        children: [
          /* @__PURE__ */ jsx(Hero, {}),
          /* @__PURE__ */ jsx(About, {}),
          /* @__PURE__ */ jsx(Experience, {}),
          /* @__PURE__ */ jsx(Projects, {}),
          /* @__PURE__ */ jsx(Certificates, {}),
          /* @__PURE__ */ jsx(Contact, {})
        ]
      }
    ),
    /* @__PURE__ */ jsx(ScrollToTopButton, {})
  ] });
}

function createApp() {
  return {
    app: /* @__PURE__ */ jsx(App, {})
  };
}
if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(/* @__PURE__ */ jsx(App, {}));
  }
}

export { createApp, getImageUrl as g };
