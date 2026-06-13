import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Play, Pause } from "lucide-react";

const HERO_VIDEO_URL = "https://pqhnvajcqwgdoumsthdz.supabase.co/storage/v1/object/public/Portfolio-Assets/webvideo.mp4";

const ROLES = [
  "AI & ML Engineer",
  "Hackathon Champion",
  "Full Stack Builder",
  "Government-Funded Innovator",
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      } else {
        setDisplayText((prev) => 
          text.split("").map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join("")
        );
        iteration += 1 / 3;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
}

export default function Hero() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => { setPlaying(true); setHasStarted(true); };
    const onPause = () => setPlaying(false);
    const onEnded = () => { setPlaying(false); setHasStarted(false); };
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
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-unified relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* Mobile-only darkening overlay over the avatar */}
      <div className="hero-mobile-overlay pointer-events-none" aria-hidden />
      {/* Video — masked, no container chrome, blends into bg */}
      <div className="hero-media absolute inset-0 md:left-1/2 bg-transparent overflow-hidden pointer-events-none">
        {HERO_VIDEO_URL ? (
          <>
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%230a0a1a'/%3E%3C/svg%3E"
              className="hero-video w-full h-full object-cover bg-[#0a0a1a]"
            >
              <source src={HERO_VIDEO_URL + "#t=0.1"} type="video/mp4" />
            </video>
            {playing && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-5 right-5 z-20 inline-flex items-center gap-2 chip pointer-events-auto"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                NOW PLAYING
              </motion.div>
            )}
          </>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.04, 1], rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-[320px] h-[320px] md:w-[460px] md:h-[460px] rounded-full bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/30 to-amber-500/20 blur-2xl absolute inset-0" />
              <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full glass-strong border-2 border-white/10 flex items-center justify-center overflow-hidden">
                <Sparkles className="w-24 h-24 text-white/40" />
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Left content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 min-h-[100svh] flex items-center pt-24 pb-16">
        <div className="md:w-1/2 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 chip mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities · Vadodara, India
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base text-white/60 font-mono tracking-widest uppercase mb-3"
          >
            Hey, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-display font-bold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
          >
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
              Neel Prajapati
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 h-10 overflow-hidden"
          >
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-display text-white/90"
            >
              <span className="text-white/40">›</span>{" "}
              <span className="text-gradient font-semibold">
                <ScrambleText text={ROLES[i]} />
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-xl"
          >
            CSE student at MSU Baroda · Building AI that creates real-world impact ·
            Winner of NASA Space Apps · Rs. 2.43L SSIP Funded
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="hero-cta-row mt-9 flex flex-wrap gap-3"
          >
            <button onClick={() => go("projects")} className="btn-hero">
              View My Work <ArrowRight size={18} />
            </button>
            <button onClick={() => go("contact")} className="btn-ghost-neon">
              <Mail size={18} /> Contact Me
            </button>
          </motion.div>

          {/* Video controls — small glass pill buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-4 flex items-center gap-3"
          >
            <button
              onClick={togglePlay}
              className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass border border-white/15 text-white hover:border-indigo-400/60 transition ${!playing ? "play-ring" : ""}`}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
              {playing ? "Pause" : (hasStarted ? "Resume" : "Play Intro")}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="hero-stats-row mt-10 flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-white/40"
          >
            <span>10+ Hackathons</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>3 Major Awards</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>CGPA 8.2</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
