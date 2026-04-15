import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroContent } from "@/components/HeroContent";
import { LogoMarquee } from "@/components/LogoMarquee";
import { BackgroundVideo } from "@/components/BackgroundVideo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Power AI — AI for Talent Acquisition" },
      { name: "description", content: "The most powerful AI ever deployed in talent acquisition." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundVideo />

      <div className="relative z-10 min-h-screen flex flex-col" style={{ overflow: "visible" }}>
        <Navbar />
        <HeroContent />
        <LogoMarquee />
      </div>
    </div>
  );
}
