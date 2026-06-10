import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function SSIPBanner() {
  return (
    <section className="relative py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-[2px] bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_60px_-20px_rgba(245,158,11,0.7)]"
        >
          <div className="rounded-3xl glass-strong px-7 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-600 shadow-[0_0_40px_rgba(245,158,11,0.6)] shrink-0">
              <Award className="w-8 h-8 text-amber-950" />
            </div>
            <div className="relative">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-amber-300/90 mb-2">
                🏛️ Government of Gujarat · SSIP Funded Startup
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">
                AgriForge · Rs. 2.43 Lakh Research Funding
              </h3>
              <p className="mt-3 text-white/75 leading-relaxed max-w-3xl">
                AgriForge was awarded Rs. 2.43 Lakh under the{" "}
                <span className="text-white font-semibold">
                  Student Startup and Innovation Policy (SSIP)
                </span>{" "}
                by the Government of Gujarat — recognizing its potential to transform
                agricultural support for Indian farmers through AI.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
