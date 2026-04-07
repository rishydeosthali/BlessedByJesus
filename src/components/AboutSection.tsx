import FadeIn from "./FadeIn";
import { Scissors, Heart, Clock, MapPin } from "lucide-react";
import { MENS_HAIRCUT_IMAGES } from "@/data/mensHaircuts";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-secondary/20 px-6 pb-14 pt-24 md:px-12 md:pb-16 md:pt-24 lg:px-20 lg:pb-20 lg:pt-32"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left - decorative visual */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden border border-border bg-card">
                <img
                  src={MENS_HAIRCUT_IMAGES[0]}
                  alt="Men's haircut at Blessed By Jesus"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-6 border border-primary/15 pointer-events-none" />
                <div className="absolute bottom-8 left-0 right-0 z-10 px-8 text-center">
                  <p className="font-body text-[10px] uppercase tracking-[0.4em] text-primary/90">Est. 2013</p>
                  <p className="font-editorial mt-3 italic text-lg text-primary/80">Look sharp. Walk out confident.</p>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r border-primary/20" />
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t border-l border-primary/20" />
            </div>
          </FadeIn>

          {/* Right - content */}
          <FadeIn direction="right" delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 gold-line" />
                <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary/80">About Us</span>
              </div>

              <h2 className="editorial-heading text-5xl uppercase leading-[1.05] tracking-tight text-foreground md:text-6xl mb-8">
                About Our
                <br />
                <span className="italic text-primary/80">Barbershop</span>
              </h2>

              <div className="mb-10 grid grid-cols-2 gap-8 border-y border-border py-8">
                {[
                  { icon: Scissors, label: "Precision-first", desc: "Clean fades & sharp lineups" },
                  { icon: Heart, label: "Community First", desc: "More than just a haircut" },
                  { icon: Clock, label: "13+ Years", desc: "Of perfecting the craft" },
                  { icon: MapPin, label: "Your Neighborhood", desc: "Local & accessible" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-border text-primary/60">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="mt-0.5 font-body text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mb-6 font-body text-sm leading-[1.8] text-muted-foreground">
                Blessed By Jesus Barbershop is built on community, consistency, and the craft of making every client look and feel their best. Every haircut is an act of care — sharp lines, clean finishes, and the confidence to walk out ready for whatever&apos;s next.
              </p>
              <p className="mb-10 font-body text-sm leading-[1.8] text-muted-foreground">
                Our barbers are more than skilled — they're passionate. With years of experience in fades, tapers, beard work, and everything in between, we bring precision and heart to every chair.
              </p>

              <p className="font-editorial italic text-lg text-foreground/60">
                "We believe great style starts with a clean canvas and a steady hand — respecting the craft and delivering results that speak for themselves."
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
