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
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + currentIndex * 50);

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
    <main className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-6 max-w-6xl mx-auto">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-[var(--terminal-bg)] border-b border-gray-700 pb-4 mb-8 z-10">
        <TerminalPrompt>
          <TypewriterText text="./portfolio --interactive" delay={500} />
        </TerminalPrompt>
        <div className="flex flex-wrap gap-4 mt-4">
          {commands.map((command, index) => (
            <button
              key={command.cmd}
              onClick={() => scrollToSection(command.section)}
              className="terminal-command text-sm hover:bg-gray-800/30 px-2 py-1 rounded"
            >
              {command.cmd}
            </button>
          ))}
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="mb-12">
        <TerminalPrompt>whoami</TerminalPrompt>
        <div className="command-output">
          <div className="text-4xl md:text-6xl font-bold mb-4">
            <TypewriterText text="GAUTHAM DINESH" delay={1000} />
          </div>
          <div className="text-xl md:text-2xl text-[var(--terminal-muted)] mb-6">
            SOFTWARE ENGINEER & FULL STACK DEVELOPER
          </div>
          <div className="text-[var(--terminal-accent)] mb-4">
            Building scalable systems and beautiful interfaces
          </div>

          <div className="mt-6">
            <TerminalPrompt>cat /etc/location</TerminalPrompt>
            <div className="command-output">
              <div className="flex items-center gap-2 text-sm">
                <span>🇮🇳 India</span>
                <span>🇬🇭 Ghana</span>
                <span>🇦🇪 UAE</span>
                <span>🇺🇸 USA</span>
                <span className="text-[var(--terminal-success)]">
                  🇬🇧 UK (current)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-12">
        <TerminalPrompt>ls -la work/</TerminalPrompt>
        <div className="command-output">
          <div className="space-y-2">
            <FileItem
              permissions="drwxr-xr-x"
              size="2.1KB"
              date="Aug 2022"
              name="goldman-sachs/"
              type="directory"
            />
            <div className="pl-8 text-sm text-[var(--terminal-muted)]">
              <div>• Built React applications for loan data visualization</div>
              <div>• Designed Java Dropwizard APIs with SQL optimization</div>
              <div>• Engineered CI/CD with Docker, Kubernetes, Terraform</div>
            </div>

            <FileItem
              permissions="drwxr-xr-x"
              size="1.8KB"
              date="Jun 2022"
              name="keyper/"
              type="directory"
            />
            <div className="pl-8 text-sm text-[var(--terminal-muted)]">
              <div>• Designed Docusign + Airtable integration with NodeJS</div>
              <div>• Built Onesignal notification systems with JavaScript</div>
            </div>

            <FileItem
              permissions="drwxr-xr-x"
              size="1.5KB"
              date="Aug 2021"
              name="labocine/"
              type="directory"
              href="https://www.labocine.com/habitat"
            />
            <div className="pl-8 text-sm text-[var(--terminal-muted)]">
              <div>
                • Created user profiles for 20,000+ users with Handlebars
              </div>
              <div>
                • Connected 15,000+ users at Imagine Science Film Festival
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-12">
        <TerminalPrompt>cat projects/</TerminalPrompt>
        <div className="command-output">
          <div className="space-y-2">
            <FileItem
              permissions="-rwxr-xr-x"
              size="3.2KB"
              date="2023"
              name="multilingual-avatar-interface"
              type="executable"
            />
            <div className="pl-8 text-sm text-[var(--terminal-muted)]">
              Multilingual virtual avatar with Google Speech-to-Text, Translate,
              and LaBSE embeddings
            </div>

            <FileItem
              permissions="-rwxr-xr-x"
              size="2.8KB"
              date="2023"
              name="aws-migration-pipeline"
              type="executable"
            />
            <div className="pl-8 text-sm text-[var(--terminal-muted)]">
              Legacy Java application migration to AWS with Docker and Fargate
            </div>

            <FileItem
              permissions="-rwxr-xr-x"
              size="1.9KB"
              date="2022"
              name="gym-booking-bot"
              type="executable"
              href="https://github.com/gauthamdk/GymBookingAutomation"
            />
            <div className="pl-8 text-sm text-[var(--terminal-muted)]">
              Automated gym slot booking with Selenium and RaspberryPi
            </div>

            <FileItem
              permissions="-rwxr-xr-x"
              size="1.7KB"
              date="2022"
              name="leadandlead"
              type="executable"
              href="https://github.com/gauthamdk/LeadAndLead"
            />
            <div className="pl-8 text-sm text-[var(--terminal-muted)]">
              Hand gesture controlled drone interface using Python and Leap
              Motion
            </div>

            <FileItem
              permissions="-rwxr-xr-x"
              size="1.4KB"
              date="2021"
              name="deadliner"
              type="executable"
              href="https://github.com/gauthamdk/Deadliner"
            />
            <div className="pl-8 text-sm text-[var(--terminal-muted)]">
              Automated assignment tracking with Selenium and Google Calendar
              API
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-12">
        <TerminalPrompt>npm list --depth=0</TerminalPrompt>
        <div className="command-output">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-[var(--terminal-accent)] mb-2">
                Languages
              </div>
              <div className="space-y-1 text-sm">
                <div>├── JavaScript/TypeScript</div>
                <div>├── Python</div>
                <div>├── Java</div>
                <div>├── C/C++</div>
                <div>└── SQL</div>
              </div>
            </div>

            <div>
              <div className="text-[var(--terminal-accent)] mb-2">
                Frameworks & Tools
              </div>
              <div className="space-y-1 text-sm">
                <div>├── React/Next.js</div>
                <div>├── Node.js/Express</div>
                <div>├── Docker/Kubernetes</div>
                <div>├── AWS/Terraform</div>
                <div>└── MongoDB/PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-12">
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
              href="https://twitter.com/_gauthamdk"
            />
          </div>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <TerminalPrompt>
              <span className="text-[var(--terminal-success)]">
                Let's build something amazing together
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
