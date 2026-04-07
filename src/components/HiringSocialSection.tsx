import { Calendar } from "lucide-react";
import { BOOKSY_BUSINESS_URL } from "@/data/booksyServices";

const HiringSocialSection = () => {
  return (
    <section
      id="book-now"
      className="relative overflow-hidden bg-black pb-20 pt-16 text-white md:pb-28 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(212,175,55,0.07),transparent_60%)]" />

      <div
        className="relative overflow-hidden border-y border-white/10 py-4 md:py-5"
        aria-label="Book now"
      >
        <div className="flex w-max animate-marquee-slow">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex shrink-0 items-baseline"
              aria-hidden={dup !== 0}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="inline-flex shrink-0 items-baseline whitespace-nowrap font-[family-name:var(--font-radiant)] text-[clamp(1rem,4.2vw,2.25rem)] font-extralight uppercase tracking-[0.14em] md:tracking-[0.2em]"
                >
                  <span className="gold-text">Book now</span>
                  <span className="mx-3 text-primary md:mx-5">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-7xl flex-col items-center px-6 md:mt-14 md:px-12">
        <a
          href={BOOKSY_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-10 py-3.5 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-primary/15 hover:text-primary"
        >
          <Calendar className="h-4 w-4" />
          Book now
        </a>
      </div>
    </section>
  );
};

export default HiringSocialSection;
