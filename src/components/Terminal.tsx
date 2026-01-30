import { useState, useEffect, useRef } from "react";

interface TerminalLine {
  text: string;
  type: "command" | "output" | "success" | "error" | "info";
  delay?: number;
}

interface TerminalProps {
  lines: TerminalLine[];
  isRunning: boolean;
  title?: string;
  glowColor?: "cyan" | "green" | "purple" | "orange";
}

const colorClasses = {
  cyan: "text-glow-cyan",
  green: "text-glow-green",
  purple: "text-glow-purple",
  orange: "text-glow-orange",
};

const glowClasses = {
  cyan: "glow-cyan",
  green: "glow-green",
  purple: "glow-purple",
  orange: "glow-orange",
};

export const Terminal = ({ lines, isRunning, title = "terminal", glowColor = "cyan" }: TerminalProps) => {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isRunning) {
      setVisibleLines([]);
      setCurrentLineIndex(0);
      return;
    }

    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    const delay = currentLine.delay || 300;

    const timer = setTimeout(() => {
      setVisibleLines((prev) => [...prev, currentLine]);
      setCurrentLineIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [isRunning, currentLineIndex, lines]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const getLineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "command":
        return "text-glow-cyan";
      case "success":
        return "text-glow-green";
      case "error":
        return "text-destructive";
      case "info":
        return "text-glow-purple";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className={`terminal-window transition-all duration-300 ${isRunning ? glowClasses[glowColor] : ""}`}>
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive" />
        <div className="terminal-dot bg-glow-orange" />
        <div className="terminal-dot bg-glow-green" />
        <span className="ml-4 text-xs text-muted-foreground font-mono">{title}</span>
      </div>
      <div ref={containerRef} className="terminal-content h-48 overflow-y-auto">
        {visibleLines.map((line, index) => (
          <div key={index} className={`${getLineColor(line.type)} fade-in-up`}>
            {line.type === "command" && <span className={colorClasses[glowColor]}>❯ </span>}
            {line.text}
          </div>
        ))}
        {isRunning && currentLineIndex < lines.length && (
          <span className={`typing-cursor ${colorClasses[glowColor]}`}>▊</span>
        )}
        {!isRunning && visibleLines.length === 0 && (
          <span className="text-muted-foreground">Pronto per eseguire...</span>
        )}
      </div>
    </div>
  );
};
