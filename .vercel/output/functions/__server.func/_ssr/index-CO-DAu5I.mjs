import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { b as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-Dr8oHcRu.mjs";
import "../_libs/seroval.mjs";
import { u as useScroll, a as useSpring, m as motion, A as AnimatePresence, b as useInView, c as useMotionValue, d as useTransform } from "../_libs/framer-motion.mjs";
import { X, M as Menu, A as ArrowRight, a as Mail, P as Pause, b as Play, C as CodeXml, W as Wrench, B as Brain, L as Library, D as Database, U as Users, R as Rocket, F as Flame, c as Medal, T as Trophy, G as Gem, d as GraduationCap, e as UsersRound, S as Sparkles, f as Linkedin, g as Github, h as MapPin, i as Globe, j as CircleCheck, k as LoaderCircle, l as Send, m as ArrowUp, n as ChevronLeft, o as ChevronRight } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "hackathons", label: "Hackathons" },
  { id: "contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [active, setActive] = reactExports.useState("home");
  reactExports.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < 140) current = l.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6 },
      className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass-strong border-b border-white/10" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => go("home"), className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-display font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform", children: "NP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block font-display text-sm tracking-widest text-white/70", children: "NEEL · PORTFOLIO" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-1", children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => go(l.id),
              className: `relative px-4 py-2 text-sm font-medium transition-colors ${active === l.id ? "text-white" : "text-white/60 hover:text-white"}`,
              children: [
                l.label,
                active === l.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    layoutId: "nav-underline",
                    className: "absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"
                  }
                )
              ]
            }
          ) }, l.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => go("contact"),
              className: "hidden md:inline-flex btn-hero text-sm py-2 px-5",
              children: "Hire Me"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "md:hidden text-white p-2",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "md:hidden glass-strong border-t border-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col p-4 gap-1", children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => go(l.id),
                className: `w-full text-left px-4 py-3 rounded-lg ${active === l.id ? "bg-white/5 text-white" : "text-white/70 hover:bg-white/5"}`,
                children: l.label
              }
            ) }, l.id)) })
          }
        ) })
      ]
    }
  );
}
const HERO_VIDEO_URL = "https://pqhnvajcqwgdoumsthdz.supabase.co/storage/v1/object/public/Portfolio-Assets/webvideo.mp4";
const ROLES = [
  "AI & ML Engineer",
  "Hackathon Champion",
  "Full Stack Builder",
  "Government-Funded Innovator"
];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
function ScrambleText({ text }) {
  const [displayText, setDisplayText] = reactExports.useState("");
  reactExports.useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        (prev) => text.split("").map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: displayText });
}
function Hero() {
  const [i, setI] = reactExports.useState(0);
  const [playing, setPlaying] = reactExports.useState(false);
  const [hasStarted, setHasStarted] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  reactExports.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => {
      setPlaying(true);
      setHasStarted(true);
    };
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setHasStarted(false);
    };
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, []);
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      if (v.ended) v.currentTime = 0;
      v.muted = false;
      v.volume = 1;
      v.play().catch(() => {
      });
    } else {
      v.pause();
    }
  };
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      className: "hero-unified relative min-h-[100svh] w-full overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-mobile-overlay pointer-events-none", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-media absolute inset-0 md:left-1/2 bg-transparent overflow-hidden pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              ref: videoRef,
              playsInline: true,
              preload: "metadata",
              className: "hero-video w-full h-full object-cover",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: HERO_VIDEO_URL + "#t=0.1", type: "video/mp4" })
            }
          ),
          playing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -6 },
              animate: { opacity: 1, y: 0 },
              className: "absolute top-5 right-5 z-20 inline-flex items-center gap-2 chip pointer-events-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                "NOW PLAYING"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-5 sm:px-8 min-h-[100svh] flex items-center pt-24 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1, duration: 0.6 },
              className: "inline-flex items-center gap-2 chip mb-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                "Open to opportunities · Vadodara, India"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2, duration: 0.6 },
              className: "text-sm md:text-base text-white/60 font-mono tracking-widest uppercase mb-3",
              children: "Hey, I'm"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.35, duration: 0.7 },
              className: "font-display font-bold leading-[0.95] tracking-tight",
              style: { fontSize: "clamp(2.75rem, 7vw, 5.5rem)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]", children: "Neel Prajapati" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5, duration: 0.6 },
              className: "mt-5 h-10 overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { y: 30, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { duration: 0.5 },
                  className: "text-xl md:text-2xl font-display text-white/90",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "›" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrambleText, { text: ROLES[i] }) })
                  ]
                },
                i
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7, duration: 0.6 },
              className: "mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-xl",
              children: "CSE student at MSU Baroda · Building AI that creates real-world impact · Winner of NASA Space Apps · Rs. 2.43L SSIP Funded"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.9, duration: 0.6 },
              className: "hero-cta-row mt-9 flex flex-wrap gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => go("projects"), className: "btn-hero", children: [
                  "View My Work ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => go("contact"), className: "btn-ghost-neon", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 }),
                  " Contact Me"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.05, duration: 0.6 },
              className: "mt-4 flex items-center gap-3",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: togglePlay,
                  className: `relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass border border-white/15 text-white hover:border-indigo-400/60 transition ${!playing ? "play-ring" : ""}`,
                  children: [
                    playing ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 14 }),
                    playing ? "Pause" : hasStarted ? "Resume" : "Play Intro"
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.2, duration: 0.6 },
              className: "hero-stats-row mt-10 flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-white/40",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10+ Hackathons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-white/30 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "3 Major Awards" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-white/30 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CGPA 8.2" })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
function SectionHeader({
  eyebrow,
  title,
  subtitle
}) {
  const match = eyebrow?.match(/^(\d+)(.*)$/);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start mb-12", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        className: "chip mb-4",
        children: match ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-num", children: match[1] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: match[2] })
        ] }) : eyebrow
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 },
        className: "section-title",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: title })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shimmer-underline mt-3" }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { delay: 0.15 },
        className: "mt-4 text-white/65 max-w-2xl text-base md:text-lg leading-relaxed",
        children: subtitle
      }
    )
  ] });
}
function Counter({ end, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "font-display text-5xl md:text-6xl font-bold text-gradient", children: [
    n,
    suffix
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-28 px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "01 · Who I am", title: "About Me" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.7 },
          className: "glass rounded-2xl p-7 md:p-10 relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 text-base md:text-lg leading-relaxed relative", children: [
              "I'm ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "Neel Prajapati" }),
              ", a second-year Computer Science & Engineering student at",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient font-semibold", children: "The Maharaja Sayajirao University of Baroda" }),
              ", Vadodara, with a CGPA of 8.2. I'm deeply passionate about Artificial Intelligence, Machine Learning, and building technology that solves real problems for real people.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "My journey has taken me from writing my first lines of code to winning the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "NASA Space Apps Challenge" }),
              ", receiving ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-300 font-semibold", children: "Rs. 2.43 Lakh" }),
              " ",
              "in government research funding for AgriForge — an AI platform for Indian farmers — and competing in national-level hackathons across India.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "I believe in building in public, learning fast, and creating technology that makes a meaningful difference. Whether it's predicting urban risks with Random Forest models, detecting crop diseases with EfficientNet, or building smart city governance systems with local LLMs — every project I work on is driven by a single question:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-white", children: "does this create real impact?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "I'm a core member of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "Neuralize" }),
              ", MSU's AI/ML club, a Web Team Member at",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "Code Vimarsh" }),
              ", and an active participant in India's growing AI innovation ecosystem."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5", children: [
        { n: 10, s: "+", label: "Hackathons Participated" },
        { n: 3, s: "", label: "Major Awards Won" },
        { n: 82, s: " / 10", label: "CGPA · CSE @ MSU Baroda" }
      ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "glass rounded-2xl p-6 hover:border-indigo-400/40 transition-colors group",
          children: [
            m.label.includes("CGPA") ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-5xl md:text-6xl font-bold text-gradient", children: [
              "8.2",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-white/40", children: "/10" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { end: m.n, suffix: m.s }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/60 uppercase tracking-widest font-mono", children: m.label.replace(" · CSE @ MSU Baroda", "") })
          ]
        },
        i
      )) })
    ] })
  ] }) });
}
const GROUPS = [
  {
    icon: CodeXml,
    title: "Languages",
    color: "from-indigo-500 to-blue-500",
    items: ["Java", "Python", "C / C++", "JavaScript", "HTML5", "CSS3"]
  },
  {
    icon: Wrench,
    title: "Tools & Tech",
    color: "from-cyan-500 to-teal-500",
    items: ["Git", "GitHub", "Cloud AI Tools", "Vertex AI", "Supabase CLI"]
  },
  {
    icon: Brain,
    title: "AI / ML",
    color: "from-fuchsia-500 to-pink-500",
    items: [
      "Machine Learning",
      "Generative AI",
      "Data Analysis",
      "EfficientNet",
      "Random Forest",
      "TinyLlama",
      "Scikit-learn",
      "Pandas",
      "NumPy"
    ]
  },
  {
    icon: Library,
    title: "Frameworks & Libraries",
    color: "from-purple-500 to-violet-500",
    items: ["React", "Next.js", "FastAPI", "Flask", "Tailwind CSS", "TypeScript"]
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-emerald-500 to-green-500",
    items: ["Supabase", "PostgreSQL"]
  },
  {
    icon: Users,
    title: "Soft Skills",
    color: "from-amber-500 to-orange-500",
    items: ["Leadership", "Collaboration", "Communication", "Project Management"]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "relative py-28 px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "02 · Toolbox",
        title: "Skills & Technologies",
        subtitle: "The stack I use to ship AI products — from research notebooks to production dashboards."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: GROUPS.map((g, i) => {
      const Icon = g.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay: i * 0.08 },
          whileHover: { y: -4 },
          className: "glass rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-400/40 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${g.color} opacity-15 blur-2xl group-hover:opacity-30 transition-opacity` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${g.color} shadow-lg mb-4`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-4 text-white", children: g.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: g.items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: s }, s)) })
          ]
        },
        g.title
      );
    }) })
  ] }) });
}
const __vite_glob_0_0$2 = "/assets/1-1IarUcOx.jpg";
const __vite_glob_0_1$1 = "/assets/1-BgUNonQj.jpg";
const __vite_glob_0_2$1 = "/assets/1-BN3aURma.jpg";
const __vite_glob_0_3$1 = "/assets/2-Cf53M1yt.jpg";
const __vite_glob_0_4$1 = "/assets/3-Cc-ARZFP.jpg";
const __vite_glob_0_5$1 = "/assets/1-CFY9w_bq.jpg";
const __vite_glob_0_6$1 = "/assets/2-DZ1hrjK7.jpg";
const __vite_glob_0_7$1 = "/assets/3-7DrlL-ka.jpg";
const __vite_glob_0_8$1 = "/assets/1-CwGeqXs3.jpg";
const __vite_glob_0_9 = "/assets/2-DmfURu3V.jpg";
function Modal({
  open,
  onClose,
  children
}) {
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      onClick: onClose,
      style: {
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.95, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.95, opacity: 0 },
          transition: { duration: 0.25, ease: "easeOut" },
          onClick: (e) => e.stopPropagation(),
          className: "relative w-full max-w-[720px] max-h-[88vh] overflow-y-auto rounded-2xl glass-strong",
          style: {
            border: "1px solid rgba(99,102,241,0.4)",
            boxShadow: "0 0 60px -10px rgba(99,102,241,0.5), inset 0 0 30px rgba(168,85,247,0.08)",
            padding: "40px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                "aria-label": "Close",
                className: "absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:border-fuchsia-400/60 transition-all duration-300 hover:rotate-90",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
              }
            ),
            children
          ]
        }
      )
    }
  ) });
}
function TiltWrapper({ children, className, style }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: { rotateX, rotateY, transformStyle: "preserve-3d", ...style },
      className,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "translateZ(30px)", height: "100%" }, children })
    }
  );
}
function ImageCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const scrollPrev = reactExports.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = reactExports.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = reactExports.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);
  reactExports.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);
  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: images[0], alt: "Screenshot", className: "w-full h-auto object-cover" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-6 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", ref: emblaRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex touch-pan-y", children: images.map((src, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-[0_0_100%] min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `Screenshot ${index + 1}`, className: "w-full h-auto object-cover" }) }, index)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: scrollPrev,
        className: "absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/80 hover:scale-110 transition opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: scrollNext,
        className: "absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/80 hover:scale-110 transition opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 rounded-full bg-black/40 backdrop-blur-md flex items-center gap-2 border border-white/10 shadow-xl", children: images.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `transition-all duration-300 rounded-full ${index === selectedIndex ? "w-6 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "w-1.5 h-1.5 bg-white/40"}`
      },
      index
    )) }) })
  ] });
}
const PROJECTS = [
  {
    title: "AgriForge — KrishiMitra",
    status: "🟢 Active · Pilot Stage",
    tagline: "AI-powered agricultural intelligence platform for Indian farmers",
    stack: ["EfficientNet", "Python", "Multilingual NLP", "Voice AI", "Cloud"],
    short: "An AI-driven platform providing 24×7 support to farmers across India.",
    badge: "💰 Rs. 2.43L SSIP Government Funded",
    color: "green",
    category: ["AI/ML"],
    id: "agriforge",
    detail: "AgriForge — KrishiMitra is my most impactful project to date. It is an AI-powered agricultural platform designed to provide round-the-clock intelligent support to Indian farmers in 10+ regional languages through both voice and text interfaces. The platform integrates EfficientNet for real-time crop disease detection from images taken by farmers on their phones. The multilingual voice AI feature ensures accessibility for rural users who may not be literate or comfortable with text-based interfaces. AgriForge was awarded Rs. 2.43 Lakh in research funding under the SSIP — Student Startup and Innovation Policy by the Government of Gujarat, validating its real-world potential and social impact. This project is currently in its pilot stage and actively being developed."
  },
  {
    title: "Urban Intel AI",
    status: "🏆 Hackathon Winner Project",
    tagline: "Hybrid AI smart city governance platform with local LLM policy engine",
    stack: ["Random Forest", "TinyLlama", "Python", "Local LLM", "Data Analytics"],
    short: "A next-gen smart city platform predicting urban risks before they happen.",
    color: "blue",
    category: ["AI/ML", "Hackathon"],
    id: "urban-intel",
    detail: "Urban Intel AI is a Smart City Governance Platform I built for the Ingenius Hackathon 7.0 at Ahmedabad University, where it won 1st Runner Up among 180+ teams. The system uses a Hybrid AI Architecture consisting of 6 specialized Random Forest models trained to predict critical urban risks including water scarcity, traffic congestion, and health hazards with high precision. What makes Urban Intel AI unique is the integration of a private local TinyLlama LLM that processes the risk outputs and generates real-time, actionable policy recommendations for city administrators — all while maintaining 100% data sovereignty without relying on any external APIs. This ensures both speed and privacy for sensitive government data."
  },
  {
    title: "CityForge: Mumbai Pulse",
    status: "🏆 NASA Space Apps Winner",
    tagline: "NASA EO data-powered real-time environmental intelligence dashboard for Mumbai",
    stack: ["React", "Next.js", "Flask", "Leaflet", "Esri/ArcGIS", "MODIS", "Landsat", "SMAP", "Meteomatics API"],
    short: "Real-time platform monitoring air quality, heat islands and water resources using NASA satellite data.",
    color: "blue",
    category: ["Web", "Hackathon"],
    id: "mumbai-pulse",
    detail: "Mumbai Pulse is an environmental intelligence platform built for the NASA Space Apps Challenge 2025, which my team won at the Vallabh Vidyanagar Local Event. The platform integrates NASA Earth Observation data including MODIS, Landsat, and SMAP datasets with real-time weather data from the Meteomatics API to monitor three critical environmental challenges across Mumbai: Urban Heat Islands — mapping temperature variations and identifying heat-stressed zones with cooling intervention suggestions; Water Resources — tracking lakes, reservoirs and rainfall while assessing water quality; and Air Quality — providing real-time AQI data, pollution source analytics and health advisories. All data is brought together in a unified interactive dashboard built with React/Next.js frontend, Flask API backend, and Leaflet + Esri/ArcGIS mapping layers."
  },
  {
    title: "TerraForge",
    status: "🔥 DotSlash 9.0 Top 8 Finalist",
    tagline: "Environmental intelligence OS with local AI models for governments and farmers",
    stack: ["Local AI Models", "Multilingual Voice AI", "Python", "Environmental Data APIs"],
    short: "AI platform helping governments and farmers make proactive decisions using real-time environmental data.",
    color: "green",
    category: ["AI/ML", "Hackathon"],
    id: "terraforge",
    detail: "TerraForge — Environmental Intelligence OS was built for DotSlash 9.0 at SVNIT Surat, a 30-hour national hackathon with 550+ competing teams, where it reached the Top 8 Finals. TerraForge is an AI-powered platform designed to help both governments and farmers make proactive, data-driven decisions using real-time environmental intelligence. Key features include AI models running locally for low cost, privacy preservation and offline capability in rural areas; prediction of environmental risks and agricultural impact using live data streams; multilingual voice assistance for rural users in regional Indian languages; and data-driven policy recommendation generation for government bodies."
  },
  {
    title: "Smart Cattle Health & Milk Prediction",
    status: "🥈 Hackovate LJ Top 40 Finalist",
    tagline: "AI platform for dairy farmers with dual ML models for health and yield prediction",
    stack: ["Next.js 14", "React 18", "TypeScript", "FastAPI", "Scikit-learn", "Supabase", "Tailwind", "Shadcn/UI"],
    short: "Dual AI model platform predicting milk yield and detecting cattle diseases for dairy farmers.",
    color: "green",
    category: ["AI/ML", "Web", "Hackathon"],
    id: "smart-cattle",
    detail: "Built for Hackovate 2025 at LJ University, this platform reached the Top 40 Finals among 240+ teams. The system features two specialized AI models: a Linear Regression model for milk yield prediction with 90% accuracy, and a Classification model for disease detection across 15+ conditions with 85% accuracy. Key platform features include real-time health monitoring and scoring, visual insight dashboards, automated PDF farm reports, multi-language support in English, Hindi, Gujarati and Marathi, batch processing capability for large herds, and a mobile-first design. My role: AI/ML Engineer responsible for model training and optimization."
  },
  {
    title: "Coastal Threat Alert System",
    status: "🌊 HackOut 2025 · DAIICT",
    tagline: "AI + IoT + satellite-data platform protecting coastal ecosystems and communities",
    stack: ["AI", "IoT", "Satellite Data", "Role-based Dashboards", "Real-time Alerts"],
    short: "Multi-dashboard platform for real-time coastal threat detection and community alert dissemination.",
    color: "blue",
    category: ["Web", "Hackathon"],
    id: "coastal-threat",
    detail: "Built for HackOut 2025 at DAIICT Gandhinagar — a hackathon with 4000+ registrations where only 250-300 teams were shortlisted for the offline round. The theme was Blue Carbon and Green Hydrogen. The Coastal Threat Alert System features role-based sign-in with 5 specialized dashboards for Disaster Management teams, City Governments, NGOs, Fisherfolk communities, and Civil Defence Teams. The platform provides real-time detection of sea-level rise, cyclones, algal blooms and illegal dumping activities, raising awareness on Blue Carbon ecosystems and disseminating real-time alerts to protect mangroves, wetlands and seagrass while ensuring community resilience."
  },
  {
    title: "MindForge",
    status: "🧠 Personal AI Project",
    tagline: "Universal AI-powered builder — generate websites, apps and games from prompts",
    stack: ["Mistral API", "Gemini API", "Hugging Face", "React", "JavaScript"],
    short: "Platform where anyone can generate websites, mobile apps, games and AI tools just by typing a prompt.",
    color: "purple",
    category: ["AI/ML", "Web"],
    id: "mindforge",
    detail: "MindForge is my personal passion project — a universal AI development engine that lets anyone generate websites, mobile apps, games, AI tools, automation bots and more from simple natural language prompts. The vision is to make development radically faster, more accessible and smarter using generative AI. Currently integrated with Mistral API for fast code generation, Hugging Face models for logic-based tools, and Gemini API for context-aware creative prompt understanding. Outputs include clean responsive code, beautiful UI previews and exportable/downloadable project structures. Upcoming features: real-time live preview rendering, project history and saving, one-click deployment with shareable links, and team collaboration features."
  },
  {
    title: "Eunoia Homoeopathy Website",
    status: "✅ Live Client Project",
    tagline: "Live client website for a homoeopathy clinic — UI/UX, domain, hosting, deployment",
    stack: ["HTML", "CSS", "JavaScript", "Domain Setup", "Web Hosting"],
    short: "Real-world client project — designed, built and deployed a fully live clinic website.",
    color: "orange",
    category: ["Web"],
    id: "eunoia",
    detail: "Eunoia Homoeopathy is a real client project where I designed and deployed a fully live website for a homoeopathy clinic. This project gave me hands-on experience working with actual client requirements, making UI/UX decisions based on client feedback, handling domain setup and DNS configuration, and managing web hosting and deployment end-to-end. Beyond just writing code, this project taught me the full lifecycle of delivering a professional web product to a real paying client."
  },
  {
    title: "Agent Arena",
    status: "🧠 HackBaroda 2026 · Devnovate",
    tagline: "Memory-augmented AI agent for real-time competitive intelligence",
    stack: ["Groq LLMs", "Vectorize AI", "Memory-Augmented RAG", "GitHub API", "Reddit API", "React", "Node.js"],
    short: "AI-powered competitive intelligence agent that monitors competitors, tracks sentiment, and remembers everything.",
    color: "purple",
    category: ["AI/ML", "Hackathon"],
    id: "agent-arena",
    detail: "Agent Arena is an AI-powered Competitive Intelligence Agent built at HackBaroda 2026 under Devnovate. The platform monitors competitor activity across GitHub Releases, Reddit, Hacker News and product announcements, tracking community sentiment and generating strategic insights continuously. The core architectural innovation was moving beyond traditional RAG — where vector search would sometimes surface 2023 release notes when asked about recent activity, and similar announcements from different competitors would get mixed due to shared terminology. Instead, we redesigned the system around persistent agent memory using Vectorize AI, where every significant event is stored with timestamps, source attribution, threat scores, historical context and competitor-specific namespaces. The agent doesn't just retrieve information — it remembers it, identifies patterns over time, detects emerging threats and surfaces opportunities that standard retrieval systems miss entirely."
  }
];
const BORDER_COLOR = {
  green: "#10b981",
  blue: "#6366f1",
  purple: "#a855f7",
  orange: "#f59e0b"
};
const FILTERS$1 = ["All", "AI/ML", "Web", "Hackathon"];
const projectImages = /* @__PURE__ */ Object.assign({ "/src/assets/images/projects/coastal-threat/1.jpg": __vite_glob_0_0$2, "/src/assets/images/projects/mindforge/1.jpg": __vite_glob_0_1$1, "/src/assets/images/projects/mumbai-pulse/1.jpg": __vite_glob_0_2$1, "/src/assets/images/projects/mumbai-pulse/2.jpg": __vite_glob_0_3$1, "/src/assets/images/projects/mumbai-pulse/3.jpg": __vite_glob_0_4$1, "/src/assets/images/projects/smart-cattle/1.jpg": __vite_glob_0_5$1, "/src/assets/images/projects/smart-cattle/2.jpg": __vite_glob_0_6$1, "/src/assets/images/projects/smart-cattle/3.jpg": __vite_glob_0_7$1, "/src/assets/images/projects/urban-intel/1.jpg": __vite_glob_0_8$1, "/src/assets/images/projects/urban-intel/2.jpg": __vite_glob_0_9 });
function Projects() {
  const [openIdx, setOpenIdx] = reactExports.useState(null);
  const [filter, setFilter] = reactExports.useState("All");
  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All" || p.category.includes(filter)
  );
  const active = openIdx !== null ? PROJECTS[openIdx] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "relative py-28 px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "03 · Things I've shipped",
          title: "Projects I've Built",
          subtitle: "Each one driven by a single question — does this create real impact?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-10", children: FILTERS$1.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilter(f),
          className: `px-4 py-2 rounded-full text-sm font-semibold transition-all border ${filter === f ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 border-transparent text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]" : "glass border-white/10 text-white/70 hover:text-white"}`,
          children: f
        },
        f
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch", children: filteredProjects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TiltWrapper, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.5, delay: i % 4 * 0.06 },
          className: "card-inner-glow relative glass rounded-2xl p-7 overflow-hidden flex flex-col h-full",
          style: {
            borderLeft: `4px solid ${BORDER_COLOR[p.color]}`,
            boxShadow: `0 0 30px -18px ${BORDER_COLOR[p.color]}`
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: p.status }),
              p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-400/40 text-amber-200", children: p.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-white", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/70 italic", children: p.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.stack.slice(0, 6).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: s }, s)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/75 leading-relaxed", children: p.short }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpenIdx(PROJECTS.findIndex((proj) => proj.title === p.title)),
                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass border border-white/15 text-white hover:border-indigo-400/60 transition",
                children: [
                  "View More ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                ]
              }
            ) })
          ]
        }
      ) }, p.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open: !!active, onClose: () => setOpenIdx(null), children: active && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${active.color === "green" ? "from-emerald-500/20" : active.color === "blue" ? "from-blue-500/20" : active.color === "purple" ? "from-purple-500/20" : "from-orange-500/20"} blur-[100px] pointer-events-none` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: (() => {
        const images = Object.keys(projectImages).filter((path) => path.includes(`/${active.id}/`)).map((path) => projectImages[path]);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ImageCarousel, { images });
      })() }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 opacity-20 bg-gradient-to-br ${active.color === "green" ? "from-emerald-500 to-teal-500" : active.color === "blue" ? "from-blue-500 to-indigo-500" : active.color === "purple" ? "from-purple-500 to-fuchsia-500" : "from-orange-500 to-amber-500"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md border border-white/30", children: active.status }),
              active.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-amber-500/30 text-amber-100 shadow-[0_0_15px_rgba(245,158,11,0.5)] backdrop-blur-md border border-amber-500/50", children: active.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-display text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${active.color === "green" ? "from-emerald-300 to-teal-200" : active.color === "blue" ? "from-blue-300 to-indigo-200" : active.color === "purple" ? "from-purple-300 to-fuchsia-200" : "from-orange-300 to-amber-200"} mb-3 drop-shadow-sm`, children: active.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl font-serif italic text-white/90 drop-shadow-md", children: active.tagline })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 justify-center py-4", children: active.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "px-5 py-2.5 rounded-2xl font-mono text-sm font-bold tracking-wide backdrop-blur-md transition-transform hover:scale-110",
            style: {
              backgroundColor: `${BORDER_COLOR[active.color]}33`,
              border: `1px solid ${BORDER_COLOR[active.color]}88`,
              color: "#fff",
              boxShadow: `0 0 20px ${BORDER_COLOR[active.color]}40`
            },
            children: s
          },
          s
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-6 md:pl-8 py-2 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${active.color === "green" ? "from-emerald-400" : active.color === "blue" ? "from-blue-400" : active.color === "purple" ? "from-purple-400" : "from-orange-400"} to-transparent` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 text-left", children: active.detail.split(new RegExp("(?<=\\.)\\s+(?=[A-Z])")).map((paragraph, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `leading-relaxed tracking-wide ${idx === 0 ? "text-xl text-white font-medium drop-shadow-sm" : "text-lg text-white/70 font-light"}`,
              children: paragraph
            },
            idx
          )) })
        ] })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_0$1 = "/assets/1-Bjt5jyxA.jpg";
const __vite_glob_0_1 = "/assets/1-BiGAxCew.jpg";
const __vite_glob_0_2 = "/assets/1-B8qYvSLA.jpg";
const __vite_glob_0_3 = "/assets/1-c9rrCI97.jpg";
const __vite_glob_0_4 = "/assets/1-b9d1O_Jn.jpg";
const __vite_glob_0_5 = "/assets/2-C6JOKQfk.jpg";
const __vite_glob_0_6 = "/assets/1-Bbdch57O.jpg";
const __vite_glob_0_7 = "/assets/1-BaD52q2A.jpg";
const __vite_glob_0_8 = "/assets/2-Cuhifjcf.jpg";
const ENTRIES = [
  {
    tier: "winner",
    rank: "Winner",
    event: "NASA Space Apps Challenge 2025",
    organizer: "Local Event · Vallabh Vidyanagar",
    project: "CityForge — Mumbai Pulse",
    description: "AI system analyzing NASA datasets to monitor air quality, heat islands and environmental risks across Mumbai.",
    team: "Hell Boys · Aryan Buha, Sumit Patel, Krushit Prajapati, Patel Vrund",
    id: "nasa",
    details: "Our very first hackathon victory — a milestone moment. We built an environmental intelligence dashboard for Mumbai using NASA Earth Observation data (MODIS, Landsat, SMAP) combined with Meteomatics API for real-time weather feeds, fused into a single interactive React/Next.js + Flask + Leaflet dashboard targeting urban planners, governments and citizens."
  },
  {
    tier: "runner",
    rank: "1st Runner Up",
    event: "Ingenius Hackathon 7.0",
    organizer: "Ahmedabad University · 180+ teams · 36-hour sprint",
    project: "Urban Intel AI",
    description: "Smart City Governance Platform with Hybrid AI Architecture.",
    team: "Hell Boys",
    id: "ingenius",
    details: "Ranked 2nd among 180+ teams. The system fused 6 specialized Random Forest models (water scarcity, traffic, health hazards) with a private local TinyLlama LLM that generates real-time, actionable policy recommendations for city administrators — 100% data-sovereign, no external APIs."
  },
  {
    tier: "runner",
    rank: "2nd Rank · Gujarat",
    event: "IBM AI Innovation Challenge 2026",
    organizer: "IBM × CSRBOX · iHUB Ahmedabad",
    project: "AI for Agricultural Ecosystem",
    description: "AI solution focused on strengthening India's agricultural ecosystem.",
    team: "Aryan Buha, Krushit Prajapati, Patel Vrund",
    id: "ibm",
    details: "Secured 2nd position across Gujarat among shortlisted teams. Presented an AI solution focused on strengthening India's agricultural ecosystem through scalable, farmer-first technology."
  },
  {
    tier: "finalist",
    rank: "Top 8 Finalist",
    event: "DotSlash 9.0",
    organizer: "SVNIT Surat · 550+ teams · 30-hour national hackathon",
    project: "TerraForge — Environmental Intelligence OS",
    description: "AI platform for proactive environmental decisions for governments and farmers.",
    team: "Hell Boys",
    id: "dotslash",
    details: "Reached Top 8 Finals among 550+ teams nationwide with local AI models for offline rural deployment, multilingual voice assistance, and data-driven policy recommendation generation."
  },
  {
    tier: "finalist",
    rank: "Top 40 Finalist",
    event: "Hackovate 2025",
    organizer: "LJ University · 240+ teams",
    project: "Smart Cattle Health & Milk Prediction",
    description: "Dual AI model platform for dairy farmers — yield + disease detection.",
    team: "Hell Boys",
    id: "hackovate",
    details: "Role: AI/ML Engineer. Built Linear Regression for milk yield (90% accuracy) and Classification model for 15+ cattle diseases (85% accuracy) — Next.js 14 + FastAPI + Supabase stack with multilingual support across English, Hindi, Gujarati and Marathi."
  },
  {
    tier: "finalist",
    rank: "Finalist",
    event: "HackBaroda 2026 · Devnovate",
    organizer: "Productica AI",
    project: "Agent Arena",
    description: "Memory-augmented AI competitive intelligence agent (GitHub, Reddit, Hacker News).",
    team: "Hell Boys",
    id: "hackbaroda",
    details: "Moved beyond RAG to persistent agent memory architecture using Vectorize AI and Groq LLMs. The agent stores every significant event with timestamps, source attribution, threat scores and competitor-specific namespaces — surfacing patterns and threats that standard retrieval misses entirely."
  },
  {
    tier: "participant",
    rank: "Shortlisted",
    event: "HackOut 2025",
    organizer: "DAIICT Gandhinagar · 4000+ registrations · ~300 offline teams",
    project: "Coastal Threat Alert System",
    description: "Role-based multi-dashboard platform for coastal threat detection (Blue Carbon & Green Hydrogen track).",
    team: "Aryan Buha, Sumit Patel",
    id: "hackout",
    details: "5 specialized dashboards (Disaster Mgmt, City Govt, NGOs, Fisherfolk, Civil Defence) detecting sea-level rise, cyclones, algal blooms and illegal dumping. Aims to save lives, support sustainable fisheries and arm governments with data-driven climate insights."
  },
  {
    tier: "participant",
    rank: "Participant",
    event: "ISRO Bharatiya Antariksh Hackathon 2025",
    organizer: "ISRO · Hack2skill",
    project: "Idea Submission",
    description: "National-level ISRO initiative.",
    id: "isro",
    details: "Received Certificate of Acknowledgement for idea submission under the national ISRO Bharatiya Antariksh Hackathon 2025 organized by Hack2skill."
  },
  {
    tier: "participant",
    rank: "Participant",
    event: "AI for Impact · Social Initiative",
    organizer: "First-ever hackathon",
    project: "Idea Submission",
    description: "Foundational experience that started the journey.",
    id: "ai-for-impact",
    details: "First-ever hackathon participation. Certificate of Achievement received for idea submission. The foundational experience that started the entire journey."
  }
];
const TIER_META = {
  winner: {
    label: "Winner",
    icon: Trophy,
    cls: "border-amber-400/60",
    badge: "bg-amber-400 text-amber-950 border-amber-300",
    iconColor: "text-amber-300",
    tierClass: "tier-winner"
  },
  runner: {
    label: "Runner Up",
    icon: Medal,
    cls: "border-slate-300/50",
    badge: "bg-slate-200 text-slate-900 border-slate-100",
    iconColor: "text-slate-200",
    tierClass: "tier-runner"
  },
  finalist: {
    label: "Finalist",
    icon: Flame,
    cls: "border-orange-400/60",
    badge: "bg-orange-500 text-orange-50 border-orange-400",
    iconColor: "text-orange-300",
    tierClass: "tier-finalist"
  },
  participant: {
    label: "Participant",
    icon: Rocket,
    cls: "border-indigo-400/50",
    badge: "bg-indigo-500 text-indigo-50 border-indigo-400",
    iconColor: "text-indigo-300",
    tierClass: "tier-participant"
  }
};
const FILTERS = [
  { id: "all", label: "All" },
  { id: "winner", label: "🏆 Winner" },
  { id: "runner", label: "🥈 Runner Up" },
  { id: "finalist", label: "🔥 Finalist" },
  { id: "participant", label: "🚀 Participant" }
];
const hackathonImages = /* @__PURE__ */ Object.assign({ "/src/assets/images/hackathons/ai-for-impact/1.jpg": __vite_glob_0_0$1, "/src/assets/images/hackathons/hackout/1.jpg": __vite_glob_0_1, "/src/assets/images/hackathons/hackovate/1.jpg": __vite_glob_0_2, "/src/assets/images/hackathons/ibm/1.jpg": __vite_glob_0_3, "/src/assets/images/hackathons/ingenius/1.jpg": __vite_glob_0_4, "/src/assets/images/hackathons/ingenius/2.jpg": __vite_glob_0_5, "/src/assets/images/hackathons/isro/1.jpg": __vite_glob_0_6, "/src/assets/images/hackathons/nasa/1.jpg": __vite_glob_0_7, "/src/assets/images/hackathons/nasa/2.jpg": __vite_glob_0_8 });
function Hackathons() {
  const [filter, setFilter] = reactExports.useState("all");
  const [openIdx, setOpenIdx] = reactExports.useState(null);
  const items = reactExports.useMemo(
    () => filter === "all" ? ENTRIES : ENTRIES.filter((e) => e.tier === filter),
    [filter]
  );
  const stats = reactExports.useMemo(() => {
    const total = ENTRIES.length;
    const w = ENTRIES.filter((e) => e.tier === "winner").length;
    const r = ENTRIES.filter((e) => e.tier === "runner").length;
    const f = ENTRIES.filter((e) => e.tier === "finalist").length;
    const p = ENTRIES.filter((e) => e.tier === "participant").length;
    return { total, w, r, f, p };
  }, []);
  const active = openIdx !== null ? items[openIdx] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hackathons", className: "relative py-28 px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "04 · Battle scars",
          title: "Hackathons & Achievements",
          subtitle: "From a first idea submission to winning NASA Space Apps and ranking 2nd across Gujarat in IBM's AI challenge."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono text-white/60 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-semibold", children: [
          stats.total,
          " Hackathons"
        ] }),
        " ·",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300", children: [
          stats.w,
          " Win"
        ] }),
        " ·",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-200", children: [
          stats.r,
          " Runner Up"
        ] }),
        " ·",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-300", children: [
          stats.f,
          " Finalist"
        ] }),
        " ·",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-300", children: [
          stats.p,
          " Participant"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-10", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilter(f.id),
          className: `px-4 py-2 rounded-full text-sm font-semibold transition-all border ${filter === f.id ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 border-transparent text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]" : "glass border-white/10 text-white/70 hover:text-white"}`,
          children: f.label
        },
        f.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch", children: items.map((e, i) => {
        const meta = TIER_META[e.tier];
        const Icon = meta.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TiltWrapper, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.5, delay: i % 4 * 0.06 },
            className: `card-inner-glow glass rounded-2xl p-7 border ${meta.cls} ${meta.tierClass} relative overflow-hidden flex flex-col h-full`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl glass-strong flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-7 h-7 ${meta.iconColor}` }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold border ${meta.badge}`, children: e.rank }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-bold text-white", children: e.event }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/50 font-mono mt-1", children: e.organizer })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-white/85", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "Project:" }),
                " ",
                e.project
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-white/65 text-sm", children: e.description }),
              e.team && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-white/45 font-mono", children: [
                "👥 ",
                e.team
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setOpenIdx(i),
                  className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass border border-white/15 text-white hover:border-indigo-400/60 transition",
                  children: [
                    "View Details ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                  ]
                }
              ) })
            ]
          }
        ) }, e.event + e.project);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open: !!active, onClose: () => setOpenIdx(null), children: active && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${TIER_META[active.tier].iconColor.replace("text-", "from-").replace("400", "500/20").replace("500", "500/20")} blur-[100px] pointer-events-none` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: (() => {
        const images = Object.keys(hackathonImages).filter((path) => path.includes(`/${active.id}/`)).map((path) => hackathonImages[path]);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ImageCarousel, { images });
      })() }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 opacity-20 bg-gradient-to-br ${TIER_META[active.tier].iconColor.replace("text-", "from-")} to-fuchsia-500` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full ${TIER_META[active.tier].badge.replace("bg-", "bg-opacity-20 bg-").replace("text-", "text-opacity-90 text-")} shadow-[0_0_15px_currentColor] backdrop-blur-md border border-current`, children: active.rank }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md border border-white/30", children: active.organizer })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-display text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${TIER_META[active.tier].iconColor.replace("text-", "from-")} to-white mb-3 drop-shadow-sm`, children: active.event }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl font-serif italic text-white/90 drop-shadow-md", children: active.project })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap justify-center gap-4 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-center flex-1 max-w-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-[0.2em] font-mono text-white/50 mb-2", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans font-semibold text-white/90", children: active.description })
          ] }),
          active.team && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-center flex-1 max-w-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] uppercase tracking-[0.2em] font-mono text-white/50 mb-2", children: "Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-fuchsia-300", children: active.team.replace("Hell Boys · ", "") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-6 md:pl-8 py-2 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${TIER_META[active.tier].iconColor.replace("text-", "from-")} to-transparent` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 text-left", children: active.details.split(new RegExp("(?<=\\.)\\s+(?=[A-Z])")).map((paragraph, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `leading-relaxed tracking-wide ${idx === 0 ? "text-xl text-white font-medium drop-shadow-sm" : "text-lg text-white/70 font-light"}`,
              children: paragraph
            },
            idx
          )) })
        ] })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_0 = "/assets/1-BU_V8Ocm.jpg";
const CERTS = [
  {
    id: "google-diamond",
    icon: Gem,
    title: "Google Cloud Career Launchpad — Generative AI Track",
    badge: "Diamond League Contestant 💎",
    issuer: "Google Cloud & Google Cloud Skills Boost",
    details: "Selected as a Diamond League contestant. Hands-on experience with Vertex AI, Gemini, Prompt Engineering and Responsible AI through real-world labs and projects.",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: "google-ptp",
    icon: GraduationCap,
    title: "Google Prompt to Prototype Program",
    badge: "Completed ✅",
    issuer: "Scaler · Google",
    details: "Training focused on rapid AI product prototyping using modern generative AI workflows. Practical hands-on program for building AI-powered products quickly.",
    color: "from-fuchsia-400 to-purple-500"
  }
];
const certImages = /* @__PURE__ */ Object.assign({ "/src/assets/images/certifications/google-diamond/1.jpg": __vite_glob_0_0 });
function Certifications() {
  const [openIdx, setOpenIdx] = reactExports.useState(null);
  const active = openIdx !== null ? CERTS[openIdx] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "certifications", className: "relative py-28 px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "05 · Programs",
          title: "Certifications & Programs"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: CERTS.map((c, i) => {
        const Icon = c.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TiltWrapper, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-50px" },
            transition: { duration: 0.5, delay: i * 0.1 },
            className: "glass rounded-2xl p-7 relative overflow-hidden hover:border-indigo-400/40 transition-colors h-full flex flex-col cursor-pointer",
            onClick: () => setOpenIdx(i),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${c.color} opacity-15 blur-3xl` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} shadow-lg shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-white/90", children: c.badge })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-white leading-tight", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-widest text-white/50 font-mono", children: c.issuer }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-6 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass border border-white/15 text-white hover:border-indigo-400/60 transition", children: [
                "View Certificate ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
              ] }) })
            ]
          }
        ) }, c.title);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open: !!active, onClose: () => setOpenIdx(null), children: active && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${active.color} opacity-20 blur-[100px] pointer-events-none` }),
      (() => {
        const images = Object.keys(certImages).filter((path) => path.includes(`/${active.id}/`)).map((path) => certImages[path]);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageCarousel, { images }) });
      })(),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 opacity-20 bg-gradient-to-br ${active.color}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-fuchsia-500/20 text-fuchsia-200 shadow-[0_0_15px_rgba(217,70,239,0.4)] backdrop-blur-md border border-fuchsia-500/50", children: active.badge.replace(/[^a-zA-Z0-9 ]/g, "") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md border border-white/30", children: "Professional Certification" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-display text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${active.color} mb-3 drop-shadow-sm`, children: active.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl font-serif italic text-white/90 drop-shadow-md", children: active.issuer })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-6 md:pl-8 py-2 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${active.color}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 text-left", children: active.details.split(new RegExp("(?<=\\.)\\s+(?=[A-Z])")).map((paragraph, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `leading-relaxed tracking-wide ${idx === 0 ? "text-xl text-white font-medium drop-shadow-sm" : "text-lg text-white/70 font-light"}`,
              children: paragraph
            },
            idx
          )) })
        ] })
      ] })
    ] }) })
  ] });
}
const ITEMS = [
  {
    icon: UsersRound,
    title: "Core Team Member · Neuralize",
    org: "AI/ML Club, MSU Baroda",
    body: "Active core team member of MSU's official AI/ML club. Contributing to organizing workshops, hackathons and AI/ML learning initiatives for students across the university."
  },
  {
    icon: CodeXml,
    title: "Web Team Member · Code Vimarsh",
    org: "Technical Club",
    body: "Contributing to development and management of club web projects and technical initiatives. Handling frontend development and web infrastructure for club activities."
  },
  {
    icon: Sparkles,
    title: "AI/ML Community Engagement",
    org: "MSU Baroda & beyond",
    body: "Actively organizing AI/ML discussions, workshops and hackathon collaborations within university communities. Mentoring peers and fostering an innovation culture."
  }
];
function Leadership() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "leadership", className: "relative py-28 px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "06 · Community", title: "Leadership & Community" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: ITEMS.map((it, i) => {
      const Icon = it.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "glass rounded-2xl p-7 hover:border-indigo-400/40 transition-colors group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-bold text-white", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-widest text-white/50 font-mono", children: it.org }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/70 leading-relaxed text-sm", children: it.body })
          ]
        },
        it.title
      );
    }) })
  ] }) });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const schema$1 = objectType({
  name: stringType().trim().min(1).max(120),
  email: stringType().trim().email().max(255),
  subject: stringType().trim().min(1).max(200),
  message: stringType().trim().min(20).max(5e3)
});
const submitContact = createServerFn({
  method: "POST"
}).validator((d) => schema$1.parse(d)).handler(createSsrRpc("1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd"));
const schema = objectType({
  name: stringType().trim().min(1, "Name is required").max(120),
  email: stringType().trim().email("Enter a valid email").max(255),
  subject: stringType().trim().min(1, "Subject is required").max(200),
  message: stringType().trim().min(20, "Message must be at least 20 characters").max(5e3)
});
const INFO = [
  { icon: Mail, label: "Email", value: "neelprajapati2601@gmail.com", href: "mailto:neelprajapati2601@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/neel-prajapati-ai", href: "https://linkedin.com/in/neel-prajapati-ai" },
  { icon: Github, label: "GitHub", value: "github.com/Neel-2606", href: "https://github.com/Neel-2606" },
  { icon: MapPin, label: "Location", value: "Vadodara, Gujarat, India" },
  { icon: Globe, label: "Portfolio", value: "neelprajapatiportfolio.work", href: "https://neelprajapatiportfolio.work" }
];
function Contact() {
  const send = useServerFn(submitContact);
  const [form, setForm] = reactExports.useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const onChange = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };
  const submit = async (e) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe = {};
      parsed.error.issues.forEach((i) => {
        fe[i.path[0]] = i.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await send({ data: parsed.data });
      setDone(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a855f7", "#6366f1", "#f472b6"]
      });
      toast.success("Message sent! I'll get back to you soon 🚀");
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send your message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-28 px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "07 · Let's connect",
        title: "Let's Build Something Together",
        subtitle: "Whether it's a collaboration, project idea, opportunity, or just a conversation about AI — I'd love to hear from you."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.3fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: INFO.map((c, i) => {
        const Icon = c.icon;
        const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.06 },
            className: "glass rounded-xl p-5 flex items-center gap-4 hover:border-indigo-400/40 hover:bg-white/5 transition-all group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-indigo-200" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/50 font-mono", children: c.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 truncate", children: c.value })
              ] })
            ]
          }
        );
        return c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer noopener", children: inner }, c.label) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: inner }, c.label);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          onSubmit: submit,
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6 },
          className: "glass-strong rounded-2xl p-7 md:p-9 relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-72 h-72 rounded-full bg-fuchsia-500/15 blur-3xl" }),
            done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { scale: 0.95, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                className: "text-center py-12",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-16 h-16 text-emerald-400 mx-auto mb-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-white", children: "Message sent successfully!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/65", children: "I'll get back to you soon 🚀" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setDone(false),
                      className: "mt-6 btn-ghost-neon",
                      children: "Send another"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Field,
                  {
                    label: "Your name",
                    id: "name",
                    value: form.name,
                    onChange: onChange("name"),
                    error: errors.name,
                    placeholder: "Neel Prajapati"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Field,
                  {
                    label: "Your email",
                    id: "email",
                    type: "email",
                    value: form.email,
                    onChange: onChange("email"),
                    error: errors.email,
                    placeholder: "you@example.com"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field,
                {
                  label: "Subject",
                  id: "subject",
                  value: form.subject,
                  onChange: onChange("subject"),
                  error: errors.subject,
                  placeholder: "Let's collaborate on…"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-xs uppercase tracking-widest text-white/55 font-mono mb-2", children: "Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "message",
                    rows: 6,
                    value: form.message,
                    onChange: onChange("message"),
                    placeholder: "Tell me about your idea, project or opportunity (min 20 characters)…",
                    className: "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400/60 focus:shadow-[0_0_24px_-6px_rgba(99,102,241,0.6)] transition-all resize-none"
                  }
                ),
                errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-400", children: errors.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: loading,
                  className: "btn-hero justify-center disabled:opacity-60 disabled:cursor-not-allowed",
                  children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                    " Sending…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    "Send Message ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
                  ] })
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
function Field({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, className: "block text-xs uppercase tracking-widest text-white/55 font-mono mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id,
        type,
        value,
        onChange,
        placeholder,
        className: "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400/60 focus:shadow-[0_0_24px_-6px_rgba(99,102,241,0.6)] transition-all"
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-red-400", children: error })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-12 border-t border-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/55 font-mono text-center md:text-left", children: [
        "Built by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient font-semibold", children: "Neel Prajapati" }),
        " · MSU Baroda · 2025"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://github.com/Neel-2606",
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "GitHub",
            className: "w-11 h-11 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:border-indigo-400/70 hover:scale-110 hover:shadow-[0_0_25px_rgba(99,102,241,0.55)] transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://linkedin.com/in/neel-prajapati-ai",
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "LinkedIn",
            className: "w-11 h-11 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:border-sky-400/70 hover:scale-110 hover:shadow-[0_0_25px_rgba(56,189,248,0.55)] transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:neelprajapati2601@gmail.com",
            "aria-label": "Email",
            className: "w-11 h-11 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:border-fuchsia-400/70 hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: {
        scaleX,
        transformOrigin: "0% 50%",
        background: "linear-gradient(90deg, #6366f1, #a855f7)"
      },
      className: "fixed top-0 left-0 right-0 h-[2px] z-[200] pointer-events-none"
    }
  );
}
function BackToTop() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      "aria-label": "Back to top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 16 },
      className: "fixed bottom-6 right-6 z-[150] w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white hover:border-fuchsia-400/60 hover:scale-110 transition-all",
      style: { boxShadow: "0 0 30px -8px rgba(168,85,247,0.6)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 18 })
    }
  ) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "dark relative z-10 min-h-screen bg-transparent text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hackathons, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Leadership, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, theme: "dark", position: "bottom-right" })
  ] });
}
export {
  Index as component
};
