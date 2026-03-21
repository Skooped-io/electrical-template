import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { BookOpen, AlertTriangle, Zap, BatteryCharging, ChevronRight } from "lucide-react";

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${className} ${isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const articles = [
  {
    icon: Zap,
    title: "Electrical Safety Tips for Homeowners",
    items: [
      "Never overload outlets or power strips — use one high-wattage appliance per outlet",
      "Test GFCI outlets monthly by pressing the 'Test' button",
      "Replace any outlets or switches that feel warm to the touch",
      "Keep water away from all electrical outlets and devices",
      "Use extension cords temporarily only — never as permanent wiring",
      "Install tamper-resistant outlets if you have young children",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Signs Your Wiring Is Outdated",
    items: [
      "Frequent circuit breaker trips",
      "Flickering or dimming lights when appliances run",
      "Discolored or warm outlet covers",
      "Burning smell near outlets or switches",
      "Two-prong outlets with no ground",
      "Aluminum or knob-and-tube wiring (pre-1970s homes)",
      "Buzzing sounds from outlets or switches",
    ],
  },
  {
    icon: BatteryCharging,
    title: "What To Do During a Power Outage",
    items: [
      "Check if neighbors also lost power — if not, it may be your panel",
      "Unplug sensitive electronics to prevent surge damage on restoration",
      "Use flashlights, not candles, to reduce fire risk",
      "Keep refrigerator and freezer doors closed",
      "If you smell gas or see sparking, leave immediately and call 911",
      "Call your utility company to report the outage",
      "Consider a whole-house generator for future preparedness",
    ],
  },
  {
    icon: BookOpen,
    title: "Understanding Your Electrical Panel",
    items: [
      "Your panel is the heart of your home's electrical system",
      "Each breaker protects a specific circuit from overload",
      "A tripping breaker is a safety feature — not a nuisance",
      "Main breaker controls power to the entire house",
      "100A panels may not support modern appliances and EV chargers",
      "Federal Pacific and Zinsco panels should be replaced immediately",
      "Only a licensed electrician should work inside your panel",
    ],
  },
];

export default function Safety() {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <Section>
            <div className="text-center mb-16">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">Electrical Safety Resources</h1>
              <p className="text-lg text-muted-foreground text-pretty">Knowledge is your first line of defense. Learn how to keep your home and family safe.</p>
            </div>
          </Section>

          <div className="space-y-8">
            {articles.map((a, i) => (
              <Section key={a.title} delay={i * 80}>
                <div className="p-8 rounded-xl border bg-card shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <a.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-heading text-xl font-bold">{a.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
