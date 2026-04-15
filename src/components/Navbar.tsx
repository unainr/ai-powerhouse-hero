import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { label: "Features", hasDropdown: true },
  { label: "Solutions", hasDropdown: false },
  { label: "Plans", hasDropdown: false },
  { label: "Learning", hasDropdown: true },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <nav className="w-full py-5 px-6 md:px-8 flex flex-row justify-between items-center">
        {/* Logo as text */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg liquid-glass flex items-center justify-center">
            <span
              className="text-sm font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7, #fcd34d)" }}
            >
              P
            </span>
          </div>
          <span className="text-foreground font-semibold text-lg font-display tracking-tight">Power AI</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200 rounded-md"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="heroSecondary" className="rounded-full px-4 py-2">
            Sign Up
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200 rounded-md text-left"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </button>
          ))}
          <Button variant="heroSecondary" className="rounded-full px-4 py-2 mt-2 w-fit">
            Sign Up
          </Button>
        </div>
      )}

      <div className="mt-[3px] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </div>
  );
}
