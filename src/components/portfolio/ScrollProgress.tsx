import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0% 50%",
        background: "linear-gradient(90deg, #6366f1, #a855f7)",
      }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[200] pointer-events-none"
    />
  );
}
