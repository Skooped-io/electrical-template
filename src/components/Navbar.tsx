import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Safety", to: "/safety" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Safety Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-medium">
        <span className="inline-flex items-center gap-1.5">
          <Zap className="w-4 h-4" />
          Licensed &amp; Insured Electricians — Call{" "}
          <a href="tel:5551234567" className="underline font-semibold">(555) 123-4567</a>{" "}
          for Safe, Code-Compliant Work
        </span>
      </div>

      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight">
            <Zap className="w-6 h-6 text-primary" />
            Volt Electric
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:5551234567" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t bg-card pb-4">
            <nav className="container flex flex-col gap-1 pt-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === l.to
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-3 px-3">
                <a href="tel:5551234567" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <Phone className="w-4 h-4" /> (555) 123-4567
                </a>
                <Button variant="hero" asChild>
                  <Link to="/contact" onClick={() => setOpen(false)}>Get a Free Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
