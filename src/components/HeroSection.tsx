import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { BOOKSY_BUSINESS_URL } from "@/data/booksyServices";
import { GALLERY_IMAGES } from "@/data/gallery";

const FAN_LAYERS = 4;

const FannedDeck = () => {
  const n = GALLERY_IMAGES.length;
  const [active, setActive] = useState(0);
  const dragX = useRef<number | null>(null);

  const step = useCallback(
    (delta: number) => {
      setActive((i) => (i + delta + n) % n);
    },
    [n],
  );

  const onPointerDown = (e: React.PointerEvent) => {
    dragX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragX.current === null) return;
    const dx = e.clientX - dragX.current;
    dragX.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    if (dx < -40) step(1);
    else if (dx > 40) step(-1);
  };

  const onPointerCancel = () => {
    dragX.current = null;
  };

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,500px)] md:max-w-[min(100%,540px)]">
      <div
        role="group"
        aria-label="Photo gallery, swipe or use arrows"
        className="relative mx-auto flex h-[min(76vh,620px)] w-full cursor-grab touch-manipulation items-center justify-center active:cursor-grabbing md:h-[min(82vh,680px)]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          className="relative aspect-[3/4] w-[96%] max-w-[480px] [transform-style:preserve-3d]"
          style={{ perspective: "1400px" }}
        >
          {Array.from({ length: FAN_LAYERS }, (_, layer) => {
            const depth = FAN_LAYERS - 1 - layer;
            const rotate = depth * 5;
            const tx = depth * 16;
            const ty = depth * 7;
            const scale = 1 - depth * 0.018;
            const idx = (active - (FAN_LAYERS - 1 - layer) + n * 8) % n;
            const src = GALLERY_IMAGES[idx];
            const isFront = layer === FAN_LAYERS - 1;

            return (
              <motion.div
                key={layer}
                initial={{ opacity: 0, rotate: rotate + 4, x: tx + 18, y: ty + 4 }}
                animate={{ opacity: 1, rotate, x: tx, y: ty, scale }}
                transition={{ type: "spring", stiffness: 320, damping: 34 }}
                className={cn(
                  "absolute inset-0 overflow-hidden rounded-[3px] border border-white/[0.09] shadow-[0_36px_90px_-14px_rgba(0,0,0,0.92),0_0_0_1px_rgba(255,255,255,0.1)]",
                  isFront
                    ? "shadow-[0_42px_100px_-12px_rgba(0,0,0,0.95),0_0_0_1px_rgba(212,175,55,0.35),0_0_72px_-16px_rgba(212,175,55,0.32)] ring-2 ring-primary/35"
                    : "shadow-[0_32px_70px_-18px_rgba(0,0,0,0.88),0_0_0_1px_rgba(255,255,255,0.08),0_0_48px_-24px_rgba(212,175,55,0.12)]",
                )}
                style={{
                  zIndex: layer + 1,
                  transformOrigin: "65% 92%",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="aspect-[3/4] h-full w-full object-cover"
                  draggable={false}
                  loading={layer === FAN_LAYERS - 1 ? "eager" : "lazy"}
                />
                <div className="plastic-film" />
                <div className="plastic-grain" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center px-2">
        <div className="flex items-center gap-1 rounded-full border border-white/25 bg-white/[0.08] px-2 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:gap-2 sm:px-4">
          <button
            type="button"
            onClick={() => step(-1)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-black/60 text-white transition-colors hover:border-primary/80 hover:bg-black/80 hover:text-primary sm:h-11 sm:w-11"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6 stroke-[2]" />
          </button>
          <p className="min-w-[10.5rem] text-center font-body text-[10px] font-medium uppercase leading-tight tracking-[0.2em] text-white/90 sm:min-w-[12rem] sm:text-xs">
            <span className="text-white">Swipe deck</span>
            <span className="mx-1.5 text-primary sm:mx-2">·</span>
            <span className="tabular-nums text-white">
              {active + 1} / {n}
            </span>
          </p>
          <button
            type="button"
            onClick={() => step(1)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-black/60 text-white transition-colors hover:border-primary/80 hover:bg-black/80 hover:text-primary sm:h-11 sm:w-11"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6 stroke-[2]" />
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white"
    >
      <div className="hero-vignette pointer-events-none absolute inset-0 z-[1]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(212,175,55,0.08),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="absolute bottom-24 left-6 z-20 hidden max-w-[200px] border border-white/25 bg-black/40 px-4 py-3 backdrop-blur-sm md:block md:left-10 lg:left-14"
      >
        <p className="font-body text-[9px] uppercase leading-relaxed tracking-[0.22em] text-white/70">
          Dallas · Premium fades & sharp lineup
        </p>
        <p className="mt-2 font-body text-[10px] text-white/45">
          Walk-ins welcome · Book ahead for a guaranteed spot
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 items-center gap-14 px-6 pb-24 pt-[calc(7rem+env(safe-area-inset-top))] md:grid-cols-2 md:gap-12 md:px-10 md:pb-20 md:pt-28 lg:px-14">
        <div className="min-w-0 flex flex-col justify-center overflow-visible pr-2 md:pr-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-body text-[10px] uppercase tracking-[0.45em] text-primary md:text-[11px]"
          >
            Radiant cuts · Elevated style
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-radiant text-radiant-glow w-fit max-w-none text-[clamp(2.25rem,9.5vw,6.75rem)]"
          >
            <span className="text-radiant-line">Blessed</span>
            <span className="text-radiant-line">Style</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 max-w-md font-body text-sm font-light leading-relaxed text-white/55 md:text-base"
          >
            Where craftsmanship meets consistency — precision fades, crisp edges,
            and a lounge-worthy experience from the first chair to the mirror check.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={BOOKSY_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-8 py-3.5 font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20"
            >
              Book on Booksy
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="#services"
              className="border border-white/40 px-8 py-3.5 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-white/90 transition-all duration-300 hover:border-white hover:bg-white/5"
            >
              Our Services
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 md:max-w-lg"
          >
            {[
              { k: "13+", v: "Years" },
              { k: "5K+", v: "Clients" },
              { k: "5.0", v: "Stars" },
            ].map((row) => (
              <div key={row.v}>
                <dt className="font-[family-name:var(--font-radiant)] text-2xl font-extralight tracking-wide text-white md:text-3xl">
                  {row.k}
                </dt>
                <dd className="mt-1 font-body text-[9px] uppercase tracking-[0.25em] text-white/40">
                  {row.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="flex min-w-0 justify-center overflow-x-clip md:justify-end">
          <FannedDeck />
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToServices}
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 border-0 bg-transparent text-white/50 transition-colors hover:text-white/80"
      >
        <span className="font-body text-[9px] uppercase tracking-[0.35em]">
          Click To Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          aria-hidden
        >
          <ChevronDown className="h-5 w-5 opacity-70" />
        </motion.span>
      </button>
    </section>
  );
};

export default HeroSection;
