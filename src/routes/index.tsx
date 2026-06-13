import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Suspense, lazy } from "react";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import BackToTop from "@/components/portfolio/BackToTop";

// Lazy load below-the-fold components
const About = lazy(() => import("@/components/portfolio/About"));
const Skills = lazy(() => import("@/components/portfolio/Skills"));
const Projects = lazy(() => import("@/components/portfolio/Projects"));
const Hackathons = lazy(() => import("@/components/portfolio/Hackathons"));
const Certifications = lazy(() => import("@/components/portfolio/Certifications"));
const Leadership = lazy(() => import("@/components/portfolio/Leadership"));
const Contact = lazy(() => import("@/components/portfolio/Contact"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neel Prajapati — AI/ML Engineer · Hackathon Builder · SSIP Innovator" },
      {
        name: "description",
        content:
          "Portfolio of Neel Prajapati — CSE student at MSU Baroda, NASA Space Apps winner, Rs. 2.43L SSIP-funded AI builder shipping real-world impact through AI & ML.",
      },
      { property: "og:title", content: "Neel Prajapati — AI/ML Engineer & Hackathon Builder" },
      { property: "og:description", content: "Building AI that creates real-world impact. Winner — NASA Space Apps. SSIP funded. From Vadodara, India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="dark relative z-10 min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Suspense fallback={<div className="h-20" />}>
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Certifications />
        <Leadership />
        <Contact />
        <Footer />
        <BackToTop />
      </Suspense>
      <Toaster richColors theme="dark" position="bottom-right" />
    </main>
  );
}
