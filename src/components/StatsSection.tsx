const stats = [
  { value: "98%", label: "Candidate Match Rate" },
  { value: "10x", label: "Faster Hiring" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "2M+", label: "Placements Made" },
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 relative">
      {/* Subtle gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.3 0.15 270 / 0.3), transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl md:text-6xl font-display font-bold bg-clip-text text-transparent mb-2"
                style={{
                  backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)",
                }}
              >
                {stat.value}
              </div>
              <p className="text-sm text-foreground/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
