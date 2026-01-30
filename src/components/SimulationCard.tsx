import { useState } from "react";
import { Terminal } from "./Terminal";
import { Play, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";

interface TerminalLine {
  text: string;
  type: "command" | "output" | "success" | "error" | "info";
  delay?: number;
}

interface SimulationCardProps {
  title: string;
  description: string;
  explanation: string;
  icon: React.ReactNode;
  terminalTitle: string;
  terminalLines: TerminalLine[];
  glowColor: "cyan" | "green" | "purple" | "orange";
  benefit: string;
}

const glowBorderClasses = {
  cyan: "hover:border-glow-cyan/50 hover:glow-cyan",
  green: "hover:border-glow-green/50 hover:glow-green",
  purple: "hover:border-glow-purple/50 hover:glow-purple",
  orange: "hover:border-glow-orange/50 hover:glow-orange",
};

const glowTextClasses = {
  cyan: "text-glow-cyan glow-text-cyan",
  green: "text-glow-green glow-text-green",
  purple: "text-glow-purple glow-text-purple",
  orange: "text-glow-orange glow-text-orange",
};

const buttonGlowClasses = {
  cyan: "bg-glow-cyan/10 border-glow-cyan/50 text-glow-cyan hover:bg-glow-cyan/20 hover:glow-cyan",
  green: "bg-glow-green/10 border-glow-green/50 text-glow-green hover:bg-glow-green/20 hover:glow-green",
  purple: "bg-glow-purple/10 border-glow-purple/50 text-glow-purple hover:bg-glow-purple/20 hover:glow-purple",
  orange: "bg-glow-orange/10 border-glow-orange/50 text-glow-orange hover:bg-glow-orange/20 hover:glow-orange",
};

export const SimulationCard = ({
  title,
  description,
  explanation,
  icon,
  terminalTitle,
  terminalLines,
  glowColor,
  benefit,
}: SimulationCardProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setHasCompleted(false);
    
    const totalDuration = terminalLines.reduce((acc, line) => acc + (line.delay || 300), 0);
    setTimeout(() => {
      setIsRunning(false);
      setHasCompleted(true);
    }, totalDuration + 500);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHasCompleted(false);
  };

  return (
    <div className={`simulation-card group ${glowBorderClasses[glowColor]} transition-all duration-500`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg bg-secondary/50 ${glowTextClasses[glowColor]} transition-all duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-semibold mb-1 ${glowTextClasses[glowColor]}`}>{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>

      <Terminal
        lines={terminalLines}
        isRunning={isRunning}
        title={terminalTitle}
        glowColor={glowColor}
      />

      <div className="flex gap-3 mt-4">
        <Button
          onClick={handleRun}
          disabled={isRunning}
          className={`flex-1 border transition-all duration-300 ${buttonGlowClasses[glowColor]}`}
          variant="outline"
        >
          <Play className="w-4 h-4 mr-2" />
          {isRunning ? "In esecuzione..." : "Esegui"}
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="border-border hover:border-muted-foreground transition-all duration-300"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>

      {hasCompleted && (
        <div className="mt-4 p-4 rounded-lg bg-secondary/30 border border-border fade-in-up">
          <p className="text-sm text-muted-foreground mb-2">
            <span className={glowTextClasses[glowColor]}>✓</span> {explanation}
          </p>
          <p className="text-xs text-glow-green">
            <strong>Beneficio DX:</strong> {benefit}
          </p>
        </div>
      )}
    </div>
  );
};
