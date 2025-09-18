interface TerminalPromptProps {
  children: React.ReactNode;
}

export const TerminalPrompt = ({ children }: TerminalPromptProps) => (
  <div className="flex items-center">
    <span className="terminal-prompt">root@portfolio:~$</span>
    <span className="ml-1 sm:ml-2">{children}</span>
  </div>
);
