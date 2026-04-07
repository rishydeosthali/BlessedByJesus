import type { LucideIcon } from "lucide-react";
import { Scissors, Sparkles, Crown, Flame } from "lucide-react";

/** Blessed By Jesus Barbershop — Richardson, TX · Booksy listing */
export const BOOKSY_BUSINESS_URL =
  "https://booksy.com/en-us/1306368_blessed-by-jesus-barbershop_barber-shop_36436_richardson";

export type BooksyService = {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  listPrice: string;
  duration: string;
};

const mensHaircut: BooksyService = {
  icon: Scissors,
  title: "Men's haircut",
  description:
    "Haircut — clipper and shear work, shape-up, and style. Message on Booksy if you have questions.",
  price: "$40.50",
  listPrice: "$45",
  duration: "35 min",
};

const mensHaircutWithBeard: BooksyService = {
  icon: Flame,
  title: "Men's haircut with beard",
  description:
    "Haircut with beard — fade, beard blended and lined up for a sharp, finished look.",
  price: "$45.00",
  listPrice: "$50",
  duration: "40 min",
};

const beardShaping: BooksyService = {
  icon: Sparkles,
  title: "Beard shaping",
  description: "Beard fades, line-up, and detail work — keeps facial hair crisp between full cuts.",
  price: "$22.50",
  listPrice: "$25",
  duration: "20 min",
};

const fullService: BooksyService = {
  icon: Crown,
  title: "Full service",
  description:
    "Full service includes haircut, beard work, eyebrows, and facial — complete grooming in one visit.",
  price: "$58.50",
  listPrice: "$65",
  duration: "50 min",
};

/** Matches Booksy “Popular services” (first block) */
export const BOOKSY_POPULAR_SERVICES: BooksyService[] = [
  mensHaircut,
  mensHaircutWithBeard,
  fullService,
];

/** Matches Booksy “Other services” (second block — same cuts repeated plus beard) */
export const BOOKSY_OTHER_SERVICES: BooksyService[] = [
  mensHaircut,
  mensHaircutWithBeard,
  beardShaping,
  fullService,
];
