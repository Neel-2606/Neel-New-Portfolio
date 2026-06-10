import { motion } from "framer-motion";
import { Code2, Wrench, Brain, Library, Database, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const GROUPS = [
  {
    icon: Code2, title: "Languages", color: "from-indigo-500 to-blue-500",
    items: ["Java", "Python", "C / C++", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: Wrench, title: "Tools & Tech", color: "from-cyan-500 to-teal-500",
    items: ["Git", "GitHub", "Cloud AI Tools", "Vertex AI", "Supabase CLI"],
  },
  {
    icon: Brain, title: "AI / ML", color: "from-fuchsia-500 to-pink-500",
    items: ["Machine Learning", "Generative AI", "Data Analysis", "EfficientNet",
      "Random Forest", "TinyLlama", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    icon: Library, title: "Frameworks & Libraries", color: "from-purple-500 to-violet-500",
    items: ["React", "Next.js", "FastAPI", "Flask", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: Database, title: "Databases", color: "from-emerald-500 to-green-500",
    items: ["Supabase", "PostgreSQL"],
  },
  {
    icon: Users, title: "Soft Skills", color: "from-amber-500 to-orange-500",
    items: ["Leadership", "Collaboration", "Communication", "Project Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="02 · Toolbox"
          title="Skills & Technologies"
          subtitle="The stack I use to ship AI products — from research notebooks to production dashboards."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-400/40 transition-all"
              >
                <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${g.color} opacity-15 blur-2xl group-hover:opacity-30 transition-opacity`} />
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${g.color} shadow-lg mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-white">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
