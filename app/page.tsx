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
