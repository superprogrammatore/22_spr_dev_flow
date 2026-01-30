import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-glow-cyan" />
            <span className="text-xl font-bold">
              <span className="text-foreground">Dev</span>
              <span className="text-glow-cyan">Flow</span>
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Scrivere codice bene significa anche lavorare bene.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-glow-green animate-pulse" />
              DX First
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
