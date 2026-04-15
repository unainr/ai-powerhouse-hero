export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg liquid-glass flex items-center justify-center">
                <span
                  className="text-xs font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7, #fcd34d)" }}
                >
                  P
                </span>
              </div>
              <span className="text-foreground font-semibold font-display tracking-tight">
                Power AI
              </span>
            </div>
            <p className="text-sm text-foreground/40 leading-relaxed max-w-xs">
              The most powerful AI ever deployed in talent acquisition.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2.5">
              {["Features", "Solutions", "Pricing", "Integrations"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-foreground/40 hover:text-foreground/70 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-foreground/40 hover:text-foreground/70 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {["Privacy", "Terms", "Security", "GDPR"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-foreground/40 hover:text-foreground/70 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-foreground/10 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/30">
            © 2026 Power AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <span
                key={social}
                className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors cursor-pointer"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
