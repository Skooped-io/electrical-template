import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { siteConfig, slugify, getServiceBySlug } from "@/lib/config";
import { useEffect } from "react";
import {
  Zap, Wrench, Lightbulb, BatteryCharging, Shield, Home, Building2,
  AlertTriangle, ChevronRight, Phone, MapPin, Clock
} from "lucide-react";

const iconMap: Record<string, any> = { Zap, Wrench, Lightbulb, BatteryCharging, Shield, Home, Building2, AlertTriangle };

const serviceContent: Record<string, string[]> = {
  "panel-upgrades": [
    "Your electrical panel is the heart of your home's power system. If your home was built before the 1990s, there's a good chance your panel is undersized for today's electrical demands — from HVAC systems and kitchen appliances to EV chargers and home offices.",
    "A panel upgrade from 100 amps to 200 amps ensures your home can safely handle modern electrical loads without tripping breakers or creating fire hazards. Our licensed electricians assess your current system, pull all required permits, and install a new panel that meets current NEC standards.",
    "We also specialize in replacing recalled panels from manufacturers like Federal Pacific and Zinsco, which have known safety defects. Every upgrade includes a full inspection and passes city inspection on the first visit."
  ],
  "wiring-rewiring": [
    "Outdated wiring is one of the leading causes of residential electrical fires. Homes with knob-and-tube wiring, aluminum wiring, or degraded insulation are at elevated risk and may not be insurable without remediation.",
    "Our rewiring services bring your home up to current National Electrical Code standards. We carefully plan each project to minimize disruption, using existing pathways wherever possible and patching drywall to leave your home looking clean.",
    "Whether you're renovating, adding a room, or simply need to replace aging wiring, our team handles everything from permits to final inspection. We install modern copper wiring with proper GFCI and AFCI protection throughout."
  ],
  "lighting-installation": [
    "Great lighting transforms a space — it sets the mood, highlights architectural features, and improves functionality. Whether you're looking for recessed can lights, under-cabinet LEDs, or a complete landscape lighting design, we handle it all.",
    "Our electricians work with you to plan the layout, select the right fixtures, and install everything to code. We're experienced with dimmer switches, smart lighting controls, and energy-efficient LED conversions that can cut your lighting energy costs significantly.",
    "From interior remodels to outdoor entertaining areas, we design lighting solutions that are both beautiful and practical. All installations include proper circuiting and switch placement for maximum convenience."
  ],
  "ev-charger-installation": [
    "Charging your electric vehicle at home is the most convenient and cost-effective option. A Level 2 charger provides a full charge overnight, eliminating range anxiety and daily trips to public charging stations.",
    "We install all major EV charger brands including Tesla Wall Connector, ChargePoint, JuiceBox, and more. Every installation includes a thorough load calculation to ensure your electrical panel can support the additional demand safely.",
    "Our team handles the complete process — from initial assessment and permit application to final installation and city inspection. We'll advise on the optimal charger location, run the dedicated 240V circuit, and ensure everything meets manufacturer specifications and local codes."
  ],
  "generator-installation": [
    "Power outages can last hours or even days. A whole-house standby generator provides automatic backup power within seconds of an outage, keeping your lights, HVAC, refrigerator, and critical systems running without interruption.",
    "As authorized dealers for Generac and Kohler, we install properly sized generators matched to your home's electrical load. Every installation includes an automatic transfer switch that seamlessly switches power sources when utility power is lost.",
    "We handle the complete installation including concrete pad preparation, gas line coordination, electrical connections, and all required permits and inspections. We also offer ongoing maintenance plans to keep your generator ready when you need it most."
  ],
  "smart-home-wiring": [
    "Modern smart homes require more than just Wi-Fi. Reliable home automation depends on proper structured wiring — dedicated circuits for smart hubs, hardwired access points for consistent connectivity, and the right infrastructure behind the walls.",
    "We install smart switches, dimmers, and outlets from leading brands like Lutron, Leviton, and others. Our structured wiring services include Cat6 ethernet runs, centralized media panels, and pre-wiring for whole-home audio and video distribution.",
    "Whether you're building new or retrofitting an existing home, we design the wiring infrastructure to support today's smart devices and tomorrow's innovations. Every installation is clean, labeled, and documented for future reference."
  ],
  "commercial-electrical": [
    "Commercial electrical work demands precision, code compliance, and minimal disruption to your business operations. From tenant improvement buildouts to complete electrical system overhauls, our licensed team delivers reliable commercial electrical services.",
    "We work with property managers, general contractors, and business owners on projects ranging from retail and restaurant buildouts to office renovations and warehouse upgrades. Our commercial services include emergency and exit lighting, dedicated equipment circuits, and data/low-voltage wiring.",
    "We also offer preventive maintenance contracts that help identify potential issues before they become costly problems or safety hazards. Every commercial project is permitted, inspected, and documented for your records."
  ],
  "emergency-service": [
    "Electrical emergencies don't follow a schedule — that's why we provide 24/7 emergency response for situations that can't wait. Sparking outlets, burning smells, tripped main breakers, and complete power loss all require immediate professional attention.",
    "Our emergency electricians arrive quickly with fully stocked trucks, ready to diagnose and resolve the issue safely. We prioritize making the situation safe first, then provide a clear explanation of what happened and what's needed to prevent it from recurring.",
    "Don't attempt to fix electrical emergencies yourself — the risk of shock, electrocution, or fire is real. Call us any time, day or night, and a licensed electrician will be dispatched to your location promptly."
  ]
};

function getContent(slug: string, serviceName: string): string[] {
  return serviceContent[slug] || [
    `${serviceName} is one of our core service offerings at ${siteConfig.businessName}. Our licensed team brings years of experience and a commitment to safety and code compliance to every project.`,
    `Whether you need a routine installation or a complex project, we handle everything from initial assessment through final inspection. Every job is performed by licensed electricians and backed by our quality guarantee.`,
    `Contact us today for a free estimate on your ${serviceName.toLowerCase()} project. We serve ${siteConfig.serviceArea} with prompt, professional service.`
  ];
}

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${className} ${isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} in ${siteConfig.address.city}, ${siteConfig.address.state} | ${siteConfig.businessName}`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", `Professional ${service.title.toLowerCase()} services in ${siteConfig.address.city}, ${siteConfig.address.state}. Licensed, insured & code-compliant. Call ${siteConfig.phone} for a free estimate.`);
      }
    }
  }, [service]);

  if (!service || !slug) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
          <Button variant="hero" asChild><Link to="/services">View All Services</Link></Button>
        </section>
      </Layout>
    );
  }

  const Icon = iconMap[service.icon] || Zap;
  const content = getContent(slug, service.title);
  const relatedServices = siteConfig.services.filter(s => s.title !== service.title).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
    },
    areaServed: siteConfig.serviceArea,
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-foreground text-background py-16 lg:py-20">
        <div className="container">
          <Section>
            <nav className="flex items-center gap-2 text-sm text-background/60 mb-6">
              <Link to="/" className="hover:text-background transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/services" className="hover:text-background transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-background/90">{service.title}</span>
            </nav>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">{service.title}</h1>
                <p className="text-lg text-background/70 mt-3 max-w-2xl text-pretty">{service.desc}</p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Content column */}
            <div className="lg:col-span-2 space-y-12">
              <Section>
                <div className="prose prose-lg max-w-none">
                  {content.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-pretty">{p}</p>
                  ))}
                </div>
              </Section>

              {/* What's included */}
              <Section delay={100}>
                <h2 className="font-heading text-2xl font-bold mb-6">What's Included</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* CTA */}
              <Section delay={200}>
                <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
                  <h2 className="font-heading text-2xl font-bold mb-2">Ready to Get Started?</h2>
                  <p className="text-muted-foreground mb-6">Get a free, no-obligation estimate for your {service.title.toLowerCase()} project.</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">Get a Free Estimate <ChevronRight className="w-4 h-4" /></Link>
                    </Button>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                      <Phone className="w-4 h-4" /> {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </Section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* NAP */}
              <Section delay={100}>
                <div className="p-6 rounded-xl border bg-card shadow-sm">
                  <h3 className="font-heading text-lg font-bold mb-4">{siteConfig.businessName}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-foreground transition-colors">{siteConfig.phone}</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{siteConfig.address.full}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{siteConfig.hours}</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4">Serving {siteConfig.serviceArea}</p>
                </div>
              </Section>

              {/* Related services */}
              <Section delay={200}>
                <div className="p-6 rounded-xl border bg-card shadow-sm">
                  <h3 className="font-heading text-lg font-bold mb-4">Other Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((rs) => {
                      const RsIcon = iconMap[rs.icon] || Zap;
                      return (
                        <li key={rs.title}>
                          <Link
                            to={`/services/${slugify(rs.title)}`}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                          >
                            <RsIcon className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">{rs.title}</span>
                            <ChevronRight className="w-3 h-3 text-muted-foreground ml-auto" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Section>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
