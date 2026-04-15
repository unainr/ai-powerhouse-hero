import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@/assets/logo.png";

const navItems = [
  { label: "Features", hasDropdown: true },
  { label: "Solutions", hasDropdown: false },
  { label: "Plans", hasDropdown: false },
  { label: "Learning", hasDropdown: true },
];

export function Navbar() {
  return (
    <div>
      <nav className="w-full py-5 px-8 flex flex-row justify-between items-center">
        <img src={logoSrc} alt="Logo" className="h-8" />
        <div className="flex items-center gap-1">
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
        <Button variant="heroSecondary" className="rounded-full px-4 py-2">
          Sign Up
        </Button>
      </nav>
      <div className="mt-[3px] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </div>
  );
}
