"use client";

import { useState, useEffect, useRef } from "react";

const TerminalPrompt = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center">
    <span className="terminal-prompt">root@portfolio:~$</span>
    <span className="ml-1 sm:ml-2">{children}</span>
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
  const [isBuildWithMeVisible, setIsBuildWithMeVisible] = useState(false);
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [emailValidation, setEmailValidation] = useState<{
    isValid: boolean;
    message: string;
    touched: boolean;
  }>({
    isValid: true,
    message: "",
    touched: false,
  });
  const [nameValidation, setNameValidation] = useState<{
    isValid: boolean;
    message: string;
    touched: boolean;
  }>({
    isValid: true,
    message: "",
    touched: false,
  });
  const buildWithMeRef = useRef<HTMLDivElement>(null);

  const commands = [
    { cmd: "whoami", section: "about" },
    { cmd: "ls -la work/", section: "experience" },
    { cmd: "cat projects/", section: "projects" },
    { cmd: "npm list", section: "skills" },
    { cmd: "contact --info", section: "contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBuildWithMeVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    const currentRef = buildWithMeRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

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

  // Name validation function
  const validateName = (
    name: string
  ): { isValid: boolean; message: string } => {
    if (!name.trim()) {
      return { isValid: false, message: "Name is required" };
    }

    if (name.trim().length < 2) {
      return { isValid: false, message: "Name must be at least 2 characters" };
    }

    if (name.trim().length > 50) {
      return {
        isValid: false,
        message: "Name must be less than 50 characters",
      };
    }

    // Check for valid name characters (letters, spaces, hyphens, apostrophes)
    const nameRegex = /^[a-zA-Z\s\-'\.]+$/;
    if (!nameRegex.test(name.trim())) {
      return {
        isValid: false,
        message:
          "Name can only contain letters, spaces, hyphens, and apostrophes",
      };
    }

    return { isValid: true, message: "" };
  };

  // Email validation function
  const validateEmail = (
    email: string
  ): { isValid: boolean; message: string } => {
    if (!email.trim()) {
      return { isValid: false, message: "Email is required" };
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
      return { isValid: false, message: "Please enter a valid email address" };
    }

    // Additional checks for common issues
    if (email.length > 254) {
      return { isValid: false, message: "Email address is too long" };
    }

    if (email.includes("..") || email.startsWith(".") || email.endsWith(".")) {
      return { isValid: false, message: "Email format is invalid" };
    }

    return { isValid: true, message: "Valid email address" };
  };

  const handleFormInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Handle name validation
    if (name === "name") {
      const validation = validateName(value);
      setNameValidation({
        isValid: validation.isValid,
        message: validation.message,
        touched: true,
      });
    }

    // Handle email validation
    if (name === "email") {
      const validation = validateEmail(value);
      setEmailValidation({
        isValid: validation.isValid,
        message: validation.message,
        touched: true,
      });
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate name before submission
    const nameValidationResult = validateName(formData.name);
    if (!nameValidationResult.isValid) {
      setNameValidation({
        isValid: false,
        message: nameValidationResult.message,
        touched: true,
      });
      return;
    }

    // Validate email before submission
    const emailValidationResult = validateEmail(formData.email);
    if (!emailValidationResult.isValid) {
      setEmailValidation({
        isValid: false,
        message: emailValidationResult.message,
        touched: true,
      });
      return;
    }

    // Check if all required fields are filled
    if (!formData.projectType || !formData.description.trim()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For now, we'll just log the form data and show success
      console.log("Consultation form submitted:", formData);

      setSubmitStatus("success");

      // Reset form data
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });

      // Reset validation states
      setNameValidation({
        isValid: true,
        message: "",
        touched: false,
      });
      setEmailValidation({
        isValid: true,
        message: "",
        touched: false,
      });

      // Close form after success
      setTimeout(() => {
        setIsConsultationFormOpen(false);
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-2 sm:p-6 max-w-6xl mx-auto">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Header/Navigation */}
      <header className="sticky top-0 bg-[var(--terminal-bg)] border-b border-gray-700 pb-6 mb-8 sm:mb-10 z-10">
        <TerminalPrompt>
          <TypewriterText text="./portfolio" delay={200} />
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
              <span className="text-[var(--terminal-success)]" role="listitem">
                🇮🇳 Kerala
              </span>
              <span className="text-[var(--terminal-success)]" role="listitem">
                🇦🇪 Abu Dhabi
              </span>
              <span
                className="text-[var(--terminal-success)] whitespace-nowrap"
                role="listitem"
              >
                🇬🇭 Accra
              </span>
              <span
                className="text-[var(--terminal-success)] whitespace-nowrap"
                role="listitem"
              >
                🇺🇸 New York
              </span>
              <span className="text-white whitespace-nowrap" role="listitem">
                🇬🇧 London{" "}
                <span className="text-yellow-400 font-bold">
                  [current location]
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="mb-8 sm:mb-10 p-3 sm:p-6 rounded-lg bg-gray-800/20 border border-gray-700/50"
      >
        <h2 className="sr-only">Work Experience</h2>
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
        className="mb-8 sm:mb-10 p-3 sm:p-6 rounded-lg bg-gray-900/40 border border-gray-800/60"
      >
        <h2 className="sr-only">Projects</h2>
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
        className="mb-8 sm:mb-10 p-3 sm:p-6 rounded-lg bg-gray-800/30 border border-gray-700/60"
      >
        <h2 className="sr-only">Technical Skills</h2>
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
        className="mb-8 sm:mb-10 p-3 sm:p-6 rounded-lg bg-gray-900/50 border border-gray-800/70"
      >
        <h2 className="sr-only">Contact Information</h2>
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
          <div ref={buildWithMeRef} className="terminal-prompt-wrapper">
            <TerminalPrompt>
              <button
                onClick={() =>
                  setIsConsultationFormOpen(!isConsultationFormOpen)
                }
                className={`text-[var(--terminal-success)] build-with-me-text hover:text-[var(--terminal-accent)] transition-all duration-300 cursor-pointer ${
                  isBuildWithMeVisible ? "glow-once" : ""
                }`}
              >
                Build with me {isConsultationFormOpen ? "▲" : "▼"}
              </button>
            </TerminalPrompt>
          </div>

          {/* Consultation Form */}
          <div
            className={`consultation-form overflow-hidden transition-all duration-500 ease-in-out ${
              isConsultationFormOpen
                ? "max-h-[2000px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gray-900/60 border border-gray-600 rounded-lg p-6">
              <div className="terminal-prompt-wrapper mb-4">
                <TerminalPrompt>./consultation --new-project</TerminalPrompt>
              </div>

              <div className="command-output">
                <div className="text-[var(--terminal-accent)] mb-4 text-lg">
                  Free Consultation Request
                </div>
                <p className="text-sm text-[var(--terminal-muted)] mb-6">
                  Tell me about your project and let&apos;s build something
                  amazing together. All consultations are free and confidential.
                </p>

                {submitStatus === "success" && (
                  <div className="bg-green-900/30 border border-green-600 rounded p-4 mb-6 text-green-300">
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Thanks! I&apos;ll get back to you within 24 hours.
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-900/30 border border-red-600 rounded p-4 mb-6 text-red-300">
                    <div className="flex items-center">
                      <span className="text-red-400 mr-2">✗</span>
                      Something went wrong. Please try again or email me
                      directly.
                    </div>
                  </div>
                )}

                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-[var(--terminal-accent)] mb-2"
                      >
                        Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormInputChange}
                          required
                          className={`w-full bg-gray-800/50 border rounded px-3 py-2 text-white focus:outline-none transition-colors ${
                            nameValidation.touched
                              ? nameValidation.isValid
                                ? "border-green-500 focus:border-green-400"
                                : "border-red-500 focus:border-red-400"
                              : "border-gray-600 focus:border-[var(--terminal-accent)]"
                          }`}
                          placeholder="Your full name"
                        />
                        {nameValidation.touched && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {nameValidation.isValid ? (
                              <span className="text-green-400 text-sm">✓</span>
                            ) : (
                              <span className="text-red-400 text-sm">✗</span>
                            )}
                          </div>
                        )}
                      </div>
                      {nameValidation.touched && !nameValidation.isValid && (
                        <div className="mt-1 text-xs text-red-400 flex items-center">
                          <span className="mr-1">⚠</span>
                          {nameValidation.message}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-[var(--terminal-accent)] mb-2"
                      >
                        Email *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormInputChange}
                          required
                          className={`w-full bg-gray-800/50 border rounded px-3 py-2 text-white focus:outline-none transition-colors ${
                            emailValidation.touched
                              ? emailValidation.isValid
                                ? "border-green-500 focus:border-green-400"
                                : "border-red-500 focus:border-red-400"
                              : "border-gray-600 focus:border-[var(--terminal-accent)]"
                          }`}
                          placeholder="your@email.com"
                        />
                        {emailValidation.touched && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {emailValidation.isValid ? (
                              <span className="text-green-400 text-sm">✓</span>
                            ) : (
                              <span className="text-red-400 text-sm">✗</span>
                            )}
                          </div>
                        )}
                      </div>
                      {emailValidation.touched && !emailValidation.isValid && (
                        <div className="mt-1 text-xs text-red-400 flex items-center">
                          <span className="mr-1">⚠</span>
                          {emailValidation.message}
                        </div>
                      )}
                      {emailValidation.touched &&
                        emailValidation.isValid &&
                        formData.email && (
                          <div className="mt-1 text-xs text-green-400 flex items-center">
                            <span className="mr-1">✓</span>
                            {emailValidation.message}
                          </div>
                        )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm text-[var(--terminal-accent)] mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleFormInputChange}
                        className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors"
                        placeholder="Your company (optional)"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm text-[var(--terminal-accent)] mb-2"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleFormInputChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors"
                      >
                        <option value="">Select project type</option>
                        <option value="web-application">Web Application</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="api-development">API Development</option>
                        <option value="cloud-migration">Cloud Migration</option>
                        <option value="automation">Automation & Tools</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm text-[var(--terminal-accent)] mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleFormInputChange}
                        className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under £5,000</option>
                        <option value="5k-15k">£5,000 - £15,000</option>
                        <option value="15k-30k">£15,000 - £30,000</option>
                        <option value="30k-50k">£30,000 - £50,000</option>
                        <option value="50k-plus">£50,000+</option>
                        <option value="discuss">Let&apos;s discuss</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm text-[var(--terminal-accent)] mb-2"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleFormInputChange}
                        className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm text-[var(--terminal-accent)] mb-2"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleFormInputChange}
                      required
                      rows={4}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors resize-vertical"
                      placeholder="Describe your project, goals, and any specific requirements..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-xs text-[var(--terminal-muted)]">
                      * Required fields
                    </div>
                    <button
                      type="submit"
                      disabled={
                        isSubmitting ||
                        (nameValidation.touched && !nameValidation.isValid) ||
                        (emailValidation.touched && !emailValidation.isValid)
                      }
                      className={`px-6 py-2 rounded transition-all duration-300 ${
                        isSubmitting ||
                        (nameValidation.touched && !nameValidation.isValid) ||
                        (emailValidation.touched && !emailValidation.isValid)
                          ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                          : "bg-[var(--terminal-success)] hover:bg-[var(--terminal-accent)] text-white hover:shadow-lg"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Consultation Request"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
