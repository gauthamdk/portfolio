import { TerminalPrompt } from "../ui";

export const SkillsSection = () => {
  return (
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
  );
};
