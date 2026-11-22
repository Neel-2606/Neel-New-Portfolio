import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import BackToTop from "@/components/portfolio/BackToTop";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Hackathons from "@/components/portfolio/Hackathons";
import Certifications from "@/components/portfolio/Certifications";
import Leadership from "@/components/portfolio/Leadership";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Neel Prajapati | AI/ML Engineer & Software Developer",
      },
      {
        name: "description",
        content:
          "Explore Neel Prajapati's AI/ML projects, computer vision research, software development, internships, and award-winning hackathon work.",
      },
      {
        property: "og:title",
        content: "Neel Prajapati | AI/ML Engineer & Software Developer",
      },
      {
        property: "og:description",
        content:
          "Explore AI projects, computer vision research, internships and hackathon achievements by Neel Prajapati.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://neelprajapati.wiki/",
      },
      {
        property: "og:image",
        content: "https://neelprajapati.wiki/og-image.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Neel Prajapati | AI/ML Engineer & Software Developer",
      },
      {
        name: "twitter:description",
        content:
          "AI/ML projects, computer vision research, software development and hackathon achievements.",
      },
      {
        name: "twitter:image",
        content: "https://neelprajapati.wiki/og-image.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://neelprajapati.wiki/",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        sizes: "48x48",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "48x48",
        href: "/favicon-48x48.png",
      },
      {
        rel: "icon",
        type: "image/avif",
        href: "/lion.avif",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
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
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Certifications />
      <Leadership />
      <Contact />
      <Footer />
      <BackToTop />
      <Toaster richColors theme="dark" position="bottom-right" />
    </main>
  );
}
