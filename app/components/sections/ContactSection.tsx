"use client";

import { useState } from "react";
import { TerminalPrompt, FileItem, ConsultationForm } from "../ui";
import { useIntersectionObserver } from "../../hooks";

export const ContactSection = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const { isVisible: isBuildWithMeVisible, elementRef: buildWithMeRef } =
    useIntersectionObserver();

  return (
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
              onClick={() => {
                setHasBeenClicked(true);
                setIsConsultationFormOpen(!isConsultationFormOpen);
              }}
              className={`text-[var(--terminal-success)] build-with-me-text hover:text-[var(--terminal-accent)] transition-all duration-300 cursor-pointer ${
                isBuildWithMeVisible && !hasBeenClicked ? "button-glow" : ""
              }`}
            >
              Build with me 🚀
            </button>
          </TerminalPrompt>
        </div>

        <ConsultationForm
          isOpen={isConsultationFormOpen}
          onClose={() => setIsConsultationFormOpen(false)}
        />
      </div>
    </section>
  );
};
