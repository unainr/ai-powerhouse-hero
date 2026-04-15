import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <div className="flex-1 flex items-center justify-center overflow-visible relative">
      {/* Blurred overlay shape */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] h-[527px] opacity-90 bg-gray-950 pointer-events-none"
        style={{ filter: "blur(82px)" }}
      />

      <div className="relative z-10 text-center">
        <h1
          className="text-[220px] font-normal leading-[1.02] tracking-[-0.024em] font-display"
        >
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

        <p className="text-hero-sub text-lg leading-8 max-w-md mx-auto mt-[9px] opacity-80">
          The most powerful AI ever deployed
          <br />
          in talent acquisition
        </p>

        <Button
          variant="heroSecondary"
          className="rounded-full px-[29px] py-[24px] mt-[25px]"
        >
          Schedule a Consult
        </Button>
      </div>
    </div>
  );
}
