import FadeIn from "./FadeIn";
import { motion } from "framer-motion";
import { MENS_HAIRCUT_IMAGES } from "@/data/mensHaircuts";

const alts = [
  "Precision fade and lineup",
  "Braids with taper fade",
  "Sharp skin fade finish",
  "Design work and texture",
  "Kids cut and fade",
  "Burst fade style",
  "Waves and beard blend",
  "Classic taper",
  "Men's haircut showcase",
] as const;

/** Gold eyebrow + bold sans title — Trappin-style vertical cards */
const galleryCards = [
  { label: "Featured", title: "Design & detail" },
  { label: "Inside the shop", title: "Fresh chair work" },
  { label: "Lineups", title: "Crisp edges" },
  { label: "Fades", title: "Skin & taper" },
  { label: "Young kings", title: "Clean youth cuts" },
  { label: "Style", title: "Texture & finish" },
  { label: "Waves", title: "Precision blend" },
  { label: "Classics", title: "Traditional taper" },
  { label: "Finish", title: "The full look" },
] as const;

const WorkShowcaseSection = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-y border-border/60 bg-card/30 px-6 pt-10 pb-24 md:px-12 md:pt-12 md:pb-28 lg:px-20 lg:pt-14 lg:pb-32"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="absolute right-0 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <div className="mx-auto mb-6 max-w-4xl px-2 text-center md:mb-7 md:px-4">
            <div className="mb-3 flex items-center justify-center gap-3 md:mb-4">
              <div className="gold-line h-px w-10" />
              <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary/80">
                The work
              </span>
              <div className="gold-line h-px w-10" />
            </div>
            <h2 className="editorial-heading text-balance text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[clamp(2.75rem,5vw,4.25rem)]">
              PHOTO GALLERY
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {MENS_HAIRCUT_IMAGES.map((src, i) => {
            const card = galleryCards[i];
            return (
              <FadeIn key={src} delay={i * 0.05}>
                <motion.article
                  initial={false}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_20px_50px_-28px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05] transition-shadow duration-300 hover:border-primary/30 hover:shadow-[0_28px_60px_-24px_rgba(212,175,55,0.08)] md:rounded-3xl"
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-black/40">
                    <img
                      src={src}
                      alt={alts[i] ?? "Blessed By Jesus haircut"}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-70" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-2 px-5 py-5 md:gap-2.5 md:px-7 md:py-7">
                    <p className="font-body text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                      {card?.label ?? "Gallery"}
                    </p>
                    <h3 className="font-[family-name:var(--font-radiant)] text-base font-semibold uppercase leading-snug tracking-[0.12em] text-foreground md:text-lg">
                      {card?.title ?? "Cut & finish"}
                    </h3>
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcaseSection;
