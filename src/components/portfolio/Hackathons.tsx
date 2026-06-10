import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Medal, Flame, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Modal from "./Modal";
import TiltWrapper from "./TiltWrapper";
import ImageCarousel from "./ImageCarousel";

type Tier = "winner" | "runner" | "finalist" | "participant";

type Entry = {
  tier: Tier;
  rank: string;
  event: string;
  organizer: string;
  project: string;
  description: string;
  team?: string;
  details: string;
  id: string;
};

const ENTRIES: Entry[] = [
  {
    tier: "winner",
    rank: "Winner",
    event: "NASA Space Apps Challenge 2025",
    organizer: "Local Event · Vallabh Vidyanagar",
    project: "CityForge — Mumbai Pulse",
    description:
      "AI system analyzing NASA datasets to monitor air quality, heat islands and environmental risks across Mumbai.",
    team: "Hell Boys · Aryan Buha, Sumit Patel, Krushit Prajapati, Patel Vrund",
    id: "nasa",
    details:
      "Our very first hackathon victory — a milestone moment. We built an environmental intelligence dashboard for Mumbai using NASA Earth Observation data (MODIS, Landsat, SMAP) combined with Meteomatics API for real-time weather feeds, fused into a single interactive React/Next.js + Flask + Leaflet dashboard targeting urban planners, governments and citizens.",
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
    details:
      "Ranked 2nd among 180+ teams. The system fused 6 specialized Random Forest models (water scarcity, traffic, health hazards) with a private local TinyLlama LLM that generates real-time, actionable policy recommendations for city administrators — 100% data-sovereign, no external APIs.",
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
    details:
      "Secured 2nd position across Gujarat among shortlisted teams. Presented an AI solution focused on strengthening India's agricultural ecosystem through scalable, farmer-first technology.",
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
    details:
      "Reached Top 8 Finals among 550+ teams nationwide with local AI models for offline rural deployment, multilingual voice assistance, and data-driven policy recommendation generation.",
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
    details:
      "Role: AI/ML Engineer. Built Linear Regression for milk yield (90% accuracy) and Classification model for 15+ cattle diseases (85% accuracy) — Next.js 14 + FastAPI + Supabase stack with multilingual support across English, Hindi, Gujarati and Marathi.",
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
    details:
      "Moved beyond RAG to persistent agent memory architecture using Vectorize AI and Groq LLMs. The agent stores every significant event with timestamps, source attribution, threat scores and competitor-specific namespaces — surfacing patterns and threats that standard retrieval misses entirely.",
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
    details:
      "5 specialized dashboards (Disaster Mgmt, City Govt, NGOs, Fisherfolk, Civil Defence) detecting sea-level rise, cyclones, algal blooms and illegal dumping. Aims to save lives, support sustainable fisheries and arm governments with data-driven climate insights.",
  },
  {
    tier: "participant",
    rank: "Participant",
    event: "ISRO Bharatiya Antariksh Hackathon 2025",
    organizer: "ISRO · Hack2skill",
    project: "Idea Submission",
    description: "National-level ISRO initiative.",
    id: "isro",
    details:
      "Received Certificate of Acknowledgement for idea submission under the national ISRO Bharatiya Antariksh Hackathon 2025 organized by Hack2skill.",
  },
  {
    tier: "participant",
    rank: "Participant",
    event: "AI for Impact · Social Initiative",
    organizer: "First-ever hackathon",
    project: "Idea Submission",
    description: "Foundational experience that started the journey.",
    id: "ai-for-impact",
    details:
      "First-ever hackathon participation. Certificate of Achievement received for idea submission. The foundational experience that started the entire journey.",
  },
];

const TIER_META: Record<Tier, {
  label: string;
  icon: typeof Trophy;
  cls: string;
  badge: string;
  iconColor: string;
  tierClass: string;
}> = {
  winner: {
    label: "Winner",
    icon: Trophy,
    cls: "border-amber-400/60",
    badge: "bg-amber-400 text-amber-950 border-amber-300",
    iconColor: "text-amber-300",
    tierClass: "tier-winner",
  },
  runner: {
    label: "Runner Up",
    icon: Medal,
    cls: "border-slate-300/50",
    badge: "bg-slate-200 text-slate-900 border-slate-100",
    iconColor: "text-slate-200",
    tierClass: "tier-runner",
  },
  finalist: {
    label: "Finalist",
    icon: Flame,
    cls: "border-orange-400/60",
    badge: "bg-orange-500 text-orange-50 border-orange-400",
    iconColor: "text-orange-300",
    tierClass: "tier-finalist",
  },
  participant: {
    label: "Participant",
    icon: Rocket,
    cls: "border-indigo-400/50",
    badge: "bg-indigo-500 text-indigo-50 border-indigo-400",
    iconColor: "text-indigo-300",
    tierClass: "tier-participant",
  },
};

const FILTERS: { id: Tier | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "winner", label: "🏆 Winner" },
  { id: "runner", label: "🥈 Runner Up" },
  { id: "finalist", label: "🔥 Finalist" },
  { id: "participant", label: "🚀 Participant" },
];

// Auto-discover hackathon images
const hackathonImages = import.meta.glob('@/assets/images/hackathons/*/*.{png,jpg,jpeg,webp,gif}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

export default function Hackathons() {
  const [filter, setFilter] = useState<Tier | "all">("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? ENTRIES : ENTRIES.filter((e) => e.tier === filter)),
    [filter]
  );

  const stats = useMemo(() => {
    const total = ENTRIES.length;
    const w = ENTRIES.filter((e) => e.tier === "winner").length;
    const r = ENTRIES.filter((e) => e.tier === "runner").length;
    const f = ENTRIES.filter((e) => e.tier === "finalist").length;
    const p = ENTRIES.filter((e) => e.tier === "participant").length;
    return { total, w, r, f, p };
  }, []);

  const active = openIdx !== null ? items[openIdx] : null;

  return (
    <section id="hackathons" className="relative py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="04 · Battle scars"
          title="Hackathons & Achievements"
          subtitle="From a first idea submission to winning NASA Space Apps and ranking 2nd across Gujarat in IBM's AI challenge."
        />

        <p className="text-sm font-mono text-white/60 mb-5">
          <span className="text-white font-semibold">{stats.total} Hackathons</span> ·{" "}
          <span className="text-amber-300">{stats.w} Win</span> ·{" "}
          <span className="text-slate-200">{stats.r} Runner Up</span> ·{" "}
          <span className="text-orange-300">{stats.f} Finalist</span> ·{" "}
          <span className="text-indigo-300">{stats.p} Participant</span>
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                filter === f.id
                  ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 border-transparent text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  : "glass border-white/10 text-white/70 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {items.map((e, i) => {
            const meta = TIER_META[e.tier];
            const Icon = meta.icon;
            return (
              <TiltWrapper key={e.event + e.project} className="h-full">
                <motion.article
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                  className={`card-inner-glow glass rounded-2xl p-7 border ${meta.cls} ${meta.tierClass} relative overflow-hidden flex flex-col h-full`}
                >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center shrink-0">
                    <Icon className={`w-7 h-7 ${meta.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold border ${meta.badge}`}>
                      {e.rank}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">
                      {e.event}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-white/50 font-mono mt-1">
                      {e.organizer}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-white/85">
                  <span className="text-white font-semibold">Project:</span> {e.project}
                </p>
                <p className="mt-1 text-white/65 text-sm">{e.description}</p>
                {e.team && (
                  <p className="mt-2 text-xs text-white/45 font-mono">👥 {e.team}</p>
                )}

                <div className="mt-auto pt-5">
                  <button
                    onClick={() => setOpenIdx(i)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass border border-white/15 text-white hover:border-indigo-400/60 transition"
                  >
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </motion.article>
              </TiltWrapper>
            );
          })}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setOpenIdx(null)}>
        {active && (
          <div className="text-white relative">
            {/* Ambient glow inside modal */}
            <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${TIER_META[active.tier].iconColor.replace('text-', 'from-').replace('400', '500/20').replace('500', '500/20')} blur-[100px] pointer-events-none`} />

            {/* Auto-discovered images carousel */}
            <div className="relative z-10">
              {(() => {
                const images = Object.keys(hackathonImages)
                  .filter(path => path.includes(`/${active.id}/`))
                  .map(path => hackathonImages[path]);
                return <ImageCarousel images={images} />;
              })()}
            </div>

            <div className="relative z-10 mt-6 space-y-6">
              {/* Colorful Glass Header */}
              <div className="p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group">
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${TIER_META[active.tier].iconColor.replace('text-', 'from-')} to-fuchsia-500`} />
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full ${TIER_META[active.tier].badge.replace('bg-', 'bg-opacity-20 bg-').replace('text-', 'text-opacity-90 text-')} shadow-[0_0_15px_currentColor] backdrop-blur-md border border-current`}>
                      {active.rank}
                    </span>
                    <span className="px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md border border-white/30">
                      {active.organizer}
                    </span>
                  </div>

                  <h3 className={`font-display text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${TIER_META[active.tier].iconColor.replace('text-', 'from-')} to-white mb-3 drop-shadow-sm`}>
                    {active.event}
                  </h3>
                  
                  <p className="text-xl md:text-2xl font-serif italic text-white/90 drop-shadow-md">
                    {active.project}
                  </p>
                </div>
              </div>

              {/* Colorful Transparent Status & Team */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 py-4">
                <div className="px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-center flex-1 max-w-sm">
                  <span className="block text-[10px] uppercase tracking-[0.2em] font-mono text-white/50 mb-2">Status</span>
                  <p className="font-sans font-semibold text-white/90">{active.description}</p>
                </div>

                {active.team && (
                  <div className="px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-center flex-1 max-w-sm">
                    <span className="block text-[10px] uppercase tracking-[0.2em] font-mono text-white/50 mb-2">Team</span>
                    <p className="font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-fuchsia-300">{active.team.replace('Hell Boys · ', '')}</p>
                  </div>
                )}
              </div>

              {/* Sleek Modern Description */}
              <div className="relative pl-6 md:pl-8 py-2 mt-8">
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${TIER_META[active.tier].iconColor.replace('text-', 'from-')} to-transparent`} />
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
