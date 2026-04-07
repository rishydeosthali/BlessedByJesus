const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-body text-[11px] tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} Blessed By Jesus Barbershop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
