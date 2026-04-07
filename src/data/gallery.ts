export const GALLERY_IMAGES = [
  "/gallery/book-now-hero.png",
  "/gallery/cut2.jpg",
  "/gallery/77347d60d5a8402bae56e2df6dc095-blessed-by-jesus-dallas-barber-biz-photo-724b8a87494c40ec8f4a879dcf1c78-booksy.jpeg",
  "/gallery/311234db91b64d57b6a1e1411df282-blessed-by-jesus-dallas-barber-biz-photo-e41177222028416aa660f9a42c63d0-booksy.jpeg",
  "/gallery/89a3d94409ca481f83980eef543d10-blessed-by-jesus-dallas-barber-biz-photo-e5d21b7939174b378166a4f8d3b6c2-booksy.jpeg",
  "/gallery/7b3d812076034cf9bebba147ccfbd1-blessed-by-jesus-barbershop-biz-photo-99be90d613b646d781cf00efa4f304-booksy.jpeg",
  "/gallery/o.jpg",
  "/gallery/mask.jpg",
] as const;

export type GalleryImage = (typeof GALLERY_IMAGES)[number];
