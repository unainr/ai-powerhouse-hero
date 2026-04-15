import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small teams just getting started with AI hiring.",
    features: [
      "Up to 10 active job postings",
      "AI candidate matching",
      "Basic analytics dashboard",
      "Email support",
      "ATS integration (1)",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$799",
    period: "/month",
    description: "For growing teams that need advanced AI and collaboration tools.",
    features: [
      "Unlimited job postings",
      "Advanced AI scoring & ranking",
      "Predictive analytics",
      "Priority Slack support",
      "ATS integrations (unlimited)",
      "Bias-free hiring reports",
      "Team collaboration tools",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom AI model training",
      "SSO & advanced security",
      "SLA guarantees",
      "On-premise deployment option",
      "Custom integrations & API",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 relative" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(ellipse, oklch(0.25 0.18 270 / 0.15), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? "reveal-up" : "reveal-hidden"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-tight">
            Simple, transparent
            <br />
            <span className="text-foreground/50">pricing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col relative group hover:scale-[1.02] transition-transform duration-300 ${
                plan.highlighted
                  ? "liquid-glass ring-1 ring-primary/30"
                  : "liquid-glass"
              } ${isVisible ? `reveal-scale stagger-${i + 1}` : "reveal-hidden"}`}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-lg text-xs font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #a855f7)",
                    color: "white",
                  }}
                >
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-semibold text-foreground font-display mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span
                  className="text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: plan.highlighted
                      ? "linear-gradient(135deg, #6366f1, #a855f7)"
                      : "linear-gradient(135deg, var(--foreground), var(--foreground))",
                  }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-foreground/40">{plan.period}</span>
                )}
              </div>
              <p className="text-sm text-foreground/50 mb-6 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/60">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "heroSecondary" : "ghost"}
                className={`rounded-full w-full py-5 ${
                  plan.highlighted ? "ring-1 ring-primary/20" : "text-foreground/60"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
