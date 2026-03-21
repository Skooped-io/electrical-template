import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Zap, Wrench, Lightbulb, BatteryCharging, Shield, Home, Building2,
  AlertTriangle, ChevronRight
} from "lucide-react";

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${className} ${isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const serviceDetails = [
  {
    icon: Zap, title: "Panel Upgrades",
    desc: "Older homes often have 60 or 100 amp panels that can't keep up with modern appliances, EV chargers, and HVAC systems. We upgrade to 200 amp service safely and to code.",
    details: ["Upgrade from 100A to 200A service", "Replace Federal Pacific & Zinsco panels", "Add sub-panels for workshops or additions", "Whole-home surge protection"],
  },
  {
    icon: Wrench, title: "Wiring & Rewiring",
    desc: "Aluminum wiring, knob-and-tube, and degraded insulation are fire hazards. We bring your home's wiring up to current NEC standards.",
    details: ["Old home rewiring (knob-and-tube, aluminum)", "New construction rough-in and finish", "Dedicated circuits for appliances", "GFCI and AFCI protection upgrades"],
  },
  {
    icon: Lightbulb, title: "Lighting Installation",
    desc: "From recessed can lights to landscape lighting, we design and install lighting that transforms your space.",
    details: ["Recessed / can light installation", "Under-cabinet & accent lighting", "Landscape & outdoor lighting", "LED conversion & smart lighting"],
  },
  {
    icon: BatteryCharging, title: "EV Charger Installation",
    desc: "Level 2 home charging is the most cost-effective way to charge. We install all major brands with proper permits.",
    details: ["Tesla, ChargePoint, JuiceBox compatible", "Dedicated 240V circuit installation", "Load calculations & panel assessment", "Full permit and inspection handling"],
  },
  {
    icon: Shield, title: "Generator Installation",
    desc: "Whole-house standby generators provide automatic backup power during outages. We're authorized dealers for Generac and Kohler.",
    details: ["Generac & Kohler whole-house systems", "Automatic transfer switch installation", "Natural gas & propane connections", "Maintenance plans available"],
  },
  {
    icon: Home, title: "Smart Home Wiring",
    desc: "Future-proof your home with structured wiring for smart switches, hubs, and whole-home automation systems.",
    details: ["Smart switch & dimmer installation", "Structured wiring for home automation", "Wi-Fi access point wiring", "Whole-home audio pre-wiring"],
  },
  {
    icon: Building2, title: "Commercial Electrical",
    desc: "Tenant improvements, code compliance upgrades, and preventive maintenance for commercial properties.",
    details: ["Tenant improvement buildouts", "Emergency & exit lighting systems", "Code violation remediation", "Preventive maintenance contracts"],
  },
  {
    icon: AlertTriangle, title: "Emergency Service",
    desc: "Electrical emergencies don't wait — neither do we. 24/7 availability with rapid response times.",
    details: ["24/7 emergency availability", "30-minute average response time", "Sparking outlets & burning smells", "Power outage diagnosis & restoration"],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container">
          <Section>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">Our Electrical Services</h1>
              <p className="text-lg text-muted-foreground text-pretty">Every service backed by licensed expertise, proper permits, and code-compliant workmanship.</p>
            </div>
          </Section>

          <div className="space-y-8">
            {serviceDetails.map((s, i) => (
              <Section key={s.title} delay={i * 60}>
                <div className="p-8 rounded-xl border bg-card shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading text-2xl font-bold mb-2">{s.title}</h2>
                      <p className="text-muted-foreground text-pretty leading-relaxed mb-4">{s.desc}</p>
                      <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                        {s.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm">
                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <Button variant="hero" size="default" asChild>
                        <Link to="/contact">Get a Quote <ChevronRight className="w-4 h-4" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
