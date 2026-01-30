import { SimulationCard } from "./SimulationCard";
import { Terminal, Paintbrush, RefreshCw, Play } from "lucide-react";

const simulations = [
  {
    title: "Script Automatici",
    description: "Esegui task ripetitivi con un solo comando",
    explanation: "Gli script automatici eliminano le operazioni manuali ripetitive. Con un singolo comando puoi buildare, testare, deployare e molto altro.",
    icon: <Play className="w-6 h-6" />,
    terminalTitle: "npm run build",
    glowColor: "cyan" as const,
    benefit: "Risparmia ore di lavoro manuale e riduci gli errori umani del 90%",
    terminalLines: [
      { text: "npm run build", type: "command" as const, delay: 400 },
      { text: "📦 Building project...", type: "output" as const, delay: 600 },
      { text: "Compiling TypeScript...", type: "output" as const, delay: 800 },
      { text: "Bundling with Vite...", type: "output" as const, delay: 700 },
      { text: "Optimizing assets...", type: "output" as const, delay: 500 },
      { text: "Generating source maps...", type: "output" as const, delay: 400 },
      { text: "✓ Build completed in 2.3s", type: "success" as const, delay: 600 },
      { text: "📁 Output: dist/ (1.2 MB)", type: "info" as const, delay: 300 },
    ],
  },
  {
    title: "Linting",
    description: "Trova e correggi problemi nel codice automaticamente",
    explanation: "Il linter analizza il codice in tempo reale, identificando bug potenziali, problemi di sicurezza e violazioni delle best practices prima che diventino problemi.",
    icon: <Terminal className="w-6 h-6" />,
    terminalTitle: "eslint src/",
    glowColor: "green" as const,
    benefit: "Cattura il 70% dei bug comuni prima che raggiungano la produzione",
    terminalLines: [
      { text: "eslint src/ --fix", type: "command" as const, delay: 400 },
      { text: "🔍 Scanning 47 files...", type: "output" as const, delay: 500 },
      { text: "⚠ src/utils.ts:23 - Unused variable 'temp'", type: "error" as const, delay: 600 },
      { text: "  → Auto-fixed: removed unused variable", type: "success" as const, delay: 400 },
      { text: "⚠ src/api.ts:45 - Missing await", type: "error" as const, delay: 500 },
      { text: "  → Auto-fixed: added await keyword", type: "success" as const, delay: 400 },
      { text: "⚠ src/hooks.ts:12 - Prefer const", type: "error" as const, delay: 400 },
      { text: "  → Auto-fixed: let → const", type: "success" as const, delay: 300 },
      { text: "✓ 3 problems fixed automatically", type: "success" as const, delay: 500 },
      { text: "✓ 0 errors, 0 warnings remaining", type: "info" as const, delay: 300 },
    ],
  },
  {
    title: "Formatting",
    description: "Codice sempre formattato in modo consistente",
    explanation: "Il formatter automatico garantisce che tutto il codice segua le stesse convenzioni stilistiche, eliminando discussioni futili sul code style e migliorando la leggibilità.",
    icon: <Paintbrush className="w-6 h-6" />,
    terminalTitle: "prettier --write",
    glowColor: "purple" as const,
    benefit: "Elimina il 100% delle discussioni sul code style nelle code review",
    terminalLines: [
      { text: "prettier --write src/", type: "command" as const, delay: 400 },
      { text: "✨ Formatting files...", type: "output" as const, delay: 500 },
      { text: "src/App.tsx → reformatted", type: "output" as const, delay: 300 },
      { text: "src/components/Header.tsx → reformatted", type: "output" as const, delay: 250 },
      { text: "src/hooks/useAuth.ts → reformatted", type: "output" as const, delay: 250 },
      { text: "src/utils/helpers.ts → unchanged", type: "output" as const, delay: 200 },
      { text: "src/styles/globals.css → reformatted", type: "output" as const, delay: 250 },
      { text: "✓ 4 files reformatted", type: "success" as const, delay: 400 },
      { text: "✓ Consistent code style applied", type: "info" as const, delay: 300 },
    ],
  },
  {
    title: "Hot Reload",
    description: "Vedi le modifiche istantaneamente senza refresh",
    explanation: "Hot Module Replacement (HMR) aggiorna l'app nel browser mentre scrivi, preservando lo stato dell'applicazione. Il feedback loop diventa quasi istantaneo.",
    icon: <RefreshCw className="w-6 h-6" />,
    terminalTitle: "vite dev",
    glowColor: "orange" as const,
    benefit: "Feedback loop ridotto da secondi a millisecondi, 10x più iterazioni",
    terminalLines: [
      { text: "vite dev", type: "command" as const, delay: 400 },
      { text: "🚀 Server running at http://localhost:5173", type: "success" as const, delay: 600 },
      { text: "Watching for file changes...", type: "output" as const, delay: 500 },
      { text: "", type: "output" as const, delay: 800 },
      { text: "📝 File changed: src/App.tsx", type: "info" as const, delay: 400 },
      { text: "⚡ HMR update in 23ms", type: "success" as const, delay: 200 },
      { text: "", type: "output" as const, delay: 600 },
      { text: "📝 File changed: src/Button.tsx", type: "info" as const, delay: 400 },
      { text: "⚡ HMR update in 18ms", type: "success" as const, delay: 200 },
      { text: "✓ State preserved, no page reload needed", type: "success" as const, delay: 300 },
    ],
  },
];

export const SimulationsGrid = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Simula il </span>
            <span className="text-glow-cyan glow-text-cyan">Workflow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clicca su "Esegui" per vedere come questi strumenti lavorano in tempo reale 
            e scopri come migliorano la tua produttività quotidiana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {simulations.map((sim, index) => (
            <div key={sim.title} className={`fade-in-up stagger-${index + 1}`}>
              <SimulationCard {...sim} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
