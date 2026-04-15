import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 80%, oklch(0.3 0.18 270 / 0.25), transparent 60%)",
        }}
      />

      <div className={`max-w-3xl mx-auto text-center relative z-10 ${isVisible ? "reveal-up" : "reveal-hidden"}`}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-tight mb-6">
          Ready to transform
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
            }}
          >
            your hiring?
          </span>
        </h2>
        <p className="text-foreground/50 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Join 500+ companies already using Power AI to find, engage, and hire the best talent faster than ever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="heroSecondary"
            className="rounded-full px-8 py-6 text-base"
          >
            Schedule a Consult
          </Button>
          <Button
            variant="ghost"
            className="rounded-full px-8 py-6 text-base text-foreground/70 hover:text-foreground"
          >
            Watch Demo →
          </Button>
        </div>
      </div>
    </section>
  );
}
