import { TerminalPrompt, FileItem } from "../ui";

export const ExperienceSection = () => {
  return (
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
  );
};
