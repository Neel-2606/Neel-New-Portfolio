import { motion } from "framer-motion";
import { Users2, Code2, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ITEMS = [
  {
    icon: Users2,
    title: "Core Team Member · Neuralize",
    org: "AI/ML Club, MSU Baroda",
    body:
      "Active core team member of MSU's official AI/ML club. Contributing to organizing workshops, hackathons and AI/ML learning initiatives for students across the university.",
  },
  {
    icon: Code2,
    title: "Web Team Member · Code Vimarsh",
    org: "Technical Club",
    body:
      "Contributing to development and management of club web projects and technical initiatives. Handling frontend development and web infrastructure for club activities.",
  },
  {
    icon: Sparkles,
    title: "AI/ML Community Engagement",
    org: "MSU Baroda & beyond",
    body:
      "Actively organizing AI/ML discussions, workshops and hackathon collaborations within university communities. Mentoring peers and fostering an innovation culture.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="06 · Community" title="Leadership & Community" />
        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-7 hover:border-indigo-400/40 transition-colors group"
              >
                <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {it.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/50 font-mono">
                  {it.org}
                </p>
                <p className="mt-4 text-white/70 leading-relaxed text-sm">{it.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
