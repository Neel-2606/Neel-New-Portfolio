import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Github, Linkedin, Loader2, Send, CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";
import confetti from "canvas-confetti";
import SectionHeader from "./SectionHeader";
import { submitContact } from "@/lib/contact.functions";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(20, "Message must be at least 20 characters").max(5000),
});

const INFO = [
  { icon: Mail, label: "Email", value: "neelprajapati2601@gmail.com", href: "mailto:neelprajapati2601@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/neel-prajapati-ai", href: "https://linkedin.com/in/neel-prajapati-ai" },
  { icon: Github, label: "GitHub", value: "github.com/Neel-2606", href: "https://github.com/Neel-2606" },
  { icon: MapPin, label: "Location", value: "Vadodara, Gujarat, India" },
  { icon: Globe, label: "Portfolio", value: "neelprajapatiportfolio.work", href: "https://neelprajapatiportfolio.work" },
];

export default function Contact() {
  const send = useServerFn(submitContact);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { fe[i.path[0] as string] = i.message; });
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

  return (
    <section id="contact" className="relative py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="07 · Let's connect"
          title="Let's Build Something Together"
          subtitle="Whether it's a collaboration, project idea, opportunity, or just a conversation about AI — I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
          <div className="space-y-4">
            {INFO.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass rounded-xl p-5 flex items-center gap-4 hover:border-indigo-400/40 hover:bg-white/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-indigo-200" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-white/50 font-mono">{c.label}</p>
                    <p className="text-white/90 truncate">{c.value}</p>
                  </div>
                </motion.div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer noopener">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-7 md:p-9 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-fuchsia-500/15 blur-3xl" />

            {done ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-white">
                  Message sent successfully!
                </h3>
                <p className="mt-2 text-white/65">
                  I'll get back to you soon 🚀
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  className="mt-6 btn-ghost-neon"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <div className="grid gap-5 relative">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Your name" id="name"
                    value={form.name} onChange={onChange("name")}
                    error={errors.name} placeholder="Neel Prajapati"
                  />
                  <Field
                    label="Your email" id="email" type="email"
                    value={form.email} onChange={onChange("email")}
                    error={errors.email} placeholder="you@example.com"
                  />
                </div>
                <Field
                  label="Subject" id="subject"
                  value={form.subject} onChange={onChange("subject")}
                  error={errors.subject} placeholder="Let's collaborate on…"
                />
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/55 font-mono mb-2">
                    Message
                  </label>
                  <textarea
                    id="message" rows={6}
                    value={form.message} onChange={onChange("message")}
                    placeholder="Tell me about your idea, project or opportunity (min 20 characters)…"
                    className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400/60 focus:shadow-[0_0_24px_-6px_rgba(99,102,241,0.6)] transition-all resize-none"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-hero justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, id, value, onChange, error, placeholder, type = "text",
}: {
  label: string; id: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-white/55 font-mono mb-2">
        {label}
      </label>
      <input
        id={id} type={type} value={value} onChange={onChange} placeholder={placeholder}
        className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400/60 focus:shadow-[0_0_24px_-6px_rgba(99,102,241,0.6)] transition-all"
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
