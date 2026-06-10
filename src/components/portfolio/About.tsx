import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-gradient">
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="01 · Who I am" title="About Me" />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-7 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <p className="text-white/80 text-base md:text-lg leading-relaxed relative">
              I'm <span className="text-white font-semibold">Neel Prajapati</span>, a
              second-year Computer Science & Engineering student at{" "}
              <span className="text-gradient font-semibold">
                The Maharaja Sayajirao University of Baroda
              </span>
              , Vadodara, with a CGPA of 8.2. I'm deeply passionate about Artificial
              Intelligence, Machine Learning, and building technology that solves real
              problems for real people.
              <br />
              <br />
              My journey has taken me from writing my first lines of code to winning the{" "}
              <span className="text-white font-semibold">NASA Space Apps Challenge</span>,
              receiving <span className="text-amber-300 font-semibold">Rs. 2.43 Lakh</span>{" "}
              in government research funding for AgriForge — an AI platform for Indian
              farmers — and competing in national-level hackathons across India.
              <br />
              <br />
              I believe in building in public, learning fast, and creating technology that
              makes a meaningful difference. Whether it's predicting urban risks with
              Random Forest models, detecting crop diseases with EfficientNet, or building
              smart city governance systems with local LLMs — every project I work on is
              driven by a single question:{" "}
              <span className="italic text-white">does this create real impact?</span>
              <br />
              <br />
              I'm a core member of <span className="text-white font-semibold">Neuralize</span>,
              MSU's AI/ML club, a Web Team Member at{" "}
              <span className="text-white font-semibold">Code Vimarsh</span>, and an
              active participant in India's growing AI innovation ecosystem.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {[
              { n: 10, s: "+", label: "Hackathons Participated" },
              { n: 3, s: "", label: "Major Awards Won" },
              { n: 82, s: " / 10", label: "CGPA · CSE @ MSU Baroda" },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-indigo-400/40 transition-colors group"
              >
                {m.label.includes("CGPA") ? (
                  <span className="font-display text-5xl md:text-6xl font-bold text-gradient">
                    8.2<span className="text-xl text-white/40">/10</span>
                  </span>
                ) : (
                  <Counter end={m.n} suffix={m.s} />
                )}
                <p className="mt-2 text-sm text-white/60 uppercase tracking-widest font-mono">
                  {m.label.replace(" · CSE @ MSU Baroda", "")}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
