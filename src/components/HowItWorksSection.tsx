import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Connect Your Pipeline",
    description: "Integrate Power AI with your existing ATS, job boards, and sourcing channels in minutes.",
  },
  {
    number: "02",
    title: "Define Your Ideal Candidate",
    description: "Tell our AI what matters — skills, culture fit, experience — and watch it learn your preferences.",
  },
  {
    number: "03",
    title: "AI Does the Heavy Lifting",
    description: "Power AI screens, ranks, and engages candidates automatically while you focus on what matters.",
  },
  {
    number: "04",
    title: "Hire with Confidence",
    description: "Review AI-curated shortlists with detailed insights and make data-driven hiring decisions.",
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? "reveal-up" : "reveal-hidden"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-tight">
            Four steps to
            <br />
            <span className="text-foreground/50">better hiring</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`liquid-glass rounded-2xl p-8 md:p-10 flex gap-6 group hover:scale-[1.01] transition-transform duration-300 ${
                isVisible ? `${i % 2 === 0 ? "reveal-left" : "reveal-right"} stagger-${i + 1}` : "reveal-hidden"
              }`}
            >
              <span
                className="text-5xl md:text-6xl font-display font-bold bg-clip-text text-transparent shrink-0 leading-none"
                style={{
                  backgroundImage: "linear-gradient(180deg, oklch(0.65 0.2 270), oklch(0.35 0.1 270))",
                }}
              >
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
