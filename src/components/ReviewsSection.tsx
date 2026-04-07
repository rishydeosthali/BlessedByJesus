import FadeIn from "./FadeIn";
import { Star, Quote, ExternalLink } from "lucide-react";
import { BOOKSY_BUSINESS_URL } from "@/data/booksyServices";
import { BOOKSY_PUBLIC_REVIEWS } from "@/data/booksyReviews";

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-10 gold-line" />
            <span className="font-body text-[10px] uppercase tracking-[0.4em] text-primary/80">Testimonials</span>
          </div>
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <h2 className="editorial-heading text-balance text-4xl uppercase leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[clamp(2.75rem,5vw,4.25rem)]">
              What Our <span className="italic text-primary/80">Clients</span> Say
            </h2>
            <p className="max-w-sm font-body text-sm leading-relaxed text-muted-foreground">
              Snippets from real Booksy reviews.{" "}
              <a
                href={BOOKSY_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
              >
                See all on Booksy
                <ExternalLink className="h-3 w-3 shrink-0 opacity-80" />
              </a>
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {BOOKSY_PUBLIC_REVIEWS.map((review, i) => (
            <FadeIn key={review.id} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col bg-card p-8 transition-all duration-500 hover:bg-secondary/40">
                <Quote className="mb-6 h-7 w-7 text-primary/15" />

                <div className="mb-5 flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-primary text-primary" />
                  ))}
                </div>

                <p className="mb-6 flex-1 font-body text-sm leading-[1.8] text-secondary-foreground/70">
                  {review.text ? (
                    <>
                      &ldquo;{review.text}&rdquo;
                    </>
                  ) : (
                    <span className="italic text-muted-foreground/80">
                      Confirmed 5-star review — no written comment on Booksy.
                    </span>
                  )}
                </p>

                <div className="flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="mt-0.5 font-body text-[11px] text-muted-foreground">{review.service}</p>
                    <p className="mt-0.5 font-body text-[11px] text-muted-foreground/90">Booksy · {review.date}</p>
                  </div>
                  <span className="font-body text-[9px] uppercase tracking-[0.2em] text-primary/50">Booksy</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
