import { Zap, Code2, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl animate-float" />
      
      <div className="container relative z-10 px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 fade-in-up">
            <Sparkles className="w-4 h-4 text-glow-cyan" />
            <span className="text-sm text-muted-foreground">Impara la Developer Experience</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up stagger-1">
            <span className="text-foreground">Dev</span>
            <span className="text-glow-cyan glow-text-cyan">Flow</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up stagger-2 max-w-2xl mx-auto">
            Scopri come una buona <span className="text-glow-cyan">Developer Experience</span> trasforma il modo in cui scrivi codice, 
            riducendo errori e aumentando la produttività del team.
          </p>

          {/* Key points */}
          <div className="flex flex-wrap justify-center gap-6 fade-in-up stagger-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-glow-orange" />
              <span>Feedback immediato</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code2 className="w-5 h-5 text-glow-green" />
              <span>Codice consistente</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-glow-purple" />
              <span>Meno stress</span>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mt-12 p-6 rounded-xl bg-card/50 border border-border fade-in-up stagger-4 max-w-2xl mx-auto">
            <p className="text-lg italic text-muted-foreground mb-2">
              "Scrivere codice bene significa anche <span className="text-glow-cyan">lavorare bene</span>. 
              Una DX eccellente riduce il carico cognitivo e permette ai developer di concentrarsi su ciò che conta: risolvere problemi."
            </p>
            <footer className="text-sm text-glow-purple">— Filosofia DevFlow</footer>
          </blockquote>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent scan-line" />
      </div>
    </section>
  );
};
