import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Modal from "./Modal";
import TiltWrapper from "./TiltWrapper";
import ImageCarousel from "./ImageCarousel";

type Project = {
  title: string;
  status: string;
  tagline: string;
  stack: string[];
  short: string;
  detail: string;
  color: "green" | "blue" | "purple" | "orange";
  badge?: string;
  category: string[];
  id: string;
};

const PROJECTS: Project[] = [
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
    detail:
      "AgriForge — KrishiMitra is my most impactful project to date. It is an AI-powered agricultural platform designed to provide round-the-clock intelligent support to Indian farmers in 10+ regional languages through both voice and text interfaces. The platform integrates EfficientNet for real-time crop disease detection from images taken by farmers on their phones. The multilingual voice AI feature ensures accessibility for rural users who may not be literate or comfortable with text-based interfaces. AgriForge was awarded Rs. 2.43 Lakh in research funding under the SSIP — Student Startup and Innovation Policy by the Government of Gujarat, validating its real-world potential and social impact. This project is currently in its pilot stage and actively being developed.",
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
    detail:
      "Urban Intel AI is a Smart City Governance Platform I built for the Ingenius Hackathon 7.0 at Ahmedabad University, where it won 1st Runner Up among 180+ teams. The system uses a Hybrid AI Architecture consisting of 6 specialized Random Forest models trained to predict critical urban risks including water scarcity, traffic congestion, and health hazards with high precision. What makes Urban Intel AI unique is the integration of a private local TinyLlama LLM that processes the risk outputs and generates real-time, actionable policy recommendations for city administrators — all while maintaining 100% data sovereignty without relying on any external APIs. This ensures both speed and privacy for sensitive government data.",
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
    detail:
      "Mumbai Pulse is an environmental intelligence platform built for the NASA Space Apps Challenge 2025, which my team won at the Vallabh Vidyanagar Local Event. The platform integrates NASA Earth Observation data including MODIS, Landsat, and SMAP datasets with real-time weather data from the Meteomatics API to monitor three critical environmental challenges across Mumbai: Urban Heat Islands — mapping temperature variations and identifying heat-stressed zones with cooling intervention suggestions; Water Resources — tracking lakes, reservoirs and rainfall while assessing water quality; and Air Quality — providing real-time AQI data, pollution source analytics and health advisories. All data is brought together in a unified interactive dashboard built with React/Next.js frontend, Flask API backend, and Leaflet + Esri/ArcGIS mapping layers.",
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
    detail:
      "TerraForge — Environmental Intelligence OS was built for DotSlash 9.0 at SVNIT Surat, a 30-hour national hackathon with 550+ competing teams, where it reached the Top 8 Finals. TerraForge is an AI-powered platform designed to help both governments and farmers make proactive, data-driven decisions using real-time environmental intelligence. Key features include AI models running locally for low cost, privacy preservation and offline capability in rural areas; prediction of environmental risks and agricultural impact using live data streams; multilingual voice assistance for rural users in regional Indian languages; and data-driven policy recommendation generation for government bodies.",
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
    detail:
      "Built for Hackovate 2025 at LJ University, this platform reached the Top 40 Finals among 240+ teams. The system features two specialized AI models: a Linear Regression model for milk yield prediction with 90% accuracy, and a Classification model for disease detection across 15+ conditions with 85% accuracy. Key platform features include real-time health monitoring and scoring, visual insight dashboards, automated PDF farm reports, multi-language support in English, Hindi, Gujarati and Marathi, batch processing capability for large herds, and a mobile-first design. My role: AI/ML Engineer responsible for model training and optimization.",
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
    detail:
      "Built for HackOut 2025 at DAIICT Gandhinagar — a hackathon with 4000+ registrations where only 250-300 teams were shortlisted for the offline round. The theme was Blue Carbon and Green Hydrogen. The Coastal Threat Alert System features role-based sign-in with 5 specialized dashboards for Disaster Management teams, City Governments, NGOs, Fisherfolk communities, and Civil Defence Teams. The platform provides real-time detection of sea-level rise, cyclones, algal blooms and illegal dumping activities, raising awareness on Blue Carbon ecosystems and disseminating real-time alerts to protect mangroves, wetlands and seagrass while ensuring community resilience.",
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
    detail:
      "MindForge is my personal passion project — a universal AI development engine that lets anyone generate websites, mobile apps, games, AI tools, automation bots and more from simple natural language prompts. The vision is to make development radically faster, more accessible and smarter using generative AI. Currently integrated with Mistral API for fast code generation, Hugging Face models for logic-based tools, and Gemini API for context-aware creative prompt understanding. Outputs include clean responsive code, beautiful UI previews and exportable/downloadable project structures. Upcoming features: real-time live preview rendering, project history and saving, one-click deployment with shareable links, and team collaboration features.",
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
    detail:
      "Eunoia Homoeopathy is a real client project where I designed and deployed a fully live website for a homoeopathy clinic. This project gave me hands-on experience working with actual client requirements, making UI/UX decisions based on client feedback, handling domain setup and DNS configuration, and managing web hosting and deployment end-to-end. Beyond just writing code, this project taught me the full lifecycle of delivering a professional web product to a real paying client.",
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
    detail:
      "Agent Arena is an AI-powered Competitive Intelligence Agent built at HackBaroda 2026 under Devnovate. The platform monitors competitor activity across GitHub Releases, Reddit, Hacker News and product announcements, tracking community sentiment and generating strategic insights continuously. The core architectural innovation was moving beyond traditional RAG — where vector search would sometimes surface 2023 release notes when asked about recent activity, and similar announcements from different competitors would get mixed due to shared terminology. Instead, we redesigned the system around persistent agent memory using Vectorize AI, where every significant event is stored with timestamps, source attribution, threat scores, historical context and competitor-specific namespaces. The agent doesn't just retrieve information — it remembers it, identifies patterns over time, detects emerging threats and surfaces opportunities that standard retrieval systems miss entirely.",
  },
];

const BORDER_COLOR: Record<Project["color"], string> = {
  green: "#10b981",
  blue: "#6366f1",
  purple: "#a855f7",
  orange: "#f59e0b",
};

const FILTERS = ["All", "AI/ML", "Web", "Hackathon"];

// Auto-discover images
const projectImages = import.meta.glob('@/assets/images/projects/*/*.{png,jpg,jpeg,webp,gif}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All" || p.category.includes(filter)
  );

  // find real index for modal
  const active = openIdx !== null ? PROJECTS[openIdx] : null;

  return (
    <section id="projects" className="relative py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="03 · Things I've shipped"
          title="Projects I've Built"
          subtitle="Each one driven by a single question — does this create real impact?"
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                filter === f
                  ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 border-transparent text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  : "glass border-white/10 text-white/70 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((p, i) => (
            <TiltWrapper key={p.title} className="h-full">
              <motion.article
                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.15, ease: "easeOut" }}
                className="card-inner-glow relative glass rounded-2xl p-7 overflow-hidden flex flex-col h-full"
                style={{
                  borderLeft: `4px solid ${BORDER_COLOR[p.color]}`,
                  boxShadow: `0 0 30px -18px ${BORDER_COLOR[p.color]}`,
                }}
              >
              <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                <span className="chip">{p.status}</span>
                {p.badge && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-400/40 text-amber-200">
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 italic">{p.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 6).map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>

              <p className="mt-5 text-white/75 leading-relaxed">{p.short}</p>

              <div className="mt-auto pt-6">
                <button
                  onClick={() => setOpenIdx(PROJECTS.findIndex(proj => proj.title === p.title))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass border border-white/15 text-white hover:border-indigo-400/60 transition"
                >
                  View More <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
            </TiltWrapper>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setOpenIdx(null)}>
        {active && (
          <div className="text-white relative">
            {/* Background ambient glow inside modal */}
            <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${active.color === 'green' ? 'from-emerald-500/20' : active.color === 'blue' ? 'from-blue-500/20' : active.color === 'purple' ? 'from-purple-500/20' : 'from-orange-500/20'} blur-[100px] pointer-events-none`} />

            {/* Auto-discovered images carousel */}
            <div className="relative z-10">
              {(() => {
                const images = Object.keys(projectImages)
                  .filter(path => path.includes(`/${active.id}/`))
                  .map(path => projectImages[path]);
                return <ImageCarousel images={images} />;
              })()}
            </div>

            <div className="relative z-10 mt-6 space-y-6">
              
              {/* Colorful Glass Header */}
              <div className="p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group">
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${active.color === 'green' ? 'from-emerald-500 to-teal-500' : active.color === 'blue' ? 'from-blue-500 to-indigo-500' : active.color === 'purple' ? 'from-purple-500 to-fuchsia-500' : 'from-orange-500 to-amber-500'}`} />
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md border border-white/30">
                      {active.status}
                    </span>
                    {active.badge && (
                      <span className="px-4 py-1.5 text-xs uppercase tracking-widest font-black rounded-full bg-amber-500/30 text-amber-100 shadow-[0_0_15px_rgba(245,158,11,0.5)] backdrop-blur-md border border-amber-500/50">
                        {active.badge}
                      </span>
                    )}
                  </div>

                  <h3 className={`font-display text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${active.color === 'green' ? 'from-emerald-300 to-teal-200' : active.color === 'blue' ? 'from-blue-300 to-indigo-200' : active.color === 'purple' ? 'from-purple-300 to-fuchsia-200' : 'from-orange-300 to-amber-200'} mb-3 drop-shadow-sm`}>
                    {active.title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl font-serif italic text-white/90 drop-shadow-md">
                    {active.tagline}
                  </p>
                </div>
              </div>

              {/* Colorful Transparent Tech Stack */}
              <div className="flex flex-wrap gap-3 justify-center py-4">
                {active.stack.map((s) => (
                  <span
                    key={s}
                    className="px-5 py-2.5 rounded-2xl font-mono text-sm font-bold tracking-wide backdrop-blur-md transition-transform hover:scale-110"
                    style={{
                      backgroundColor: `${BORDER_COLOR[active.color]}33`,
                      border: `1px solid ${BORDER_COLOR[active.color]}88`,
                      color: "#fff",
                      boxShadow: `0 0 20px ${BORDER_COLOR[active.color]}40`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Sleek Modern Description */}
              <div className="relative pl-6 md:pl-8 py-2 mt-8">
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${active.color === 'green' ? 'from-emerald-400' : active.color === 'blue' ? 'from-blue-400' : active.color === 'purple' ? 'from-purple-400' : 'from-orange-400'} to-transparent`} />
                <div className="space-y-6 text-left">
                  {active.detail.split(/(?<=\.)\s+(?=[A-Z])/).map((paragraph, idx) => (
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
