import { Brain, Zap, Target, Shield, BarChart3, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Brain,
    title: "Intelligent Matching",
    description: "Our AI analyzes thousands of data points to match the perfect candidate to your role with unprecedented accuracy.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Reduce time-to-hire by 80%. Power AI screens and shortlists candidates in minutes, not weeks.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach passive candidates who aren't actively looking but are the perfect fit for your organization.",
  },
  {
    icon: Shield,
    title: "Bias-Free Hiring",
    description: "Built-in fairness algorithms ensure every candidate is evaluated on merit, not demographics.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Real-time dashboards and predictive insights to optimize your entire recruitment pipeline.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless workflows for hiring managers, recruiters, and interviewers to work together effortlessly.",
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? "reveal-up" : "reveal-hidden"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-4 block">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-tight">
            Built for the future
            <br />
            <span className="text-foreground/50">of hiring</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`liquid-glass rounded-2xl p-8 group hover:scale-[1.02] transition-transform duration-300 ${
                isVisible ? `reveal-scale stagger-${i + 1}` : "reveal-hidden"
              }`}
            >
              <div className="w-12 h-12 rounded-xl liquid-glass flex items-center justify-center mb-6 group-hover:animate-float">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-display">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
