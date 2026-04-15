import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <div className="flex-1 flex items-center justify-center overflow-visible relative px-6">
      {/* Blurred overlay shape */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[984px] h-[300px] md:h-[527px] opacity-90 pointer-events-none"
        style={{ filter: "blur(82px)", backgroundColor: "oklch(0.05 0.02 280)" }}
      />

      <div className="relative z-10 text-center">
        <h1 className="text-[72px] sm:text-[120px] md:text-[160px] lg:text-[220px] font-normal leading-[1.02] tracking-[-0.024em] font-display">
          <span className="text-foreground">Power </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
            }}
          >
            AI
          </span>
        </h1>

        <p className="text-hero-sub text-base md:text-lg leading-7 md:leading-8 max-w-md mx-auto mt-[9px] opacity-80">
          The most powerful AI ever deployed
          <br />
          in talent acquisition
        </p>

        <Button
          variant="heroSecondary"
          className="rounded-full px-6 py-5 md:px-[29px] md:py-[24px] mt-[25px] text-sm md:text-base"
        >
          Schedule a Consult
        </Button>
      </div>
    </div>
  );
}
