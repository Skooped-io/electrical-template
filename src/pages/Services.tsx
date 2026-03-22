import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { siteConfig, slugify } from "@/lib/config";
import {
  Zap, Wrench, Lightbulb, BatteryCharging, Shield, Home, Building2,
  AlertTriangle, ChevronRight
} from "lucide-react";

const iconMap: Record<string, any> = { Zap, Wrench, Lightbulb, BatteryCharging, Shield, Home, Building2, AlertTriangle };

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${className} ${isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <Layout>
      <SeoHead page="services" />
      <section className="py-20 lg:py-28">
        <div className="container">
          <Section>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">Our Electrical Services</h1>
              <p className="text-lg text-muted-foreground text-pretty">Every service backed by licensed expertise, proper permits, and code-compliant workmanship.</p>
            </div>
          </Section>

          <div className="space-y-8">
            {siteConfig.services.map((s, i) => {
              const Icon = iconMap[s.icon] || Zap;
              return (
                <Section key={s.title} delay={i * 60}>
                  <div className="p-8 rounded-xl border bg-card shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
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
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
