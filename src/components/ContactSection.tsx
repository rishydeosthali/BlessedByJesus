import FadeIn from "./FadeIn";
import type { LucideIcon } from "lucide-react";
import { Phone, MapPin, Clock } from "lucide-react";

type ContactCard = {
  icon: LucideIcon;
  title: string;
  line1: string;
  line2?: string;
  line3?: string;
  tel?: string;
};

const contactCards: ContactCard[] = [
  {
    icon: Phone,
    title: "Call Us",
    line1: "(214) 694-3634",
    line2: "Walk-ins welcome",
    tel: "+12146943634",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    line1: "401 N Central Expy, Suite 500",
    line2: "The Diamond Barbershop",
    line3: "Richardson, TX 75080",
  },
  {
    icon: Clock,
    title: "Hours",
    line1: "7:00 AM – 11:59 PM",
    line2: "Open daily",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-secondary/20 px-6 pt-8 pb-24 md:px-12 md:pt-10 md:pb-28 lg:px-20 lg:pt-10 lg:pb-32"
    >
      <div className="absolute inset-0 bg-grid opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left heading */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 gold-line" />
                <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary/80">Contact</span>
              </div>
              <h2 className="editorial-heading text-5xl uppercase leading-[1.05] tracking-tight text-foreground md:text-6xl mb-6">
                Plan Your
                <br />
                <span className="italic text-primary/80">Visit</span>
              </h2>
              <p className="max-w-sm font-body text-sm leading-relaxed text-muted-foreground">
                Walk-ins welcome. Book ahead to guarantee your spot. We&apos;re here to make sure you leave
                looking and feeling your best.
              </p>
            </FadeIn>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
              {contactCards.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.12}>
                  <div className="group flex h-full flex-col bg-card p-8 text-center transition-all duration-500 hover:bg-secondary/40">
                    <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-border text-primary/60 transition-all duration-500 group-hover:border-primary/30 group-hover:text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 font-display text-base font-semibold text-foreground">{item.title}</h3>
                    {item.tel ? (
                      <a
                        href={`tel:${item.tel}`}
                        className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.line1}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-muted-foreground">{item.line1}</p>
                    )}
                    {item.line2 ? (
                      <p className="mt-1 font-body text-xs text-muted-foreground/70">{item.line2}</p>
                    ) : null}
                    {item.line3 ? (
                      <p className="mt-1 font-body text-xs text-muted-foreground/70">{item.line3}</p>
                    ) : null}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
