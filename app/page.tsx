import {
  Navigation,
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "./components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-2 sm:p-6 max-w-6xl mx-auto">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
