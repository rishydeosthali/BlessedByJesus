import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  BOOKSY_BUSINESS_URL,
  BOOKSY_OTHER_SERVICES,
  BOOKSY_POPULAR_SERVICES,
} from "@/data/booksyServices";
import { MENS_HAIRCUT_IMAGES } from "@/data/mensHaircuts";

/** Four cuts — vertical stack for the narrow column between intro + services */
const SERVICES_COLLAGE = [
  MENS_HAIRCUT_IMAGES[0],
  MENS_HAIRCUT_IMAGES[1],
  MENS_HAIRCUT_IMAGES[2],
  MENS_HAIRCUT_IMAGES[3],
] as const;

/** Slight alternating tilt + nudge so the stack reads like a tight vertical deck */
const verticalStackMeta = [
  { rotate: -4, x: -5 },
  { rotate: 3, x: 6 },
  { rotate: -2.5, x: -4 },
  { rotate: 4, x: 5 },
] as const;

function ServicesCollage() {
  return (
    <div
      className="mx-auto flex w-full max-w-[280px] flex-col items-center pb-2 pt-2 sm:max-w-[300px] lg:max-w-[min(100%,280px)] lg:items-stretch xl:max-w-[300px]"
      aria-label="Sample haircuts and styles"
    >
      {SERVICES_COLLAGE.map((src, i) => {
        const m = verticalStackMeta[i];
        return (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0, rotate: m.rotate, x: m.x }}
            transition={{ duration: 0.48, delay: 0.06 * i, ease: [0.25, 0.4, 0.25, 1] }}
            className={`relative aspect-[3/4] w-[90%] shrink-0 overflow-hidden rounded-[2px] border border-primary/30 bg-card shadow-[0_22px_50px_-20px_rgba(0,0,0,0.92),0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-primary/10 ${
              i > 0 ? "-mt-[38%] sm:-mt-[36%] lg:-mt-[34%]" : ""
            }`}
            style={{
              zIndex: i + 1,
              transformOrigin: "50% 100%",
            }}
          >
            <img
              src={src}
              alt={`Men's haircut example ${i + 1}`}
              className="h-full w-full object-cover"
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/[0.06]" />
          </motion.div>
        );
      })}
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof BOOKSY_POPULAR_SERVICES)[number] }) {
  return (
    <FadeIn>
      <motion.div
        whileHover={{ backgroundColor: "hsla(220, 18%, 12%, 1)" }}
        className="group relative h-full cursor-pointer bg-card p-8 md:p-10"
      >
        <span className="mb-4 inline-block rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-body text-[9px] uppercase tracking-[0.2em] text-primary/90">
          Save up to 10%
        </span>

        <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border text-primary/60 transition-all duration-500 group-hover:border-primary/40 group-hover:text-primary">
          <service.icon className="h-5 w-5" />
        </div>

        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground md:text-xl">
            {service.title}
          </h3>
          <div className="text-right">
            <span className="editorial-heading text-3xl text-primary">{service.price}</span>
            <p className="mt-0.5 font-body text-[11px] text-muted-foreground">
              <span className="line-through opacity-60">{service.listPrice}</span>
              <span className="mx-2 text-border">·</span>
              {service.duration}
            </p>
          </div>
        </div>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">{service.description}</p>

        <a
          href={BOOKSY_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary/80"
          onClick={(e) => e.stopPropagation()}
        >
          Book
          <ExternalLink className="h-3 w-3" />
        </a>

        <div className="gold-line absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full" />
      </motion.div>
    </FadeIn>
  );
}

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-visible px-6 pb-24 pt-16 md:px-12 md:pb-28 md:pt-20 lg:px-20 lg:pb-32 lg:pt-24"
    >
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <div className="mx-auto mb-8 max-w-4xl px-2 text-center md:mb-10 md:px-4">
            <div className="mb-3 flex items-center justify-center gap-3 md:mb-4">
              <div className="gold-line h-px w-10" />
              <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary/80">
                Services
              </span>
              <div className="gold-line h-px w-10" />
            </div>
            <h2 className="editorial-heading text-balance text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[clamp(2.75rem,5vw,4.25rem)]">
              WE WORK FOR YOU
            </h2>
            <p className="font-editorial mt-2 text-xl italic text-primary/85 md:mt-2.5 md:text-2xl">
              since 2013
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8 lg:gap-y-10">
          {/* Mobile: services before collage */}
          <div className="order-1 min-w-0 lg:order-2 lg:col-span-8">
            <FadeIn>
              <h3 className="mb-6 text-center font-[family-name:var(--font-radiant)] text-xs font-medium uppercase tracking-[0.35em] text-primary lg:text-left">
                Popular services
              </h3>
            </FadeIn>
            <div className="mb-14 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
              {BOOKSY_POPULAR_SERVICES.map((service, i) => (
                <ServiceCard key={`popular-${i}`} service={service} />
              ))}
            </div>

            <FadeIn>
              <h3 className="mb-6 text-center font-[family-name:var(--font-radiant)] text-xs font-medium uppercase tracking-[0.35em] text-primary lg:text-left">
                Other services
              </h3>
            </FadeIn>
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
              {BOOKSY_OTHER_SERVICES.map((service, i) => (
                <ServiceCard key={`other-${i}`} service={service} />
              ))}
            </div>
          </div>

          <div className="relative z-10 order-2 flex justify-center lg:order-1 lg:sticky lg:top-28 lg:col-span-4 lg:self-start lg:justify-center lg:overflow-visible lg:px-2">
            <ServicesCollage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
