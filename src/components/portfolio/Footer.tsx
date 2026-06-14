import { Github, Linkedin, Mail, Eye } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { getAndIncrementViews } from "@/lib/visitor.functions";

export default function Footer() {
  const fetchViews = useServerFn(getAndIncrementViews);
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetchViews({ data: undefined })
      .then((res: any) => {
        if (res?.count) setViews(res.count);
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="relative mt-12 border-t border-white/10">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-white/55 font-mono text-center md:text-left">
            Built by <span className="text-gradient font-semibold">Neel Prajapati</span> · MSU Baroda · 2025
          </p>
          {views !== null && views > 0 && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs font-mono text-white/50">
              <Eye size={13} className="text-indigo-400" />
              <span className="text-gradient font-semibold">{views.toLocaleString()}</span> visitors
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Neel-2606" target="_blank" rel="noreferrer"
             aria-label="GitHub"
             className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:border-indigo-400/70 hover:scale-110 hover:shadow-[0_0_25px_rgba(99,102,241,0.55)] transition-all">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/neel-prajapati-ai" target="_blank" rel="noreferrer"
             aria-label="LinkedIn"
             className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:border-sky-400/70 hover:scale-110 hover:shadow-[0_0_25px_rgba(56,189,248,0.55)] transition-all">
            <Linkedin size={18} />
          </a>
          <a href="mailto:neelprajapati2601@gmail.com"
             aria-label="Email"
             className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:border-fuchsia-400/70 hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-all">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
