import { TerminalPrompt, FileItem } from "../ui";

export const ProjectsSection = () => {
  return (
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
  );
};
