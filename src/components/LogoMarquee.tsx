const brands = ["Vortex", "Nimbus", "Prysma", "Cirrus", "Kynder", "Halcyn"];

function BrandLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-xs font-semibold text-foreground">
        {name[0]}
      </div>
      <span className="text-base font-semibold text-foreground">{name}</span>
    </div>
  );
}

export function LogoMarquee() {
  const allBrands = [...brands, ...brands];

  return (
    <div className="pb-10 max-w-5xl mx-auto w-full px-8">
      <div className="flex items-center gap-12">
        <p className="text-foreground/50 text-sm shrink-0 leading-5">
          Relied on by brands
          <br />
          across the globe
        </p>

        <div className="overflow-hidden flex-1">
          <div className="flex gap-16 animate-marquee w-max">
            {allBrands.map((name, i) => (
              <BrandLogo key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
