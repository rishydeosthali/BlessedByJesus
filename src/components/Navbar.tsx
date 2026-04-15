import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKSY_BUSINESS_URL } from "@/data/booksyServices";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl supports-[backdrop-filter]:bg-black/35">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
        <a
          href="#home"
          className="site-wordmark shrink-0 border border-white text-[9px] text-white sm:text-[10px] md:text-[11px]"
        >
          Blessed
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[11px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={BOOKSY_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-primary/90 bg-primary px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_28px_-6px_hsl(40_65%_55%/0.65)] md:inline-flex"
        >
          Book Now
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-b border-white/10 bg-black/95"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-[11px] uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={BOOKSY_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-center mt-2"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
