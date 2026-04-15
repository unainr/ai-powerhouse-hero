import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const integrations = [
  { name: "Workday", letter: "W", color: "#f59e0b" },
  { name: "Greenhouse", letter: "G", color: "#22c55e" },
  { name: "Lever", letter: "L", color: "#3b82f6" },
  { name: "SAP", letter: "S", color: "#6366f1" },
  { name: "LinkedIn", letter: "in", color: "#0077b5" },
  { name: "Slack", letter: "S", color: "#e11d48" },
  { name: "Teams", letter: "T", color: "#7c3aed" },
  { name: "Jira", letter: "J", color: "#2563eb" },
];

export function IntegrationsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? "reveal-up" : "reveal-hidden"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-4 block">
            Integrations
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-tight">
            Works with your
            <br />
            <span className="text-foreground/50">existing stack</span>
          </h2>
          <p className="text-foreground/50 text-base md:text-lg max-w-lg mx-auto mt-6 leading-relaxed">
            Seamlessly connects to 50+ HR tools, ATS platforms, and communication apps you already use.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 ${isVisible ? "reveal-up" : "reveal-hidden"}`} style={{ animationDelay: "0.2s" }}>
          {integrations.map((item, i) => (
            <div
              key={item.name}
              className={`liquid-glass rounded-2xl p-6 flex flex-col items-center gap-3 group hover:scale-105 transition-transform duration-300 ${
                isVisible ? `reveal-scale stagger-${i + 1}` : "reveal-hidden"
              }`}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold animate-float"
                style={{
                  background: `${item.color}15`,
                  color: item.color,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                {item.letter}
              </div>
              <span className="text-sm font-medium text-foreground/70">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
