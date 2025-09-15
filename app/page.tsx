"use client";

import { useState, useEffect } from "react";

const TerminalPrompt = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center mb-4">
    <span className="terminal-prompt">gautham@portfolio:~$</span>
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
}: {
  permissions: string;
  size: string;
  date: string;
  name: string;
  type?: "file" | "directory" | "executable";
  href?: string;
}) => {
  const content = (
    <div className="file-listing flex items-center py-1 hover:bg-gray-800/30 px-2 rounded transition-colors">
      <span className="file-perm">{permissions}</span>
      <span className="file-size">{size}</span>
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-4 sm:p-6 max-w-6xl mx-auto">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-[var(--terminal-bg)] border-b border-gray-700 pb-6 mb-8 sm:mb-10 z-10">
        <TerminalPrompt>
          <TypewriterText text="./portfolio --interactive" delay={200} />
        </TerminalPrompt>
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
          {commands.map((command, index) => (
            <button
              key={command.cmd}
              onClick={() => scrollToSection(command.section)}
              className="terminal-command text-sm hover:bg-gray-800/30 px-3 py-2 rounded whitespace-nowrap">
            >
              {command.cmd}
            </button>
          ))}
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="mb-10 sm:mb-12">
        <TerminalPrompt>whoami</TerminalPrompt>
        <div className="command-output">
          <div className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6">
            <TypewriterText text="GAUTHAM DINESH" delay={2000} />
          </div>
          <div className="text-lg sm:text-xl md:text-2xl text-[var(--terminal-muted)] mb-8">
            SWEEEEEEEEE
          </div>
          <div className="text-[var(--terminal-accent)] mb-6">
            Coding, Lifting, Living
          </div>
        </div>

        <div className="mt-8">
          <TerminalPrompt>cat /etc/location</TerminalPrompt>
          <div className="command-output">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm leading-relaxed">
              <span>🇮🇳 India</span>
              <span>🇦🇪 UAE (Dubai)</span>
              <span className="whitespace-nowrap">
                🇳🇿 New Zealand (Auckland)
              </span>
              <span className="whitespace-nowrap">🇺🇸 USA (New York)</span>
              <span className="text-[var(--terminal-success)] whitespace-nowrap">
                🇬🇧 UK (London - current)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-10 sm:mb-12">
        <TerminalPrompt>ls -la work/</TerminalPrompt>
        <div className="command-output">
          <div className="space-y-2">
            <FileItem
              permissions="drwxr-xr-x"
              size="4.2KB"
              date="Jul 2023 - Present"
              name="goldman-sachs/software-engineer/"
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
              name="keyper-real-estate/"
              type="directory"
            />

            <FileItem
              permissions="drwxr-xr-x"
              size="1.5KB"
              date="Jun 2021 - Aug 2021"
              name="imagine-science-films/"
              type="directory"
              href="https://www.labocine.com/habitat"
            />

            <FileItem
              permissions="drwxr-xr-x"
              size="1.2KB"
              date="Jul 2020 - Aug 2020"
              name="bamian-auto-parts/"
              type="directory"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-10 sm:mb-12">
        <TerminalPrompt>cat projects/</TerminalPrompt>
        <div className="command-output">
          <div className="space-y-2">
            <FileItem
              permissions="-rwxr-xr-x"
              size="3.8KB"
              date="May 2023"
              name="multilingual-toia"
              type="executable"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="2.8KB"
              date="2023"
              name="aws-migration-pipeline"
              type="executable"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="1.9KB"
              date="2022"
              name="gym-booking-bot"
              type="executable"
              href="https://github.com/gauthamdk/GymBookingAutomation"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="1.7KB"
              date="2022"
              name="leadandlead"
              type="executable"
              href="https://github.com/gauthamdk/LeadAndLead"
            />

            <FileItem
              permissions="-rwxr-xr-x"
              size="1.4KB"
              date="2021"
              name="deadliner"
              type="executable"
              href="https://github.com/gauthamdk/Deadliner"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-10 sm:mb-12">
        <TerminalPrompt>npm list --depth=0</TerminalPrompt>
        <div className="command-output">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="text-[var(--terminal-accent)] mb-2">
                Languages
              </div>
              <div className="space-y-2 text-sm leading-relaxed">
                <div>├── Java</div>
                <div>├── Python</div>
                <div>├── JavaScript/TypeScript</div>
                <div>├── C/C++</div>
                <div>└── SQL</div>
              </div>
            </div>

            <div>
              <div className="text-[var(--terminal-accent)] mb-2">
                Frameworks & Libraries
              </div>
              <div className="space-y-2 text-sm leading-relaxed">
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
              <div className="text-[var(--terminal-accent)] mb-2">
                Tools & Platforms
              </div>
              <div className="space-y-2 text-sm leading-relaxed">
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
      <section id="contact" className="mb-10 sm:mb-12">
        <TerminalPrompt>contact --info</TerminalPrompt>
        <div className="command-output">
          <div className="space-y-2">
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

          <div className="mt-6 pt-4 border-t border-gray-700">
            <TerminalPrompt>
              <span className="text-[var(--terminal-success)]">
                Let&apos;s build something amazing together
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
