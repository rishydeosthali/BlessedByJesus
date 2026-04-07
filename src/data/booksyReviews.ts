/**
 * Quotes from Booksy (Blessed By Jesus Barbershop — Jesus Espinoza).
 * @see https://booksy.com/en-us/1306368_blessed-by-jesus-barbershop_barber-shop_36436_richardson
 */
export type BooksyPublicReview = {
  id: string;
  name: string;
  rating: 5;
  /** Verbatim when present; `null` if the listing had stars only */
  text: string | null;
  date: string;
  service: string;
};

export const BOOKSY_PUBLIC_REVIEWS: BooksyPublicReview[] = [
  {
    id: "pavin-2026-03-03",
    name: "Pavin",
    rating: 5,
    text: "Great guy, very detailed and easy to work with. He went above and beyond the beard trim and did a great job. Will be back.",
    date: "Mar 3, 2026",
    service: "Beard shaping",
  },
  {
    id: "belico-2026-03-01",
    name: "Belico",
    rating: 5,
    text: null,
    date: "Mar 1, 2026",
    service: "Men's haircut",
  },
  {
    id: "nic-2026-02-22",
    name: "Nic",
    rating: 5,
    text: "great cut. didn't know what I wanted to do and he made it simple.",
    date: "Feb 22, 2026",
    service: "Men's haircut",
  },
  {
    id: "luis-2026-02-21",
    name: "Luis",
    rating: 5,
    text: "Excellent Service",
    date: "Feb 21, 2026",
    service: "Beard shaping",
  },
  {
    id: "jake-2026-02-20",
    name: "Jake",
    rating: 5,
    text: "Very clean and professional setting. I appreciate the attention to detail. 10/10",
    date: "Feb 20, 2026",
    service: "Men's haircut with beard",
  },
  {
    id: "nonso-2026-02-13",
    name: "Nonso",
    rating: 5,
    text: "Amazing barber 💈 Gave me a great cut!",
    date: "Feb 13, 2026",
    service: "Men's haircut with beard",
  },
];
