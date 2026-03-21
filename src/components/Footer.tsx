import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold">
              <Zap className="w-6 h-6 text-primary" />
              Volt Electric
            </Link>
            <p className="text-sm text-secondary-foreground/70 text-pretty leading-relaxed">
              Licensed master electricians providing safe, code-compliant electrical services for homes and businesses.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary-foreground/50">
              <Shield className="w-4 h-4" />
              License #EC-2847591
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm tracking-wide uppercase text-secondary-foreground/60">Services</h4>
            <nav className="flex flex-col gap-2">
              {["Panel Upgrades", "Wiring & Rewiring", "Lighting Installation", "EV Charger Install", "Generator Installation", "Smart Home Wiring", "Commercial Electrical", "Emergency Service"].map((s) => (
                <Link key={s} to="/services" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">{s}</Link>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm tracking-wide uppercase text-secondary-foreground/60">Company</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Projects", to: "/projects" },
                { label: "Safety Resources", to: "/safety" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm tracking-wide uppercase text-secondary-foreground/60">Contact</h4>
            <div className="space-y-3">
              <a href="tel:5551234567" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> (555) 123-4567
              </a>
              <a href="mailto:info@voltelectric.com" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> info@voltelectric.com
              </a>
              <div className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> 1234 Circuit Drive<br />Austin, TX 78701
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Volt Electric. All rights reserved.</p>
          <p>Licensed &amp; Insured · NEC Code Compliant · License #EC-2847591</p>
        </div>
      </div>
    </footer>
  );
}
