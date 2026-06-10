import { useState } from "react";
import { motion } from "framer-motion";
import { Gem, GraduationCap, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Modal from "./Modal";
import TiltWrapper from "./TiltWrapper";
import ImageCarousel from "./ImageCarousel";

const CERTS = [
  {
    id: "google-diamond",
    icon: Gem,
    title: "Google Cloud Career Launchpad — Generative AI Track",
    badge: "Diamond League Contestant 💎",
    issuer: "Google Cloud & Google Cloud Skills Boost",
    details:
      "Selected as a Diamond League contestant. Hands-on experience with Vertex AI, Gemini, Prompt Engineering and Responsible AI through real-world labs and projects.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: "google-ptp",
    icon: GraduationCap,
    title: "Google Prompt to Prototype Program",
    badge: "Completed ✅",
    issuer: "Scaler · Google",
    details:
      "Training focused on rapid AI product prototyping using modern generative AI workflows. Practical hands-on program for building AI-powered products quickly.",
    color: "from-fuchsia-400 to-purple-500",
  },
];

const certImages = import.meta.glob('@/assets/images/certifications/*/*.{png,jpg,jpeg,webp,gif}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

export default function Certifications() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? CERTS[openIdx] : null;

  return (
    <section id="certifications" className="relative py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="05 · Programs"
          title="Certifications & Programs"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {CERTS.map((c, i) => {
            const Icon = c.icon;
            return (
              <TiltWrapper key={c.title} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-7 relative overflow-hidden hover:border-indigo-400/40 transition-colors h-full flex flex-col cursor-pointer"
                  onClick={() => setOpenIdx(i)}
                >
                  <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${c.color} opacity-15 blur-3xl`} />
                  
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} shadow-lg shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-white/90">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/50 font-mono">
                    {c.issuer}
                  </p>
                  
                  <div className="mt-auto pt-6 flex justify-end">
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass border border-white/15 text-white hover:border-indigo-400/60 transition">
                      View Certificate <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </TiltWrapper>
            );
          })}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setOpenIdx(null)}>
        {active && (
          <div className="text-white relative">
            {/* Ambient glow inside modal */}
            <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${active.color} opacity-20 blur-[100px] pointer-events-none`} />

            {(() => {
              const images = Object.keys(certImages)
                .filter(path => path.includes(`/${active.id}/`))
                .map(path => certImages[path]);
              return <div className="relative z-10"><ImageCarousel images={images} /></div>;
            })()}

            <div className="relative z-10 mt-6 space-y-6">
              {/* Colorful Glass Header */}
              <div className="p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group">
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${active.color}`} />
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-fuchsia-500/20 text-fuchsia-200 shadow-[0_0_15px_rgba(217,70,239,0.4)] backdrop-blur-md border border-fuchsia-500/50">
                      {active.badge.replace(/[^a-zA-Z0-9 ]/g, '')}
                    </span>
                    <span className="px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md border border-white/30">
                      Professional Certification
                    </span>
                  </div>

                  <h3 className={`font-display text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${active.color} mb-3 drop-shadow-sm`}>
                    {active.title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl font-serif italic text-white/90 drop-shadow-md">
                    {active.issuer}
                  </p>
                </div>
              </div>

              {/* Sleek Modern Description */}
              <div className="relative pl-6 md:pl-8 py-2 mt-8">
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${active.color}`} />
                <div className="space-y-6 text-left">
                  {active.details.split(/(?<=\.)\s+(?=[A-Z])/).map((paragraph, idx) => (
                    <p 
                      key={idx} 
                      className={`leading-relaxed tracking-wide ${idx === 0 ? 'text-xl text-white font-medium drop-shadow-sm' : 'text-lg text-white/70 font-light'}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
