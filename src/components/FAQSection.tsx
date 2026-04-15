import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Power AI's matching algorithm work?",
    answer: "Our AI uses a multi-dimensional scoring model that evaluates 200+ data points — from hard skills and experience to cultural alignment and growth potential. It continuously learns from your hiring decisions to improve accuracy over time.",
  },
  {
    question: "Can I integrate Power AI with my existing ATS?",
    answer: "Yes. Power AI integrates with 50+ platforms including Greenhouse, Lever, Workday, SAP SuccessFactors, and more. Setup takes under 10 minutes with our guided onboarding.",
  },
  {
    question: "How does Power AI ensure bias-free hiring?",
    answer: "We use fairness-aware algorithms that are regularly audited by third-party organizations. Candidate evaluations are based purely on merit, competencies, and role fit — never on protected characteristics.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include 24/7 email support. Pro and Enterprise plans get dedicated account managers, live onboarding sessions, and priority Slack support with <2 hour response times.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. Power AI is SOC 2 Type II certified, GDPR compliant, and all data is encrypted at rest and in transit. We never sell or share your data with third parties.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most teams see measurable improvements within the first 2 weeks. On average, clients report a 73% reduction in time-to-hire and 40% improvement in candidate quality within 90 days.",
  },
];

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-8" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? "reveal-up" : "reveal-hidden"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-tight">
            Got questions?
            <br />
            <span className="text-foreground/50">We've got answers</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`liquid-glass rounded-xl overflow-hidden transition-all duration-300 ${
                  isVisible ? `reveal-up stagger-${i + 1}` : "reveal-hidden"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-sm md:text-base font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground/40 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-foreground/50 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
