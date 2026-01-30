import { Shield, Users, Rocket, Heart, Brain, Clock } from "lucide-react";

const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Meno Errori",
    description: "Linting e type checking catturano i bug prima che raggiungano la produzione.",
    color: "green" as const,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Più Velocità",
    description: "Hot reload e script automatici accelerano il ciclo di sviluppo di 10 volte.",
    color: "orange" as const,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Allineato",
    description: "Formatting automatico elimina le discussioni sul code style.",
    color: "purple" as const,
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Meno Stress",
    description: "Strumenti che funzionano riducono la frustrazione quotidiana.",
    color: "cyan" as const,
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Focus sul Problema",
    description: "Automatizzare il tedioso libera la mente per la creatività.",
    color: "green" as const,
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Delivery Continuo",
    description: "CI/CD automatizzato garantisce rilasci frequenti e affidabili.",
    color: "orange" as const,
  },
];

const colorClasses = {
  cyan: "text-glow-cyan bg-glow-cyan/10 border-glow-cyan/30",
  green: "text-glow-green bg-glow-green/10 border-glow-green/30",
  purple: "text-glow-purple bg-glow-purple/10 border-glow-purple/30",
  orange: "text-glow-orange bg-glow-orange/10 border-glow-orange/30",
};

const hoverGlowClasses = {
  cyan: "hover:glow-cyan hover:border-glow-cyan/50",
  green: "hover:glow-green hover:border-glow-green/50",
  purple: "hover:glow-purple hover:border-glow-purple/50",
  orange: "hover:glow-orange hover:border-glow-orange/50",
};

export const DXBenefits = () => {
  return (
    <section className="py-16 px-4 bg-gradient-dark">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Perché la </span>
            <span className="text-glow-purple glow-text-purple">DX</span>
            <span className="text-foreground"> è Importante</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una buona Developer Experience non è un lusso, è un moltiplicatore di produttività 
            che beneficia sviluppatori, team e business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`p-6 rounded-xl border transition-all duration-300 ${colorClasses[benefit.color]} ${hoverGlowClasses[benefit.color]} fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Insight box */}
        <div className="mt-12 p-8 rounded-xl bg-card border border-border max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-glow-cyan glow-text-cyan">
            💡 L'insight chiave
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I team che investono in Developer Experience riportano una{" "}
            <span className="text-glow-green">riduzione del 40% del tempo speso in debugging</span>,{" "}
            <span className="text-glow-purple">onboarding 2x più veloce</span> per i nuovi membri, e{" "}
            <span className="text-glow-orange">maggiore soddisfazione lavorativa</span>.
            Non si tratta solo di strumenti, ma di creare un ambiente dove scrivere codice è un piacere.
          </p>
        </div>
      </div>
    </section>
  );
};
