"use client";

import { useState, useEffect } from "react";

const TerminalPrompt = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center mb-4">
    <span className="terminal-prompt">root@portfolio:~$</span>
    <span className="ml-2">{children}</span>
  </div>
);

const FileItem = ({
  permissions,
  size,
  date,
  name,
  type = "file",
  href,
  hideSizeOnMobile = false,
}: {
  permissions: string;
  size: string;
  date: string;
  name: string;
  type?: "file" | "directory" | "executable";
  href?: string;
  hideSizeOnMobile?: boolean;
}) => {
  const content = (
    <div className="file-listing flex items-center py-1 hover:bg-gray-800/30 px-2 rounded transition-colors">
      <span className="file-perm">{permissions}</span>
      <span
        className={`file-size ${hideSizeOnMobile ? "hidden sm:inline" : ""}`}
      >
        {size}
      </span>
      <span className="file-date">{date}</span>
      <span className={`file-name ${type}`}>{name}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      },
      currentIndex === 0 ? delay : 50
    );

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default function Home() {
  const [currentCommand, setCurrentCommand] = useState("");

  const commands = [
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

  return (
    <main className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-4 sm:p-6 max-w-6xl mx-auto">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-[var(--terminal-bg)] border-b border-gray-700 pb-6 mb-8 sm:mb-10 z-10">
        <TerminalPrompt>
          <TypewriterText text="./portfolio -I" delay={200} />
        </TerminalPrompt>
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
          {commands.map((command, index) => (
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

      {/* Hero Section */}
      <section
        id="about"
        className="mb-10 sm:mb-12 p-6 rounded-lg bg-gray-900/30 border border-gray-800/50"
      >
        <div className="terminal-prompt-wrapper">
          <TerminalPrompt>whoami</TerminalPrompt>
        </div>
        <div className="command-output">
          <div className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            <TypewriterText text="gautham dinesh" delay={1000} />
          </div>
          <div className="text-sm sm:text-base text-[var(--terminal-accent)] mb-4">
            Coding, Lifting, Living
          </div>
        </div>

        <div className="mt-6">
          <div className="terminal-prompt-wrapper">
            <TerminalPrompt>cat /etc/location</TerminalPrompt>
          </div>
          <div className="command-output">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm leading-tight">
              <span className="text-[var(--terminal-success)]">🇮🇳 Kerala</span>
              <span className="text-[var(--terminal-success)]">
                🇦🇪 Abu Dhabi
              </span>
              <span className="text-[var(--terminal-success)] whitespace-nowrap">
                🇬🇭 Accra
              </span>
              <span className="text-[var(--terminal-success)] whitespace-nowrap">
                🇺🇸 New York
              </span>
              <span className="text-white whitespace-nowrap">
                🇬🇧 London{" "}
                <span className="text-yellow-400 font-bold">[current]</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="mb-8 sm:mb-10 p-6 rounded-lg bg-gray-800/20 border border-gray-700/50"
      >
        <div className="terminal-prompt-wrapper">
          <TerminalPrompt>ls -la work/</TerminalPrompt>
        </div>
        <div className="command-output">
          <div className="space-y-1">
            <FileItem
              permissions="drwxr-xr-x"
              size="4.2KB"
              date="Jul 2023 - Present"
              name="goldman-sachs/swe"
              type="directory"
            />

            <FileItem
              permissions="drwxr-xr-x"
              size="2.1KB"
              date="Jul 2022 - Aug 2022"
              name="goldman-sachs/intern/"
              type="directory"
            />

            <FileItem
              permissions="drwxr-xr-x"
              size="1.8KB"
              date="Feb 2022 - Jun 2022"
              name="keyper-real-estate/swe"
              type="directory"
            />

            <FileItem
              permissions="drwxr-xr-x"
              size="1.5KB"
              date="Jun 2021 - Aug 2021"
              name="imagine-science-films/intern"
              type="directory"
              href="https://www.labocine.com/habitat"
            />

            <FileItem
              permissions="drwxr-xr-x"
              size="1.2KB"
              date="Jul 2020 - Aug 2020"
              name="bamian-auto-parts/contract"
              type="directory"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="mb-8 sm:mb-10 p-6 rounded-lg bg-gray-900/40 border border-gray-800/60"
      >
        <div className="terminal-prompt-wrapper">
          <TerminalPrompt>ls -ls projects/</TerminalPrompt>
        </div>
        <div className="command-output">
          <div className="space-y-1">
            <FileItem
              permissions="-rwxr-xr-x"
              size="4.2KB"
              date="2025"
              name="movies-in-order"
              type="executable"
              href="https://www.moviesinorder.site/"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="3.8KB"
              date="2023"
              name="multilingual-toia"
              type="executable"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="2.1KB"
              date="2021"
              name="jyun-interactive"
              type="executable"
              href="https://jyun-dev.vercel.app/"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="2.8KB"
              date="2020"
              name="aws-migration-pipeline"
              type="executable"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="1.9KB"
              date="2020"
              name="gym-booking-bot"
              type="executable"
              href="https://github.com/gauthamdk/GymBookingAutomation"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="1.4KB"
              date="2020"
              name="deadliner"
              type="executable"
              href="https://github.com/gauthamdk/Deadliner"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="1.7KB"
              date="2019"
              name="leadandlead"
              type="executable"
              href="https://github.com/gauthamdk/LeadAndLead"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="mb-8 sm:mb-10 p-6 rounded-lg bg-gray-800/30 border border-gray-700/60"
      >
        <div className="terminal-prompt-wrapper">
          <TerminalPrompt>npm list --depth=0</TerminalPrompt>
        </div>
        <div className="command-output">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <div className="text-[var(--terminal-accent)] mb-1.5 text-sm">
                Languages
              </div>
              <div className="space-y-1 text-xs leading-tight">
                <div>├── Java</div>
                <div>├── Python</div>
                <div>├── JavaScript/TypeScript</div>
                <div>├── C/C++</div>
                <div>└── SQL</div>
              </div>
            </div>

            <div>
              <div className="text-[var(--terminal-accent)] mb-1.5 text-sm">
                Frameworks & Libraries
              </div>
              <div className="space-y-1 text-xs leading-tight">
                <div>├── Spring Boot</div>
                <div>├── React/NextJS</div>
                <div>├── Node.js/Express</div>
                <div>├── Flask/Firebase</div>
                <div>├── TensorFlow/Scipy</div>
                <div>├── jQuery/p5js</div>
                <div>└── Tailwind CSS</div>
              </div>
            </div>

            <div>
              <div className="text-[var(--terminal-accent)] mb-1.5 text-sm">
                Tools & Platforms
              </div>
              <div className="space-y-1 text-xs leading-tight">
                <div>├── AWS (ECS/ECR/Fargate/RDS)</div>
                <div>├── Docker/Kubernetes</div>
                <div>├── ArgoCD/Terraform</div>
                <div>├── MongoDB/Git</div>
                <div>├── Selenium/Postman</div>
                <div>├── Linux/Numpy</div>
                <div>└── Matplotlib</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mb-8 sm:mb-10 p-6 rounded-lg bg-gray-900/50 border border-gray-800/70"
      >
        <div className="terminal-prompt-wrapper">
          <TerminalPrompt>contact --info</TerminalPrompt>
        </div>
        <div className="command-output">
          <div className="space-y-1">
            <FileItem
              permissions="-rw-r--r--"
              size="0.1KB"
              date="2025"
              name="email.txt"
              type="file"
              href="mailto:gautham.dkl@gmail.com"
            />
            <FileItem
              permissions="-rw-r--r--"
              size="0.2KB"
              date="2025"
              name="website.url"
              type="file"
              href="https://gautham.dk"
            />
            <FileItem
              permissions="-rw-r--r--"
              size="0.2KB"
              date="2025"
              name="linkedin.url"
              type="file"
              href="https://www.linkedin.com/in/gauthamdk/"
            />
            <FileItem
              permissions="-rw-r--r--"
              size="0.3KB"
              date="2025"
              name="github.url"
              type="file"
              href="https://github.com/gauthamdk"
            />
            <FileItem
              permissions="-rw-r--r--"
              size="0.1KB"
              date="2025"
              name="twitter.url"
              type="file"
              href="https://twitter.com/0xzorog"
            />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="terminal-prompt-wrapper">
            <TerminalPrompt>
              <span className="text-[var(--terminal-success)]">
                Build with me
              </span>
            </TerminalPrompt>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 pt-6 text-center text-sm text-[var(--terminal-muted)]">
        <div>© 2025 Gautham Dinesh. All rights reserved.</div>
        <div className="mt-2">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>
      </footer>
    </main>
  );
}
