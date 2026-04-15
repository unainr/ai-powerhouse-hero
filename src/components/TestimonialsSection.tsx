import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Power AI reduced our time-to-hire by 73%. We filled 200+ roles in Q1 alone — a record for our company.",
    name: "Sarah Chen",
    role: "VP of People, TechForge",
    rating: 5,
  },
  {
    quote: "The candidate matching is unreal. Every shortlist feels like it was hand-curated by a recruiter who's known our culture for years.",
    name: "Marcus Williams",
    role: "Head of Talent, Meridian Health",
    rating: 5,
  },
  {
    quote: "We replaced 4 different recruitment tools with Power AI. The ROI was positive within the first month.",
    name: "Priya Sharma",
    role: "CHRO, NovaBridge",
    rating: 5,
  },
  {
    quote: "Finally an AI tool that doesn't just automate — it actually thinks. Our hiring quality has never been higher.",
    name: "James Okoro",
    role: "Director of HR, Canopy Labs",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none animate-glow-pulse"
        style={{ background: "radial-gradient(ellipse, oklch(0.25 0.15 270 / 0.2), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? "reveal-up" : "reveal-hidden"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-tight">
            Loved by teams
            <br />
            <span className="text-foreground/50">everywhere</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`liquid-glass rounded-2xl p-8 group hover:scale-[1.01] transition-transform duration-300 ${
                isVisible ? `reveal-scale stagger-${i + 1}` : "reveal-hidden"
              }`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-sm font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)" }}
                >
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)" }}
                  >
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
