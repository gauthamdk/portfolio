import { TerminalPrompt, TypewriterText } from "../ui";
import { IN, AE, GH, US, GB } from "country-flag-icons/react/3x2";

export const HeroSection = () => {
  return (
    <section
      id="about"
      className="mb-10 sm:mb-12 p-3 sm:p-6 rounded-lg bg-gray-900/30 border border-gray-800/50"
      aria-labelledby="main-heading"
    >
      <div id="main-content"></div>
      <div className="terminal-prompt-wrapper">
        <TerminalPrompt>whoami</TerminalPrompt>
      </div>
      <div className="command-output">
        <h1
          id="main-heading"
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-4"
        >
          <TypewriterText text="gautham dinesh" delay={1000} />
        </h1>
        <p
          className="text-sm sm:text-base text-[var(--terminal-accent)] mb-4"
          role="doc-subtitle"
        >
          Create. Lift. Innovate.
        </p>
      </div>

      <div className="mt-6">
        <div className="terminal-prompt-wrapper">
          <TerminalPrompt>cat /etc/location</TerminalPrompt>
        </div>
        <div className="command-output">
          <div
            className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm leading-tight"
            role="list"
            aria-label="Location history"
          >
            <span
              className="text-[var(--terminal-success)] flex items-center gap-1"
              role="listitem"
            >
              <IN className="w-4 h-3" title="India" />
              Kerala
            </span>
            <span
              className="text-[var(--terminal-success)] flex items-center gap-1"
              role="listitem"
            >
              <AE className="w-4 h-3" title="United Arab Emirates" />
              Abu Dhabi
            </span>
            <span
              className="text-[var(--terminal-success)] whitespace-nowrap flex items-center gap-1"
              role="listitem"
            >
              <GH className="w-4 h-3" title="Ghana" />
              Accra
            </span>
            <span
              className="text-[var(--terminal-success)] whitespace-nowrap flex items-center gap-1"
              role="listitem"
            >
              <US className="w-4 h-3" title="United States" />
              New York
            </span>
            <span
              className="text-white whitespace-nowrap flex items-center gap-1"
              role="listitem"
            >
              <GB className="w-4 h-3" title="United Kingdom" />
              London{" "}
              <span className="text-yellow-400 font-bold">
                [current location]
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
