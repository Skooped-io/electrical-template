import { useState } from "react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { siteConfig } from "@/lib/config";
import { MapPin, Zap } from "lucide-react";

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${className} ${isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const categories = ["All", "Residential", "Commercial", "EV/Generator", "Lighting"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const projects = siteConfig.projects;
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <SeoHead page="projects" />
      <section className="py-20 lg:py-28">
        <div className="container">
          <Section>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">Our Projects</h1>
              <p className="text-lg text-muted-foreground text-pretty">Real projects. Real results. Every one permitted, inspected, and code-compliant.</p>
            </div>
          </Section>

          <Section delay={80}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                    filter === c ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Section key={p.title} delay={i * 80}>
                <div className="p-6 rounded-xl border bg-card shadow-sm h-full flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary mb-3">
                    <Zap className="w-3 h-3" />
                    {p.category}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed flex-1 mb-4">{p.scope}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" /> {p.location}
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
