import { useState } from "react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { siteConfig } from "@/lib/config";
import { Phone, Mail, MapPin, Clock, Shield, Zap, Send } from "lucide-react";

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${className} ${isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", address: "", serviceType: "", propertyType: "residential", emergency: false, description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you within 1 business hour.");
  };

  return (
    <Layout>
      <SeoHead page="contact" />
      <section className="py-20 lg:py-28">
        <div className="container">
          <Section>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">Get a Free Quote</h1>
              <p className="text-lg text-muted-foreground text-pretty">Tell us about your project and we'll get back to you within 1 business hour.</p>
            </div>
          </Section>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <Section className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 rounded-xl border bg-card shadow-sm space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name *</label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-10 px-3 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone *</label>
                    <input
                      required type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-10 px-3 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Service Address</label>
                  <input
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={`123 Main St, ${siteConfig.address.city} ${siteConfig.address.state}`}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Service Type</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full h-10 px-3 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {siteConfig.services.map((s) => (
                        <option key={s.formLabel} value={s.formLabel}>{s.formLabel}</option>
                      ))}
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Property Type</label>
                    <div className="flex gap-4 h-10 items-center">
                      {["residential", "commercial"].map((type) => (
                        <label key={type} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="radio"
                            name="propertyType"
                            value={type}
                            checked={formData.propertyType === type}
                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                            className="accent-primary"
                          />
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="emergency"
                    checked={formData.emergency}
                    onChange={(e) => setFormData({ ...formData, emergency: e.target.checked })}
                    className="accent-destructive"
                  />
                  <label htmlFor="emergency" className="text-sm font-medium text-destructive">This is an emergency</label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Description of Work Needed</label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button variant="hero" size="lg" type="submit" className="w-full">
                  <Send className="w-4 h-4" /> Submit Request
                </Button>
              </form>
            </Section>

            {/* Contact Info */}
            <Section className="lg:col-span-2" delay={120}>
              <div className="space-y-6">
                <div className="p-6 rounded-xl border bg-card shadow-sm space-y-5">
                  <h3 className="font-heading font-semibold text-lg">Contact Information</h3>
                  {[
                    { icon: Phone, label: siteConfig.phone, sub: "Main Line", href: `tel:${siteConfig.phoneRaw}` },
                    { icon: Phone, label: siteConfig.emergencyPhone, sub: "Emergency Line (24/7)", href: `tel:${siteConfig.emergencyPhoneRaw}` },
                    { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
                    { icon: Clock, label: siteConfig.hours },
                    { icon: MapPin, label: siteConfig.address.full },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">{item.label}</a>
                        ) : (
                          <p className="text-sm font-medium">{item.label}</p>
                        )}
                        {item.sub && <p className="text-xs text-muted-foreground">{item.sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-xl border bg-card shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">License #{siteConfig.licenseNumber}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">All work performed to NEC code standards. Licensed, bonded, and insured.</p>
                </div>

                <div className="p-6 rounded-xl border bg-card shadow-sm flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Free Estimates</p>
                    <p className="text-xs text-muted-foreground">No obligation. No pressure. Just honest answers.</p>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
