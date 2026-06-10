import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  // Split "01 · Things..." → glow the number prefix
  const match = eyebrow?.match(/^(\d+)(.*)$/);
  return (
    <div className="flex flex-col items-start mb-12">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="chip mb-4"
        >
          {match ? (
            <>
              <span className="section-num">{match[1]}</span>
              <span>{match[2]}</span>
            </>
          ) : (
            eyebrow
          )}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
      <div className="shimmer-underline mt-3" />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-white/65 max-w-2xl text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
