"use client";

import { TerminalPrompt, TypewriterText } from "../ui";

interface Command {
  cmd: string;
  section: string;
}

const commands: Command[] = [
  { cmd: "whoami", section: "about" },
  { cmd: "ls -la work/", section: "experience" },
  { cmd: "cat projects/", section: "projects" },
  { cmd: "npm list", section: "skills" },
  { cmd: "contact --info", section: "contact" },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 120; // Approximate header height including padding
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const Navigation = () => {
  return (
    <header className="sticky top-0 bg-[var(--terminal-bg)] border-b border-gray-700 pb-6 mb-8 sm:mb-10 z-10">
      <TerminalPrompt>
        <TypewriterText text="./portfolio" delay={200} />
      </TerminalPrompt>
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
        {commands.map((command) => (
          <button
            key={command.cmd}
            onClick={() => scrollToSection(command.section)}
            className="terminal-command text-xs sm:text-sm hover:bg-gray-800/30 px-2 py-1.5 rounded whitespace-nowrap"
          >
            {command.cmd}
          </button>
        ))}
      </div>
    </header>
  );
};
