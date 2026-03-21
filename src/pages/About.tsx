import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Shield, Award, Users, BookOpen, CheckCircle2, Zap } from "lucide-react";

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${className} ${isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <Section>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" /> About Volt Electric
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6 leading-[1.1]">
              Founded by a Master Electrician. Built on Safety.
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
              Volt Electric was started in 2008 by Michael Reeves, a master electrician with over 25 years of experience. After working for large commercial firms, Michael set out to build a company where every job — no matter how small — gets the same attention to safety and code compliance.
            </p>
          </Section>

          <Section delay={100}>
            <div className="bg-card border rounded-xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold mb-1">Michael Reeves, Master Electrician</h2>
                  <p className="text-sm text-muted-foreground mb-3">Founder & Owner · License #EC-2847591</p>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Michael holds a Master Electrician license in the state of Texas, NFPA certifications, and is a Generac authorized service dealer. He personally oversees every project and ensures it meets the highest standards of safety and craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Users, title: "Credentialed Team", desc: "Every electrician on our team holds a journeyman or master license. No apprentices working unsupervised — ever." },
              { icon: BookOpen, title: "Continuing Education", desc: "Our team completes annual code update training and manufacturer certifications to stay current." },
              { icon: Shield, title: "Safety Record", desc: "Zero workplace incidents since founding. Safety isn't a box to check — it's how we operate." },
              { icon: CheckCircle2, title: "100% Permit & Inspection", desc: "We pull every permit and pass every inspection. If it's not to code, we're not done." },
            ].map((item, i) => (
              <Section key={item.title} delay={i * 80}>
                <div className="p-6 rounded-xl border bg-card">
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{item.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
