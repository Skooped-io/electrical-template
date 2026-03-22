import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Layout from "@/components/Layout";
import SeoHead, { LocalBusinessJsonLd } from "@/components/SeoHead";
import { siteConfig, getImage } from "@/lib/config";
import heroImg from "@/assets/hero-electrician.jpg";
import {
  Zap, Lightbulb, BatteryCharging, Shield, Home, Building2, Wrench,
  AlertTriangle, Star, ChevronRight, Phone, CheckCircle2
} from "lucide-react";

const iconMap: Record<string, any> = { Zap, Wrench, Lightbulb, BatteryCharging, Shield, Home, Building2, AlertTriangle };

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const heroReveal = useScrollReveal();

  return (
    <Layout>
      <SeoHead page="home" />
      <LocalBusinessJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden bg-card">
        <div className="container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={heroReveal.ref}
              className={heroReveal.isVisible ? "animate-reveal-left" : "opacity-0"}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-foreground px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 text-primary" />
                Licensed · Bonded · Insured
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.08] mb-6">
                {siteConfig.seo.home.h1.split("Electricians That Get It Right.")[0]}
                <span className="text-primary">Electricians That Get It Right.</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-lg mb-8 leading-relaxed">
                Residential and commercial electrical services done safely, to code, every time. Serving {siteConfig.serviceArea} since {siteConfig.yearEstablished}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get a Free Quote <ChevronRight className="w-4 h-4" /></Link>
                </Button>
                <Button variant="hero-accent" size="lg" asChild>
                  <a href={`tel:${siteConfig.phoneRaw}`}><Phone className="w-4 h-4" /> Emergency Service</a>
                </Button>
              </div>
            </div>
            <div className={`${heroReveal.isVisible ? "animate-reveal-right" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={getImage(null, 'hero', heroImg)}
                  alt={`${siteConfig.businessName} - Licensed electrician working on a modern electrical panel`}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  data-image-slot="hero"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <Section>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">Our Electrical Services</h2>
              <p className="text-muted-foreground text-pretty">From panel upgrades to EV chargers — we handle every electrical need for homes and businesses.</p>
            </div>
          </Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.services.map((s, i) => {
              const Icon = iconMap[s.icon] || Zap;
              return (
                <Section key={s.title} delay={i * 80}>
                  <Link
                    to="/services"
                    className="group flex flex-col p-6 rounded-xl bg-card border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{s.shortDesc}</p>
                  </Link>
                </Section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Licensed Matters */}
      <section className="py-20 lg:py-28 bg-card border-y">
        <div className="container">
          <Section>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 text-destructive text-sm font-semibold mb-4">
                <AlertTriangle className="w-4 h-4" />
                Important Safety Information
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
                Why You Should Never Hire an Unlicensed Electrician
              </h2>
              <p className="text-muted-foreground text-pretty">Electrical work isn't a DIY project. The risks are real — and so are the consequences.</p>
            </div>
          </Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fire Risk", desc: "Faulty wiring is a leading cause of house fires. Licensed electricians follow code to keep you safe." },
              { title: "Insurance Issues", desc: "Unlicensed work can void your homeowner's insurance when you need it most." },
              { title: "Code Violations", desc: "Failed inspections mean costly rework. We pull permits and pass inspection the first time." },
              { title: "Resale Value", desc: "Unpermitted electrical work must be disclosed and can tank your home's value." },
            ].map((item, i) => (
              <Section key={item.title} delay={i * 80}>
                <div className="p-6 rounded-xl border bg-background">
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{item.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <Section>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">Residential &amp; Commercial Expertise</h2>
              <p className="text-muted-foreground text-pretty">Whether it's your home or your business, we deliver the same standard of excellence.</p>
            </div>
          </Section>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Residential", icon: Home, items: siteConfig.residentialServices },
              { title: "Commercial", icon: Building2, items: siteConfig.commercialServices },
            ].map((card, i) => (
              <Section key={card.title} delay={i * 120}>
                <div className="p-8 rounded-xl border bg-card shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold">{card.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-14 border-y bg-card">
        <div className="container">
          <Section>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              {siteConfig.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm font-medium">
                  <Shield className="w-4 h-4 text-primary" />
                  {cert}
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <Section>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-pretty">Safety, professionalism, and quality — every time.</p>
            </div>
          </Section>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.reviews.map((r, i) => (
              <Section key={r.name} delay={i * 100}>
                <div className="p-6 rounded-xl border bg-card shadow-sm h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-pretty leading-relaxed flex-1 mb-4">"{r.text}"</p>
                  <p className="text-sm font-semibold">{r.name}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-20 lg:py-24">
        <div className="container text-center">
          <Section>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">Don't Risk It With Unlicensed Work.</h2>
            <p className="text-secondary-foreground/70 max-w-lg mx-auto mb-8 text-pretty">Get safe, permitted, code-compliant electrical work from licensed professionals. Free quotes for every project.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get a Free Quote <ChevronRight className="w-4 h-4" /></Link>
              </Button>
              <Button variant="hero-accent" size="lg" asChild>
                <a href={`tel:${siteConfig.phoneRaw}`}><Phone className="w-4 h-4" /> {siteConfig.phone}</a>
              </Button>
            </div>
          </Section>
        </div>
      </section>
    </Layout>
  );
}
